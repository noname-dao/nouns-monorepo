import { task, types } from 'hardhat/config';

task('restart-auction', 'Mints a Noun')
  .addOptionalParam(
    'nounsToken',
    'The `NounsToken` contract address',
    '0xEE72b27f1A89E3564497c41c39d825bE599BfD72',
    types.string,
  )
  .setAction(async ({ nounsToken }, { ethers }) => {
    const nftFactory = await ethers.getContractFactory('NounsAuctionHouse');
    const nftContract = nftFactory.attach(nounsToken);

    const receipt = await (await nftContract.unpause()).wait();
    const nounCreated = receipt.events?.[1];
    const { tokenId } = nounCreated?.args;

    console.log(`Noun minted with ID: ${tokenId.toString()}.`);
  });
