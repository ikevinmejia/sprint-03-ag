import React from "react";
import Button from "../components/Button";
import ImgDays from "../components/ImgDays";

const ResumenVideoTraining = () => {
  return (
    <div className="container m-0">
      <ImgDays />
      <div className="mx-auto mt-10 flex w-11/12 max-w-2xl flex-col gap-5 rounded-xl bg-secondary py-2 text-white md:py-5">
        <div className="flex flex-col px-2 text-sm font-light md:gap-3 md:px-5 md:text-base md:font-normal">
          <div className="flex justify-between">
            <h1>Total time</h1>
            <p>54:12</p>
          </div>
          <div className="flex justify-between">
            <h1>Start time</h1>
            <p>12:23</p>
          </div>
          <div className="flex justify-between">
            <h1>End time</h1>
            <p>13:11</p>
          </div>
          <div className="flex justify-between">
            <h1>Calories burned</h1>
            <p>546</p>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center gap-5">
          <h1 className="font-normal">Appreciate your tiredness</h1>
          <img
            className="w-28"
            src="https://res.cloudinary.com/dnont3pur/image/upload/v1660426467/Sprint-3/tiredness_sjccwv.png"
            alt="stars"
          />
        </div>
      </div>
      <div className="mt-36 flex w-full justify-center lg:mt-6">
        <Button text={"Save"} />
      </div>
    </div>
  );
};

export default ResumenVideoTraining;
