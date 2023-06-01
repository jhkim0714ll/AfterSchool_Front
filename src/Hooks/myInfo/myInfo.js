import { useNavigate } from "react-router-dom";

const useMyInfo = () => {
  const navigate = useNavigate();

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
    sumitMyInfo,
    sumitMyClass,
    sumitMySchool,
  };
};

export default useMyInfo;
