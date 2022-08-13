import React from "react";

const Categories = ({ category, event, idb }) => {
  return (
    <>
      <button
        id={idb}
        onClick={event}
        className="w-1/5 max-w-[100px] rounded-2xl bg-[#2E3562] focus:bg-cyan-400"
      >
        {category}
      </button>
    </>
  );
};

export default Categories;
