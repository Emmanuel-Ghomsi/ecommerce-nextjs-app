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
        className="w-max h-full flex transition-all ease-in-out duration-1000"
        style={{ transform: `translateX(-${current * 100}vw)` }}
      >
        {data?.products.map((product: Product) => (
          <div
            className={`w-screen h-full flex flex-col gap-16 xl:flex-row`}
            key={product.id}
          >
            {/* TEXTE CONTAINER */}
            <div className="h-1/2 xl:w-1/2 xl:h-full flex flex-col items-center justify-center gap-8 2xl:gap-12 text-center">
              <h2 className="text-xl lg:text-3xl 2xl:text-5xl">
                {product.warrantyInformation}
              </h2>
              <h1 className="text-5xl lg:text-6xl 2xl:text-8xl font-semibold">
                {product.title}
              </h1>
              <Link href={`/${product.id}`}>
                <Button className="uppercase">Acheter maintenant</Button>
              </Link>
            </div>

            {/* IMAGE CONTAINER */}
            <div className="h-1/2 xl:w-1/2 xl:h-full relative">
              <Image
                src={product.images[0]}
                alt={product.title}
                fill
                sizes="100%"
                className="object-fit"
              />
            </div>
          </div>
        ))}
      </div>

      {/* DOTS */}
      <div className="absolute m-auto left-1/2 bottom-8 flex gap-4">
        {data?.products.map((product: Product, index: number) => (
          <div
            className={`w-3 h-3  rounded-full ring-1 ring-gray-600 cursor-pointer flex items-center justify-center ${
              current === index ? "scale-150" : ""
            }`}
            key={product.id}
            onClick={() => setCurrent(index)}
          >
            {current === index && (
              <div className="w-[6px] h-[6px] bg-gray-600 rounded-full"></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
