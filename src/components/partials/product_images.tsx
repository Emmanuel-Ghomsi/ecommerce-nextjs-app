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
      <div className="h-[500px] relative">
        <Image
          src={images![index]}
          alt={title}
          fill
          sizes="50vw"
          className="object-cover rounded-md"
        />
      </div>
      {images && (
        <div className="flex justify-between gap-4 mt-8">
          {images.map((item: string, i: number) => (
            <div
              className="w-1/4 h-32 relative gap-4 mt-8 cursor-pointer"
              key={i}
              onClick={() => setIndex(i)}
            >
              <Image
                src={item}
                alt={title}
                fill
                sizes="30vw"
                className="object-cover rounded-md"
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
