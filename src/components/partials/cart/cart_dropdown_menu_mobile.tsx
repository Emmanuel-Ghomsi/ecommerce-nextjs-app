"use client";

import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/use-toast";
import { useAuthStore } from "@/hooks/useAuth";
import { useCartStore } from "@/hooks/useCardStore";
import Image from "next/image";
import Link from "next/link";

export const CartDropDownMenuMobile = () => {
  const { cart, updateCart, saveCart } = useCartStore();
  const { auth } = useAuthStore();

  return (
    <div className="z-20 flex flex-col gap-6 rounded-md bg-white p-4 text-slate-800 shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
      {/* eslint-disable-next-line tailwindcss/no-custom-classname*/}
      <h4 className="text-md font-semibold">Panier</h4>
      <hr />
      {cart.id === 0 || cart.total === 0 ? (
        <p>Le panier est vide</p>
      ) : (
        <>
          <div className="flex flex-col gap-8">
            {cart.products.map((product) => (
              <div key={product.id} className="flex gap-4">
                {/* IMAGE */}
                <Image
                  src={product.thumbnail}
                  alt={product.title}
                  width={100}
                  height={100}
                  className="rounded-md object-cover"
                />

                <div className="flex w-full flex-col justify-between">
                  {/* EN TÊTE */}
                  <div>
                    {/* TITRE */}
                    <div className="flex items-center justify-between gap-8">
                      <p className="text-sm font-semibold">{product.title}</p>
                      <div className="flex items-center gap-2 rounded-sm bg-gray-50 p-1 text-sm">
                        {product.quantity && product.quantity > 1 && (
                          <div className="text-xs text-green-500">
                            {product.quantity} x{" "}
                          </div>
                        )}
                        ${product.discountPercentage}
                      </div>
                    </div>
                  </div>

                  {/* PIED */}
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">
                      Qte : {product.quantity}
                    </span>
                    <span
                      className="cursor-pointer text-blue-500"
                      onClick={(e) => {
                        e.preventDefault();

                        let productsToSend: {
                          id: number;
                          quantity: number;
                        }[] = [];

                        cart.products.filter((p) => {
                          if (p.id !== product.id) {
                            productsToSend.push({
                              id: p.id,
                              quantity: p.quantity,
                            });
                          }
                        });

                        updateCart(String(cart.id), productsToSend);
                      }}
                    >
                      Retirer
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <hr />
          <div className="">
            <div className="mb-4 flex items-center justify-between text-sm font-semibold">
              <span>Sous total</span>
              <span>${cart.discountedTotal}</span>
            </div>
            <hr />
            <div className="mt-4 flex justify-between text-sm">
              <Button
                variant="outline"
                onClick={() => {
                  saveCart(String(auth.id), cart.products);

                  toast({
                    title: "Enregistrement du panier",
                    description: "Votre panier a bien été enregistré !",
                  });
                }}
              >
                Enregistrer le panier
              </Button>
              <Link href="/cart">
                <Button>Consulter tous les paniers</Button>
              </Link>
            </div>
          </div>
        </>
      )}
    </div>
  );
};
