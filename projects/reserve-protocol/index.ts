import { AdapterExport } from '@heyanon/sdk';
import { tools } from './tools';
import * as functions from './functions';

export default {
    tools,
    functions,
    description: 'The Reserve Protocol is a system that allows users to create and redeem RTokens, ERC20 tokens that represent baskets of multi-unit value,',
} satisfies AdapterExport;
