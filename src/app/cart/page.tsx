"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useAuthStore } from "@/hooks/useAuth";
import { useCartStore } from "@/hooks/useCardStore";
import { isEmptyAuthObject } from "@/lib/utils";
import { useEffect, useState } from "react";

export default function CartPage() {
  const [show, setShow] = useState(true);
  const { carts, getCarts } = useCartStore();
  const { auth } = useAuthStore();

  useEffect(() => {
    if (!isEmptyAuthObject(auth)) {
      getCarts(String(auth.id));
      setShow(true);
    } else {
      setShow(false);
    }
  }, [auth, getCarts]);

  return (
    <div className="flex flex-col items-center gap-24 px-4 md:h-[calc(100vh-180px)] md:flex-row md:px-8 lg:px-16 xl:px-32 2xl:px-64">
      <div className="w-full md:w-1/2">
        <h1 className="mb-12 text-2xl">
          Liste des paniers de {auth.firstName + " " + auth.lastName}
        </h1>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">N°</TableHead>
              <TableHead>Montant total du panier</TableHead>
              <TableHead>Total de produit</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {show && carts.carts.length !== 0 ? (
              carts.carts.map((cart) => (
                <TableRow key={cart.id}>
                  <TableCell className="font-medium">{cart.id}</TableCell>
                  <TableCell>{cart.total}</TableCell>
                  <TableCell>{cart.totalProducts}</TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell className="text-center font-medium" colSpan={3}>
                  Aucun panier
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
