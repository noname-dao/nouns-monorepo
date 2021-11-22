export interface NounSeed {
  background: number;
  body: number;
  accessory: number;
  face: number;
  tail: number;
}

export interface EncodedImage {
  filename: string;
  data: string;
}

export interface NounData {
  parts: EncodedImage[];
  background: string;
}
