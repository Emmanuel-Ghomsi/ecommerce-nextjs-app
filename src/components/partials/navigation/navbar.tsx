import Link from "next/link";
import {Menu} from "./menu";
import {NavIcons} from "./navicons";

export const NavBar = async () => {
  return (
    // eslint-disable-next-line tailwindcss/no-custom-classname
    <div className="xl:32 h-20 px-4 md:px-8 lg:px-16 2xl:px-64">
      {/* MOBILE */}
      <div className="flex h-full items-center justify-between md:hidden">
        <Link href="/" className="text-2xl uppercase tracking-wide">
          Test Dev Frontend
        </Link>
        <Menu />
      </div>

      {/* LARGE ECRAN */}
      <div className="hidden h-full items-center justify-between gap-8 md:flex">
        {/* GAUCHE */}
        <div className="flex w-1/3 items-center gap-12 xl:w-1/2">
          <Link href="/" className="text-2xl uppercase tracking-wide">
            Test Dev Frontend
          </Link>
        </div>

        {/* DROITE */}
        <div className="flex w-2/3 items-center justify-end gap-8 xl:w-1/2">
          <NavIcons />
        </div>
      </div>
    </div>
  );
};
