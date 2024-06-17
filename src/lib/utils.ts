import { User } from "@/types/next";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const ucfirst = (str: string) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

export const isEmptyAuthObject = (str: User) => {
  return str.id === 0;
};