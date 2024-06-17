"use client";

import { useAuthStore } from "@/hooks/useAuth";
import { isEmptyAuthObject } from "@/lib/utils";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { PropsWithChildren, useEffect } from "react";

const queryClient = new QueryClient({
  defaultOptions: {
    mutations: {
      onError(error) {
        console.error("Global mutation error: ", error);
      },
    },
  },
});

export type ProvidersProps = PropsWithChildren;

export const Providers = (props: ProvidersProps) => {
  const { auth, getAuth, logOut } = useAuthStore();
  const token =
    typeof window !== "undefined" ? localStorage.getItem("token") : null;

  useEffect(() => {
    if (isEmptyAuthObject(auth)) {
      if (token) {
        const response = getAuth(token);
        response.then((data) => {
          if (!data.id) logOut();
        });
      }
    }
  }, [auth, getAuth, logOut, token]);

  return (
    <>
      <QueryClientProvider client={queryClient}>
        {props.children}
      </QueryClientProvider>
    </>
  );
};
