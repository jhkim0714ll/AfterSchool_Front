import { useEffect, useState } from "react";
import { customAxios } from "../../lib/axios/customAxios";
import { useRecoilValue } from "recoil";
import { isTokenAtom } from "../../recoil/tokenAtom";
import showToast from "../../lib/toast/toast";

const useAfterSchool = () => {
  const isToken = useRecoilValue(isTokenAtom);
  const [userInfo, setUserInfo] = useState({
    name: "",
    role: "",
    email: "",
    phone: "",
    schoolId: 0,
  });
  const [afterSchoolInfo, setAfterSchoolInfo] = useState([
    {
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
      peopleLimit: 0,
      description: "",
      teacher: {
        email: "",
        name: "",
        phone: "",
        grade: 0,
        room: 0,
        number: 0,
        role: "",
        joinDate: "",
        joinMethod: "",
        schoolId: 0,
      },
    },
  ]);

  const sumitUser = async () => {
    if (isToken) {
      try {
        const { data } = await customAxios.get("/users/my");
        if (data.status === 200) {
          setUserInfo(data.data);
        }
      } catch (error) {
        const data = error.response;
        showToast(data.message, "ERROR");
      }
    }
  };

  const sumitAfterSchool = async () => {
    if (isToken) {
      try {
        const userData = await customAxios.get("/users/my");
        if (userData.data.status === 200) {
          setUserInfo(userData.data.data);

          const { data } = await customAxios.get(
            `/classrooms?school=${userData.data.data.schoolId}`
          );
          if (data.status === 200) {
            setAfterSchoolInfo(data.data);
          }
        }
      } catch (error) {
        const data = error.response;
        showToast(data.message, "ERROR");
      }
    }
  };

  const sumitApply = async (classroomId) => {
    if (isToken) {
      try {
        const { data } = await customAxios.post("/apply", {
          classroomId,
        });
        if (data.status === 201) {
          showToast("성공", "INFO");
        }
      } catch (error) {
        const data = error.response.data;
        showToast(data.message, "ERROR");
      }
    }
  };

  useEffect(() => {
    sumitUser();
    sumitAfterSchool();
    // eslint-disable-next-line
  }, []);

  return { userInfo, afterSchoolInfo, sumitApply };
};

export default useAfterSchool;
