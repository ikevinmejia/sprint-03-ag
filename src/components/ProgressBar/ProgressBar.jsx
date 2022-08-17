import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import Button from "../Button";

const percentage = 50;

const ProgressBar = ({ show }) => {
  const onclick = () => {
    show();
  };

  return (
    <div className="bg-[rgba(54, 61, 107, 0.5)]  flex h-screen w-screen flex-col items-center justify-evenly backdrop-blur-md">
      <div className="flex h-80 w-80 max-w-[90%] items-center justify-center rounded-xl bg-secondary ">
        <div className="w-48 h-48 bg-secondary md:h-60 md:w-60">
          <CircularProgressbar
            value={percentage}
            text={`${percentage}%`}
            strokeWidth="6"
            background
            // backgroundPadding=""
            styles={buildStyles({
              pathColor: `rgba(43, 321, 232)`,
              textColor: "#fff",
              trailColor: "#2e3562",
              backgroundColor: "#2d8ea5",
            })}
          />
        </div>
      </div>
      <Button text={"Finish the exercise"} type={"button"} event={onclick} />
    </div>
  );
};

export default ProgressBar;
