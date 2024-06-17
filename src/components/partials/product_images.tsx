"use client";

import Image from "next/image";
import { useState } from "react";

export const ProductImages = ({
  title,
  images,
}: {
  title: string;
  images?: string[];
}) => {
  const [index, setIndex] = useState(0);

  return (
    <div className="">
      <div className="relative h-[500px]">
        <Image
          src={images![index]}
          alt={title}
          fill
          sizes="50vw"
          className="rounded-md object-cover"
        />
      </div>
      {images && (
        <div className="mt-8 flex justify-between gap-4">
          {images.map((item: string, i: number) => (
            <div
              className="relative mt-8 h-32 w-1/4 cursor-pointer gap-4"
              key={i}
              onClick={() => setIndex(i)}
            >
              <Image
                src={item}
                alt={title}
                fill
                sizes="30vw"
                className="rounded-md object-cover"
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
