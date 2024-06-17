"use client";

import CategoryList from "@/components/partials/category_list";
import { ProductList } from "@/components/partials/product_list";
import Slider from "@/components/partials/slider";
import { SkeletonCategoryUI } from "@/components/skeleton/skeleton_category_ui";
import { SkeletonProductUI } from "@/components/skeleton/skeleton_product_ui";
import { Suspense } from "react";

export default function Home() {
  return (
    <div>
      <Slider />

      {/* PRODUIT A LA UNE */}
      <div className="mt-24 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
        <h1 className="text-2xl">Produits à la une</h1>
        <Suspense fallback={<SkeletonProductUI />}>
          <ProductList
            categoryName={process.env.NEXT_PUBLIC_API_TOP_CATEGORY_NAME!}
            limit={parseInt(process.env.NEXT_PUBLIC_PRODUCT_PER_PAGE!)}
          />
        </Suspense>
      </div>

      {/* TOUTES LES CATEGORIES */}
      <div className="mt-24">
        <h1 className="mb-12 px-4 text-2xl md:px-8 lg:px-16 xl:px-32 2xl:px-64">
          Catégories
        </h1>
        <Suspense fallback={<SkeletonCategoryUI />}>
          <CategoryList />
        </Suspense>
      </div>

      {/* LES MIEUX NOTES */}
      <div className="mt-24 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
        <h1 className="text-2xl">
          Le coup de ❤️ de la boutique : {'"'}
          {process.env.NEXT_PUBLIC_API_PERSONAL_CATEGORY_NAME!}
          {'"'}
        </h1>
        <Suspense fallback={<SkeletonProductUI />}>
          <ProductList
            categoryName={process.env.NEXT_PUBLIC_API_PERSONAL_CATEGORY_NAME!}
            limit={parseInt(process.env.NEXT_PUBLIC_PRODUCT_PER_PAGE!)}
          />
        </Suspense>
      </div>
    </div>
  );
}
