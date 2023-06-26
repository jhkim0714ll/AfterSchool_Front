import React from "react";
import { Route, Routes } from "react-router-dom";
import Nav from "./components/nav/nav";
import Home from "./components/home/home";
import Login from "./components/login/login";
import RegisterFirst from "./components/register/registerFirst/registerFirst";
import RegisterSecond from "./components/register/registerSecond/registerSecond";
import MyInfo from "./components/myInfo/myInfo";
import MyClassroom from "./components/myInfo/myClassroom/myClassroom";
import MySchool from "./components/myInfo/mySchool/mySchool";
import AfterClass from "./components/class/afterClass";
import Survey from "./components/survey/survey";
import FAQ from "./components/faq/faq";
import Attendance from "./components/attendance/attendance";

// const Question = <div>Question</div>;

function Router() {
  const renderOfNav = (components) => {
    return (
      <div>
        <Nav />
        {components}
      </div>
    );
  };

  return (
    <div>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/registerFirst" element={<RegisterFirst />} />
        <Route path="/registerSecond" element={<RegisterSecond />} />
        {/* <Route path="/registerThird" element={<RegisterThird />} /> */}{" "}
        {/* //TODO :: 인증시스템 이후 */}
        <Route path="/home" element={renderOfNav(<Home />)} />
        <Route path="/myInfo" element={renderOfNav(<MyInfo />)} />
        <Route path="/myInfo/class" element={renderOfNav(<MyClassroom />)} />
        <Route path="/myInfo/school" element={renderOfNav(<MySchool />)} />
        <Route path="/after-school" element={renderOfNav(<AfterClass />)} />
        <Route path="/survey" element={renderOfNav(<Survey />)} />
        <Route path="/faq" element={renderOfNav(<FAQ />)} />
        <Route path="/attendance" element={renderOfNav(<Attendance />)} />
        {/* <Route path="/faq" element={renderOfNav(<Question />)} /> */}
      </Routes>
    </div>
  );
}

export default Router;
