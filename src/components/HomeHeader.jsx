import React, { useContext } from "react";
import { Avatar } from "flowbite-react";
import { IoNotificationsOutline } from "react-icons/io5";
import { Context } from "../context/ContextProvider";
import SideBar from "./SideBar";

function HomeHeader({ imgProfile, displayName }) {

  const { handleSider, showSider } = useContext(Context);

  return (
    <div className="flex items-center justify-between max-w-lg p-2 mx-auto ">
      <div className="flex gap-3 transition-all duration-700 cursor-pointer " onClick={handleSider} >
        <Avatar
          img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
          rounded={true}
        />
        <h1 className="font-normal text-white">
          Hi!
          <br /> Nombre Apellido
        </h1>
      </div>
      <IoNotificationsOutline color="#2be7e8" size="25" />

    </div>
  );
}

export default HomeHeader;
