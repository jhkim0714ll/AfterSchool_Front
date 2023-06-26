import { isTokenAtom } from "../../recoil/tokenAtom";
import { useRecoilValue } from "recoil";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import showToast from "../../lib/toast/toast";
import { customAxios } from "../../lib/axios/customAxios";
import { useEffect } from "react";

const useFaq = () => {
  const isToken = useRecoilValue(isTokenAtom);
  const navigate = useNavigate();

  const [userInfo, setUserInfo] = useState({
    name: "",
    role: "",
    email: "",
    phone: "",
    schoolId: 0,
  });

  const [posts, setPosts] = useState([
    {
      postId: 0,
      title: "",
      content: "",
      views: 0,
      type: "",
      createdDate: "",
    },
  ]);

  const sumitPosts = async () => {
    if (isToken) {
      try {
        const userData = await customAxios.get("/users/my");
        setUserInfo(userData.data.data);

        const { data } = await customAxios.get(
          `/posts/school/${userData.data.data.schoolId}`
        );
        setPosts(data.data);
      } catch (error) {
        const data = error.response.data;
        showToast(data.message, "ERROR");
      }
    }
  };

  useEffect(() => {
    sumitPosts();
    // eslint-disable-next-line
  }, []);

  return { userInfo, posts };
};

export default useFaq;
