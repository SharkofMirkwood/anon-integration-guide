import { Address, parseUnits, formatUnits } from 'viem';
import { FunctionReturn, FunctionOptions, TransactionParams, toResult, getChainFromName, checkToApprove } from '@heyanon/sdk';
import { FACADE_ADDRESS, supportedChains } from '../constants';
import RToken from '../abis/RToken';
import FacadeRead from '../abis/FacadeRead';
import { erc20Abi, hexToString } from 'viem';

interface Props {
    chainName: string;
    rTokenAddress: Address;
}

export async function getRTokenBacking({ chainName, rTokenAddress }: Props, { getProvider }: FunctionOptions): Promise<FunctionReturn> {
    const chainId = getChainFromName(chainName);
    if (!chainId) return toResult(`Unsupported chain name: ${chainName}`, true);
    if (!supportedChains.includes(chainId)) return toResult(`Reserve protocol is not supported on ${chainName}`, true);

    const publicClient = getProvider(chainId);

    const [name, symbol] = await Promise.all(
        ['name', 'symbol'].map((functionName) =>
            publicClient.readContract({
                address: rTokenAddress,
                abi: RToken,
                functionName: functionName as any,
                args: [],
            }),
        ),
    );

    const [basketBreakdown] = await Promise.all(
        ['basketBreakdown'].map((functionName) =>
            publicClient.readContract({
                address: FACADE_ADDRESS[chainId],
                abi: FacadeRead,
                functionName: functionName as any,
                args: [rTokenAddress],
            }),
        ),
    );

    const [erc20s, uoaShares, targets] = basketBreakdown as unknown as [`0x${string}`[], bigint[], `0x${string}`[]];

    const collateralTokens = await Promise.all(
        erc20s.map((tokenAddress) =>
            publicClient.readContract({
                address: tokenAddress,
                abi: erc20Abi,
                functionName: 'name',
                args: [],
            }),
        ),
    );

    const collateralsOutput = [];

    for (let i = 0; i < erc20s.length; i++) {
        const share = parseFloat(formatUnits(BigInt(uoaShares[i]) * BigInt(100), 18)).toFixed(2);
        const targetUnit = hexToString(targets[i], { size: 32 });

        collateralsOutput.push(`${collateralTokens[i]}`);
        collateralsOutput.push(`Address: ${erc20s[i]}`);
        collateralsOutput.push(`Share: ${share}%`);
        collateralsOutput.push(`Target: ${targetUnit}`);
        collateralsOutput.push('');
    }

    return toResult(`
${name} (${symbol}) is an RToken with ${erc20s.length} Collaterals:

${collateralsOutput.join('\n')}
`);
}
