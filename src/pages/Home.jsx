import React, { useContext, useEffect, useState } from "react";
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
import { db } from "../Firebase/firebaseConfig";
import { collection, getDocs } from "firebase/firestore";
import Modal from "../components/Modal/Modal";
import FilterHome from "../components/FilterHome";

function Home() {
  const {
    isSelected,
    handleModal,
    showModal,
    showSider,
    handleSider,
    handleFilter,
    showFilter,
    setPrueba,
    prueba,
    setMusculoEncontrado,
    musculoEncontrado,
  } = useContext(Context);
  const { dataForm } = useSelector((state) => state.myWorkouts);

  useEffect(() => {
    const calzon = async () => {
      const discoverWorkouts = await getDocs(
        collection(db, "discoverWorkouts")
      );

      discoverWorkouts.forEach((doc) => {
        if (prueba.length < 1) {
          setPrueba((prev) => [...prev, doc.data()]);
        }
      });
    };

    calzon();
  }, []);

  const event = (id) => {
    setMusculoEncontrado([prueba.find((muscles) => muscles.muscle == id)]);
    console.log(musculoEncontrado);
    handleFilter();
  };

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
              <div className="scrollbar-track-none scrollbar-thumb-none mb-5 flex h-[26rem] w-full flex-col gap-3  overflow-auto scrollbar">
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
              </div>

              <Button
                text={"Create new workout"}
                type="button"
                event={handleModal}
              />
            </div>
          ) : (
            <>
              <div className="flex items-center justify-center gap-2 mx-5 text-sm text-white ">
                {/* <Categories category={"All body"} idb={"allbody"} /> */}
                {prueba &&
                  prueba.map(({ muscle }, index) => (
                    <Categories
                      key={index}
                      category={muscle}
                      event={() => event(muscle)}
                      idb={muscle}
                    />
                  ))}
              </div>

              {prueba &&
                prueba.map(({ description, duration, img, title, muscle }) => (
                  <HomeCard
                    description={description}
                    img={img}
                    title={title}
                    time={duration}
                    key={muscle}
                    id={muscle}
                  />
                ))}
            </>
          )}
        </div>
      </div>

      {showModal && <FormAddWorkout />}
      {showSider && <SideBar />}
      {showFilter && (
        <Modal>
          <FilterHome />
        </Modal>
      )}
    </div>
  );
}

export default Home;
