import blurHashToDataURL from "@/app/(utils)/decodeBlur";
import { getImageById } from "@/app/(utils)/getImageById";
import Image from "next/image";
import React from "react";

type Props = {
  params: {
    id: string;
  };
};

const page = async ({ params: { id } }: Props) => {
  const currentPhoto = await getImageById(id);
  const blurDataUrl = blurHashToDataURL(currentPhoto.blur_hash, 32, 32);
  return (
    <main className="inset-0 flex flex-col items-center w-screen h-screen">
      <div className="relative w-5/6 h-5/6">
        <Image
          src={currentPhoto.urls.full}
          className="pointer-events-none h-full w-full object-cover"
          alt={currentPhoto.description}
          fill
          placeholder="blur"
          priority={true}
          blurDataURL={blurDataUrl}
        />
      </div>
      <div>{`Photo by ${currentPhoto.user?.name} on Unsplash`}</div>
      <div>{currentPhoto.description}</div>
    </main>
  );
};

export default page;
