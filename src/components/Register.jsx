import React from "react";
import { useForm } from "../Hooks/useForm";
import Button from "./Button";
import { useDispatch } from "react-redux";
import { registerWithEmail } from "../Redux/Actions/userActions";

const Register = () => {
  const dispatch = useDispatch();
  const { formValue, handleInputChangeName, reset } = useForm({
    email: "",
    password: "",
    name: "",
    phoneNumber: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formValue);
    dispatch(
      registerWithEmail(
        formValue.email,
        formValue.password,
        formValue.name,
        formValue.phoneNumber
      )
    );
    reset();
  };

  return (
    <div className="relative flex flex-col items-center justify-center h-screen max-w-4xl mx-auto">
      <div className="flex items-center justify-center">
        <img
          src={require("../img/favicon.png")}
          alt=""
          className="md:h-52 md:w-52"
        />
      </div>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center justify-center w-full max-w-md px-5 mt-6"
      >
        <h1 className="text-2xl text-white md:text-3xl">Sign Un</h1>
        <input
          onChange={handleInputChangeName}
          name="name"
          type="text"
          placeholder="Full name"
          className="w-3/4 p-2 mt-4 text-center text-white transition-all duration-500 rounded-full outline-none bg-secondary focus:w-full"
        />
        <input
          onChange={handleInputChangeName}
          name="email"
          type="email"
          placeholder="Email"
          className="w-3/4 p-2 mt-4 text-center text-white transition-all duration-500 rounded-full outline-none bg-secondary focus:w-full"
        />
        <input
          onChange={handleInputChangeName}
          name="phoneNumber"
          type="number"
          placeholder="Phone number"
          className="w-3/4 p-2 mt-4 text-center text-white transition-all duration-500 rounded-full outline-none bg-secondary focus:w-full"
        />
        <input
          onChange={handleInputChangeName}
          name="password"
          type="password"
          placeholder="Password"
          className="w-3/4 p-2 mt-4 text-center text-white transition-all duration-500 rounded-full outline-none bg-secondary focus:w-full"
        />
        <div className="flex items-center h-6 gap-3 mt-1 mb-8 ">
          <label className="mt-2 cursor-pointer text-[10px] font-thin text-white md:text-sm">
            I have read the security policy
          </label>
          <input type="radio" className="mt-2 accent-primary" />
        </div>
        <div className="flex justify-center w-full">
          <Button text={"Registration"} />
        </div>
      </form>

      <div className="flex flex-col items-center w-7/12 mt-12 ">
        <p className="text-sm font-light text-white md:text-base ">
          OR Sing In with
        </p>
        <div className="flex items-center justify-center w-full mt-4 ">
          <div className="w-41 flex w-2/4 items-center justify-end border-r border-[#363D6B]">
            <img
              src={require("../img/google.png")}
              alt=""
              className="mr-2 cursor-pointer md:w-8"
            />
          </div>
          <div className="w-2/4 ">
            <img
              src={require("../img/facebook.png")}
              alt=""
              className="ml-2 cursor-pointer md:w-8"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
