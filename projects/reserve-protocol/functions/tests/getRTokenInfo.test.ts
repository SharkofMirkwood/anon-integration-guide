import { expect, test, beforeAll } from 'vitest';
import { createTestClient, http, createPublicClient } from 'viem';
import { foundry } from 'viem/chains';
import { createServer } from 'prool';
import { anvil } from 'prool/instances';
import { getRTokenList } from '../getRTokenList';
import { getRTokenInfo } from '../getRTokenInfo';

beforeAll(async () => {
    const instance = anvil({ forkUrl: 'https://eth.public-rpc.com', forkBlockNumber: 21867212 });
    await instance.start();

    const server = createServer({ instance });
    await server.start();
});

test('Unsupported chain', async () => {
    const publicClient = createPublicClient({
        chain: foundry,
        transport: http(),
    });
    const result = await getRTokenInfo({ chainName: 'polygon', rTokenAddress: '0xA0d69E286B938e21CBf7E51D71F6A4c8918f482F' }, { getProvider: () => publicClient });
    expect(result.success).toBeFalsy();
    expect(result.data).toBe('ERROR: Reserve protocol is not supported on polygon');
});

test('Ethereum - eUSD', async () => {
    const publicClient = createPublicClient({
        chain: foundry,
        transport: http(),
    });
    const result = await getRTokenInfo({ chainName: 'ethereum', rTokenAddress: '0xA0d69E286B938e21CBf7E51D71F6A4c8918f482F' }, { getProvider: () => publicClient });
    expect(result.success).toBeTruthy();
    expect(result.data).toEqual(`
Token name: Electronic Dollar
Symbol: eUSD
Address: 0xA0d69E286B938e21CBf7E51D71F6A4c8918f482F
Decimals: 18
Mandate: 1. Maintain a $1 USD peg and be fully collateralized. 2. Generate yield to eUSDRSR stakers who provide overcollateralization.
Total supply: 25540492.550783332968201965 eUSD

eUSD has 3 Collaterals
`);
});

test('Ethereum - ETH+', async () => {
    const publicClient = createPublicClient({
        chain: foundry,
        transport: http(),
    });
    const result = await getRTokenInfo({ chainName: 'ethereum', rTokenAddress: '0xE72B141DF173b999AE7c1aDcbF60Cc9833Ce56a8' }, { getProvider: () => publicClient });
    expect(result.success).toBeTruthy();
    expect(result.data).toEqual(`
Token name: ETHPlus
Symbol: ETH+
Address: 0xE72B141DF173b999AE7c1aDcbF60Cc9833Ce56a8
Decimals: 18
Mandate: 1: Maintain an Ethereum-aligned Liquid Staking Token basket. 2: Positively impact the Ethereum staking distribution. 3: Provide value to ETH+ holders through diversification.
Total supply: 57535.735950094201632225 ETH+

ETH+ has 4 Collaterals
`);
});
