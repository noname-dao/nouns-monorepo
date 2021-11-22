import { task } from 'hardhat/config';

type ContractName =
  | 'NFTDescriptor'
  | 'NounsDescriptor'
  | 'NounsSeeder'
  | 'NounsToken'
  | 'NounsAuctionHouse'
  | 'NounsAuctionHouseProxyAdmin'
  | 'NounsDAOExecutor'
  | 'NounsDAOLogicV1'
  | 'NounsDAOProxy'
  | 'NounsAuctionHouseProxy';

interface VerifyArgs {
  address: string;
  constructorArguments?: (string | number)[];
  libraries?: Record<string, string>;
}

const contracts: Record<ContractName, VerifyArgs> = {
  NFTDescriptor: {
    address: '0x1BBEc8f19D78Dc1E1303D89817ee69D57d548949',
  },
  NounsDescriptor: {
    address: '0xD13232F35a0F2831b0584CC9C595A35c12D78BAB',
    libraries: {
      NFTDescriptor: '0x1BBEc8f19D78Dc1E1303D89817ee69D57d548949',
    },
  },
  NounsSeeder: {
    address: '0x6Bd1c25Bc3DE18c4cAf38b1A7Ef93383645e3332',
  },
  NounsToken: {
    address: '0xeE06c05cB9CC05f56E8177451641Cd784bE364ed',
    constructorArguments: [
      '0x6Aa06477c92a8AD76Fa11F0F9B455751dD01D0F7',
      '0xEE72b27f1A89E3564497c41c39d825bE599BfD72',
      '0xD13232F35a0F2831b0584CC9C595A35c12D78BAB',
      '0x6Bd1c25Bc3DE18c4cAf38b1A7Ef93383645e3332',
      '0xf57b2c51ded3a29e6891aba85459d600256cf317',
    ],
  },
  NounsAuctionHouse: {
    address: '0xF45A566b4f86eAc392651330133ab65896B3D37d',
  },
  NounsAuctionHouseProxyAdmin: {
    address: '0x44f214C6481D52775D99f6a4bDfB8ec5B02ED1DB',
  },
  NounsAuctionHouseProxy: {
    address: '0xEE72b27f1A89E3564497c41c39d825bE599BfD72',
    constructorArguments: [
      '0xF45A566b4f86eAc392651330133ab65896B3D37d',
      '0x44f214C6481D52775D99f6a4bDfB8ec5B02ED1DB',
      '87f49f54000000000000000000000000ee06c05cb9cc05f56e8177451641cd784be364ed000000000000000000000000c778417e063141139fce010982780140aa0cd5ab000000000000000000000000000000000000000000000000000000000000012c000000000000000000000000000000000000000000000000000000000000000100000000000000000000000000000000000000000000000000000000000000050000000000000000000000000000000000000000000000000000000000015180',
    ],
  },
  NounsDAOExecutor: {
    address: '0x937dd6748f53416e0917D75382133fE4d0f81D5C',
    constructorArguments: ['0x3000359C3564E403Be04AA6982E8a528471Dd4EF', 172800],
  },
  NounsDAOLogicV1: {
    address: '0x22687C2D6767d56CE8f033654F9Dbd716d50673f',
  },
  NounsDAOProxy: {
    address: '0x3000359C3564E403Be04AA6982E8a528471Dd4EF',
    constructorArguments: [
      '0x937dd6748f53416e0917D75382133fE4d0f81D5C',
      '0xeE06c05cB9CC05f56E8177451641Cd784bE364ed',
      '0x6Aa06477c92a8AD76Fa11F0F9B455751dD01D0F7',
      '0x937dd6748f53416e0917D75382133fE4d0f81D5C',
      '0x22687C2D6767d56CE8f033654F9Dbd716d50673f',
      17280,
      1,
      500,
      1000,
    ],
  },
};

task('verify-etherscan', 'Verify the Solidity contracts on Etherscan').setAction(async (_, hre) => {
  for (const [name, args] of Object.entries(contracts)) {

    console.log(`verifying ${name}...`);
    try {
      await hre.run('verify:verify', {
        ...args,
      });
    } catch (e) {
      console.error(e);
    }
  }
});
