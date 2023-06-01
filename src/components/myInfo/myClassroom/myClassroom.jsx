import "../myInfo.css";
import useMyInfo from "../../../Hooks/myInfo/myInfo";

const MyClassroom = () => {
  const { sumitMyInfo } = useMyInfo();
  return (
    <div id="myInfo-page-container">
      <div id="myInfo-field-container">
        <div id="field-title-container">마이 페이지</div>
        <div className="myInfo-field" onClick={sumitMyInfo}>
          개인정보
        </div>
        <div className="myInfo-field">나의 방과후</div>
        <div className="myInfo-field">학교 설정</div>
      </div>
      <div id="myInfo-container">
        <div id="myInfo-title-container">방과후 신청기록</div>
      </div>
    </div>
  );
};

export default MyClassroom;
