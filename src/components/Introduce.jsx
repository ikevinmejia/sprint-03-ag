import React from "react";
import LinkButton from "./LinkButton";


function Introduce({ text, goTo }) {


  return (
    <div className="flex flex-col items-center justify-end h-screen mx-auto bg-center bg-no-repeat bg-cover border w-ful bg-mainBgColor bg-b2 md:flex-row md:justify-start md:bg-b1">
      <div className="flex flex-col justify-around w-11/12 gap-3 text-center h-1/3 md:h-2/4 md:w-1/2 md:border md:border-white">
        <div>
          <h1 className="text-base font-semibold text-white">Workout</h1>
          <p className="text-sm font-light text-white">
            Lorem ipsum dolor sit amet.
          </p>
        </div>
        <div>
          <LinkButton text={text} goTo={goTo} />
        </div>
      </div>
    </div>
  );
}

export default Introduce;
