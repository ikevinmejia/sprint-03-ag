import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Introduce from "../components/Introduce";
import Login from "../components/Login";
import Register from "../components/Register";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Introduce text={"felipe"} goTo="/home" />} />
        <Route path="/home" element={<Introduce text={"nuthelk"} goTo="/" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
