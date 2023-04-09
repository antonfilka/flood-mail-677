import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

export interface StoreInterface {
  isAuthorized: boolean;
  isAdmin: boolean;
  username: string;
  email: string;
  userSignIn: (payload: UserSignIn) => void;
  adminSignIn: (payload: UserSignIn) => void;
  logOut: () => void;
}

export const useStore = create<StoreInterface>()(
  persist(
    (set) => ({
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
    }),
    {
      name: "user-storage",
    }
  )
);

interface UserSignIn {
  username: string;
  email: string;
}
