import React from "react";
import { BiCheck, BiChevronLeft } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";

const Videos = () => {
  const navigate = useNavigate();

  return (
    <div className="container m-0">
      <button
        onClick={() => {
          navigate("/VideoTraining");
        }}
        className="absolute top-0 left-0 z-10 text-primary opacity-70 xl:left-32 2xl:left-64"
      >
        <BiChevronLeft size={40} />
      </button>
      <div className="relative mx-auto flex max-w-5xl">
        <img
          src="https://res.cloudinary.com/dnont3pur/image/upload/v1659840629/Sprint-3/Img_hzjr9k.png"
          alt="video"
        />
        <div className="absolute bottom-0 mb-5 flex w-full justify-between px-5">
          <p className="text-sm font-light text-white sm:text-base sm:font-normal lg:text-lg lg:font-medium">
            3 set
          </p>
          <p className="text-sm font-light text-white sm:text-base sm:font-normal lg:text-lg lg:font-medium">
            12 repetitions
          </p>
        </div>
      </div>
      <div className="mt-10 flex h-96 w-full flex-col items-center gap-3 md:h-72 lg:h-60">
        <button className=" flex h-12 w-full max-w-lg items-center justify-between rounded-3xl border border-primary px-10 text-white focus:bg-primary">
          <h1>set 1</h1>
          <div className="flex w-24 flex-col items-center justify-center ">
            <p>12</p>
            <p className="text-xs font-light">repetitions</p>
          </div>
          <div className="flex w-24 flex-col items-center justify-center ">
            <p>15</p>
            <p className="text-xs font-light">kilograms</p>
          </div>
          <BiCheck size={40} />
        </button>

        <button className=" flex h-12 w-full max-w-lg items-center justify-between rounded-3xl border border-primary px-10 text-white focus:bg-primary">
          <h1>set 2</h1>
          <div className="flex w-24 flex-col items-center justify-center ">
            <p></p>
            <p className="text-xs font-light"></p>
          </div>
          <div className="flex w-24 flex-col items-center justify-center ">
            <p></p>
            <p className="text-xs font-light"></p>
          </div>
          <BiCheck size={40} />
        </button>

        <button className=" flex h-12 w-full max-w-lg items-center justify-between rounded-3xl border border-primary px-10 text-white focus:bg-primary">
          <h1>set 3</h1>
          <div className="flex w-24 flex-col items-center justify-center ">
            <p></p>
            <p className="text-xs font-light"></p>
          </div>
          <div className="flex w-24 flex-col items-center justify-center ">
            <p></p>
            <p className="text-xs font-light"></p>
          </div>
          <BiCheck size={40} />
        </button>
      </div>
      <div className="mt-36 flex w-full justify-center md:mt-0 lg:mb-10">
        <Button text={"Finish the exercise"} />
      </div>
    </div>
  );
};

export default Videos;
