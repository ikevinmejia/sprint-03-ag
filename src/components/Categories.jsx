import React from "react";

const Categories = () => {
  return (
    <>
      <div className="mx-5 mt-5 flex gap-2 text-sm text-white md:justify-center">
        <button className="w-1/5 max-w-[100px] rounded-2xl bg-[#2E3562] focus:bg-cyan-400">
          All body
        </button>
        <button className="w-1/5 max-w-[100px] rounded-2xl bg-[#2E3562] focus:bg-cyan-400">
          Triceps
        </button>
        <button className="w-1/5 max-w-[100px] rounded-2xl bg-[#2E3562] focus:bg-cyan-400">
          Biceps
        </button>
        <button className="w-1/5 max-w-[100px] rounded-2xl bg-[#2E3562] focus:bg-cyan-400">
          Breast
        </button>
        <button className="w-1/5 max-w-[100px] rounded-2xl bg-[#2E3562] focus:bg-cyan-400">
          Back
        </button>
        <button className="w-1/5 max-w-[100px] rounded-2xl bg-[#2E3562] focus:bg-cyan-400">
          Legs
        </button>
      </div>
    </>
  );
};

export default Categories;
