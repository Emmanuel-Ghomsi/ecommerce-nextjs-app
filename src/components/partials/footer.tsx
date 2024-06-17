import Link from "next/link";
import { Button } from "../ui/button";
import {
  LinkedInLogoIcon,
  TwitterLogoIcon,
  GitHubLogoIcon,
} from "@radix-ui/react-icons";

export const Footer = async () => {
  return (
    // eslint-disable-next-line tailwindcss/no-custom-classname
    <div className="xl:32 mt-24 bg-gray-100 px-4 py-24 text-sm md:px-8 lg:px-16 2xl:px-64">
      {/* HAUT */}
      <div className="flex flex-col justify-between gap-24 md:flex-row">
        {/* LEFT */}
        <div className="flex w-full flex-col gap-8 md:w-1/2 lg:w-1/4">
          <Link href="/">
            <div className="text-2xl uppercase tracking-wide">
              Test dev frontend
            </div>
          </Link>
          <span>emmanuelghomsi21@gmail.com</span>
          <span>+237 696 030 852</span>
        </div>

        {/* RIGHT */}
        <div className="flex w-full flex-col gap-8 md:w-1/2 lg:w-1/4">
          <span className="font-semibold">Réseaux sociaux</span>
          <div className="flex gap-6">
            <Button
              variant="outline"
              size="icon"
              className="text-blue-700 hover:text-blue-900"
            >
              <Link
                href="https://www.linkedin.com/in/emmanuel-ghomsi-ghomsi-7b97671b4/"
                target="_blank"
              >
                <LinkedInLogoIcon className="size-5" />
              </Link>
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="text-blue-400 hover:text-blue-600"
            >
              <Link href="https://twitter.com/GhomsiEmmanuel" target="_blank">
                <TwitterLogoIcon className="size-5" />
              </Link>
            </Button>
            <Button variant="outline" size="icon" className="text-gray-700">
              <Link href="https://github.com/Emmanuel-Ghomsi" target="_blank">
                <GitHubLogoIcon className="size-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* BAS */}
      <div className="mt-5 flex items-center justify-center gap-8">
        <div>© 2024</div>
      </div>
    </div>
  );
};
