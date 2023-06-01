import "./login.css";
import React from "react";
import EmailIcon from "../../assets/img/people_icon.svg";
import PasswordIcon from "../../assets/img/lock_icon.svg";
import NaverOauthIcon from "../../assets/img/oauth_naver_icon.png";
import KakaoOauthIcon from "../../assets/img/oauth_kakao_icon.svg";
import useLogin from "../../Hooks/auth/userLogin";
import MainLogo from "../../assets/img/main_logo.svg";

const Login = () => {
  const { onSubmit, onChange, loginData } = useLogin();

  return (
    <div id="loginBar-container">
      <div id="login-container">
        <div className="login-title">
          <img src={MainLogo} alt="logo" />
        </div>
        <div id="loginBar-inputWrap">
          <form id="login-form">
            <div id="login-loginContainer">
              <div className="login">
                <img src={EmailIcon} alt="email" />
                <input
                  type="text"
                  name="email"
                  className="login-mail-input"
                  placeholder="이메일"
                  onChange={onChange}
                  value={loginData?.email}
                  autoComplete="off"
                />
              </div>
              <div className="login">
                <img src={PasswordIcon} alt="password" />
                <input
                  type="password"
                  name="pw"
                  className="login-password-input"
                  placeholder="비밀번호"
                  onChange={onChange}
                  value={loginData?.pw}
                  autoComplete="off"
                />
              </div>
            </div>
            <div id="login-btn-container">
              <button id="login-btn" onClick={onSubmit}>
                로그인
              </button>
            </div>
          </form>
          <div id="login-oauth-container">
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
        <div id="login-other-container">
          <span className="help-button">
            <a href="/help/find-id">아이디 찾기</a>
          </span>
          <span className="help-button">
            <a href="/help/find-password">비밀번호 찾기</a>
          </span>
          <span className="register-button">
            <a href="/registerFirst">회원가입</a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Login;
