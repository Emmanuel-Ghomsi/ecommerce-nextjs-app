import { fetchGetAuth, fetchLoginUser } from "@/actions/auth";
import { User } from "@/types/next";
import { create } from "zustand";

type AuthState = {
  auth: User;
  getAuth: (token: string) => Promise<any>;
  logOut: () => void;
  logIn: (username: string, password: string) => Promise<any>;
};

export const useAuthStore = create<AuthState>((set) => ({
  auth: {
    address: {},
    age: 0,
    bank: {},
    birthDate: "",
    bloodGroup: "",
    company: {},
    crypto: {},
    ein: "",
    email: "",
    eyeColor: "",
    firstName: "",
    gender: "",
    hair: {},
    height: 0,
    id: 0,
    image: "",
    ip: "",
    lastName: "",
    macAddress: "",
    maidenName: "",
    password: "",
    phone: "",
    role: "",
    ssn: "",
    university: "",
    userAgent: "",
    username: "",
    weight: 0,
  },
  getAuth: async (token) => {
    const auth = await fetchGetAuth(token);
    set({
      auth: auth,
    });
    return auth;
  },
  logOut: async () => {
    localStorage.removeItem("token");
    set({
      auth: {
        address: {},
        age: 0,
        bank: {},
        birthDate: "",
        bloodGroup: "",
        company: {},
        crypto: {},
        ein: "",
        email: "",
        eyeColor: "",
        firstName: "",
        gender: "",
        hair: {},
        height: 0,
        id: 0,
        image: "",
        ip: "",
        lastName: "",
        macAddress: "",
        maidenName: "",
        password: "",
        phone: "",
        role: "",
        ssn: "",
        university: "",
        userAgent: "",
        username: "",
        weight: 0,
      },
    });
  },
  logIn: async (username, password) => {
    const response = await fetchLoginUser(username, password);
    set({
      auth: response,
    });
    return response;
  },
}));
