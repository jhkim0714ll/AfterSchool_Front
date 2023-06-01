import { atom } from "recoil";

export const userAtom = atom({
  key: "userAtom",
  default: {
    email: "",
    pw: "",
    name: "",
    phone: "",
    grade: 0,
    room: 0,
    number: 0,
    role: "",
    schoolId: 0,
  },
});
