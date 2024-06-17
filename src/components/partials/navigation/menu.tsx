"use client";

import { useAuthStore } from "@/hooks/useAuth";
import { useCartStore } from "@/hooks/useCardStore";
import { isEmptyAuthObject } from "@/lib/utils";
import { useMutation } from "@tanstack/react-query";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { CartDropDownMenuMobile } from "../cart/cart_dropdown_menu_mobile";

export const Menu = () => {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { counter, getCart, resetCart } = useCartStore();
  const { auth, logOut } = useAuthStore();

  useEffect(() => {
    if (!isEmptyAuthObject(auth)) {
      getCart(String(auth.id));
    }
  }, [auth, getCart]);

  const mutationLogOut = useMutation({
    mutationKey: ["logOut"],
    mutationFn: async () => logOut(),
    onSuccess: () => {
      resetCart();
      router.push("/auth");
    },
  });

  return (
    <div>
      <Image
        src="/menu.png"
        alt="menu-bar"
        width={28}
        height={28}
        className="cursor-pointer"
        onClick={() => setOpen((prev) => !prev)}
      />

      {open && (
        <div className="absolute left-0 top-20 z-10 flex h-[calc(100vh-80px)] w-full flex-col items-center justify-center gap-8 overflow-scroll bg-black text-xl text-white">
          {!isEmptyAuthObject(auth) ? (
            <p onClick={() => mutationLogOut.mutate()}>Se déconnecter</p>
          ) : (
            <Link href="/auth">Se connecter</Link>
          )}

          <div
            className="relative cursor-pointer"
            onClick={() => setIsCartOpen((prev) => !prev)}
          >
            <p>Pannier({counter})</p>
          </div>
          {isCartOpen && <CartDropDownMenuMobile />}
        </div>
      )}
    </div>
  );
};
