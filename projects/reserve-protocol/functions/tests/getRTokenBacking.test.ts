import { expect, test, beforeAll } from 'vitest';
import { createTestClient, http, createPublicClient } from 'viem';
import { foundry } from 'viem/chains';
import { createServer } from 'prool';
import { anvil } from 'prool/instances';
import { getRTokenList } from '../getRTokenList';
import { getRTokenInfo } from '../getRTokenInfo';
import { getRTokenBacking } from '../getRTokenBacking';

beforeAll(async () => {
    const instance = anvil({ forkUrl: 'https://eth.public-rpc.com', forkBlockNumber: 21867212 });
    await instance.start();

    const server = createServer({ instance });
    await server.start();

    // const client = createTestClient({
    //     chain: foundry,
    //     mode: 'anvil',
    //     transport: http(),
    // });
});

test('Unsupported chain', async () => {
    const publicClient = createPublicClient({
        chain: foundry,
        transport: http(),
    });
    const result = await getRTokenBacking({ chainName: 'polygon', rTokenAddress: '0xA0d69E286B938e21CBf7E51D71F6A4c8918f482F' }, { getProvider: () => publicClient });
    expect(result.success).toBeFalsy();
    expect(result.data).toBe('ERROR: Reserve protocol is not supported on polygon');
});

test('Ethereum - eUSD', async () => {
    const publicClient = createPublicClient({
        chain: foundry,
        transport: http(),
    });
    const result = await getRTokenBacking({ chainName: 'ethereum', rTokenAddress: '0xA0d69E286B938e21CBf7E51D71F6A4c8918f482F' }, { getProvider: () => publicClient });
    expect(result.success).toBeTruthy();
    expect(result.data).toEqual(`
Electronic Dollar (eUSD) is an RToken with 3 Collaterals:

Wrapped cUSDCv3
Address: 0x27F2f159Fe990Ba83D57f39Fd69661764BEbf37a
Share: 33.3319601956097713%
Target: USD

Wrapped cUSDTv3
Address: 0xEB74EC1d4C1DAB412D5d6674F6833FD19d3118Ce
Share: 33.3364009863241762%
Target: USD

Static Aave Ethereum USDC
Address: 0x0aDc69041a2B086f8772aCcE2A754f410F211bed
Share: 33.3316388180660524%
Target: USD

`);
});

test('Ethereum - ETH+', async () => {
    const publicClient = createPublicClient({
        chain: foundry,
        transport: http(),
    });
    const result = await getRTokenBacking({ chainName: 'ethereum', rTokenAddress: '0xE72B141DF173b999AE7c1aDcbF60Cc9833Ce56a8' }, { getProvider: () => publicClient });
    expect(result.success).toBeTruthy();
    expect(result.data).toEqual(`
ETHPlus (ETH+) is an RToken with 4 Collaterals:

ETHx
Address: 0xA35b1B31Ce002FBF2058D22F30f95D405200A15b
Share: 7.9755412103248774%
Target: ETH

Staked Frax Ether
Address: 0xac3E018457B222d93114458476f3E3416Abbe38F
Share: 20.9280519255786044%
Target: ETH

Wrapped liquid staked Ether 2.0
Address: 0x7f39C581F595B53c5cb19bD0b3f8dA6c935E2Ca0
Share: 50.2270811596366474%
Target: ETH

Rocket Pool ETH
Address: 0xae78736Cd615f374D3085123A210448E74Fc6393
Share: 20.8693257044598706%
Target: ETH

`);
});
