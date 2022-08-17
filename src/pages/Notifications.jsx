import React from "react";
import { BiBell } from "react-icons/bi";
import ExitInfo from "../components/ExitInfo";
import TitleAndBack from "../components/TitleAndBack";

const Notifications = () => {
  return (
    <div className="container mx-auto">
      {/* <TitleAndBack title={"Notification"} /> */}
      <ExitInfo rute={-1} text={"Notification"} estilos={"text-white"} />
      <div className="w-full gap-5 px-5 font-light text-white ">
        <div className="flex items-center h-12 max-w-lg pl-2 mx-auto mt-10 rounded-2xl bg-secondary">
          <div className="w-1/4 ml-2 md:w-1/3">
            <BiBell size={30} style={{ color: "cyan" }} />
          </div>
          <div className="w-2/4 text-center md:w-1/4">
            <h1>Workouts added</h1>
          </div>
        </div>
        <div className="flex items-center justify-center h-12 max-w-lg pl-5 mx-auto mt-3 rounded-2xl bg-secondary md:pl-0">
          <h1>Workouts reminder</h1>
        </div>
        <div className="flex items-center justify-center h-12 max-w-lg pl-5 mx-auto mt-3 rounded-2xl bg-secondary md:pl-0">
          <h1>Workouts reminder</h1>
        </div>
      </div>
    </div>
  );
};

export default Notifications;
