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
    address: '0xA1dFDaf6af1c75A911Ba0df1053f8f114F21D8e7',
  },
  NounsDescriptor: {
    address: '0x8494F2C32247B0f80ED54E1A7d923EE8c85A51aa',
    libraries: {
      NFTDescriptor: '0xA1dFDaf6af1c75A911Ba0df1053f8f114F21D8e7',
    },
  },
  NounsSeeder: {
    address: '0x30510ed5b438C0DAF1524781Da70D88984015c7d',
  },
  NounsToken: {
    address: '0x49593F74309BD424A5EBcF138Cf1D89e31dCF7c8',
    constructorArguments: [
      '0x6Aa06477c92a8AD76Fa11F0F9B455751dD01D0F7',
      '0x8494F2C32247B0f80ED54E1A7d923EE8c85A51aa',
      '0x8494F2C32247B0f80ED54E1A7d923EE8c85A51aa',
      '0x30510ed5b438C0DAF1524781Da70D88984015c7d',
      '0xf57b2c51ded3a29e6891aba85459d600256cf317',
    ],
  },
  NounsAuctionHouse: {
    address: '0xEAAB5E7bDc4614ceeA8E8C74E6C7731064a3bb45',
  },
  NounsAuctionHouseProxyAdmin: {
    address: '0xC2a424Ce1f7aeB83Ccf589714cCBaaE7cA212fAb',
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
