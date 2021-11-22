import { task, types } from 'hardhat/config';
import ImageData from '../files/image-data.json';
import { chunkArray } from '../utils';

task('populate-descriptor', 'Populates the descriptor with color palettes and Noun parts')
  .addOptionalParam(
    'nftDescriptor',
    'The `NFTDescriptor` contract address',
    '0x1BBEc8f19D78Dc1E1303D89817ee69D57d548949',
    types.string,
  )
  .addOptionalParam(
    'nounsDescriptor',
    'The `NounsDescriptor` contract address',
    '0xD13232F35a0F2831b0584CC9C595A35c12D78BAB',
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

    await descriptorContract.addManyBodies(bodies.map(({ data }) => data));

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

    await descriptorContract.addManyTails(tails.map(({ data }) => data));

    console.log('Descriptor populated with palettes and parts');
  });
