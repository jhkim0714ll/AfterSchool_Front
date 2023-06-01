import { useRecoilState } from "recoil";
import { isTokenAtom } from "../../recoil/tokenAtom";
import { noTokenCustomAxios } from "../../lib/axios/customAxios";
import { useState } from "react";
import config from "../../config/config.json";
import showToast from "../../lib/toast/toast";
import { useNavigate } from "react-router-dom";
import crypto from "crypto-js";
import { userAtom } from "../../recoil/userAtom";

const useLogin = () => {
  const navigate = useNavigate();
  const [isToken, setIsToken] = useRecoilState(isTokenAtom);
  const [user, setUser] = useRecoilState(userAtom);
  if (isToken) {
    navigate("/home");
  }
  const [loginData, setLoginData] = useState({
    email: "",
    pw: "",
  });

  const onChange = (event) => {
    const {
      target: { value, name },
    } = event;
    setLoginData({ ...loginData, [name]: value });
  };

  const sendLoginData = async () => {
    const url = `${config.SERVER}/auth`;
    try {
      const data = await noTokenCustomAxios.post(url, {
        email: loginData.email,
        pw: crypto.SHA512(loginData.pw).toString(),
      });
      return data;
    } catch (error) {
      const data = error.response;
      return data;
    }
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    if (loginData.email === "" || loginData.pw === "") {
      showToast("양식이 비었습니다", "INFO");
      return;
    }
    const LoginPass = await sendLoginData();
    if (!LoginPass) {
      showToast("서버 에러", "ERROR");
      return;
    }
    const { data } = LoginPass;
    if (data.status === 201) {
      showToast(data.message, "SUCCESS");
      if (data.data) {
        localStorage.setItem("accessToken", data.data.accessToken);
        setIsToken(true);
        setUser({
          email: data.data.user.email,
          name: data.data.user.name,
          grade: data.data.user.grade,
          room: data.data.user.room,
          number: data.data.user.number,
          role: data.data.user.role,
          schoolId: data.data.user.schoolId,
        });
        navigate("/home");
        return;
      }
    }
    showToast(data.message, "ERROR");
    setLoginData({ email: "", pw: "" });
  };

  return {
    onChange,
    onSubmit,
    loginData,
  };
};

export default useLogin;
