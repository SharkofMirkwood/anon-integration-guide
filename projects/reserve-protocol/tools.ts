import { AiTool, getChainName } from '@heyanon/sdk';
import { supportedChains } from './constants';

export const tools: AiTool[] = [
    {
        name: 'getRTokenList',
        description: 'Retrieve the list of supported RTokens from the Reserve protocol.',
        required: ['chainName'],
        props: [
            {
                name: 'chainName',
                type: 'string',
                enum: supportedChains.map(getChainName),
                description: 'The blockchain network where the Reserve protocol is deployed',
            },
        ],
    },
    {
        name: 'getRTokenBacking',
        description: 'Retrieve the collateral backing information for a specified RToken.',
        required: ['chainName', 'rTokenAddress'],
        props: [
            {
                name: 'chainName',
                type: 'string',
                enum: supportedChains.map(getChainName),
                description: 'The blockchain network where the Reserve protocol is deployed',
            },
            {
                name: 'rTokenAddress',
                type: 'string',
                description: 'The address of the RToken to query backing information for',
            },
        ],
    },
    {
        name: 'getRTokenInfo',
        description: 'Retrieve basic information such as token name, mandate and supply for a specified RToken.',
        required: ['chainName', 'rTokenAddress'],
        props: [
            {
                name: 'chainName',
                type: 'string',
                enum: supportedChains.map(getChainName),
                description: 'The blockchain network where the Reserve protocol is deployed',
            },
            {
                name: 'rTokenAddress',
                type: 'string',
                description: 'The address of the RToken to query metrics for',
            },
        ],
    },
    {
        name: 'getRTokenBalance',
        description: 'Retrieve the balance of a specified RToken held by an account.',
        required: ['chainName', 'account', 'rTokenAddress'],
        props: [
            {
                name: 'chainName',
                type: 'string',
                enum: supportedChains.map(getChainName),
                description: 'The blockchain network where the Reserve protocol is deployed',
            },
            {
                name: 'account',
                type: 'string',
                description: 'The account address to check for the RToken balance',
            },
            {
                name: 'rTokenAddress',
                type: 'string',
                description: 'The address of the RToken to query the balance for',
            },
        ],
    },
    {
        name: 'mintRToken',
        description: 'Mint (issue) new RTokens by depositing collateral. Specify the RToken address and the amount to mint.',
        required: ['chainName', 'account', 'rTokenAddress', 'amount'],
        props: [
            {
                name: 'chainName',
                type: 'string',
                enum: supportedChains.map(getChainName),
                description: 'The blockchain network where the Reserve protocol is deployed',
            },
            {
                name: 'account',
                type: 'string',
                description: 'The account address that will perform the minting',
            },
            {
                name: 'rTokenAddress',
                type: 'string',
                description: 'The address of the RToken to mint',
            },
            {
                name: 'amount',
                type: 'string',
                description: 'The amount of RTokens to mint (in decimal format)',
            },
        ],
    },
    {
        name: 'redeemRToken',
        description: 'Redeem RTokens to withdraw the underlying collateral. Specify the RToken address and the amount to redeem.',
        required: ['chainName', 'account', 'rTokenAddress', 'amount'],
        props: [
            {
                name: 'chainName',
                type: 'string',
                enum: supportedChains.map(getChainName),
                description: 'The blockchain network where the Reserve protocol is deployed',
            },
            {
                name: 'account',
                type: 'string',
                description: 'The account address that will perform the redemption',
            },
            {
                name: 'rTokenAddress',
                type: 'string',
                description: 'The address of the RToken to redeem',
            },
            {
                name: 'amount',
                type: 'string',
                description: 'The amount of RTokens to redeem (in decimal format)',
            },
        ],
    },
    {
        name: 'stakeRSR',
        description: 'Stake RTokens to participate in protocol rewards or governance. Specify the RToken address and the amount to stake.',
        required: ['chainName', 'account', 'rTokenAddress', 'amount'],
        props: [
            {
                name: 'chainName',
                type: 'string',
                enum: supportedChains.map(getChainName),
                description: 'The blockchain network where the Reserve protocol is deployed',
            },
            {
                name: 'account',
                type: 'string',
                description: 'The account address that will stake the RTokens',
            },
            {
                name: 'rTokenAddress',
                type: 'string',
                description: 'The address of the RToken to stake',
            },
            {
                name: 'amount',
                type: 'string',
                description: 'The amount of RTokens to stake (in decimal format)',
            },
        ],
    },
    {
        name: 'getMaxUnstakeRToken',
        description: 'Retrieve the maximum amount of staked RTokens that an account can unstake for a specified RToken.',
        required: ['chainName', 'account', 'rTokenAddress'],
        props: [
            {
                name: 'chainName',
                type: 'string',
                enum: supportedChains.map(getChainName),
                description: 'The blockchain network where the Reserve protocol is deployed',
            },
            {
                name: 'account',
                type: 'string',
                description: 'The account address to check for the maximum unstake amount',
            },
            {
                name: 'rTokenAddress',
                type: 'string',
                description: 'The address of the RToken to query for unstake limits',
            },
        ],
    },
    {
        name: 'unstakeRSR',
        description: 'Unstake RTokens that were previously staked. Specify the RToken address and the amount to unstake.',
        required: ['chainName', 'account', 'rTokenAddress', 'amount'],
        props: [
            {
                name: 'chainName',
                type: 'string',
                enum: supportedChains.map(getChainName),
                description: 'The blockchain network where the Reserve protocol is deployed',
            },
            {
                name: 'account',
                type: 'string',
                description: 'The account address that will perform the unstaking',
            },
            {
                name: 'rTokenAddress',
                type: 'string',
                description: 'The address of the RToken to unstake',
            },
            {
                name: 'amount',
                type: 'string',
                description: 'The amount of RTokens to unstake (in decimal format)',
            },
        ],
    },
];
