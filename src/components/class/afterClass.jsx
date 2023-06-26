import "./afterClass.css";
import useAfterSchool from "../../Hooks/afterSchool/afterSchool";
import searchIcon from "../../assets/img/search_icon.svg";
import { SelectButtonStyled } from "../styled/buttonStyled";

const AfterClass = () => {
  const { afterSchoolInfo, sumitApply } = useAfterSchool();
  return (
    <div id="after-school-page-container">
      <div id="after-school-field-container">
        <div id="after-school-search-container">
          <img src={searchIcon} alt="search" id="searchIcon" />
          <input
            type="text"
            id="searchInput"
            placeholder="방과후를 이름을 검색해주세요"
          />
        </div>
        <div id="after-school-list-container">
          <div id="after-school-title-container">
            <div className="after-school-title-title">방과후</div>
            <div className="after-school-title-description">설명</div>
            <div className="after-school-title">선생님</div>
            <div className="after-school-title">신청 시작일</div>
            <div className="after-school-title">신청 종료일</div>
            <div className="after-school-title">인원</div>
          </div>
          {afterSchoolInfo.map((afterSchool) => {
            return (
              <div>
                <hr />
                <div className="after-school-content-container">
                  <div className="after-school-content-title">
                    {afterSchool.name}
                  </div>
                  <div className="after-school-content-description">
                    {afterSchool.description}
                  </div>
                  <div className="after-school-content">
                    {afterSchool.teacherName}
                  </div>
                  <div className="after-school-content">
                    {afterSchool.startDate}
                  </div>
                  <div className="after-school-content">
                    {afterSchool.endDate}
                  </div>
                  <div className="after-school-content">
                    {afterSchool.peopleLimit}명
                  </div>
                  <SelectButtonStyled
                    className="after-school-apply"
                    onClick={() => sumitApply(afterSchool.classroomId)}
                  >
                    신청
                  </SelectButtonStyled>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default AfterClass;
