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

  if (isError) return <p>Une erreur s'est produite !</p>;

  return (
    <div className="px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative flex flex-col lg:flex-row gap-16">
      {/* IMAGE */}
      <div className="w-full lg:w-1/2 lg:sticky top-20 h-max">
        <ProductImages title={data.title} images={data.images} />
      </div>

      {/* TEXTES */}
      <div className="w-full lg:w-1/2 flex flex-col gap-6">
        <div className="flex justify-between items-center gap-12">
          <h1 className="text-4xl font-medium">{data.title}</h1>
          <span className="text-sm text-white font-semibold p-2 bg-slate-700 rounded-full">
            {ucfirst(data.category)}
          </span>
        </div>
        <p className="text-gray-500">{data.description}</p>
        <div className="h-[2px] bg-gray-100" />
        {data.price === data.discountPercentage ? (
          <h2 className="font-medium text-2xl">${data.price}</h2>
        ) : (
          <div className="flex items-center gap-4">
            <h3 className="text-xl text-gray-500 line-through">
              ${data.price}
            </h3>
            <h2 className="font-medium text-2xl">${data.discountPercentage}</h2>
          </div>
        )}

        <div className="h-[2px] bg-gray-100" />

        {data.dimensions && (
          <>
            <h4 className="font-semibold text-sm">Dimensions</h4>
            <ul className="flex items-center gap-3">
              <li className="ring-1 rounded-md py-1 px-4 text-sm">
                Largeur : {data.dimensions.width}
              </li>
              <li className="ring-1 rounded-md py-1 px-4 text-sm">
                Hauteur : {data.dimensions.height}
              </li>
              <li className="ring-1 rounded-md py-1 px-4 text-sm">
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
            <h4 className="font-semibold mb-4">Statut</h4>
            <span className="text-xs font-medium p-2 bg-orange-300 rounded-full">
              {data.availabilityStatus}
            </span>
          </div>
        )}
        {data.tags && (
          <div className="text-xs flex justify-between items-center gap-2">
            {data.tags.map((tag: string, index: number) => {
              <span
                key={index}
                className="font-medium p-2 bg-slate-200 rounded-full"
              >
                {tag}
              </span>;
            })}
          </div>
        )}
        {data.brand && (
          <div className="text-sm">
            <h4 className="font-semibold mb-4">Marque</h4>
            <p>{data.brand}</p>
          </div>
        )}
        {data.weight && (
          <div className="text-sm">
            <h4 className="font-semibold mb-4">Poids</h4>
            <p>{data.weight} kg</p>
          </div>
        )}
        {data.warrantyInformation && (
          <div className="text-sm">
            <h4 className="font-semibold mb-4">Informations de garantie</h4>
            <p>{data.warrantyInformation}</p>
          </div>
        )}
        {data.shippingInformation && (
          <div className="text-sm">
            <h4 className="font-semibold mb-4">Information de vente</h4>
            <p>{data.shippingInformation}</p>
          </div>
        )}
        {data.returnPolicy && (
          <div className="text-sm">
            <h4 className="font-semibold mb-4">Politique de retour</h4>
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
