"use client";

import { fetchProduct } from "@/actions/product";
import { AddToCart } from "@/components/partials/cart/add_to_cart";
import { ProductImages } from "@/components/partials/product_images";
import { Reviews } from "@/components/partials/reviews";
import { SkeletonProductDetailUI } from "@/components/skeleton/skeleton_product_detail_ui";
import { ucfirst } from "@/lib/utils";
import { useQuery } from "@tanstack/react-query";
import { Suspense } from "react";

const SinglePage = ({ params }: { params: { slug: string } }) => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["product", params.slug],
    queryFn: () => fetchProduct(params.slug),
  });

  if (isLoading) return <SkeletonProductDetailUI />;

  if (isError) return <p>{"Une erreur s'est produite !"}</p>;

  return (
    <div className="relative flex flex-col gap-16 px-4 md:px-8 lg:flex-row lg:px-16 xl:px-32 2xl:px-64">
      {/* IMAGE */}
      <div className="top-20 h-max w-full lg:sticky lg:w-1/2">
        <ProductImages title={data.title} images={data.images} />
      </div>

      {/* TEXTES */}
      <div className="flex w-full flex-col gap-6 lg:w-1/2">
        <div className="flex items-center justify-between gap-12">
          <h1 className="text-4xl font-medium">{data.title}</h1>
          <span className="rounded-full bg-slate-700 p-2 text-sm font-semibold text-white">
            {ucfirst(data.category)}
          </span>
        </div>
        <p className="text-gray-500">{data.description}</p>
        <div className="h-[2px] bg-gray-100" />
        {data.price === data.discountPercentage ? (
          <h2 className="text-2xl font-medium">${data.price}</h2>
        ) : (
          <div className="flex items-center gap-4">
            <h3 className="text-xl text-gray-500 line-through">
              ${data.price}
            </h3>
            <h2 className="text-2xl font-medium">${data.discountPercentage}</h2>
          </div>
        )}

        <div className="h-[2px] bg-gray-100" />

        {data.dimensions && (
          <>
            <h4 className="text-sm font-semibold">Dimensions</h4>
            <ul className="flex items-center gap-3">
              <li className="rounded-md px-4 py-1 text-sm ring-1">
                Largeur : {data.dimensions.width}
              </li>
              <li className="rounded-md px-4 py-1 text-sm ring-1">
                Hauteur : {data.dimensions.height}
              </li>
              <li className="rounded-md px-4 py-1 text-sm ring-1">
                Profondeur : {data.dimensions.depth}
              </li>
            </ul>
          </>
        )}

        <AddToCart productId={data.id} stockNumber={data.stock} />

        <div className="h-[2px] bg-gray-100" />

        {/* INFORMATIONS SUPPLEMENTAIRES */}
        <h1 className="text-2xl">Informations Supplémentaires</h1>
        {data.availabilityStatus && (
          <div className="text-sm">
            <h4 className="mb-4 font-semibold">Statut</h4>
            <span className="rounded-full bg-orange-300 p-2 text-xs font-medium">
              {data.availabilityStatus}
            </span>
          </div>
        )}
        {data.tags && (
          <div className="flex items-center justify-between gap-2 text-xs">
            {data.tags.map((tag: string, index: number) => {
              <span
                key={index}
                className="rounded-full bg-slate-200 p-2 font-medium"
              >
                {tag}
              </span>;
            })}
          </div>
        )}
        {data.brand && (
          <div className="text-sm">
            <h4 className="mb-4 font-semibold">Marque</h4>
            <p>{data.brand}</p>
          </div>
        )}
        {data.weight && (
          <div className="text-sm">
            <h4 className="mb-4 font-semibold">Poids</h4>
            <p>{data.weight} kg</p>
          </div>
        )}
        {data.warrantyInformation && (
          <div className="text-sm">
            <h4 className="mb-4 font-semibold">Informations de garantie</h4>
            <p>{data.warrantyInformation}</p>
          </div>
        )}
        {data.shippingInformation && (
          <div className="text-sm">
            <h4 className="mb-4 font-semibold">Information de vente</h4>
            <p>{data.shippingInformation}</p>
          </div>
        )}
        {data.returnPolicy && (
          <div className="text-sm">
            <h4 className="mb-4 font-semibold">Politique de retour</h4>
            <p>{data.returnPolicy}</p>
          </div>
        )}

        <div className="h-[2px] bg-gray-100" />

        {/* REVIEWS */}
        {data.reviews && (
          <>
            <h1 className="text-2xl">Avis Utilisateurs</h1>
            {
              <Suspense fallback="Loading...">
                <Reviews reviews={data.reviews} />
              </Suspense>
            }
          </>
        )}
      </div>
    </div>
  );
};

export default SinglePage;
