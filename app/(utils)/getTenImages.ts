import { getData } from "./getData";

export const getTenImages = async () =>
  getData<
    {
      id: string;
      blur_hash: string;
      urls: { [k: string]: any };
      alt_description: string;
    }[]
  >("/photos/random?count=10&orientation=portrait");
