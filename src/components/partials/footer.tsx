import Link from "next/link";
import { Button } from "../ui/button";
import {
  LinkedInLogoIcon,
  TwitterLogoIcon,
  GitHubLogoIcon,
} from "@radix-ui/react-icons";

export const Footer = async () => {
  return (
    <div className="py-24 px-4 md:px-8 lg:px-16 xl:32 2xl:px-64 bg-gray-100 text-sm mt-24">
      {/* HAUT */}
      <div className="flex flex-col md:flex-row justify-between gap-24">
        {/* LEFT */}
        <div className="w-full md:w-1/2 lg:w-1/4 flex flex-col gap-8">
          <Link href="/">
            <div className="text-2xl tracking-wide uppercase">
              Test dev frontend
            </div>
          </Link>
          <span>emmanuelghomsi21@gmail.com</span>
          <span>+237 696 030 852</span>
        </div>

        {/* RIGHT */}
        <div className="w-full md:w-1/2 lg:w-1/4 flex flex-col gap-8">
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
                <LinkedInLogoIcon className="h-5 w-5" />
              </Link>
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="text-blue-400 hover:text-blue-600"
            >
              <Link href="https://twitter.com/GhomsiEmmanuel" target="_blank">
                <TwitterLogoIcon className="h-5 w-5" />
              </Link>
            </Button>
            <Button variant="outline" size="icon" className="text-gray-700">
              <Link href="https://github.com/Emmanuel-Ghomsi" target="_blank">
                <GitHubLogoIcon className="h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* BAS */}
      <div className="flex items-center justify-center gap-8 mt-5">
        <div>© 2024</div>
      </div>
    </div>
  );
};
