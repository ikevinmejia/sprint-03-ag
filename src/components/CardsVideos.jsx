import React from "react";
import { BiCheck } from "react-icons/bi";

const CardsVideos = () => {
  return (
    <div className="container m-0 mt-10">
      <div className="flex h-[500px] w-full flex-col items-center gap-3 overflow-y-scroll">
        <button className=" flex h-12 w-full max-w-lg items-center justify-between rounded-3xl border border-primary px-10 text-white focus:bg-primary">
          <div className="flex w-24 items-center justify-between text-lg">
            <h1 className="text-xl">1</h1>
            <p>Pull-ups</p>
          </div>
          <BiCheck size={40} />
        </button>

        <button className=" flex h-12 w-full max-w-lg items-center justify-between rounded-3xl border border-primary px-10 text-white focus:bg-primary">
          <div className="flex w-24 items-center justify-between text-lg">
            <h1 className="text-xl">1</h1>
            <p>Pull-ups</p>
          </div>
          <BiCheck size={40} />
        </button>

        <button className=" flex h-12 w-full max-w-lg items-center justify-between rounded-3xl border border-primary px-10 text-white focus:bg-primary">
          <div className="flex w-24 items-center justify-between text-lg">
            <h1 className="text-xl">1</h1>
            <p>Pull-ups</p>
          </div>
          <BiCheck size={40} />
        </button>

        <button className=" flex h-12 w-full max-w-lg items-center justify-between rounded-3xl border border-primary px-10 text-white focus:bg-primary">
          <div className="flex w-24 items-center justify-between text-lg">
            <h1 className="text-xl">1</h1>
            <p>Pull-ups</p>
          </div>
          <BiCheck size={40} />
        </button>
      </div>
      <div className="flex w-full justify-center">
        <h1 className="text-sm font-light text-white">Finish early</h1>
      </div>
    </div>
  );
};

export default CardsVideos;
