import { useRecoilState } from "recoil";
import { isTokenData } from "./tokenAtom";
import { customAxios } from "../lib/axios/customAxios";
import { useState } from "react";
import e from "express";

const userLogin = () => {
  const [isUser, setUser] = useRecoilState(isTokenData);
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const onChange = (event) => {
    const {
      target: { value, name },
    } = event;
    setLoginData({ ...loginData, [name]: value });
  };
};
