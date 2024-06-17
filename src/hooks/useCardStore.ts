import {
  fetchGetCart,
  fetchGetCartsByUser,
  fetchSaveCart,
  fetchUpdateCart,
} from "@/actions/cart";
import { Cart, Carts } from "@/types/next";
import { create } from "zustand";

type CartState = {
  cart: Cart;
  carts: Carts;
  counter: number;
  getCart: (userId: string) => void;
  resetCart: () => void;
  getCarts: (userId: string) => void;
  saveCart: (userId: string, products: Array<Object>) => void;
  updateCart: (userId: string, products: Array<Object>) => void;
};

export const useCartStore = create<CartState>((set) => ({
  cart: {
    id: 0,
    products: [
      {
        id: 0,
        title: "",
        price: 0,
        quantity: 0,
        total: 0,
        discountPercentage: 0,
        discountedTotal: 0,
        thumbnail: "",
      },
    ],
    total: 0,
    discountedTotal: 0,
    userId: 0,
    totalProducts: 0,
    totalQuantity: 0,
  },
  carts: {
    carts: [
      {
        id: 0,
        products: [
          {
            id: 0,
            title: "",
            price: 0,
            quantity: 0,
            total: 0,
            discountPercentage: 0,
            discountedTotal: 0,
            thumbnail: "",
          },
        ],
        total: 0,
        discountedTotal: 0,
        userId: 0,
        totalProducts: 0,
        totalQuantity: 0,
      },
    ],
    total: 0,
    skip: 0,
    limit: 0,
  },
  counter: 0,
  getCart: async (userId) => {
    const cart = await fetchGetCart(userId);
    set((prev) => ({
      ...prev,
      cart: cart,
      counter: cart?.products.length || 0,
    }));
  },
  resetCart: async () => {
    set((prev) => ({
      ...prev,
      cart: {
        id: 0,
        products: [
          {
            id: 0,
            title: "",
            price: 0,
            quantity: 0,
            total: 0,
            discountPercentage: 0,
            discountedTotal: 0,
            thumbnail: "",
          },
        ],
        total: 0,
        discountedTotal: 0,
        userId: 0,
        totalProducts: 0,
        totalQuantity: 0,
      },
      counter: 0,
    }));
  },
  getCarts: async (userId) => {
    console.log(userId);
    const carts = await fetchGetCartsByUser(userId);

    set((prev) => ({ ...prev, carts: carts }));
  },
  saveCart: async (userId, products) => {
    const response = await fetchSaveCart(userId, products);
    set((prev) => ({
      ...prev,
      cart: response,
      counter: response?.products.length,
    }));
  },
  updateCart: async (cartId, products) => {
    const response = await fetchUpdateCart(cartId, products);
    set((prev) => ({
      ...prev,
      cart: response,
      counter: response?.products.length,
    }));
  },
}));
