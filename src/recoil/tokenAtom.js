import { atom } from "recoil";

export const isTokenAtom = atom({
  key: "isTokenAtom",
  default: localStorage.getItem("accessToken") !== null,
});
