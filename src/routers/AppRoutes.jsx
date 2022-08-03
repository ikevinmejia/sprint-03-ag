import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Introduce from "../components/Introduce";
import Inicio from "../pages/Inicio";

function AppRoutes() {
  return (
    <BrowserRouter>
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
              goTo="/b3"
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
