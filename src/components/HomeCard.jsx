import React, { useContext } from "react";

function HomeCard({ img, title, time, description }) {
  return (
    <div className="mx-auto flex h-max max-h-56 min-h-[194px] w-11/12 max-w-xl flex-col overflow-hidden rounded-xl bg-secondary text-white shadow-md">
      <figure className="w-full h-32 ">
        <a href="#">
          <img className="object-cover w-full h-full" src={img} alt="" />
        </a>
      </figure>
      <div className="flex justify-between p-3">
        <div className="flex flex-col items-start justify-between w-2/3 gap-2">
          <h2 className="font-medium">{title}</h2>
          <p className="text-xs font-extralight">{description}</p>
        </div>
        <h3 className="font-extralight">{`${time} min`}</h3>
      </div>
    </div>
  );
}

export default HomeCard;
