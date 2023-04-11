import React from "react";
import { Route, Routes } from "react-router-dom";

import Main from "../pages/main/main";
import AuthPage from "../pages/auth/authorization/AuthPage";
import RegPage from "../pages/auth/registration/RegPage";
import { AuthConsumer } from "../App";

const Navigation = () => {
  const { role } = AuthConsumer();

  return (
    <Routes>
      <Route path="/" element={<Main />} />
      {role === "unauth" && (
        <>
          <Route path="/authorization" element={<AuthPage />} />
          <Route path="/registration" element={<RegPage />} />
        </>
      )}
      <Route path="*" element={<Main />} />
    </Routes>
  );
};

export default Navigation;
