import React, { useContext } from "react";
import { IoMale, IoFemale } from "react-icons/io5";
import { Context } from "../context/ContextProvider";
import { useNavigate } from "react-router-dom";

const styles = {
  width: "150px",
  height: "150px",
};

function FormGener() {
  const { setGener } = useContext(Context);

  const navigate = useNavigate();

  const handleOnClick = ({ target }) => {
    target.nodeName === "svg" && setGener(target.id);
    navigate("/");
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form
      onSubmit={(e) => handleOnSubmit(e)}
      className="mx-auto flex h-[60vh] w-full max-w-sm flex-col items-center justify-start  px-3"
    >
      <div className="flex flex-col items-center w-full h-full justify-evenly">
        <div className="">
          <button
            onClick={(e) => handleOnClick(e)}
            className="transition-all duration-700 border rounded-3xl border-secondary hover:bg-secondary"
          >
            <IoMale style={styles} color="#2be7e8" id="male" />
          </button>
          <p className="w-full text-lg font-medium text-center text-white">
            Male
          </p>
        </div>
        <div>
          <button
            onClick={(e) => handleOnClick(e)}
            className="transition-all duration-700 border rounded-3xl border-secondary hover:bg-secondary "
          >
            <IoFemale style={styles} color="#2be7e8" id="female" />
          </button>
          <p className="w-full text-lg font-medium text-center text-white">
            Female
          </p>
        </div>
      </div>
    </form>
  );
}

export default FormGener;
