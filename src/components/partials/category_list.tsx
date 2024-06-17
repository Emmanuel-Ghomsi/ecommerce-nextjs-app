"use client";

import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import Link from "next/link";
import { fetchCategories } from "@/actions/product";
import { Category } from "@/types/next";
import { SkeletonCategoryUI } from "../skeleton/skeleton_category_ui";

export default function CategoryList() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["categories"],
    queryFn: fetchCategories,
  });

  if (isLoading) return <SkeletonCategoryUI />;

  if (isError) return <p>{"Une erreur s'est produite !"}</p>;

  return (
    <div className="scrollbar-hide overflow-x-scroll px-4">
      <div className="flex gap-4 md:gap-8">
        {data.map((category: Category) => (
          <Link
            href={`/list?category=${category.slug}`}
            className="w-full shrink-0 sm:w-1/2 lg:w-1/4 xl:w-1/6"
            key={category.name}
          >
            <div className="relative h-96 w-full bg-slate-100">
              <Image
                src={`https://ui-avatars.com/api/?name=${category.slug}&size=600&background=1f95de&color=fff`}
                alt={category.name}
                fill
                sizes="100"
                priority
                className="object-cover"
              />
            </div>
            <h1 className="mt-8 text-xl font-light tracking-wide">
              {category.name}
            </h1>
          </Link>
        ))}
      </div>
    </div>
  );
}
