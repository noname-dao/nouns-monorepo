import { ChainId, ContractAddresses } from './types';

const chainIdToAddresses: { [chainId: number]: ContractAddresses } = {
  [ChainId.Mainnet]: {
    nounsToken: '0x9C8fF314C9Bc7F6e59A9d9225Fb22946427eDC03',
    nounsSeeder: '0xCC8a0FB5ab3C7132c1b2A0109142Fb112c4Ce515',
    nounsDescriptor: '0x0Cfdb3Ba1694c2bb2CFACB0339ad7b1Ae5932B63',
    nftDescriptor: '0x0BBAd8c947210ab6284699605ce2a61780958264',
    nounsAuctionHouse: '0xF15a943787014461d94da08aD4040f79Cd7c124e',
    nounsAuctionHouseProxy: '0x830BD73E4184ceF73443C15111a1DF14e495C706',
    nounsAuctionHouseProxyAdmin: '0xC1C119932d78aB9080862C5fcb964029f086401e',
    nounsDaoExecutor: '0x0BC3807Ec262cB779b38D65b38158acC3bfedE10',
    nounsDAOProxy: '0x6f3E6272A167e8AcCb32072d08E0957F9c79223d',
    nounsDAOLogicV1: '0xa43aFE317985726E4e194eb061Af77fbCb43F944',
  },
  [ChainId.Polygon]: {
    nounsToken: '0x03476C31752ce9aFD5f89aC326422E9565FEeE61',
    nounsSeeder: '0xb8cB26B9Ec3E6696D978E136f4840d30358d2132',
    nounsDescriptor: '0x2da2c4Ce209f3272628242A1414F282247294bBB',
    nftDescriptor: '0x389F4BdD6aF714be873f3a2255fD9979E38667D7',
    nounsAuctionHouse: '0xD8b51A34c77e1B19a75C3D4D2d33B6b2Eff5D965',
    nounsAuctionHouseProxy: '0xf0d4e7461104fC76D0b8496F7840f8c3886a0AE6',
    nounsAuctionHouseProxyAdmin: '0x71c1C48c278FE118573e643a1Ed3f500a0d7CBa7',
    nounsDaoExecutor: '0x828487fC7e92ce36cc87E5560Ff4f7d8C8f7a050',
    nounsDAOProxy: '0x3D0bB16c31d7B78dca51388D66A39bf02d4627d1',
    nounsDAOLogicV1: '0x2bbb28d8c63C8fCDC179d5D7927ca62AdD12E7d0',
  },
  [ChainId.Rinkeby]: {
    nounsToken: '0xeE06c05cB9CC05f56E8177451641Cd784bE364ed',
    nounsSeeder: '0x6Bd1c25Bc3DE18c4cAf38b1A7Ef93383645e3332',
    nounsDescriptor: '0xD13232F35a0F2831b0584CC9C595A35c12D78BAB',
    nftDescriptor: '0x1BBEc8f19D78Dc1E1303D89817ee69D57d548949',
    nounsAuctionHouse: '0xF45A566b4f86eAc392651330133ab65896B3D37d',
    nounsAuctionHouseProxy: '0xEE72b27f1A89E3564497c41c39d825bE599BfD72',
    nounsAuctionHouseProxyAdmin: '0x44f214C6481D52775D99f6a4bDfB8ec5B02ED1DB',
    nounsDaoExecutor: '0x937dd6748f53416e0917D75382133fE4d0f81D5C',
    nounsDAOProxy: '0x3000359C3564E403Be04AA6982E8a528471Dd4EF',
    nounsDAOLogicV1: '0x22687C2D6767d56CE8f033654F9Dbd716d50673f',
  },
  [ChainId.Local]: {
    nounsToken: '0xDc64a140Aa3E981100a9becA4E685f962f0cF6C9',
    nounsSeeder: '0xCf7Ed3AccA5a467e9e704C703E8D87F634fB0Fc9',
    nounsDescriptor: '0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0',
    nftDescriptor: '0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512',
    nounsAuctionHouse: '0x5FC8d32690cc91D4c39d9d3abcBD16989F875707',
    nounsAuctionHouseProxy: '0xa513E6E4b8f2a923D98304ec87F64353C4D5C853',
    nounsAuctionHouseProxyAdmin: '0x0165878A594ca255338adfa4d48449f69242Eb8F',
    nounsDaoExecutor: '0x2279B7A0a67DB372996a5FaB50D91eAA73d2eBe6',
    nounsDAOProxy: '0x610178dA211FEF7D417bC0e6FeD39F05609AD788',
    nounsDAOLogicV1: '0x8A791620dd6260079BF849Dc5567aDC3F2FdC318',
  },
};

/**
 * Get addresses of contracts that have been deployed to the
 * Ethereum mainnet or a supported testnet. Throws if there are
 * no known contracts deployed on the corresponding chain.
 * @param chainId The desired chainId
 */
export const getContractAddressesForChainOrThrow = (chainId: number): ContractAddresses => {
  if (!chainIdToAddresses[chainId]) {
    throw new Error(
      `Unknown chain id (${chainId}). No known contracts have been deployed on this chain.`,
    );
  }
  return chainIdToAddresses[chainId];
};
