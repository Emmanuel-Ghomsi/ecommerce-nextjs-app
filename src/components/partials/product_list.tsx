"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import { useQuery } from "@tanstack/react-query";
import { fetchProductsByCategoryName } from "@/actions/product";
import { Product } from "@/types/next";
import DOMPurify from "dompurify";
import { SkeletonProductUI } from "../skeleton/skeleton_product_ui";
import { useState } from "react";
import { Paginate } from "./pagination";

export const ProductList = ({
  categoryName,
  limit,
  searchParams,
}: {
  categoryName: string;
  limit?: number;
  searchParams?: any;
}) => {
  const [currentPage, setCurrentPage] = useState(1);

  const { data, isLoading, isError } = useQuery({
    queryKey: [
      "products_category",
      categoryName,
      searchParams?.sortBy,
      searchParams?.order,
    ],
    queryFn: () =>
      fetchProductsByCategoryName(
        categoryName,
        limit,
        searchParams?.sortBy,
        searchParams?.order
      ),
  });

  if (isLoading) return <SkeletonProductUI />;

  if (isError) return <p>{"Une erreur s'est produite !"}</p>;

  /* PAGINATION */
  const indexOfLastProduct =
    currentPage * parseInt(process.env.NEXT_PUBLIC_PRODUCT_PER_PAGE!);
  const indexOfFirstProduct =
    indexOfLastProduct - parseInt(process.env.NEXT_PUBLIC_PRODUCT_PER_PAGE!);
  const currentProducts = data.products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const previousPage = () => {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const nextPage = () => {
    if (
      currentPage !==
      Math.ceil(
        data.products.length /
          parseInt(process.env.NEXT_PUBLIC_PRODUCT_PER_PAGE!)
      )
    ) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div className="mt-12 flex flex-wrap justify-around gap-x-8 gap-y-16">
      {currentProducts.map((product: Product) => (
        <Link
          href={"/product/" + product.id}
          className="flex w-full flex-col gap-4 sm:w-[45%] lg:w-[22%]"
          key={product.id}
        >
          {/* IMAGES */}
          <div className="relative h-80 w-full">
            <Image
              src={product.images[0]}
              alt={product.title}
              fill
              sizes="25vw"
              // eslint-disable-next-line tailwindcss/no-custom-classname
              className={`absolute z-10 rounded-md object-cover ${
                product.images && product.images[1] ? "hover:opacity-0" : ""
              } easy transition-opacity duration-500`}
            />
            {product.images && product.images[1] && (
              <Image
                src={product.images[1]}
                alt={product.title}
                fill
                sizes="25vw"
                className="absolute rounded-md object-cover"
              />
            )}
          </div>

          {/* INFORMATIONS */}
          <div className="flex justify-between">
            <span className="font-medium">{product.title}</span>
            <span className="font-semibold">${product.price}</span>
          </div>

          {/* DESCRIPTION */}
          {product.description && (
            <div
              className="text-sm text-gray-500"
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(
                  product.description.substring(0, 80) + " ..." || ""
                ),
              }}
            ></div>
          )}

          {/* CTA */}
          <Button
            variant="outline"
            className="rounded-2xl text-lama ring-1 ring-lama hover:bg-lama hover:text-white"
          >
            Ajouter au panier
          </Button>
        </Link>
      ))}

      <Paginate
        currentPage={currentPage}
        productsPerPage={parseInt(process.env.NEXT_PUBLIC_PRODUCT_PER_PAGE!)}
        totalProducts={data.products.length}
        paginate={paginate}
        previousPage={previousPage}
        nextPage={nextPage}
      />
    </div>
  );
};
