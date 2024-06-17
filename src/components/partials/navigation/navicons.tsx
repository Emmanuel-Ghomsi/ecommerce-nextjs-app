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
  }, [auth]);

  return (
    <div className="flex items-center gap-4 xl:gap-6 relative">
      {/* PROFIL */}
      <ProfileDropDownMenu>
        <Button
          variant="outline"
          size="icon"
          className="bg-transparent border-0 shadow-none"
        >
          <PersonIcon className="h-5 w-5" />
        </Button>
      </ProfileDropDownMenu>

      {/* PANIER */}
      <CartDropDownMenu>
        <div className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border-input hover:bg-accent hover:text-accent-foreground h-9 w-9 bg-transparent border-0 shadow-none cursor-pointer relative">
          <ShoppingCart size={22} />
          <div className="absolute -top-2 -right-2 w-6 h-6 bg-lama rounded-full text-white text-sm flex items-center justify-center">
            {counter}
          </div>
        </div>
      </CartDropDownMenu>
    </div>
  );
};
