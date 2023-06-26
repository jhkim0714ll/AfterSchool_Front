import "../myInfo.css";
import useMyInfo from "../../../Hooks/myInfo/myInfo";
import { useEffect } from "react";

const MyClassroom = () => {
  const {
    afterClassInfo,
    getAfterSchoolInfo,
    sumitMyInfo,
    sumitMyClass,
    sumitMySchool,
  } = useMyInfo();

  useEffect(() => {
    getAfterSchoolInfo();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div id="myInfo-page-container">
      <div id="myInfo-field-container">
        <div id="field-title-container">마이 페이지</div>
        <div className="myInfo-field" onClick={sumitMyInfo}>
          개인정보
        </div>
        <div className="myInfo-field" onClick={sumitMyClass}>
          나의 방과후
        </div>
        <div className="myInfo-field" onClick={sumitMySchool}>
          학교 설정
        </div>
      </div>
      <div id="myInfo-container">
        <div id="myInfo-title-container">방과후 신청기록</div>
        <div id="myInfo-content-container">
          <div id="class-apply-record">
            <div id="classroom-year">2023년</div>
            <div id="classroom-info-container">
              {afterClassInfo.map((classroom) => {
                return (
                  <div className="classroom">{classroom.classroom.name}</div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyClassroom;
