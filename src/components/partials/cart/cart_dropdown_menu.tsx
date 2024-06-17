"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { toast } from "@/components/ui/use-toast";
import { useAuthStore } from "@/hooks/useAuth";
import { useCartStore } from "@/hooks/useCardStore";
import Image from "next/image";
import Link from "next/link";
import { PropsWithChildren } from "react";

export type CartDropDownMenuProps = PropsWithChildren;

export const CartDropDownMenu = (props: CartDropDownMenuProps) => {
  const { cart, updateCart, saveCart } = useCartStore();
  const { auth } = useAuthStore();

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>{props.children}</DropdownMenuTrigger>
        <DropdownMenuContent className="flex flex-col items-start p-4">
          <DropdownMenuLabel>Panier</DropdownMenuLabel>
          <DropdownMenuSeparator />
          {cart.id === 0 || cart.total === 0 ? (
            <DropdownMenuItem>Le panier est vide</DropdownMenuItem>
          ) : (
            <>
              <DropdownMenuItem className="flex w-full flex-col items-start gap-8">
                {cart.products.map((product) => (
                  <div key={product.id} className="flex w-full gap-4">
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
                          <h3 className="font-semibold">{product.title}</h3>
                          <div className="flex items-center gap-2 rounded-sm bg-gray-50 p-1">
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
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="flex w-full flex-col">
                <div className="flex w-full items-center justify-between font-semibold">
                  <span>Sous total</span>
                  <span>${cart.discountedTotal}</span>
                </div>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="flex w-full justify-between text-sm">
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
              </DropdownMenuItem>
            </>
          )}
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
};
