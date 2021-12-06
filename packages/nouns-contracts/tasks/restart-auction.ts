import { task, types } from 'hardhat/config';

task('restart-auction', 'Mints a Noun')
  .addOptionalParam(
    'nounsToken',
    'The `NounsToken` contract address',
    '0x92BB7Ab272027B6831E0B3cc85eA674059E24D1c',
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
