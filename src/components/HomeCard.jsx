import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";

function HomeCard({ img, title, time, description }) {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate("/videoTraining")}
      className="mx-auto flex h-max max-h-56 min-h-[194px] w-11/12 max-w-xl flex-col overflow-hidden rounded-xl bg-secondary text-white shadow-md"
    >
      <figure className="h-32 w-full ">
        <a href="#">
          <img className="h-full w-full object-cover" src={img} alt="" />
        </a>
      </figure>
      <div className="flex justify-between p-3">
        <div className="flex w-2/3 flex-col items-start justify-between gap-2">
          <h2 className="font-medium">{title}</h2>
          <p className="text-xs font-extralight">{description}</p>
        </div>
        <h3 className="font-extralight">{`${time} min`}</h3>
      </div>
    </div>
  );
}

export default HomeCard;
