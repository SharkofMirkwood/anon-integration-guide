import { expect, test, beforeAll } from 'vitest';
import { createTestClient, http } from 'viem';
import { foundry } from 'viem/chains';
import { createServer } from 'prool';
import { anvil } from 'prool/instances';
import { getRTokenList } from '../getRTokenList';

beforeAll(async () => {
    const instance = anvil();
    await instance.start();

    const server = createServer({ instance });
    await server.start();
});

test('test viem client mining', async () => {
    const client = createTestClient({
        chain: foundry,
        mode: 'anvil',
        transport: http(),
    });
    const mine = await client.mine({ blocks: 1 });
});

test('Unsupported chain', async () => {
    const result = await getRTokenList({ chainName: 'polygon' });
    expect(result.success).toBeFalsy();
    expect(result.data).toBe('ERROR: Reserve protocol is not supported on polygon');
});

test('Ethereum', async () => {
    const result = await getRTokenList({ chainName: 'ethereum' });
    expect(result.success).toBeTruthy();
    expect(result.data).toContain('eUSD: 0xA0d69E286B938e21CBf7E51D71F6A4c8918f482F');
    expect(result.data).toContain('rgUSD: 0x78da5799CF427Fee11e9996982F4150eCe7a99A7');
    expect(result.data).toContain('ETH+: 0xE72B141DF173b999AE7c1aDcbF60Cc9833Ce56a8');
    expect(result.data).toContain('USD3: 0x0d86883FAf4FfD7aEb116390af37746F45b6f378');
});

test('Base', async () => {
    const result = await getRTokenList({ chainName: 'base' });
    expect(result.success).toBeTruthy();
    expect(result.data).toContain('eUSD: 0xCfA3Ef56d303AE4fAabA0592388F19d7C3399FB4');
    expect(result.data).toContain('rgUSD: 0x8E5E9DF4F0EA39aE5270e79bbABFCc34203A3470');
    expect(result.data).toContain('USD3: 0xEFb97aaF77993922aC4be4Da8Fbc9A2425322677');
});

test.skip('Arbitrum', async () => {
    const result = await getRTokenList({ chainName: 'arbitrum' });
    expect(result.success).toBeTruthy();
    expect(result.data).toContain('eUSD: 0xA0d69E286B938e21CBf7E51D71F6A4c8918f482F');
    expect(result.data).toContain('rgUSD: 0x78da5799CF427Fee11e9996982F4150eCe7a99A7');
    expect(result.data).toContain('ETH+: 0xE72B141DF173b999AE7c1aDcbF60Cc9833Ce56a8');
    expect(result.data).toContain('USD3: 0x0d86883FAf4FfD7aEb116390af37746F45b6f378');
});
