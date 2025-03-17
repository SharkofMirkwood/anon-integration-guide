import { CreateServerReturnType, createServer } from 'prool';
import { Anvil, createAnvil } from '@viem/anvil';
import { expect, test, describe, beforeAll, beforeEach, afterEach, afterAll } from 'vitest';
import { createTestClient, http, createPublicClient, walletActions, publicActions } from 'viem';
import { anvil, mainnet } from 'viem/chains';
import { ChainId, FunctionOptions, SendTransactionProps } from '@heyanon/sdk';

let snapshotId: string | null = null;

export const TESTS_INITIAL_BLOCK_NUMBER = BigInt(21867212);

export let client = createTestClient({
    mode: 'anvil',
    chain: anvil,
    transport: http('http://127.0.0.1:8545'),
})
    .extend(walletActions)
    .extend(publicActions);

export const getClient = () => {
    return client;
};

const publicClient = createPublicClient({
    chain: anvil,
    transport: http(),
});

export const functionOptions: Partial<FunctionOptions> = {
    getProvider: () => publicClient,
    sendTransactions: async (props: SendTransactionProps) => {
        const responses = [];
        // await publicClient.simulate({ blocks: [{ calls: props.transactions.map((tx) => ({ account: tx.target, data: tx.data })) }] });
        for (const tx of props.transactions) {
            await publicClient.call({ account: props.account, data: tx.data, to: tx.target });
            const resp = await client.sendTransaction({
                chain: mainnet,
                account: props.account,
                to: tx.target,
                data: tx.data,
                value: tx.value,
            });
            client.mine({ blocks: 1 });
            responses.push({ message: 'Transaction sent!', hash: resp });
        }
        return { isMultisig: false, data: responses };
    },
};

beforeAll(async () => {
    console.log('🚀 Setting up tests...');

    snapshotId = await client.request({ method: 'evm_snapshot', params: [] });
    // console.log(`📸 Saved snapshot: ${snapshotId}`);
});

afterEach(async () => {
    client = createTestClient({
        mode: 'anvil',
        chain: anvil,
        transport: http('http://127.0.0.1:8545'),
    })
        .extend(walletActions)
        .extend(publicActions);
    await client.reset({ blockNumber: TESTS_INITIAL_BLOCK_NUMBER });
    if (snapshotId) {
        await client.request({ method: 'evm_revert', params: [snapshotId] });
    }
    // console.log(`🔄 Restored snapshot: ${snapshotId}`);
});
