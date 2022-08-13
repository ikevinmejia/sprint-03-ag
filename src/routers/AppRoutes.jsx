import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Introduce from "../components/Introduce";
import { ContextProvider } from "../context/ContextProvider";
import GetGenerUser from "../pages/GetGenerUser";
import GetInfoUser from "../pages/GetInfoUser";
import Inicio from "../pages/Inicio";
import Login from "../components/Login";
import Register from "../components/Register";
import PhoneAuthen from "../containers/PhoneAuthen";
import GetSubscription from "../pages/GetSubscription";
import Home from "../pages/Home";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { PrivateRouter } from "./PrivateRouter";
import { PublicRouter } from "./PublicRouter";
import VideoTraining from "../pages/VideoTraining";
import Videos from "../pages/Videos";
import Notifications from "../pages/Notifications";


function AppRoutes() {
  const [auth, setAuth] = useState(false);

  useEffect(() => {
    const auth2 = getAuth();
    onAuthStateChanged(auth2, (user) => {
      if (user?.uid) {
        // console.log(user);
        // Posibilidad de recuperar la info luego de que se recargue la web
        setAuth(true);
      } else {
        setAuth(false);
      }
    });
  }, [auth]);

  return (
    <BrowserRouter>
      <ContextProvider>
        <Routes>
          //Rutas publicas
          <Route
            path="/"
            element={
              <PublicRouter isAutentication={auth}>
                <Inicio />
              </PublicRouter>
            }
          />
          <Route
            path="/b2"
            element={
              <PublicRouter isAutentication={auth}>
                <Introduce
                  title={"Discipline"}
                  text={"Develop discipline in yourself train every day"}
                  textButton={"Next"}
                  imgMobile={"bg-b2"}
                  imgLarge={"md:bg-b2f"}
                  goTo="/b3"
                />{" "}
              </PublicRouter>
            }
          />
          <Route
            path="/b3"
            element={
              <PublicRouter isAutentication={auth}>
                <Introduce
                  title={"Character"}
                  text={"Cultivate in you an iron character for training"}
                  textButton={"Registration"}
                  imgMobile={"bg-b3"}
                  imgLarge={"md:bg-b3f"}
                  goTo="/login"
                />
              </PublicRouter>
            }
          />
          <Route
            path="/login"
            element={
              <PublicRouter isAutentication={auth}>
                <Login />
              </PublicRouter>
            }
          />
          <Route
            path="/register"
            element={
              <PublicRouter isAutentication={auth}>
                <Register />
              </PublicRouter>
            }
          />
          //Rutas privadas
          <Route path="/Authentification" element={<PhoneAuthen />} />
          <Route
            path="/getHeight"
            element={
              <PrivateRouter isAutentication={auth}>
                <GetInfoUser
                  dataInput={"height"}
                  title={"Enter your height"}
                  placeholder={"160"}
                  textLabel={"Cm"}
                  goTo="/getWeight"
                />
              </PrivateRouter>
            }
          />
          <Route
            path="/getWeight"
            element={
              <PrivateRouter isAutentication={auth}>
                <GetInfoUser
                  dataInput={"weight"}
                  title={"Enter your weight"}
                  placeholder={"73"}
                  textLabel={"Kg"}
                  goTo="/getAge"
                />
              </PrivateRouter>
            }
          />
          <Route
            path="/getAge"
            element={
              <PrivateRouter isAutentication={auth}>
                {" "}
                <GetInfoUser
                  dataInput={"age"}
                  title={"Enter your age"}
                  placeholder={"24"}
                  textLabel={""}
                  goTo="/getGener"
                />
              </PrivateRouter>
            }
          />
          <Route
            path="/getGener"
            element={
              <PrivateRouter isAutentication={auth}>
                <GetGenerUser title={"Choose gender"} goTo="/getGener" />
              </PrivateRouter>
            }
          />
          <Route
            path="/subscription"
            element={
              <PrivateRouter isAutentication={auth}>
                <GetSubscription />
              </PrivateRouter>
            }
          />
          <Route
            path="/home"
            element={
              <PrivateRouter isAutentication={auth}>
                <Home />
              </PrivateRouter>
            }
          />
          <Route path="/VideoTraining" element={<VideoTraining />} />
          <Route path="/videos" element={<Videos />} />
          <Route path="/Notifications" element={<Notifications />} />
        </Routes>
      </ContextProvider>
    </BrowserRouter>
  );
}

export default AppRoutes;
