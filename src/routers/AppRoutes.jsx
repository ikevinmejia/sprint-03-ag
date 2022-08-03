import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Introduce from "../components/Introduce";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Introduce text={"felipe"} goTo="/home" />} />
        <Route path="/home" element={<Introduce text={"nuthelk"} goTo="/" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
