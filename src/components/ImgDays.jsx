import React from "react";

const ImgDays = () => {
  return (
    <div>
      <div className="relative flex w-full flex-col items-center justify-center ">
        <img
          className="h-60 w-full max-w-3xl overflow-hidden md:h-80"
          src="https://res.cloudinary.com/dnont3pur/image/upload/v1659843511/Sprint-3/Esta_si_es_xkck0r.png"
          alt="img training"
        />
        <h1 className="absolute bottom-5 text-xl font-medium text-white md:text-2xl md:font-semibold">
          Split 3 days
        </h1>
      </div>
      <div className="flex items-center justify-center gap-5">
        <button className="h-10 w-3/12 max-w-[150px] rounded-3xl border text-white focus:border-2 focus:border-primary">
          Day 1
        </button>
        <button className="h-10 w-3/12 max-w-[150px] rounded-3xl border text-white focus:border-2 focus:border-primary">
          Day 2
        </button>
        <button className="h-10 w-3/12 max-w-[150px] rounded-3xl border text-white focus:border-2 focus:border-primary focus:bg-none">
          Day 3
        </button>
      </div>
    </div>
  );
};

export default ImgDays;
