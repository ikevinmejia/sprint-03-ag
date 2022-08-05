import React from "react";
import { Link } from "react-router-dom";
import { FaChevronLeft } from "react-icons/fa";

function ExitInfo({ text, rute }) {
  return (
    <header className="mx-auto mt-4 flex w-full max-w-[896px] items-center justify-between px-3">
      <Link to={rute}>
        <FaChevronLeft color={"#2be7e8"} size="25" className="rounded-lg" />
      </Link>
      <h1 className="w-full text-2xl font-normal text-center text-textPrimary">
        {text}
      </h1>
    </header>
  );
}

export default ExitInfo;
