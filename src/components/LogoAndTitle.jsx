import React from "react";
import logo from "../img/Logo.png";

function LogoAndTitle({ text }) {
  return (
    <figure className="flex flex-col items-center w-full max-w-xl mx-auto">
      <img src={logo} alt="logo" className="w-40 h-44" />
      <figcaption className="text-base font-medium text-white">
        {text}
      </figcaption>
    </figure>
  );
}

export default LogoAndTitle;
