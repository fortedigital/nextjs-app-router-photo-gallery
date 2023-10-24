import { getData } from "./getData";

export const getImageById = (id: string) =>
  getData<{
    id: string;
    blur_hash: string;
    urls: { [k: string]: any };
    description: string;
  }>(`/photos/${id}`);
