import React from "react";
import HomeCard from "../components/HomeCard";
import HomeHeader from "../components/HomeHeader";
import Categories from "../components/Categories";
import SliderHome from "../components/SliderHome";
import HomeSwitch from "../components/HomeSwitch/HomeSwitch";

function Home() {
  return (
    <>
      <HomeHeader />
      <SliderHome />
      <HomeSwitch />
      <Categories />
      <div className="flex flex-col w-full max-w-xl gap-4 mx-auto mt-11">
        <HomeCard />
        <HomeCard />
        <HomeCard />
        <HomeCard />
        <HomeCard />
        <HomeCard />
      </div>
    </>
  );
}

export default Home;
