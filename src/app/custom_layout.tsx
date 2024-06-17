"use client";

import { fetchGetAuth } from "@/actions/auth";
import { Footer } from "@/components/partials/footer";
import { NavBar } from "@/components/partials/navigation/navbar";
import type { LayoutParams } from "@/types/next";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";

export default async function CustomLayout(props: LayoutParams<{}>) {

  return (
    <>
      <NavBar />
      {props.children}
      <Footer />
    </>
  );
}
