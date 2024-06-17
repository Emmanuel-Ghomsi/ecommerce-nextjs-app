"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export const Menu = () => {
  const [open, setOpen] = useState(false);

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
        <div className="absolute left-0 top-20 z-10 flex h-[calc(100vh-80px)] w-full flex-col items-center justify-center gap-8 bg-black text-xl text-white">
          <Link href="">Pannier(1)</Link>
        </div>
      )}
    </div>
  );
};
