import React from "react";
import { BiChevronLeft } from "react-icons/bi";

const TitleAndBack = ({ title }) => {
  return (
    <div className="flex h-10 items-center pl-2 pt-2">
      <div className="w-1/3 lg:w-[15%]">
        <BiChevronLeft size={40} style={{ color: "cyan" }} />
      </div>
      <div className="w-2/3 text-lg font-light text-white md:ml-20 lg:ml-0 lg:text-center">
        <h1>{title}</h1>
      </div>
    </div>
  );
};

export default TitleAndBack;
