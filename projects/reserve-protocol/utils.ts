import { ChainId } from '@heyanon/sdk';
import FacadeRead from './abis/FacadeRead';
import { FACADE_ADDRESS, RSR_ADDRESS } from './constants';
import { PublicClient, Client, formatUnits, erc20Abi } from 'viem';
import RToken from './abis/RToken';

export async function getRTokenDetail<T>(client: PublicClient, rTokenAddress: `0x${string}`, functionName: string): Promise<T> {
    return client.readContract({
        address: rTokenAddress,
        abi: RToken,
        functionName: functionName as any,
        args: [],
    }) as Promise<T>;
}

export async function getFacadeDetail<T>(client: PublicClient, chainId: ChainId, rTokenAddress: `0x${string}`, functionName: string): Promise<T> {
    return client.readContract({
        address: FACADE_ADDRESS[chainId],
        abi: FacadeRead,
        functionName: functionName as any,
        args: [rTokenAddress],
    }) as Promise<T>;
}

export async function getRTokenDetails(client: PublicClient, chainId: ChainId, rTokenAddress: `0x${string}`) {
    const [name, symbol, decimals, mandate, totalSupply] = await Promise.all(
        ['name', 'symbol', 'decimals', 'mandate', 'totalSupply'].map((functionName) =>
            client.readContract({
                address: rTokenAddress,
                abi: RToken,
                functionName: functionName as any,
                args: [],
            }),
        ),
    );
    const [basketTokens] = await Promise.all(
        ['basketTokens'].map((functionName) =>
            client.readContract({
                address: FACADE_ADDRESS[chainId],
                abi: FacadeRead,
                functionName: functionName as any,
                args: [rTokenAddress],
            }),
        ),
    );
    return {
        name,
        symbol,
        decimals,
        mandate,
        totalSupply,
        basketTokens,
    };
}

export const getRsrBalance = async (client: PublicClient, chainId: ChainId, address: `0x${string}`) => {
    const balance = await client.readContract({
        address: RSR_ADDRESS[chainId],
        abi: erc20Abi,
        functionName: 'balanceOf',
        args: [address],
    });
    return formatUnits(balance, 18);
};
