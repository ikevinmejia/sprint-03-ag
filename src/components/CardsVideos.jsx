import React from "react";
import { BiCheck } from "react-icons/bi";

const CardsVideos = () => {
  return (
    <div className="container mx-auto mt-10 ">
      <div className="scrollbar-track-none scrollbar-thumb-none flex h-[500px] w-full flex-col items-center gap-3 overflow-y-scroll scrollbar">
        <button className="flex items-center justify-between w-full h-12 max-w-lg px-10 text-white border rounded-3xl border-primary focus:bg-primary">
          <div className="flex items-center justify-between w-24 text-lg">
            <h1 className="text-xl">1</h1>
            <p>Pull-ups</p>
          </div>
          <BiCheck size={40} />
        </button>

        <button className="flex items-center justify-between w-full h-12 max-w-lg px-10 text-white border rounded-3xl border-primary focus:bg-primary">
          <div className="flex items-center justify-between w-24 text-lg">
            <h1 className="text-xl">1</h1>
            <p>Pull-ups</p>
          </div>
          <BiCheck size={40} />
        </button>

        <button className="flex items-center justify-between w-full h-12 max-w-lg px-10 text-white border rounded-3xl border-primary focus:bg-primary">
          <div className="flex items-center justify-between w-24 text-lg">
            <h1 className="text-xl">1</h1>
            <p>Pull-ups</p>
          </div>
          <BiCheck size={40} />
        </button>

        <button className="flex items-center justify-between w-full h-12 max-w-lg px-10 text-white border rounded-3xl border-primary focus:bg-primary">
          <div className="flex items-center justify-between w-24 text-lg">
            <h1 className="text-xl">1</h1>
            <p>Pull-ups</p>
          </div>
          <BiCheck size={40} />
        </button>
      </div>
      <div className="flex justify-center w-full">
        <h1 className="text-sm font-light text-white">Finish early</h1>
      </div>
    </div>
  );
};

export default CardsVideos;
