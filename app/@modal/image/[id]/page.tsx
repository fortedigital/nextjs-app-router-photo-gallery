import blurHashToDataURL from "@/app/(utils)/decodeBlur";
import Image from "next/image";
import React from "react";
import Modal from "./_Modal";
import { getImageById } from "@/app/(utils)/getImageById";

type Props = {
  params: {
    id: string;
  };
};

const page = async ({ params: { id } }: Props) => {
  const currentPhoto = await getImageById(id);
  const blurDataUrl = blurHashToDataURL(currentPhoto.blur_hash, 32, 32);
  return (
    <Modal>
      <Image
        src={currentPhoto.urls.full}
        className="pointer-events-none h-full w-full object-cover"
        alt={currentPhoto.alt_description}
        fill
        placeholder="blur"
        priority={true}
        blurDataURL={blurDataUrl}
      />
    </Modal>
  );
};

export default page;
