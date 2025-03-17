import { expect, test, beforeAll, describe } from 'vitest';
import { http, createPublicClient, Client, TestClient, erc20Abi, parseUnits, walletActions, publicActions } from 'viem';
import { foundry, mainnet } from 'viem/chains';
import { createServer } from 'prool';
import { getRTokenList } from '../functions/getRTokenList';
import { getRTokenInfo } from '../functions/getRTokenInfo';
import { getRTokenBacking } from '../functions/getRTokenBacking';
import { getRTokenBalance } from '../functions/getRTokenBalance';
import { RSR_ADDRESS, RTOKEN_ADDRESSES } from '../constants';
import { ChainId, FunctionOptions } from '@heyanon/sdk';
import { client, functionOptions } from './setup';

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

describe('getRTokenBalance', () => {
    test('Unsupported chain', async () => {
        const [address] = await client.getAddresses();
        const result = await getRTokenBalance({ chainName: 'polygon', account: address, rTokenAddress: RTOKEN_ADDRESSES[ChainId.ETHEREUM].eUSD }, functionOptions);
        expect(result.success).toBeFalsy();
        expect(result.data).toBe('ERROR: Reserve protocol is not supported on polygon');
    });

    test('No balance - Ethereum - eUSD', async () => {
        const [address] = await client.getAddresses();
        const result = await getRTokenBalance({ chainName: 'ethereum', account: address, rTokenAddress: RTOKEN_ADDRESSES[ChainId.ETHEREUM].eUSD }, functionOptions);
        expect(result.success).toBeTruthy();
        expect(result.data).toEqual(`
Balance of account: 0
`);
    });

    test('With balance - Ethereum - eUSD', async () => {
        const { address, balance } = ADDRESSES_WITH_RTOKEN_BALANCES.eusd_eth;
        client.impersonateAccount({ address: address });

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
