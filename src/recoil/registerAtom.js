import { atom } from "recoil";

export const registerAtom = atom({
  key: "registerData",
  default: {
    email: "",
    pw: "",
    reEnterPw: "",
    name: "",
    phone: "",
    role: "",
    grade: null,
    room: null,
    number: null,
  },
});
