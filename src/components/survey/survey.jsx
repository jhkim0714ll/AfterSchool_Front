import "./survey.css";
import { SelectButtonStyled } from "../styled/buttonStyled";
import useSurvey from "../../Hooks/survey/survey";

const Survey = () => {
  const { afterClassInfo } = useSurvey();
  return (
    <div id="survey-page-container">
      <div id="survey-field-container">
        <div id="after-class-list-container">
          {afterClassInfo?.map((classInfo) => {
            return (
              <div className="after-class-content-container">
                <div className="after-class-content">
                  {classInfo.classroom.name}
                  <SelectButtonStyled className="after-class-apply-btn">
                    설문하기
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

export default Survey;
