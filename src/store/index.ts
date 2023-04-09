import { create } from "zustand";

export interface StoreInterface {
  isAuthorized: boolean;
  isAdmin: boolean;
  username: string;
  email: string;
  userSignIn: (payload: UserSignIn) => void;
  adminSignIn: (payload: UserSignIn) => void;
  logOut: () => void;
}

export const useStore = create<StoreInterface>()((set) => ({
  isAuthorized: false,
  isAdmin: false,
  username: "",
  email: "",
  userSignIn: (payload) =>
    set({
      isAuthorized: true,
      isAdmin: false,
      ...payload,
    }),
  adminSignIn: (payload) =>
    set({ isAuthorized: true, isAdmin: true, ...payload }),
  logOut: () =>
    set({ isAuthorized: false, isAdmin: false, username: "", email: "" }),
}));

interface UserSignIn {
  username: string;
  email: string;
}
