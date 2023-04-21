import React from "react";
import { BrowserRouter, Navigate, Route } from "react-router-dom";

const Main = "main";
const Login = "login";
const Register = "Register";
const Class = null;
const Survey = null;
const Attendance = null;
const Question = null;

function Router() {
  <BrowserRouter>
    <Navigate />
    <Route path="/" Component={Main} /> {/* 메인 페이지 */}
    <Route path="/login" Component={Login} /> {/* 로그인 페이지 */}
    <Route path="/register" Component={Register} /> {/* 회원가입 페이지 */}
    <Route path="/myInfo" Component={Login} /> {/* 내 정보 페이지 */}
    <Route path="/class" Component={Class} /> {/* 방과후 조회 & 신청 페이지 */}
    <Route path="/survey" Component={Survey} /> {/* 설문 페이지 */}
    <Route path="/attendance" Component={Attendance} /> {/* 출석 체크 페이지 */}
    <Route path="/question" Component={Question} /> {/* Question 페이지 */}
  </BrowserRouter>;
}

export default Router;
