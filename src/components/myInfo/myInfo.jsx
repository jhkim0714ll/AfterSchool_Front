import "./myInfo.css";
import { ChangeButtonStyled } from "../styled/buttonStyled";
import useMyInfo from "../../Hooks/myInfo/myInfo";
import { useEffect } from "react";

const MyInfo = () => {
  const { userInfo, getUserInfo, sumitMyInfo, sumitMyClass, sumitMySchool } =
    useMyInfo();

  useEffect(() => {
    getUserInfo();
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
                <div>{userInfo.name}</div>
              </div>
            </div>
            <div className="profile-content">
              <div className="profile-content-title">역할</div>
              <div className="profile-content-content">
                <div>
                  {userInfo.role === "STUDENT"
                    ? "학생"
                    : userInfo.role === "TEACHER"
                    ? "선생님"
                    : "관리자"}
                </div>
              </div>
            </div>
            <div className="profile-content">
              <div className="profile-content-title">Email</div>
              <div className="profile-content-content">
                <div>{userInfo.email}</div>
              </div>
            </div>
            <div className="profile-content">
              <div className="profile-content-title">전화번호</div>
              <div className="changeable-content">
                <div className="profile-content-content">
                  <div>{userInfo.phone}</div>
                </div>
                <ChangeButtonStyled>변경</ChangeButtonStyled>
              </div>
            </div>
            <div className="profile-content">
              <div className="profile-content-title">학교</div>
              <div className="changeable-content">
                <div className="profile-content-content">
                  <div>{userInfo.school}</div>
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
