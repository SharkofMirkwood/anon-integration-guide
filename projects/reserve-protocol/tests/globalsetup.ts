import { CreateServerReturnType } from 'prool';
import { Anvil, createAnvil } from '@viem/anvil';
import { createTestClient, http, walletActions, publicActions } from 'viem';
import { anvil } from 'viem/chains';
let server: CreateServerReturnType;
let instance: Anvil;

let snapshotId: string | null = null;

export const TESTS_INITIAL_BLOCK_NUMBER = BigInt(21867212);

export async function setup() {
    // // instance = anvil({ forkUrl: 'https://eth.public-rpc.com', forkBlockNumber: 21867212 });
    // // Note: RPC needs to be for an archive node in order to query the fixed block number in tests
    // instance = anvil({ forkUrl: process.env.VITE_ANVIL_RPC_URL, forkBlockNumber: TESTS_INITIAL_BLOCK_NUMBER, noMining: true });
    // await instance.start();

    // server = createServer({ instance });
    // await server.start();

    // Note: RPC needs to be for an archive node in order to query the fixed block number in tests
    instance = createAnvil({
        forkUrl: 'https://eth.public-rpc.com',
        // forkUrl: process.env.VITE_ANVIL_RPC_URL,
        forkBlockNumber: TESTS_INITIAL_BLOCK_NUMBER,
        noMining: true,
    });

    await instance.start();

    // const client = createPublicClient({
    //     chain: foundry,
    //     transport: http(),
    // });
    // const block = await client.getBlockNumber();
    // console.log('BLOCK:', block);

    // server = createServer({ instance });
    // await server.start();
}
export async function teardown() {
    // await server.stop();
    await instance.stop();
}
