import { expect, test, beforeAll, describe } from 'vitest';
import { createTestClient, http, createPublicClient, createWalletClient, Client, TestClient, erc20Abi, parseUnits, walletActions, publicActions } from 'viem';
import { foundry, mainnet } from 'viem/chains';
import { createServer } from 'prool';
import { anvil } from 'prool/instances';
import { getRTokenList } from '../getRTokenList';
import { getRTokenInfo } from '../getRTokenInfo';
import { getRTokenBacking } from '../getRTokenBacking';
import { getRTokenBalance } from '../getRTokenBalance';
import { RSR_ADDRESS, RTOKEN_ADDRESSES } from '../../constants';
import { ChainId, FunctionOptions } from '@heyanon/sdk';

interface AddressWithBalance {
    address: `0x${string}`;
    balance: string;
}

const RSR_HOLDER_TO_IMPERSONATE = '0x1F8Bb0933147a92F6526E8e27D10B99DFA869280';
const ADDRESSES_WITH_RTOKEN_BALANCES: { [key: string]: AddressWithBalance } = {
    eusd_eth: {
        address: '0x5d1124fb77c539ec92e3ef853053bbce1e98271b',
        balance: '1389.631539076909968593',
    },
};

async function receiveRsr(recipient: `0x${string}`, amount: number) {
    const testClient = createTestClient({
        mode: 'anvil',
        chain: foundry,
        transport: http(),
    })
        .extend(walletActions)
        .extend(publicActions);

    await testClient.impersonateAccount({ address: RSR_HOLDER_TO_IMPERSONATE });

    console.log('TEST', await testClient.getChainId());

    const resp = await testClient.simulateContract({
        chain: mainnet,
        account: RSR_HOLDER_TO_IMPERSONATE,
        address: RSR_ADDRESS[ChainId.ETHEREUM],
        abi: erc20Abi,
        functionName: 'transfer',
        args: [recipient, parseUnits(`${amount}`, 18)],
    });
    const { request } = resp;

    await testClient.writeContract(request);

    await testClient.stopImpersonatingAccount({ address: RSR_HOLDER_TO_IMPERSONATE });

    await testClient.mine({ blocks: 1 });
}

describe('getRTokenBalance', () => {
    let publicClient;

    const functionOptions: Partial<FunctionOptions> = {
        getProvider: () => publicClient,
    };

    beforeAll(async () => {
        const instance = anvil({ forkUrl: 'https://eth.public-rpc.com', forkBlockNumber: 21867212 });
        await instance.start();

        const server = createServer({ instance });
        await server.start();

        publicClient = createPublicClient({
            chain: foundry,
            transport: http(),
        });
    });

    test('Unsupported chain', async () => {
        const walletClient = createWalletClient({
            chain: foundry,
            transport: http(),
        });
        const [address] = await walletClient.getAddresses();
        const result = await getRTokenBalance({ chainName: 'polygon', account: address, rTokenAddress: RTOKEN_ADDRESSES[ChainId.ETHEREUM].eUSD }, functionOptions);
        expect(result.success).toBeFalsy();
        expect(result.data).toBe('ERROR: Reserve protocol is not supported on polygon');
    });

    test('No balance - Ethereum - eUSD', async () => {
        const walletClient = createWalletClient({
            chain: foundry,
            transport: http(),
        });
        const [address] = await walletClient.getAddresses();
        const result = await getRTokenBalance({ chainName: 'ethereum', account: address, rTokenAddress: RTOKEN_ADDRESSES[ChainId.ETHEREUM].eUSD }, functionOptions);
        expect(result.success).toBeTruthy();
        expect(result.data).toEqual(`
Balance of account: 0
`);
    });

    test('With balance - Ethereum - eUSD', async () => {
        const testClient = createTestClient({
            mode: 'anvil',
            chain: foundry,
            transport: http(),
        });
        const { address, balance } = ADDRESSES_WITH_RTOKEN_BALANCES.eusd_eth;
        testClient.impersonateAccount({ address: address });

        const result = await getRTokenBalance(
            { chainName: 'ethereum', account: ADDRESSES_WITH_RTOKEN_BALANCES.eusd_eth.address, rTokenAddress: RTOKEN_ADDRESSES[ChainId.ETHEREUM].eUSD },
            functionOptions,
        );
        expect(result.success).toBeTruthy();
        expect(result.data).toEqual(`
Balance of account: ${balance}
`);
    });
});
