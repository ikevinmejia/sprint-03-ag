import React, { useContext } from "react";
import { Context } from "../../context/ContextProvider";
import "./homeSwitch.css";

function HomeSwitch() {
  const { setIsSelected, isSelected } = useContext(Context);

  const handleOnChange = () => {
    setIsSelected(!isSelected);
  };

  return (
    <div className="flex justify-center w-full mt-3">
      <label className="switch">
        <input type="checkbox" onChange={handleOnChange} />
        <span className="slider"></span>
      </label>
    </div>
  );
}

export default HomeSwitch;
