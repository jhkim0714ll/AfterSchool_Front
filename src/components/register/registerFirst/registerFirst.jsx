import "./registerFirst.css";
import MainLogo from "../../../assets/img/main_logo.svg";
import EmailIcon from "../../../assets/img/people_icon.svg";
import PasswordIcon from "../../../assets/img/lock_icon.svg";
import NameIcon from "../../../assets/img/name_icon.svg";
import PhoneIcon from "../../../assets/img/call_icon.svg";
import useRegister from "../../../Hooks/auth/userRegister";
import EyeIcon from "../../../assets/img/eye.svg";
import EyeSlashIcon from "../../../assets/img/eye_slash.svg";

const RegisterFirst = () => {
  const {
    onChange,
    registerData,
    submitRegisterDataFirst,
    onChangeShowPw,
    showPw,
    onChangeShowReEnterPw,
    showReEnterPw,
  } = useRegister();
  return (
    <div id="registerBar-container">
      <div id="register-container">
        <div className="register-title">
          <img src={MainLogo} alt="logo" />
        </div>
        <div id="registerBar-inputWrap">
          <div id="register-register-container">
            <div className="email-input">
              <img src={EmailIcon} alt="email" />
              <input
                type="text"
                name="email"
                className="register-email-input"
                placeholder="이메일"
                onChange={onChange}
                value={registerData.email || ""}
                autoComplete="off"
              />
              <span></span>
            </div>
            <div className="password-input">
              <img src={PasswordIcon} alt="password" />
              <input
                type={showPw ? "text" : "password"}
                name="pw"
                className="register-pw-input"
                placeholder="비밀번호"
                onChange={onChange}
                value={registerData.pw || ""}
              />
              <span
                onMouseUp={onChangeShowPw}
                onMouseDown={onChangeShowPw}
                className="show-password"
              >
                <img
                  src={showPw ? EyeIcon : EyeSlashIcon}
                  alt="eye"
                  id="eyeIcon"
                />
              </span>
            </div>
            <div className="reEnter-password-input">
              <img src={PasswordIcon} alt="password" />
              <input
                type={showReEnterPw ? "text" : "password"}
                name="reEnterPw"
                className="register-reEnterPw-input"
                placeholder="비밀번호 재입력"
                onChange={onChange}
                value={registerData.reEnterPw || ""}
              />
              <span
                onMouseUp={onChangeShowReEnterPw}
                onMouseDown={onChangeShowReEnterPw}
                className="show-password"
              >
                <img
                  src={showReEnterPw ? EyeIcon : EyeSlashIcon}
                  alt="eye"
                  id="eyeIcon"
                />
              </span>
            </div>
            <div className="name-input">
              <img src={NameIcon} alt="name" />
              <input
                type="text"
                name="name"
                className="register-name-input"
                placeholder="이름"
                onChange={onChange}
                value={registerData.name || ""}
                autoComplete="off"
              />
            </div>
            <div className="phone-input">
              <img src={PhoneIcon} alt="phone" />
              <input
                type="tel"
                name="phone"
                className="register-phone-input"
                placeholder="전화번호"
                onChange={onChange}
                value={registerData.phone || ""}
                autoComplete="off"
              />
            </div>
          </div>
          <div id="register-btn-container">
            <button id="register-btn" onClick={submitRegisterDataFirst}>
              다음
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterFirst;
