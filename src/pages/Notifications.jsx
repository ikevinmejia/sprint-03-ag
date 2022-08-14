import React from "react";
import { BiBell } from "react-icons/bi";
import TitleAndBack from "../components/TitleAndBack";

const Notifications = () => {
  return (
    <div className="container m-0">
      <TitleAndBack title={"Notification"} />
      <div className="w-full gap-5 px-5 font-light text-white ">
        <div className="mx-auto mt-10 flex h-12 max-w-lg items-center rounded-2xl bg-secondary pl-2">
          <div className="w-1/3 md:ml-2">
            <BiBell size={30} style={{ color: "cyan" }} />
          </div>
          <div className="w-2/3 md:pl-3">
            <h1>Workouts added</h1>
          </div>
        </div>
        <div className="mx-auto mt-3 flex h-12 max-w-lg items-center justify-center rounded-2xl bg-secondary pl-5 md:pl-0">
          <h1>Workouts reminder</h1>
        </div>
        <div className="mx-auto mt-3 flex h-12 max-w-lg items-center justify-center rounded-2xl bg-secondary pl-5 md:pl-0">
          <h1>Workouts reminder</h1>
        </div>
      </div>
    </div>
  );
};

export default Notifications;
