import React, { useContext } from "react";
import Categories from "../components/Categories";
import SliderHome from "../components/SliderHome";
import { Context } from "../context/ContextProvider";

function Home() {
  const { dataFormWHA, gener } = useContext(Context);

  const handleClick = () => {
    console.log(dataFormWHA);
    console.log(gener);
  };

  return (
    <>
      <button onClick={handleClick}>CLick</button>
      <SliderHome />
      <Categories />
      <div>slider</div>
      <div>cards</div>
    </>
  );
}

export default Home;
