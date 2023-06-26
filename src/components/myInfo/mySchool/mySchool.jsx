import "../myInfo.css";
import useMyInfo from "../../../Hooks/myInfo/myInfo";
import searchIcon from "../../../assets/img/search_icon.svg";
import { CardDivStyled } from "../../styled/divStyled";
import { SelectButtonStyled } from "../../styled/buttonStyled";
import { useEffect } from "react";

const MySchool = () => {
  const {
    schoolInfo,
    sumitMyInfo,
    sumitMyClass,
    sumitMySchool,
    sumitApplySchool,
    getSchoolInfo,
  } = useMyInfo();

  useEffect(() => {
    getSchoolInfo();
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
        <div id="myInfo-title-container">학교 설정</div>
        <div id="myInfo-content-container">
          <div id="school-content-container">
            <div id="school-search-container">
              <input
                type="text"
                placeholder="학교 이름을 입력해주세요"
                id="school-search"
              />
              <img src={searchIcon} alt="search" />
            </div>
            <div id="school-list-container-container">
              <div id="school-list-container">
                {schoolInfo.map((school) => {
                  return (
                    <CardDivStyled className="school">
                      <div className="school-title">{school.name}</div>
                      <SelectButtonStyled
                        className="school-apply-button"
                        onClick={sumitApplySchool}
                      >
                        설정
                      </SelectButtonStyled>
                    </CardDivStyled>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MySchool;
