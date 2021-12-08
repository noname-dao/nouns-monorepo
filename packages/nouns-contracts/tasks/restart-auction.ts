import { task, types } from 'hardhat/config';

task('restart-auction', 'Mints a Noun')
  .addOptionalParam(
    'nounsToken',
    'The `NounsToken` contract address',
    '0xf0d4e7461104fC76D0b8496F7840f8c3886a0AE6',
    types.string,
  )
  .setAction(async ({ nounsToken }, { ethers }) => {
    const nftFactory = await ethers.getContractFactory('NounsAuctionHouse');
    const nftContract = nftFactory.attach(nounsToken);

    const receipt = await (await nftContract.unpause()).wait();
    console.log(receipt.events);

    const nounCreated = receipt.events?.[1];
    const { tokenId } = nounCreated?.args;

    console.log(`Noun minted with ID: ${tokenId.toString()}.`);
  });
