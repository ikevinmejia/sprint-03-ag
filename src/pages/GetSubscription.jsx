import React, { useState } from "react";
import Button from "../components/Button";
import ExitInfo from "../components/ExitInfo";
import LogoAndTitle from "../components/LogoAndTitle";
import { useNavigate } from "react-router-dom";
import { Label, Radio } from "flowbite-react";

function GetSubscription() {
  const navigate = useNavigate();
  const [isChecked, setIsChecked] = useState(false);

  const handleOnClick = () => {
    setIsChecked(!isChecked);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();

    navigate("/home");
  };

  console.log(isChecked);

  return (
    <>
      <ExitInfo rute={-1} />
      <LogoAndTitle text={"Choose a subscription"} />
      <p className="max-w-md mx-auto mt-3 text-xs text-center text-white font-extralight">
        We believe that our application will help you achieve your goals
      </p>
      <form
        onSubmit={(e) => handleOnSubmit(e)}
        className="mx-auto mt-6 flex h-[40vh] w-11/12 max-w-md flex-col items-center justify-between"
      >
        <div className={"flex w-full max-w-sm flex-col gap-4"}>
          <label
            htmlFor="monttly"
            className={
              "mx-auto flex h-11 w-full items-center justify-between rounded-2xl border border-secondary px-3 text-white" +
              (isChecked ? " bg-primary" : "")
            }
          >
            <input
              type="checkbox"
              name=""
              id="monttly"
              className="hidden"
              checked={isChecked}
              onChange={handleOnClick}
            />
            <span>Monttly</span>
            <span>8.99 usd</span>
          </label>
          <label
            htmlFor="early"
            className={
              "mx-auto flex h-11 w-full items-center justify-between rounded-2xl border border-secondary px-3 text-white" +
              (isChecked ? " bg-primary" : "")
            }
          >
            <input
              type="checkbox"
              name=""
              id="early"
              className="hidden"
              checked={isChecked}
              onChange={handleOnClick}
            />
            <span>Early</span>
            <span>99.45 usd</span>
          </label>
        </div>

        <Button text={"Next"} />
      </form>
    </>
  );
}

export default GetSubscription;
