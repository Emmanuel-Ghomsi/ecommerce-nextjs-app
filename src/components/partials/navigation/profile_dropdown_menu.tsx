import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useMutation } from "@tanstack/react-query";
import { LogIn, LogOut } from "lucide-react";
import Link from "next/link";
import { PropsWithChildren } from "react";
import { useRouter } from "next/navigation";
import { useAuthStore } from "@/hooks/useAuth";
import { isEmptyAuthObject } from "@/lib/utils";
import { useCartStore } from "@/hooks/useCardStore";

export type ProfileDropDownMenuProps = PropsWithChildren;

export const ProfileDropDownMenu = (props: ProfileDropDownMenuProps) => {
  const router = useRouter();
  const { auth, logOut } = useAuthStore();
  const { resetCart } = useCartStore();

  const mutationLogOut = useMutation({
    mutationKey: ["logOut"],
    mutationFn: async () => logOut(),
    onSuccess: () => {
      resetCart();
      router.push("/auth");
    },
  });

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>{props.children}</DropdownMenuTrigger>
      {!isEmptyAuthObject(auth) ? (
        <DropdownMenuContent>
          <DropdownMenuItem
            className="text-red-500"
            onClick={() => mutationLogOut.mutate()}
          >
            <LogOut size={16} className="mr-2" /> Se déconnecter
          </DropdownMenuItem>
        </DropdownMenuContent>
      ) : (
        <DropdownMenuContent>
          <Link href="/auth">
            <DropdownMenuItem>
              <LogIn size={16} className="mr-2" />
              Se connecter
            </DropdownMenuItem>
          </Link>
        </DropdownMenuContent>
      )}
    </DropdownMenu>
  );
};
