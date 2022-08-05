import React, { useContext } from "react";
import { useForm } from "../Hooks/useForm";
import { useNavigate } from "react-router-dom";
import Button from "./Button";
import { Context } from "../context/ContextProvider";

function FormWHA({ dataInput, placeholder, textLabel, goTo }) {
  const navigate = useNavigate();
  const { formValue, handleInputChangeName, reset } = useForm({
    weightHeightAge: "",
  });
  const { setDataFormWHA, dataFormWHA } = useContext(Context);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formValue);
    console.log(dataFormWHA);
    dataFormWHA.push(formValue);
    setDataFormWHA(dataFormWHA);
    navigate(goTo);
    reset();
  };

  return (
    <form
      onSubmit={(e) => handleSubmit(e)}
      className="mx-auto flex h-[60vh] w-full max-w-sm flex-col items-center justify-evenly  px-3"
    >
      <label
        htmlFor={`user${dataInput}`}
        className="flex items-center justify-center w-11/12 text-center text-white"
      >
        <input
          onChange={handleInputChangeName}
          className="w-1/4 pb-2 text-4xl text-center text-white transition-all duration-500 bg-transparent border-b border-transparent outline-none caret-primary focus:w-2/4 focus:border-b-primary"
          type="number"
          id={`user${dataInput}`}
          placeholder={placeholder}
          name="weightHeightAge"
          required
        />{" "}
        {textLabel}
      </label>
      <Button text={"Next"} />
    </form>
  );
}

export default FormWHA;
