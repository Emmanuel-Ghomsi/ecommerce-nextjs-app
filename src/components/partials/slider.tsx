"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Button } from "../ui/button";
import { useQuery } from "@tanstack/react-query";
import { fetchProductsByCategoryName } from "@/actions/product";
import { Product } from "@/types/next";

export default function Slider() {
  const [current, setCurrent] = useState(0);

  const { data } = useQuery({
    queryKey: [
      "products_slider",
      process.env.NEXT_PUBLIC_API_TOP_CATEGORY_NAME!,
    ],
    queryFn: () =>
      fetchProductsByCategoryName(
        process.env.NEXT_PUBLIC_API_TOP_CATEGORY_NAME!,
        3
      ),
  });

  return (
    <div className="h-[calc(100vh-80px)] overflow-hidden">
      <div
        className="flex h-full w-max transition-all duration-1000 ease-in-out"
        style={{ transform: `translateX(-${current * 100}vw)` }}
      >
        {data?.products.map((product: Product) => (
          <div
            className={`flex h-full w-screen flex-col gap-16 xl:flex-row`}
            key={product.id}
          >
            {/* TEXTE CONTAINER */}
            <div className="flex h-1/2 flex-col items-center justify-center gap-8 text-center xl:h-full xl:w-1/2 2xl:gap-12">
              <h2 className="text-xl lg:text-3xl 2xl:text-5xl">
                {product.warrantyInformation}
              </h2>
              <h1 className="text-5xl font-semibold lg:text-6xl 2xl:text-8xl">
                {product.title}
              </h1>
              <Link href={`/product/${product.id}`}>
                <Button className="uppercase">Acheter maintenant</Button>
              </Link>
            </div>

            {/* IMAGE CONTAINER */}
            <div className="relative h-1/2 xl:h-full xl:w-1/2">
              <Image
                src={product.images[0]}
                alt={product.title}
                fill
                sizes="100%"
                // eslint-disable-next-line tailwindcss/no-custom-classname
                className="object-fit"
              />
            </div>
          </div>
        ))}
      </div>

      {/* DOTS */}
      <div className="absolute bottom-8 left-1/2 m-auto flex gap-4">
        {data?.products.map((product: Product, index: number) => (
          <div
            className={`flex size-3 cursor-pointer items-center justify-center rounded-full ring-1 ring-gray-600 ${
              current === index ? "scale-150" : ""
            }`}
            key={product.id}
            onClick={() => setCurrent(index)}
          >
            {current === index && (
              <div className="size-[6px] rounded-full bg-gray-600"></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
