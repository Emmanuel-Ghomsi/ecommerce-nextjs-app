import Link from "next/link";
import {Menu} from "./menu";
import {NavIcons} from "./navicons";

export const NavBar = async () => {
  return (
    <div className="h-20 px-4 md:px-8 lg:px-16 xl:32 2xl:px-64">
      {/* MOBILE */}
      <div className="h-full flex items-center justify-between md:hidden">
        <Link href="/" className="text-2xl tracking-wide uppercase">
          Test Dev Frontend
        </Link>
        <Menu />
      </div>

      {/* LARGE ECRAN */}
      <div className="hidden md:flex items-center justify-between gap-8 h-full">
        {/* GAUCHE */}
        <div className="w-1/3 xl:w-1/2 flex items-center gap-12">
          <Link href="/" className="text-2xl tracking-wide uppercase">
            Test Dev Frontend
          </Link>
        </div>

        {/* DROITE */}
        <div className="w-2/3 xl:w-1/2 flex items-center justify-end gap-8">
          <NavIcons />
        </div>
      </div>
    </div>
  );
};
