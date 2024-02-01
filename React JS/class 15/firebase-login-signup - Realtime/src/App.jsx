import React from "react";
import SignUp from "./components/SignUp";
import { Route, Routes } from "react-router-dom";
import SignIn from "./components/Login";
import Dashboard from "./components/Dashboard";

const App = () => {
  return (
    <>
      <Routes>
        <Route index element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </>
  );
};

export default App;
