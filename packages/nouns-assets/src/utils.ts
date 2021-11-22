import { NounSeed, NounData } from './types';
import { images, bgcolors } from './image-data.json';

const { backgrounds, bodies, accessories, faces, tails } = images;

/**
 * Get encoded part and background information using a Noun seed
 * @param seed The Noun seed
 */
export const getNounData = (seed: NounSeed): NounData => {
  return {
    parts: [
      backgrounds[seed.background],
      bodies[seed.body],
      tails[seed.tail],
      faces[seed.face],
      accessories[seed.accessory],
    ],
    background: bgcolors[0],
  };
};

/**
 * Generate a random Noun seed
 * @param seed The Noun seed
 */
export const getRandomNounSeed = (): NounSeed => {
  return {
    background: Math.floor(Math.random() * backgrounds.length),
    body: Math.floor(Math.random() * bodies.length),
    accessory: Math.floor(Math.random() * accessories.length),
    face: Math.floor(Math.random() * faces.length),
    tail: Math.floor(Math.random() * tails.length),
  };
};
