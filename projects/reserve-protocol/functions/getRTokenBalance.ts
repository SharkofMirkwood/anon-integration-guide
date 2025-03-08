import { Address, parseUnits, formatUnits } from 'viem';
import { FunctionReturn, FunctionOptions, TransactionParams, toResult, getChainFromName, checkToApprove } from '@heyanon/sdk';
import { FACADE_ADDRESS, supportedChains } from '../constants';
import RToken from '../abis/RToken';
import FacadeRead from '../abis/FacadeRead';
import { erc20Abi, hexToString } from 'viem';

interface Props {
    chainName: string;
    account: Address;
    rTokenAddress: Address;
}

export async function getRTokenBalance({ chainName, account, rTokenAddress }: Props, { getProvider }: FunctionOptions): Promise<FunctionReturn> {
    const chainId = getChainFromName(chainName);
    if (!chainId) return toResult(`Unsupported chain name: ${chainName}`, true);
    if (!supportedChains.includes(chainId)) return toResult(`Reserve protocol is not supported on ${chainName}`, true);

    const publicClient = getProvider(chainId);

    const [decimals, balanceRaw] = await Promise.all([
        publicClient.readContract({
            address: rTokenAddress,
            abi: RToken,
            functionName: 'decimals',
            args: [],
        }),
        publicClient.readContract({
            address: rTokenAddress,
            abi: RToken,
            functionName: 'balanceOf',
            args: [account],
        }),
    ]);

    const balance = formatUnits(BigInt(balanceRaw), Number(decimals));

    return toResult(`
Balance of account: ${balance}
`);
}
