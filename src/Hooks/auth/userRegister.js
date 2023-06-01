import { noTokenCustomAxios } from "../../lib/axios/customAxios";
import { useState } from "react";
import config from "../../config/config.json";
import showToast from "../../lib/toast/toast";
import { useNavigate } from "react-router-dom";
import crypto from "crypto-js";
import {
  emailCheck,
  passwordCheck,
  phoneCheck,
  numberCheck,
} from "../../lib/check/patternCheck";
import { registerAtom } from "../../recoil/registerAtom";
import { useRecoilState } from "recoil";

const useRegister = () => {
  const navigate = useNavigate();
  const [registerData, setRegisterData] = useRecoilState(registerAtom);

  const [showPw, setShowPw] = useState(false);
  const [showReEnterPw, setShowReEnterPw] = useState(false);
  const [status, setStatus] = useState("STUDENT");

  const onChange = (event) => {
    const {
      target: { value, name },
    } = event;
    if (name === "role") {
      switch (value) {
        case "STUDENT":
          setStatus("STUDENT");
          break;
        case "LECTURER":
          setStatus("LECTURER");
          break;
        case "TEACHER":
          setStatus("TEACHER");
          break;
        default:
          break;
      }
    }
    setRegisterData({ ...registerData, [name]: value });
  };

  const sendRegisterData = async () => {
    const url = `${config.SERVER}/auth/register`;
    try {
      const data = await noTokenCustomAxios.post(url, {
        email: registerData.email,
        pw: crypto.SHA512(registerData.pw).toString(),
        name: registerData.name,
        phone: registerData.phone,
        grade: registerData.grade,
        room: registerData.room,
        number: registerData.number,
        role: registerData.role,
      });
      return data;
    } catch (error) {
      const data = error.response;
      return data;
    }
  };

  const phonePattern = (phone) => {
    if (phone.length === 11) {
      return phone.replace(/(\d{3})(\d{4})(\d{4})/, "$1-$2-$3");
    } else if (phone.length === 13) {
      return phone
        .replace(/-/g, "")
        .replace(/(\d{3})(\d{4})(\d{4})/, "$1-$2-$3");
    }
  };

  const onChangeShowPw = () => {
    setShowPw(!showPw);
  };

  const onChangeShowReEnterPw = () => {
    setShowReEnterPw(!showReEnterPw);
  };

  const submitRegisterDataFirst = async (event) => {
    event.preventDefault();
    if (registerData.pw !== registerData.reEnterPw) {
      showToast("비밀번호가 일치하지 않습니다", "INFO");
      return;
    }
    if (
      registerData.email === "" ||
      registerData.pw === "" ||
      registerData.name === "" ||
      registerData.phone === ""
    ) {
      showToast("양식이 비었습니다", "INFO");
      return;
    }
    if (!emailCheck(registerData.email)) {
      showToast("이메일 형식을 지켜주세요", "INFO");
      return;
    }
    if (!passwordCheck(registerData.pw)) {
      showToast(
        "비밀번호 형식은 영문, 숫자, 특수 기호를 조합하여 8자리 이상입니다",
        "INFO"
      );
      return;
    }
    const phone = phonePattern(registerData.phone);
    if (!phoneCheck(phone)) {
      showToast("전화번호 양식에 맞춰 입력해주세요", "INFO");
      return;
    }
    setRegisterData({
      email: registerData.email,
      pw: registerData.pw,
      name: registerData.name,
      phone: phone,
    });

    navigate("/registerSecond");
  };

  const submitRegisterDataSecond = async (event) => {
    event.preventDefault();
    if (
      registerData.role === "" ||
      registerData.grade === null ||
      registerData.room === null ||
      registerData.number === null
    ) {
      showToast("양식이 비었습니다", "INFO");
      return;
    }
    if (!numberCheck(registerData.grade)) {
      showToast("학년은 숫자로만 입력 가능합니다", "INFO");
      return;
    }
    if (!numberCheck(registerData.room)) {
      showToast("반은 숫자로만 입력 가능합니다", "INFO");
      return;
    }
    if (!numberCheck(registerData.number)) {
      showToast("번호는 숫자로만 입력 가능합니다", "INFO");
      return;
    }

    const registerPass = await sendRegisterData();
    if (!registerPass) {
      showToast("서버 에러", "ERROR");
      return;
    }
    const { data } = registerPass;
    if (data.status === 201) {
      showToast(data.message, "SUCCESS");
      navigate("/login");
      return;
    }
    showToast(data.message, "ERROR");
    setRegisterData({
      email: "",
      pw: "",
      reEnterPw: "",
      name: "",
      phone: "",
      role: "",
      grade: null,
      room: null,
      number: null,
    });
  };

  //TODO :: 인증 이후 코드
  const submitRegisterDataThird = async (event) => {
    event.preventDefault();
    const registerPass = await sendRegisterData();
    if (!registerPass) {
      showToast("서버 에러", "ERROR");
      return;
    }
    const { data } = registerPass;
    if (data.status === 201) {
      showToast(data.message, "SUCCESS");
      navigate("/login");
      return;
    }
    showToast(data.message, "ERROR");
    setRegisterData({
      email: "",
      pw: "",
      reEnterPw: "",
      name: "",
      phone: "",
      role: "",
      grade: null,
      room: null,
      number: null,
    });
  };

  return {
    submitRegisterDataFirst,
    submitRegisterDataSecond,
    submitRegisterDataThird,
    onChange,
    registerData,
    onChangeShowPw,
    showPw,
    onChangeShowReEnterPw,
    status,
    showReEnterPw,
  };
};

export default useRegister;
