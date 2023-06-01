import "./registerSecond.css";
import MainLogo from "../../../assets/img/main_logo.svg";
import useRegister from "../../../Hooks/auth/userRegister";
import {
  DefaultButtonStyled,
  NextPageButtonStyled,
} from "../../styled/buttonStyled";
import { DefaultInputStyled } from "../../styled/inputStyled";

const RegisterSecond = () => {
  const { onChange, registerData, submitRegisterDataSecond, status } =
    useRegister();

  return (
    <div id="registerBar-container">
      <div id="register-container">
        <div className="register-title">
          <img src={MainLogo} alt="logo" />
        </div>
        <div id="registerBar-inputWrap">
          <div id="register-register-container">
            <div id="register-role-input">
              <DefaultButtonStyled
                className="register-role-button"
                name="role"
                value="STUDENT"
                onClick={onChange}
                status={status === "STUDENT"}
              >
                학생
              </DefaultButtonStyled>
              <DefaultButtonStyled
                className="register-role-button"
                name="role"
                value="LECTURER"
                onClick={onChange}
                status={status === "LECTURER"}
              >
                방과후 강사
              </DefaultButtonStyled>
              <DefaultButtonStyled
                className="register-role-button"
                name="role"
                value="TEACHER"
                onClick={onChange}
                status={status === "TEACHER"}
              >
                선생님
              </DefaultButtonStyled>
            </div>
            <div id="register-student-id-input">
              <DefaultInputStyled
                type="number"
                name="grade"
                className="register-grade-input"
                placeholder="학년"
                onChange={onChange}
                value={registerData.grade || ""}
                autoComplete="off"
              />
              <DefaultInputStyled
                type="number"
                name="room"
                className="register-room-input"
                placeholder="반"
                onChange={onChange}
                value={registerData.room || ""}
                autoComplete="off"
              />
              <DefaultInputStyled
                type="number"
                name="number"
                className="register-number-input"
                placeholder="번호"
                onChange={onChange}
                value={registerData.number || ""}
                autoComplete="off"
              />
            </div>
          </div>
          <div id="register-btn-container">
            <NextPageButtonStyled
              id="register-btn"
              onClick={submitRegisterDataSecond}
            >
              회원가입
            </NextPageButtonStyled>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterSecond;
