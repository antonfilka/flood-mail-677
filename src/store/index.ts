import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

export interface StoreInterface {
  isAuthorized: boolean;
  isAdmin: boolean;
  username: string;
  email: string;
  access_token: string;
  refresh_token: string;
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
      access_token: "",
      refresh_token: "",
      userSignIn: (payload) =>
        set({
          isAuthorized: true,
          isAdmin: false,
          ...payload,
        }),
      adminSignIn: (payload) =>
        set({ isAuthorized: true, isAdmin: true, ...payload }),
      logOut: () =>
        set({
          isAuthorized: false,
          isAdmin: false,
          username: "",
          email: "",
          access_token: "",
          refresh_token: "",
        }),
    }),
    {
      name: "user-storage",
    }
  )
);

interface UserSignIn {
  email: string;
  access_token: string;
  refresh_token: string;
}
