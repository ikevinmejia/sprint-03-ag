import React from "react";

const ImgDays = () => {
  return (
    <div>
      <div className="relative flex flex-col items-center justify-center w-full ">
        <img
          className="object-cover w-full max-w-3xl overflow-hidden h-80 md:h-80"
          src="https://res.cloudinary.com/dnont3pur/image/upload/v1659843511/Sprint-3/Esta_si_es_xkck0r.png"
          alt="img training"
        />
        <h1 className="absolute text-xl font-medium text-white bottom-5 md:text-2xl md:font-semibold">
          Split 3 days
        </h1>
      </div>
      <div className="flex items-center justify-center gap-5">
        <button className="h-10 w-3/12 max-w-[150px] rounded-3xl border text-white transition-colors duration-300  focus:border-2 focus:border-primary">
          Day 1
        </button>
        <button className="h-10 w-3/12 max-w-[150px] rounded-3xl border text-white transition-colors duration-300 focus:border-2 focus:border-primary">
          Day 2
        </button>
        <button className="h-10 w-3/12 max-w-[150px] rounded-3xl border text-white transition-colors duration-300 focus:border-2 focus:border-primary focus:bg-none">
          Day 3
        </button>
      </div>
    </div>
  );
};

export default ImgDays;
