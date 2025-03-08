import { ChainId } from '@heyanon/sdk';

export const supportedChains = [ChainId.ETHEREUM, ChainId.ARBITRUM, ChainId.BASE];

export type AddressMap = { [chainId: number]: `0x${string}` };

export const RSR_ADDRESS: AddressMap = {
    [ChainId.ETHEREUM]: '0x320623b8E4fF03373931769A31Fc52A4E78B5d70',
    [ChainId.BASE]: '0xaB36452DbAC151bE02b16Ca17d8919826072f64a',
    [ChainId.ARBITRUM]: '0xCa5Ca9083702c56b481D1eec86F1776FDbd2e594',
};

export const FACADE_ADDRESS: AddressMap = {
    [ChainId.ETHEREUM]: '0x2C7ca56342177343A2954C250702Fd464f4d0613',
    [ChainId.BASE]: '0xeb2071e9b542555e90e6e4e1f83fa17423583991',
    [ChainId.ARBITRUM]: '0x387A0C36681A22F728ab54426356F4CAa6bB48a9',
};

export const RTOKEN_ADDRESSES: { [chainId: number]: { [key: string]: `0x${string}` } } = {
    [ChainId.ETHEREUM]: {
        eUSD: '0xA0d69E286B938e21CBf7E51D71F6A4c8918f482F',
        rgUSD: '0x78da5799CF427Fee11e9996982F4150eCe7a99A7',
        'ETH+': '0xE72B141DF173b999AE7c1aDcbF60Cc9833Ce56a8',
        USD3: '0x0d86883FAf4FfD7aEb116390af37746F45b6f378',
    },
    [ChainId.BASE]: {
        eUSD: '0xCfA3Ef56d303AE4fAabA0592388F19d7C3399FB4',
        rgUSD: '0x8E5E9DF4F0EA39aE5270e79bbABFCc34203A3470',
        USD3: '0xEFb97aaF77993922aC4be4Da8Fbc9A2425322677',
    },
    [ChainId.ARBITRUM]: {
        eUSD: '0x12275DCB9048680c4Be40942eA4D92c74C63b844',
        rgUSD: '0x96a993f06951b01430523d0d5590192d650ebf3e',
        'ETH+': '0x18c14c2d707b2212e17d1579789fc06010cfca23',
    },
};
