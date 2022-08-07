import React from "react";
import HomeCard from "../components/HomeCard";
import HomeHeader from "../components/HomeHeader";

function Home() {
  return (
    <>
      <HomeHeader />
      <div>slider</div>
      <div className="flex flex-col w-full max-w-xl gap-4 mx-auto mt-11">
        <HomeCard />
      </div>
    </>
  );
}

export default Home;
