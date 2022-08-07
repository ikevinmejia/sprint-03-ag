import React from "react";
import { Avatar } from "flowbite-react";
import { IoNotificationsOutline } from "react-icons/io5";

function HomeHeader({ imgProfile, displayName }) {
  return (
    <div className="flex items-center justify-between max-w-lg p-2 mx-auto ">
      <div className="flex gap-3">
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
