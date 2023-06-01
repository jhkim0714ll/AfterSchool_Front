import React from "react";
import { NavLink } from "react-router-dom";
import "./nav.css";
import MainLogo from "../../assets/img/main_logo.svg";
import NoticeLogo from "../../assets/img/bell_icon.svg";

const Nav = () => {
  return (
    <nav>
      <div id="home-link">
        <NavLink to="/home">
          <img id="home-link-img" src={MainLogo} alt="logo" />
        </NavLink>
      </div>
      <div id="nav-container-container">
        <div id="user-link-container">
          <div className="user-info">게스트님 환영합니다</div>
          <div className="user-info">|</div>
          <div className="user-info">
            <a href="/myInfo">마이페이지</a>
          </div>
          <div className="user-info">|</div>
          <div className="user-info">
            <a href="/login">로그인</a>
          </div>
        </div>
        <div id="nav-container">
          <div id="nav-link-container">
            <div id="after-school-link" className="link">
              <NavLink className="link-title" to="/after-school">
                방과후
              </NavLink>
            </div>
            <div id="attendance-link" className="link">
              <NavLink className="link-title" to="/attendance">
                출석
              </NavLink>
            </div>
            <div id="survey-link" className="link">
              <NavLink className="link-title" to="/survey">
                설문
              </NavLink>
            </div>
            <div id="faq-link" className="link">
              <NavLink className="link-title" to="/faq">
                FAQ
              </NavLink>
            </div>
            <div id="notice-link" className="link">
              <NavLink className="link-title" to="/notice">
                <img src={NoticeLogo} alt="bell" />
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
