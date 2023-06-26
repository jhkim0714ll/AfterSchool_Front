import { useState } from "react";
import { useEffect } from "react";
import { useRecoilValue } from "recoil";
import { isTokenAtom } from "../../recoil/tokenAtom";
import { customAxios } from "../../lib/axios/customAxios";
import showToast from "../../lib/toast/toast";
import { useNavigate } from "react-router-dom";

const useSurvey = () => {
  const isToken = useRecoilValue(isTokenAtom);
  const navigate = useNavigate();

  const [userInfo, setUserInfo] = useState({
    name: "",
    role: "",
    email: "",
    phone: "",
    schoolId: 0,
  });

  const [applyClassroomInfo, setClassroomInfo] = useState([
    {
      applyId: 0,
      student: {
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
    },
  ]);

  const [afterClassInfo, setAfterClassInfo] = useState([
    {
      applyId: 0,

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
    },
  ]);

  const sumitUser = async () => {
    if (isToken) {
      try {
        const { data } = await customAxios.get("/users/my");
        setUserInfo(data.data);
      } catch (error) {
        const data = error.response.data;
        showToast(data.message, "ERROR");
      }
    }
  };

  const sumitAfterSchool = async () => {
    if (isToken) {
      try {
        const { data } = await customAxios.get("/apply/my");
        if (data.status === 200) {
          setAfterClassInfo(data.data);
        }
        if (data.data.length === 0) {
          sumitClassroom();
        }
      } catch (error) {
        const data = error.response.data;
        showToast(data.message, "ERROR");
      }
    }
  };

  const sumitClassroom = async () => {
    if (isToken) {
      try {
        const { data } = await customAxios.get("/classrooms/my");

        if (data.status === 200) {
          setClassroomInfo(data.data);
        }
      } catch (error) {
        const data = error.response.data;
        showToast(data.message, "ERROR");
      }
    }
  };

  const sumitAfterSchoolById = async (surveyId) => {
    navigate(`/survey/${surveyId}`);
  };

  useEffect(() => {
    sumitAfterSchool();
    sumitUser();
    // eslint-disable-next-line
  }, []);

  return { sumitAfterSchoolById, afterClassInfo, applyClassroomInfo, userInfo };
};

export default useSurvey;
