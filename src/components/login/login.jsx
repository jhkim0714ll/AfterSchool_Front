import "./login.css";
import React from "react";
import EmailIcon from "../../assets/img/people_icon.svg";
import PasswordIcon from "../../assets/img/lock_icon.svg";
import NaverOauthIcon from "../../assets/img/oauth_naver_icon.png";
import KakaoOauthIcon from "../../assets/img/oauth_kakao_icon.svg";

function Login() {
  return (
    <div id="loginBar-container">
      <div id="login-container">
        <div className="login-title">
          After School {/* 이미지로 바꿀 예정 */}
        </div>
        <div id="loginBar-inputWrap">
          <form id="login-form" onSubmit={null}>
            <div id="login-loginContainer">
              <div className="login">
                <img src={EmailIcon} alt="email" />
                <input
                  type="text"
                  name="email"
                  className="login-mail-input"
                  placeholder="이메일"
                />
              </div>
              <div className="login">
                <img src={PasswordIcon} alt="password" />
                <input
                  type="password"
                  name="password"
                  className="login-password-input"
                  placeholder="비밀번호"
                />
              </div>
            </div>
            <div id="login-btn-container">
              <button id="login-btn">로그인</button>
            </div>
          </form>
          <div id="login-oauthContainer">
            <img
              src={KakaoOauthIcon}
              alt="naverOauth"
              width="40px"
              height="40px"
            />
            <img
              src={NaverOauthIcon}
              alt="naverOauth"
              width="40px"
              height="40px"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
