import FilterCategory from "@/components/partials/filter";
import { ProductList } from "@/components/partials/product_list";
import { SkeletonProductUI } from "@/components/skeleton/skeleton_product_ui";
import { ucfirst } from "@/lib/utils";
import { Suspense } from "react";

export default function ListPage({ searchParams }: { searchParams: any }) {
  return (
    <div className="relative px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
      {/* FILTRE */}
      <FilterCategory />

      {/* PRODUITS */}
      <h1 className="mt-12 text-xl font-semibold">
        Les produits de la catégorie {'"'}
        {ucfirst(searchParams.category)}
        {'"'}
      </h1>
      <Suspense fallback={<SkeletonProductUI />}>
        <ProductList
          categoryName={searchParams.category}
          searchParams={searchParams}
        />
      </Suspense>
    </div>
  );
}
