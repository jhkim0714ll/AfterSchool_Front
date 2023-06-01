import "./myInfo.css";
import { ChangeButtonStyled } from "../styled/buttonStyled";
import useMyInfo from "../../Hooks/myInfo/myInfo";

const MyInfo = () => {
  const { sumitMyInfo, sumitMyClass, sumitMySchool } = useMyInfo();
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
        <div id="myInfo-title-container">개인정보</div>
        <div id="myInfo-content-container">
          <div id="myInfo-content-title-container">프로필 정보</div>
          <div id="myInfo-content-line-container">
            <div id="myInfo-content-line" />
          </div>
          <div id="profile-content-container">
            <div className="profile-content">
              <div className="profile-content-title">이름</div>
              <div className="profile-content-content">
                <div>박소영</div>
              </div>
            </div>
            <div className="profile-content">
              <div className="profile-content-title">역할</div>
              <div className="profile-content-content">
                <div>선생님</div>
              </div>
            </div>
            <div className="profile-content">
              <div className="profile-content-title">Email</div>
              <div className="profile-content-content">
                <div>test@gmail.com</div>
              </div>
            </div>
            <div className="profile-content">
              <div className="profile-content-title">전화번호</div>
              <div className="changeable-content">
                <div className="profile-content-content">
                  <div>010-1234-1234</div>
                </div>
                <ChangeButtonStyled>변경</ChangeButtonStyled>
              </div>
            </div>
            <div className="profile-content">
              <div className="profile-content-title">학교</div>
              <div className="changeable-content">
                <div className="profile-content-content">
                  <div>대구소프트웨어마이스터고등학교</div>
                </div>
                <ChangeButtonStyled>변경</ChangeButtonStyled>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyInfo;
