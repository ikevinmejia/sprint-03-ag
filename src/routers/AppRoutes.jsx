import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Introduce from "../components/Introduce";
import Login from "../components/Login";
<<<<<<< HEAD
import Register from "../components/Register";
=======
import PhoneAuthen from "../containers/PhoneAuthen";
>>>>>>> 8923829d3ca13a1c0c3642bd2e289108c38580e0

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Introduce text={"felipe"} goTo="/home" />} />
        <Route path="/home" element={<Introduce text={"nuthelk"} goTo="/" />} />
<<<<<<< HEAD
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
=======
        <Route path="/login" element={<Login/>} />
        <Route path="/Authentification" element={<PhoneAuthen />} />
>>>>>>> 8923829d3ca13a1c0c3642bd2e289108c38580e0
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
