import { Address, parseUnits, formatUnits } from 'viem';
import { FunctionReturn, FunctionOptions, TransactionParams, toResult, getChainFromName, checkToApprove } from '@heyanon/sdk';
import { FACADE_ADDRESS, supportedChains } from '../constants';
import RToken from '../abis/RToken';
import FacadeRead from '../abis/FacadeRead';

interface Props {
    chainName: string;
    rTokenAddress: Address;
}

export async function getRTokenInfo({ chainName, rTokenAddress }: Props, { getProvider }: FunctionOptions): Promise<FunctionReturn> {
    const chainId = getChainFromName(chainName);
    if (!chainId) return toResult(`Unsupported chain name: ${chainName}`, true);
    if (!supportedChains.includes(chainId)) return toResult(`Reserve protocol is not supported on ${chainName}`, true);

    const publicClient = getProvider(chainId);

    const [name, symbol, decimals, mandate, totalSupplyRaw] = await Promise.all(
        ['name', 'symbol', 'decimals', 'mandate', 'totalSupply'].map((functionName) =>
            publicClient.readContract({
                address: rTokenAddress,
                abi: RToken,
                functionName: functionName as any,
                args: [],
            }),
        ),
    );

    const [basketTokens] = await Promise.all(
        ['basketTokens'].map((functionName) =>
            publicClient.readContract({
                address: FACADE_ADDRESS[chainId],
                abi: FacadeRead,
                functionName: functionName as any,
                args: [rTokenAddress],
            }),
        ),
    );

    const totalSupply = formatUnits(BigInt(totalSupplyRaw), Number(decimals));

    return toResult(`
Token name: ${name}
Symbol: ${symbol}
Address: ${rTokenAddress}
Decimals: ${decimals}
Mandate: ${mandate}
Total supply: ${totalSupply} ${symbol}

${symbol} has ${basketTokens.length} Collaterals
`);
}
