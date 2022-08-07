import React, { useContext } from "react";
import HomeCard from "../components/HomeCard";
import HomeHeader from "../components/HomeHeader";
import Categories from "../components/Categories";
import SliderHome from "../components/SliderHome";
import HomeSwitch from "../components/HomeSwitch/HomeSwitch";
import { Context } from "../context/ContextProvider";
import FormAddWorkout from "../components/FormAddWorkout";
import Button from "../components/Button";

function Home() {
  const { isSelected, handleModal, showModal } = useContext(Context);

  return (
    <>
      <HomeHeader />
      <SliderHome />
      <HomeSwitch />
      <Categories />
      <div className="flex flex-col w-full max-w-xl gap-4 mx-auto mt-11">
        {isSelected ? (
          <div className="text-center">
            <Button
              text={"Create new workout"}
              type="button"
              event={handleModal}
            />
          </div>
        ) : (
          <HomeCard />
        )}
      </div>

      {showModal && <FormAddWorkout />}
    </>
  );
}

export default Home;
