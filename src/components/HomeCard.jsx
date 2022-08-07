import React, { useContext } from "react";

function HomeCard({ img, title, time, description }) {
  return (
    <div className="mx-auto flex h-max max-h-56 min-h-[194px] w-11/12 max-w-xl flex-col overflow-hidden rounded-xl bg-secondary text-white shadow-md">
      <figure className="w-full h-32 ">
        <a href="#">
          <img
            className="object-cover w-full h-full"
            src="https://media-cdn.tripadvisor.com/media/photo-s/15/a4/9b/77/legacy-hotel-at-img-academy.jpg"
            alt=""
          />
        </a>
      </figure>
      <div className="flex justify-between p-3">
        <div className="flex flex-col items-start justify-between w-2/3 gap-2">
          <h2 className="font-medium">Split 3 days</h2>
          <p className="text-xs font-extralight">
            the workout is divided into 3 days, day 1 biceps back day 2 triceps
            chest day 3 shoulders legs
          </p>
        </div>
        <h3 className="font-extralight">45 min</h3>
      </div>
    </div>
  );
}

export default HomeCard;
