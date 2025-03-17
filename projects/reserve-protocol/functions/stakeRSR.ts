import { Address, parseUnits, formatUnits, parseEther, encodeFunctionData } from 'viem';
import { TransactionParams, FunctionReturn, FunctionOptions, toResult, getChainFromName, checkToApprove } from '@heyanon/sdk';
import { FACADE_ADDRESS, RSR_ADDRESS, supportedChains } from '../constants';
import RToken from '../abis/RToken';
import FacadeRead from '../abis/FacadeRead';
import { erc20Abi, hexToString } from 'viem';
import { getFacadeDetail, getRTokenDetail, getRsrBalance } from '../utils';
import StRSR from '../abis/StRSR';

interface Props {
    chainName: string;
    account: Address;
    rTokenAddress: Address;
    amount: string;
}

export async function stakeRSR({ chainName, account, rTokenAddress, amount }: Props, { getProvider, sendTransactions }: FunctionOptions): Promise<FunctionReturn> {
    const chainId = getChainFromName(chainName);
    const publicClient = getProvider(chainId);
    if (!chainId) return toResult(`Unsupported chain name: ${chainName}`, true);
    if (!supportedChains.includes(chainId)) return toResult(`Reserve protocol is not supported on ${chainName}`, true);

    if (!amount || typeof amount !== 'string' || isNaN(Number(amount)) || Number(amount) <= 0) {
        return toResult('Amount must be a valid number greater than 0', true);
    }
    const decimals = await publicClient.readContract({
        address: RSR_ADDRESS[chainId],
        abi: erc20Abi,
        functionName: 'decimals',
        args: [],
    });
    const amountInWei = parseUnits(amount, Number(decimals));

    const [stakeTokenAddress, rTokenSymbol, rsrBalance] = await Promise.all([
        getFacadeDetail<`0x${string}`>(publicClient, chainId, rTokenAddress, 'stToken'),
        getRTokenDetail<string>(publicClient, rTokenAddress, 'symbol'),
        getRsrBalance(publicClient, chainId, account),
    ]);

    if (Number(rsrBalance) < Number(amount)) {
        return toResult(`Insufficient RSR balance. Have ${parseFloat(rsrBalance).toFixed(2)}, want to stake ${amount}`, true);
    }

    try {
        const transactions: TransactionParams[] = [];

        // Check and prepare approve transaction if needed
        await checkToApprove({
            args: {
                account,
                target: RSR_ADDRESS[chainId],
                spender: stakeTokenAddress,
                amount: amountInWei,
            },
            provider: publicClient,
            transactions: transactions,
        });

        transactions.push({
            target: stakeTokenAddress,
            data: encodeFunctionData({
                abi: StRSR,
                functionName: 'stake',
                args: [amountInWei],
            }),
        });

        const result = await sendTransactions({
            chainId: chainId,
            account,
            transactions: transactions,
        });
    } catch (error) {
        console.error(error);
        return toResult(`Failed to stake RSR: ${error instanceof Error ? error.message : 'Unknown error'}`, true);
    }

    const newBal = await getRsrBalance(publicClient, chainId, account);
    console.log(`New RSR balance: ${newBal}`);

    return toResult(`${amount} RSR staked successfully on RToken ${rTokenSymbol}`);
}
