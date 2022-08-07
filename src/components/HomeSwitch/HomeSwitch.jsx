import React, { useState } from "react";
import "./homeSwitch.css";

function HomeSwitch() {
  const [checked, setChecked] = useState(false);

  const handleOnChange = () => {
    setChecked(!checked);
    console.log(checked);
  };

  return (
    <div className="flex justify-center w-full mt-3">
      <label className="switch">
        <input type="checkbox" />
        <span className="slider"></span>
      </label>
    </div>
  );
}

export default HomeSwitch;
