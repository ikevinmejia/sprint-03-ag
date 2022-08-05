import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Introduce from "../components/Introduce";
import { ContextProvider } from "../context/ContextProvider";
import GetGenerUser from "../pages/GetGenerUser";
import GetInfoUser from "../pages/GetInfoUser";
import Inicio from "../pages/Inicio";
import Login from "../components/Login";
import Register from "../components/Register";
import PhoneAuthen from "../containers/PhoneAuthen";

function AppRoutes() {
  return (
    <BrowserRouter>
      <ContextProvider>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route
            path="/b2"
            element={
              <Introduce
                title={"Discipline"}
                text={"Develop discipline in yourself train every day"}
                textButton={"Next"}
                imgMobile={"bg-b2"}
                imgLarge={"md:bg-b2f"}
                goTo="/b3"
              />
            }
          />
          <Route
            path="/b3"
            element={
              <Introduce
                title={"Character"}
                text={"Cultivate in you an iron character for training"}
                textButton={"Registration"}
                imgMobile={"bg-b3"}
                imgLarge={"md:bg-b3f"}
                goTo="/login"
              />
            }
          />

          <Route path="/login" element={<Login />} />
          <Route path="/Authentification" element={<PhoneAuthen />} />
          <Route path="/register" element={<Register />} />

          <Route
            path="/getHeight"
            element={
              <GetInfoUser
                dataInput={"height"}
                title={"Enter your height"}
                placeholder={"160"}
                textLabel={"Cm"}
                goTo="/getWeight"
              />
            }
          />
          <Route
            path="/getWeight"
            element={
              <GetInfoUser
                dataInput={"weight"}
                title={"Enter your weight"}
                placeholder={"73"}
                textLabel={"Kg"}
                goTo="/getAge"
              />
            }
          />
          <Route
            path="/getAge"
            element={
              <GetInfoUser
                dataInput={"age"}
                title={"Enter your age"}
                placeholder={"24"}
                textLabel={""}
                goTo="/getGener"
              />
            }
          />
          <Route
            path="/getGener"
            element={<GetGenerUser title={"Choose gender"} goTo="/getGener" />}
          />
        </Routes>
      </ContextProvider>
        
    </BrowserRouter>
  );
}

export default AppRoutes;
