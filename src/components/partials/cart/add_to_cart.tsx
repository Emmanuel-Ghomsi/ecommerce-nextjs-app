"use client";

import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/use-toast";
import { useCartStore } from "@/hooks/useCardStore";
import { useState } from "react";

export const AddToCart = ({
  productId,
  stockNumber,
}: {
  productId: string;
  stockNumber: number;
}) => {
  const { cart, updateCart } = useCartStore();
  const [quantity, setQuantity] = useState(1);

  const handleQuantity = (type: "i" | "d") => {
    if (type === "d" && quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
    if (type === "i" && quantity < stockNumber) {
      setQuantity((prev) => prev + 1);
    }
  };

  return (
    <div className="flex flex-col gap-4">
      <h4 className="text-sm font-semibold">Choisir la quantité</h4>
      <div className="flex justify-between">
        <div className="flex items-center gap-4">
          <div className="flex w-32 items-center justify-between rounded-3xl bg-gray-100 px-4 py-2">
            <button
              className="cursor-pointer text-xl disabled:cursor-not-allowed disabled:opacity-20"
              onClick={() => handleQuantity("d")}
              disabled={quantity === 1}
            >
              -
            </button>
            {quantity}
            <button
              className="cursor-pointer text-xl disabled:cursor-not-allowed disabled:opacity-20"
              onClick={() => handleQuantity("i")}
              disabled={quantity === stockNumber}
            >
              +
            </button>
          </div>
          {stockNumber < 1 ? (
            <div className="text-xs">
              {"Le produit n'est plus disponible en stock"}
            </div>
          ) : (
            <div className="text-xs">
              Il reste
              <span className="text-orange-500"> {stockNumber} élements </span>
              en stock
            </div>
          )}
        </div>
        <Button
          onClick={(e) => {
            e.preventDefault();

            if (cart.id === 0) {
              toast({
                title: "Ajout d'un produit au panier",
                description: "Vous devez être connecté pour ajouter un produit",
              });
            } else {
              let productsToSend: {
                id: number;
                quantity: number;
              }[] = [];
              let exist = false;

              cart.products.filter((p) => {
                if (p.id !== parseInt(productId)) {
                  productsToSend.push({
                    id: p.id,
                    quantity: p.quantity,
                  });
                } else {
                  exist = true;
                  productsToSend.push({
                    id: p.id,
                    quantity: p.quantity + quantity,
                  });
                }
              });

              if (!exist) {
                productsToSend.push({
                  id: parseInt(productId),
                  quantity: quantity,
                });
              }

              updateCart(String(cart.id), productsToSend);
            }
          }}
        >
          Ajouter au panier
        </Button>
      </div>
    </div>
  );
};
