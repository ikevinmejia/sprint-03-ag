import React, { useContext } from "react";
import { Context } from "../context/ContextProvider";
import { FaChevronLeft } from "react-icons/fa";
import HomeCard from "./HomeCard";

function FilterHome() {
  const { handleFilter, musculoEncontrado } = useContext(Context);

  return (
    <div className="flex flex-col items-center justify-start w-screen h-screen gap-3">
      <header className="mx-auto mt-4 flex w-full max-w-[896px] items-center justify-between px-3">
        <button onClick={handleFilter}>
          <FaChevronLeft color={"#2be7e8"} size="25" />
        </button>
        <h1 className="w-full text-2xl font-normal text-center text-white">
          Come back
        </h1>
      </header>
      <div className="">
        {musculoEncontrado &&
          musculoEncontrado.map(
            ({ description, duration, img, title, muscle }) => (
              <HomeCard
                description={description}
                img={img}
                title={title}
                time={duration}
                key={muscle}
                id={muscle}
              />
            )
          )}
      </div>
    </div>
  );
}

export default FilterHome;
