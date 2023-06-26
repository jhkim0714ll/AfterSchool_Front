import { useState } from "react";
import { useNavigate } from "react-router-dom";
import showToast from "../../lib/toast/toast";
import { isTokenAtom } from "../../recoil/tokenAtom";
import { useRecoilValue } from "recoil";
import { customAxios } from "../../lib/axios/customAxios";

const useMyInfo = () => {
  const [userInfo, setUserInfo] = useState({
    name: "",
    role: "",
    email: "",
    phone: "",
    school: "",
  });
  const [schoolInfo, setSchoolInfo] = useState([
    {
      schoolId: 0,
      name: "",
      address: "",
      homePage: "",
      phone: "",
    },
  ]);
  const [afterClassInfo, setAfterClassInfo] = useState([
    {
      applyId: "",
      student: {
        email: "",
        name: "",
        phone: "",
        grade: 0,
        room: 0,
        number: 0,
        role: "",
        schoolId: "",
        joinDate: "",
      },
      classroom: {
        classroomId: 0,
        teacherName: "",
        name: "",
        school: {
          schoolId: 0,
          name: "",
          address: "",
          homePage: "",
          phone: "",
        },
        startDate: "",
        endDate: "",
      },
    },
  ]);
  const navigate = useNavigate();
  const isToken = useRecoilValue(isTokenAtom);

  const getUserInfo = async () => {
    if (isToken) {
      const { data } = await customAxios.get("/users/my");
      if (data.status === 200) {
        setUserInfo(data.data);
        const schoolData = await customAxios.get("/schools/my");
        if (schoolData.data.status === 200) {
          setUserInfo((current) => {
            let newContent = { ...current };
            newContent["school"] = schoolData.data.data.name;
            return newContent;
          });
        }
      }
    } else {
      navigate("/login");
    }
  };

  const getSchoolInfo = async () => {
    if (isToken) {
      const { data } = await customAxios.get("/schools/all");
      setSchoolInfo(data.data);
    }
  };

  const sumitApplySchool = (event) => {
    event.preventDefault();
    showToast("학교 설정 성공", "SUCCESS");
  };

  const getAfterSchoolInfo = async () => {
    if (isToken) {
      const { data } = await customAxios.get("/apply/my");
      setAfterClassInfo(data.data);
    }
  };

  const sumitMyInfo = (event) => {
    event.preventDefault();
    navigate("/myInfo");
  };

  const sumitMyClass = (event) => {
    event.preventDefault();
    navigate("/myInfo/class");
  };

  const sumitMySchool = (event) => {
    event.preventDefault();
    navigate("/myInfo/school");
  };

  return {
    userInfo,
    schoolInfo,
    afterClassInfo,
    sumitApplySchool,
    sumitMyInfo,
    sumitMyClass,
    sumitMySchool,
    getUserInfo,
    getSchoolInfo,
    getAfterSchoolInfo,
  };
};

export default useMyInfo;
