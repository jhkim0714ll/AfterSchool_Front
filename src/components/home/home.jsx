import React from "react";
import "./home.css";
import { CardDivStyled, CardTitleDivStyled } from "../styled/divStyled";
import { ProfileImgStyled } from "../styled/imgStyled";
import useHome from "../../Hooks/home/home";
import check from "../../assets/img/check_icon.svg";
import breakfastIcon from "../../assets/img/breakfast_icon.svg";
import lunchIcon from "../../assets/img/lunch_icon.svg";
import dinnerIcon from "../../assets/img/dinner_icon.svg";
import schoolIcon from "../../assets/img/school_icon.svg";

function Home() {
  const { content, sumitSchool } = useHome();

  return (
    <div id="home-page-container">
      <div id="card-container">
        <div id="card-first-container">
          <CardDivStyled id="class-card-container">
            <CardTitleDivStyled className="card-title">
              신청한 방과후
            </CardTitleDivStyled>
            <div className="class-card-content">
              {content.afterClass.map((classroom) => {
                if (!classroom.classroom) {
                  return (
                    <div>
                      <a href="/login">로그인 이후에 사용 가능합니다</a>
                    </div>
                  );
                }
                return (
                  <div
                    className={classroom.classroom.applyId}
                    key={classroom.classroom.applyId}
                  >
                    <ProfileImgStyled src={check} width="80px" />
                    <div>{classroom.classroom.name}</div>
                  </div>
                );
              })}
            </div>
          </CardDivStyled>
          <CardDivStyled id="big-adv-card-container">
            <div className="bidAdv-card-content">
              <img src={content.bigAdv} alt="bigAdv" />
            </div>
          </CardDivStyled>
          <div id="link-card-container">
            <CardDivStyled id="attendance-card-container">
              <CardTitleDivStyled className="card-title">
                출석 체크
              </CardTitleDivStyled>
              <div className="attendance-card-content">
                {content.attendance === "로그인 이후에 사용 가능합니다" ? (
                  <a href="/login">{content.attendance}</a>
                ) : (
                  <a href="/attendance">출석 체크하러 가기 ▷</a>
                )}
              </div>
            </CardDivStyled>

            <CardDivStyled id="survey-card-cotainer">
              <CardTitleDivStyled className="card-title">
                설문 작성
              </CardTitleDivStyled>
              <div className="survey-card-content">
                {content.survey === "로그인 이후에 사용 가능합니다" ? (
                  <a href="/login">{content.survey}</a>
                ) : (
                  <a href="/survey">설문 작성하러 가기 ▷</a>
                )}
              </div>
            </CardDivStyled>
          </div>
        </div>
        <div id="card-second-container">
          <CardDivStyled id="smaill-adv-card-container">
            <div className="smallAdv-card-content">
              <img src={content.smallAdv} alt="smallAdv" />
            </div>
          </CardDivStyled>
          <CardDivStyled id="meal-card-container">
            <CardTitleDivStyled className="card-title">
              오늘의 급식
            </CardTitleDivStyled>
            <div className="meal-card-content">
              {content.meal.map((meal) => {
                const now = new Date();

                const year = now.getFullYear();
                const month = ("0" + (now.getMonth() + 1)).slice(-2);
                const day = ("0" + now.getDate()).slice(-2);

                const today = year + "-" + month + "-" + day;
                if (meal.date === undefined) {
                  return (
                    <div>
                      <a href="/login">로그인 이후에 사용 가능합니다</a>
                    </div>
                  );
                }
                if (meal.date === today)
                  return (
                    <div key={meal.date}>
                      <div className="meal-content">
                        <div className="meal-content-title">
                          <img src={breakfastIcon} alt="breakfast" />
                          <div>조식</div>
                        </div>
                        <div>{meal.breakfast}</div>
                      </div>
                      <div className="meal-content">
                        <div className="meal-content-title">
                          <img src={lunchIcon} alt="lunch" />
                          <div> 중식</div>
                        </div>
                        <div>{meal.lunch}</div>
                      </div>
                      <div className="meal-content">
                        <div className="meal-content-title">
                          <img src={dinnerIcon} alt="dinner" />
                          <div> 석식</div>
                        </div>
                        <div>{meal.dinner}</div>
                      </div>
                    </div>
                  );
              })}
            </div>
          </CardDivStyled>
          <CardDivStyled id="school-card-container">
            <div className="school-card-content" onClick={sumitSchool}>
              <img src={schoolIcon} alt="schoolIcon" />
            </div>
          </CardDivStyled>
        </div>
      </div>
    </div>
  );
}

export default Home;
