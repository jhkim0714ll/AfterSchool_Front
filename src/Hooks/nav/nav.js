import { useRecoilValue } from "recoil";
import { isTokenAtom } from "../../recoil/tokenAtom";
import showToast from "../../lib/toast/toast";
import { useEffect, useState } from "react";
import { customAxios } from "../../lib/axios/customAxios";
import { useNavigate } from "react-router-dom";

const useNav = () => {
  const isToken = useRecoilValue(isTokenAtom);
  const [userInfo, setUserInfo] = useState({
    name: "",
    role: "",
    email: "",
    phone: "",
    schoolId: 0,
  });
  const navigate = useNavigate();

  const sumitUser = async () => {
    if (isToken) {
      try {
        const { data } = await customAxios.get("/users/my");
        setUserInfo(data.data);
      } catch (error) {
        const data = error.response;
        showToast(data.message, "ERROR");
      }
    }
  };

  const sumitLogout = () => {
    localStorage.removeItem("accessToken");
    navigate("/login");
  };

  useEffect(() => {
    sumitUser();
    // eslint-disable-next-line
  }, []);

  return { userInfo, isToken, sumitLogout };
};

export default useNav;
