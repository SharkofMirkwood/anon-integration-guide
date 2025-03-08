import { EVM, EvmChain, FunctionOptions, FunctionReturn, toResult } from '@heyanon/sdk';
import { Address, encodeFunctionData, parseUnits } from 'viem';
import { strAbi } from '../abis';
import { STR_ADDRESS, USDS_ADDRESS, supportedChains } from '../constants';

interface Props {
	chainName: string;
	account: Address;
	amount: string;
}

const { checkToApprove, getChainFromName } = EVM.utils;

export async function stakeSTR({ chainName, account, amount }: Props, { evm: { sendTransactions, getProvider }, notify }: FunctionOptions): Promise<FunctionReturn> {
	if (!account) return toResult('Wallet not connected', true);

	const chainId = getChainFromName(chainName as EvmChain);
	if (!chainId) return toResult(`Unsupported chain name: ${chainName}`, true);
	if (!supportedChains.includes(chainId)) return toResult(`Sky protocol is not supported on ${chainName}`, true);

	await notify('Preparing to stake USDS tokens in Sky Token Rewards...');

	const amountInWei = parseUnits(amount, 18);
	if (amountInWei === 0n) return toResult('Amount must be greater than 0', true);

	const provider = getProvider(chainId);
	const transactions: EVM.types.TransactionParams[] = [];

	// Check and prepare approve transaction if needed
	await checkToApprove({
		args: {
			account,
			target: USDS_ADDRESS,
			spender: STR_ADDRESS,
			amount: amountInWei,
		},
		transactions,
		provider,
	});

	// Prepare stake transaction
	const tx: EVM.types.TransactionParams = {
		target: STR_ADDRESS,
		data: encodeFunctionData({
			abi: strAbi,
			functionName: 'stake',
			args: [amountInWei],
		}),
	};
	transactions.push(tx);

	await notify('Waiting for transaction confirmation...');

	const result = await sendTransactions({ chainId, account, transactions });
	const stakeMessage = result.data[result.data.length - 1];

	return toResult(result.isMultisig ? stakeMessage.message : `Successfully staked ${amount} USDS in STR. ${stakeMessage.message}`);
}
