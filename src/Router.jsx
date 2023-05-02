import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./components/login/login";

const Main = "main";
const Register = "Register";
const MyInfo = null;
const Class = null;
const Survey = null;
const Attendance = null;
const Question = null;

function Router() {
  return (
    <Routes>
      <Route path="/" Component={Main} /> {/* 메인 */}
      <Route path="/login" Component={Login} /> {/* 로그인 */}
      <Route path="/register" Component={Register} /> {/* 회원가입 */}
      <Route path="/myInfo" Component={MyInfo} /> {/* 내 정보 */}
      <Route path="/class" Component={Class} /> {/* 방과후 조회 & 신청 */}
      <Route path="/survey" Component={Survey} /> {/* 설문 */}
      <Route path="/attendance" Component={Attendance} /> {/* 출석 체크 */}
      <Route path="/question" Component={Question} /> {/* Question */}
    </Routes>
  );
}

export default Router;
