import { task, types } from 'hardhat/config';
import ImageData from '../files/image-data.json';
import { chunkArray } from '../utils';

task('populate-descriptor', 'Populates the descriptor with color palettes and Noun parts')
  .addOptionalParam(
    'nftDescriptor',
    'The `NFTDescriptor` contract address',
    '0x929ade1117f741Dd66F121EF80fdbf59b3f1d802',
    types.string,
  )
  .addOptionalParam(
    'nounsDescriptor',
    'The `NounsDescriptor` contract address',
    '0x2da2c4Ce209f3272628242A1414F282247294bBB',
    types.string,
  )
  .setAction(async ({ nftDescriptor, nounsDescriptor }, { ethers }) => {
    const descriptorFactory = await ethers.getContractFactory('NounsDescriptor', {
      libraries: {
        NFTDescriptor: nftDescriptor,
      },
    });
    const descriptorContract = descriptorFactory.attach(nounsDescriptor);

    const { bgcolors, palette, images } = ImageData;
    const { backgrounds, bodies, accessories, faces, tails } = images;

    // Chunk head and accessory population due to high gas usage
    await descriptorContract.addManyColorsToPalette(0, palette);


    const bodyChunk = chunkArray(bodies, 10);
    for (const chunk of bodyChunk) {
      await descriptorContract.addManyBodies(chunk.map(({ data }) => data));
    }

    const bgChunk = chunkArray(backgrounds, 10);
    for (const chunk of bgChunk) {
      await descriptorContract.addManyBackgrounds(chunk.map(({ data }) => data));
    }

    const accessoryChunk = chunkArray(accessories, 10);
    for (const chunk of accessoryChunk) {
      await descriptorContract.addManyAccessories(chunk.map(({ data }) => data));
    }

    const headChunk = chunkArray(faces, 10);
    for (const chunk of headChunk) {
      await descriptorContract.addManyFaces(chunk.map(({ data }) => data));
    }

    const tailChunk = chunkArray(tails, 10);
    for (const chunk of tailChunk) {
        await descriptorContract.addManyTails(chunk.map(({ data }) => data));
    }

    console.log('Descriptor populated with palettes and parts');
  });
