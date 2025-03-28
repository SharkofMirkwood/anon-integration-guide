import { EVM, EvmChain, FunctionOptions, FunctionReturn, toResult } from '@heyanon/sdk';
import { Address, formatUnits } from 'viem';
import { strAbi } from '../abis';
import { STR_ADDRESS, supportedChains } from '../constants';

interface Props {
	chainName: string;
	account: Address;
}

const { getChainFromName } = EVM.utils;

export async function getStakedBalanceSTR({ chainName, account }: Props, { evm: { getProvider } }: FunctionOptions): Promise<FunctionReturn> {
	const chainId = getChainFromName(chainName as EvmChain);
	if (!chainId) return toResult(`Unsupported chain name: ${chainName}`, true);
	if (!supportedChains.includes(chainId)) return toResult(`Sky protocol is not supported on ${chainName}`, true);

	const publicClient = getProvider(chainId);

	const balance = await publicClient.readContract({
		address: STR_ADDRESS,
		abi: strAbi,
		functionName: 'balanceOf',
		args: [account],
	});

	return toResult(`Staked USDS balance: ${formatUnits(balance, 18)} USDS`);
}
