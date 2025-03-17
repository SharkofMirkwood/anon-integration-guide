import { expect, test, beforeAll, describe, afterEach } from 'vitest';
import { http, createPublicClient, PublicClient, createWalletClient, WalletClient, Client, erc20Abi, parseUnits, walletActions, parseEther, publicActions } from 'viem';
import { privateKeyToAccount, generatePrivateKey } from 'viem/accounts';
import { anvil, mainnet } from 'viem/chains';
import { createServer } from 'prool';
import { RSR_ADDRESS, RTOKEN_ADDRESSES } from '../constants';
import { ChainId, FunctionOptions, SendTransactionProps } from '@heyanon/sdk';
import { stakeRSR } from '../functions/stakeRSR';
import { getRsrBalance } from '../utils';
import { client, functionOptions } from './setup';

interface AddressWithBalance {
    address: `0x${string}`;
    balance: string;
}

export const RSR_HOLDER_TO_IMPERSONATE = '0x1F8Bb0933147a92F6526E8e27D10B99DFA869280';
const ADDRESSES_WITH_RTOKEN_BALANCES: { [key: string]: AddressWithBalance } = {
    eusd_eth: {
        address: '0x5d1124fb77c539ec92e3ef853053bbce1e98271b',
        balance: '1389.631539076909968593',
    },
};

async function receiveRsr(recipient: `0x${string}`, amount: number): Promise<void> {
    await client.impersonateAccount({ address: RSR_HOLDER_TO_IMPERSONATE });

    const resp = await client.simulateContract({
        chain: mainnet,
        account: RSR_HOLDER_TO_IMPERSONATE,
        address: RSR_ADDRESS[ChainId.ETHEREUM],
        abi: erc20Abi,
        functionName: 'transfer',
        args: [recipient, parseUnits(`${amount}`, 18)],
    });
    const { request } = resp;

    await client.writeContract(request);

    await client.stopImpersonatingAccount({ address: RSR_HOLDER_TO_IMPERSONATE });
}

describe('stakeRSR', () => {
    test('Unsupported chain', async () => {
        const [address] = await client.getAddresses();
        const result = await stakeRSR({ chainName: 'polygon', account: address, rTokenAddress: RTOKEN_ADDRESSES[ChainId.ETHEREUM].eUSD, amount: '0' }, functionOptions);
        expect(result.success).toBeFalsy();
        expect(result.data).toBe('ERROR: Reserve protocol is not supported on polygon');
    });

    test('Amount 0 - Ethereum - eUSD', async () => {
        const [address] = await client.getAddresses();
        const result = await stakeRSR({ chainName: 'ethereum', account: address, rTokenAddress: RTOKEN_ADDRESSES[ChainId.ETHEREUM].eUSD, amount: '0' }, functionOptions);
        expect(result.success).toBeFalsy();
        expect(result.data).toEqual(`ERROR: Amount must be a valid number greater than 0`);
    });

    test('Insufficient balance - Ethereum - eUSD', async () => {
        const { address, balance } = ADDRESSES_WITH_RTOKEN_BALANCES.eusd_eth;
        await client.impersonateAccount({ address: address });
        await client.setBalance({ address: address, value: parseEther('1') });

        const amountToStake = 10000;

        const rsrBalance = await getRsrBalance(client, ChainId.ETHEREUM, address);

        const result = await stakeRSR(
            { chainName: 'ethereum', account: ADDRESSES_WITH_RTOKEN_BALANCES.eusd_eth.address, rTokenAddress: RTOKEN_ADDRESSES[ChainId.ETHEREUM].eUSD, amount: `${amountToStake}` },
            functionOptions,
        );

        await client.stopImpersonatingAccount({ address: RSR_HOLDER_TO_IMPERSONATE });
        expect(result.success, result.data).toBeFalsy();
        expect(result.data).toEqual(`ERROR: Insufficient RSR balance. Have ${parseFloat(rsrBalance).toFixed(2)}, want to stake ${amountToStake}`);
    });

    test.only('Success - Ethereum - eUSD', async () => {
        const privateKey = generatePrivateKey();
        const account = privateKeyToAccount(privateKey);

        const address = account.address;
        await client.impersonateAccount({ address: address });
        await client.setBalance({ address: address, value: parseEther('1') });

        const amountToReceive = 20000;
        const amountToStake = 5000;

        await receiveRsr(address, amountToReceive);
        await client.mine({ blocks: 1 });

        const result = await stakeRSR(
            { chainName: 'ethereum', account: address, rTokenAddress: RTOKEN_ADDRESSES[ChainId.ETHEREUM].eUSD, amount: `${amountToStake}` },
            functionOptions,
        );
        expect(result.success, result.data).toBeTruthy();
        expect(result.data).toEqual(`${amountToStake} RSR staked successfully on RToken eUSD`);

        const newRsrBalance = await getRsrBalance(client, ChainId.ETHEREUM, address);

        expect(newRsrBalance).toEqual(`${amountToReceive - amountToStake}`);
    });
});
