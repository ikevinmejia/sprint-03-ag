import React, { useContext } from "react";
import HomeCard from "../components/HomeCard";
import HomeHeader from "../components/HomeHeader";
import Categories from "../components/Categories";
import SliderHome from "../components/SliderHome";
import HomeSwitch from "../components/HomeSwitch/HomeSwitch";
import { Context } from "../context/ContextProvider";
import FormAddWorkout from "../components/FormAddWorkout";
import Button from "../components/Button";
import { useSelector } from "react-redux";
import SideBar from "../components/SideBar";

function Home() {
  const { isSelected, handleModal, showModal, showSider, handleSider } =
    useContext(Context);
  const { dataForm } = useSelector((state) => state.myWorkouts);
  console.log(dataForm);

  return (
    <div className="relative">
      <div
        onClick={showSider ? handleSider : null}
        className={showSider ? "h-screen blur-md md:blur-none  " : "h-screen"}
      >
        <HomeHeader />
        <SliderHome />
        <HomeSwitch />
        <div className="flex flex-col w-full max-w-xl gap-4 mx-auto mt-11">
          {isSelected ? (
            <div className="text-center">
              {/* Falta configurar cada item en el HomeCard por props */}

              {dataForm &&
                dataForm.map((item, index) => (
                  <HomeCard
                    key={index}
                    img={item.file}
                    time={item.time}
                    description={item.description}
                    title={item.titleWorkout}
                  />
                ))}

              <Button
                text={"Create new workout"}
                type="button"
                event={handleModal}
              />
            </div>
          ) : (
            <>
              <Categories />
              <HomeCard />
            </>
          )}
        </div>
      </div>

      {showModal && <FormAddWorkout />}
      {showSider && <SideBar />}
    </div>
  );
}

export default Home;
