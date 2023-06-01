import React from "react";
import { Route, Routes } from "react-router-dom";
import Nav from "./components/nav/nav";
import Home from "./components/home/home";
import Login from "./components/login/login";
import RegisterFirst from "./components/register/registerFirst/registerFirst";
import RegisterSecond from "./components/register/registerSecond/registerSecond";
import MyInfo from "./components/myInfo/myInfo";
import MyClassroom from "./components/myInfo/myClassroom/myClassroom";

// const AfterClass = <div>class</div>;
// const Survey = <div>Survey</div>;
// const Attendance = <div>Attendance</div>;
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
        {/* <Route path="/class" element={renderOfNav(<AfterClass />)} /> */}
        {/* <Route path="/survey" element={renderOfNav(<Survey />)} /> */}
        {/* <Route path="/attendance" element={renderOfNav(<Attendance />)} /> */}
        {/* <Route path="/question" element={renderOfNav(<Question />)} /> */}
      </Routes>
    </div>
  );
}

export default Router;
