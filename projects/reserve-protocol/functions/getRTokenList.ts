import { FunctionReturn, toResult, getChainFromName } from '@heyanon/sdk';
import { supportedChains, RTOKEN_ADDRESSES } from '../constants';

interface Props {
    chainName: string;
}

export async function getRTokenList({ chainName }: Props): Promise<FunctionReturn> {
    const chainId = getChainFromName(chainName);
    if (!chainId) return toResult(`Unsupported chain name: ${chainName}`, true);
    if (!supportedChains.includes(chainId)) return toResult(`Reserve protocol is not supported on ${chainName}`, true);

    const addresses = RTOKEN_ADDRESSES[chainId];

    return toResult(
        `Supported RTokens on ${chainName}:\n` +
            `${Object.keys(addresses)
                .map((rtoken) => `- ${rtoken}: ${addresses[rtoken]}`)
                .join('\n')}`,
    );
}
