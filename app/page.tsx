import Image from "next/image";
import { getData } from "./(utils)/getData";
import Link from "next/link";
import blurHashToDataURL from "./(utils)/decodeBlur";

export default async function Home() {
  const data = await getData<
    {
      id: string;
      blur_hash: string;
      urls: { [k: string]: any };
      alt_description: string;
    }[]
  >("/photos/random?count=10&orientation=portrait");
  return (
    <main className="flex min-h-screen items-center justify-between flex-wrap px-8">
      {data.map(({ id, blur_hash, urls, alt_description }) => {
        const blurDataUrl = blurHashToDataURL(blur_hash, 32, 32);
        return (
          <Link
            key={id}
            href={`image/${id}`}
            shallow
            className="after:content group relative mb-5 block cursor-zoom-in after:pointer-events-none after:inset-0 after:rounded-lg after:shadow-highlight w-60">
            <Image
              alt={alt_description}
              className="transform rounded-lg brightness-90 transition will-change-auto group-hover:brightness-110"
              style={{ transform: "translate3d(0, 0, 0)" }}
              placeholder="blur"
              blurDataURL={blurDataUrl}
              src={urls.regular}
              width={720}
              height={480}
              sizes="(max-width: 640px) 100vw,
                        (max-width: 1280px) 50vw,
                        (max-width: 1536px) 33vw,
                        25vw"
            />
          </Link>
        );
      })}
    </main>
  );
}
