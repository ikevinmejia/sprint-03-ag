import React from "react";
import { useState } from "react";
import { BiChevronUp } from "react-icons/bi";

const DivDesp = ({ title, description }) => {
  const [activar, setActivar] = useState(false);
  return (
    <div className=" mx-auto mt-10 flex h-36 w-11/12 max-w-2xl flex-col gap-5 rounded-lg bg-secondary px-5 font-light text-white">
      <div className="flex items-center justify-between">
        <h1>{title}</h1>
        <button className="">
          <BiChevronUp size={40} color="cyan" style={{ rotate: "180deg" }} />
        </button>
      </div>
      <p className="text-[11px]">{description}</p>
    </div>
  );
};

export default DivDesp;
