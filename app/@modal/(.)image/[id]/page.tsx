import React from "react";
import Modal from "./_Modal";
import { getData } from "@/app/(utils)/getData";
import Image from "next/image";
import blurHashToDataURL from "@/app/(utils)/decodeBlur";

type Props = {
  params: {
    id: string;
  };
};

const page = async ({ params: { id } }: Props) => {
  const currentPhoto = await getData<{
    id: string;
    blur_hash: string;
    urls: { [k: string]: any };
    description: string;
  }>(`/photos/${id}`);
  const blurDataUrl = blurHashToDataURL(currentPhoto.blur_hash, 500, 500);
  return (
    <Modal>
      <Image
        src={currentPhoto.urls.full}
        className="pointer-events-none h-full w-full object-cover"
        alt={currentPhoto.description}
        placeholder="blur"
        fill
        priority={true}
        blurDataURL={blurDataUrl}
      />
    </Modal>
  );
};

export default page;
