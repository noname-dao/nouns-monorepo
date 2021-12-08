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
    address: '0x389F4BdD6aF714be873f3a2255fD9979E38667D7',
  },
  NounsDescriptor: {
    address: '0x2da2c4Ce209f3272628242A1414F282247294bBB',
    libraries: {
      NFTDescriptor: '0x389F4BdD6aF714be873f3a2255fD9979E38667D7',
    },
  },
  NounsSeeder: {
    address: '0xb8cB26B9Ec3E6696D978E136f4840d30358d2132',
  },
  NounsToken: {
    address: '0x03476C31752ce9aFD5f89aC326422E9565FEeE61',
    constructorArguments: [
      '0x762DC6d785714e08a754aC972D51338f8d57d886',
      '0xf0d4e7461104fC76D0b8496F7840f8c3886a0AE6',
      '0x2da2c4Ce209f3272628242A1414F282247294bBB',
      '0xb8cB26B9Ec3E6696D978E136f4840d30358d2132',
      '0xf57b2c51ded3a29e6891aba85459d600256cf317',
    ],
  },
  NounsAuctionHouse: {
    address: '0xD8b51A34c77e1B19a75C3D4D2d33B6b2Eff5D965',
  },
  NounsAuctionHouseProxyAdmin: {
    address: '0x71c1C48c278FE118573e643a1Ed3f500a0d7CBa7',
  },
  NounsAuctionHouseProxy: {
    address: '0xf0d4e7461104fC76D0b8496F7840f8c3886a0AE6',
    constructorArguments: [
      '0xD8b51A34c77e1B19a75C3D4D2d33B6b2Eff5D965',
      '0x71c1C48c278FE118573e643a1Ed3f500a0d7CBa7',
      '87f49f5400000000000000000000000003476c31752ce9afd5f89ac326422e9565feee610000000000000000000000000d500b1d8e8ef31e21c99d1db9a6444d3adf1270000000000000000000000000000000000000000000000000000000000000012c000000000000000000000000000000000000000000000000000000001dcd650000000000000000000000000000000000000000000000000000000000000000050000000000000000000000000000000000000000000000000000000000015180',
    ],
  },
  NounsDAOExecutor: {
    address: '0x828487fC7e92ce36cc87E5560Ff4f7d8C8f7a050',
    constructorArguments: ['0x3D0bB16c31d7B78dca51388D66A39bf02d4627d1', 172800],
  },
  NounsDAOLogicV1: {
    address: '0x2bbb28d8c63C8fCDC179d5D7927ca62AdD12E7d0',
  },
  NounsDAOProxy: {
    address: '0x3D0bB16c31d7B78dca51388D66A39bf02d4627d1',
    constructorArguments: [
      '0x828487fC7e92ce36cc87E5560Ff4f7d8C8f7a050',
      '0x03476C31752ce9aFD5f89aC326422E9565FEeE61',
      '0x762DC6d785714e08a754aC972D51338f8d57d886',
      '0x828487fC7e92ce36cc87E5560Ff4f7d8C8f7a050',
      '0x2bbb28d8c63C8fCDC179d5D7927ca62AdD12E7d0',
      23040,
      11520,
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
