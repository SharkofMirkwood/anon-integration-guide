import { expect, test, describe } from 'vitest';
import { TESTS_INITIAL_BLOCK_NUMBER, client } from './setup';
import { sleep } from '@heyanon/sdk';

describe('Checks', async () => {
    test('test block height', async () => {
        const block = await client.getBlockNumber();
        expect(block).toEqual(TESTS_INITIAL_BLOCK_NUMBER);
    });

    test('test viem client mining', async () => {
        await client.mine({ blocks: 1, interval: 0 });
        await sleep(10);
        const block = await client.getBlockNumber();
        const expected = TESTS_INITIAL_BLOCK_NUMBER + BigInt(1);
        console.log('block now', block);
        console.log('expected', expected);
        expect(block).toEqual(TESTS_INITIAL_BLOCK_NUMBER + BigInt(1));
    });

    test('test block height in a separate test (ensure block height was reset)', async () => {
        const block = await client.getBlockNumber();
        expect(block).toEqual(TESTS_INITIAL_BLOCK_NUMBER);
    });
});
