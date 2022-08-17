import React, { useContext } from "react";
import { Avatar } from "flowbite-react";
import { FiLogOut } from "react-icons/fi";
import { getAuth } from "firebase/auth";
import { useSelector } from "react-redux";
import { Context } from "../context/ContextProvider";

const SideBar = () => {
  const auth = getAuth();
  const { photoURL, displayName } = useSelector((state) => state.login);
  const { handleSider } = useContext(Context);

  return (
    <div className="absolute top-0 z-10 h-screen w-4/5 rounded-tr-[80px] rounded-br-[80px] bg-secondary px-5 text-white md:w-1/5">
      <div className="flex items-center justify-between pt-20">
        <div className="flex gap-3">
          <Avatar
            img={photoURL}
            rounded={true}
          />
          <h1 className="font-normal text-white">
            Hi!
            <br /> {displayName}
          </h1>
        </div>

        <div>
          <img src={require("../img/editar.png")} alt="" />
        </div>
      </div>

      <div className="flex items-center gap-4 mt-12">
        <div>
          <img src={require("../img/settings.png")} alt="" />
        </div>
        <p>Settings</p>
      </div>
      <div className="flex items-center gap-4 mt-8">
        <div>
          <img src={require("../img/Notification.png")} alt="" />
        </div>
        <p>Notification</p>
      </div>
      <div className="flex items-center gap-4 mt-8">
        <div>
          <img src={require("../img/activity.png")} alt="" />
        </div>
        <p>Activity</p>
      </div>
      <div className="flex items-center gap-4 mt-8">
        <div>
          <img src={require("../img/diamond.png")} alt="" />
        </div>
        <p>Subscription type</p>
      </div>
      <div className="flex items-center gap-4 mt-8">
        <div>
          <img src={require("../img/faq.png")} alt="" />
        </div>
        <p>FAQ</p>
      </div>
      <div className="flex items-center gap-4 mt-8">
        <button
          onClick={() => {
            auth.signOut();
            handleSider()
          }}
        >
          <FiLogOut color="#2BE7E8" size={"25"} />
        </button>
        <p>LogOut</p>
      </div>
    </div>
  );
};

export default SideBar;
