"use client";

import { PersonIcon } from "@radix-ui/react-icons";
import { ProfileDropDownMenu } from "./profile_dropdown_menu";
import { ShoppingCart } from "lucide-react";
import { CartDropDownMenu } from "../cart/cart_dropdown_menu";
import { Button } from "@/components/ui/button";
import { useCartStore } from "@/hooks/useCardStore";
import { useEffect } from "react";
import { isEmptyAuthObject } from "@/lib/utils";
import { useAuthStore } from "@/hooks/useAuth";

export const NavIcons = () => {
  const { counter, getCart } = useCartStore();
  const { auth } = useAuthStore();

  useEffect(() => {
    if (!isEmptyAuthObject(auth)) {
      getCart(String(auth.id));
    }
  }, [auth, getCart]);

  return (
    <div className="relative flex items-center gap-4 xl:gap-6">
      {/* PROFIL */}
      <ProfileDropDownMenu>
        <Button
          variant="outline"
          size="icon"
          className="border-0 bg-transparent shadow-none"
        >
          <PersonIcon className="size-5" />
        </Button>
      </ProfileDropDownMenu>

      {/* PANIER */}
      <CartDropDownMenu>
        <div className="relative inline-flex size-9 cursor-pointer items-center justify-center whitespace-nowrap rounded-md border-0 border-input bg-transparent text-sm font-medium shadow-none transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50">
          <ShoppingCart size={22} />
          <div className="absolute -right-2 -top-2 flex size-6 items-center justify-center rounded-full bg-lama text-sm text-white">
            {counter}
          </div>
        </div>
      </CartDropDownMenu>
    </div>
  );
};
