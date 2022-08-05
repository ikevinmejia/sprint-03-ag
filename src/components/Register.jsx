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
    <div className="relative mx-auto flex h-screen max-w-4xl flex-col items-center justify-center">
      <div className="flex items-center justify-center">
        <img
          src={require("../img/favicon.png")}
          alt=""
          className="md:h-52 md:w-52"
        />
      </div>

      <form
        onSubmit={handleSubmit}
        className="mt-6 flex w-full max-w-xl flex-col items-center justify-center px-5"
      >
        <h1 className="text-2xl text-white md:text-3xl">Sign Un</h1>
        <input
          onChange={handleInputChangeName}
          name="name"
          type="text"
          placeholder="Full name"
          className="mt-4 w-full rounded-full bg-secondary p-2 pl-5 text-white outline-none md:h-14 md:text-lg"
        />
        <input
          onChange={handleInputChangeName}
          name="email"
          type="email"
          placeholder="Email"
          className="mt-3 w-full rounded-full bg-secondary p-2 pl-5 text-white outline-none md:h-14 md:text-lg"
        />
        <input
          onChange={handleInputChangeName}
          name="phoneNumber"
          type="number"
          placeholder="Phone number"
          className="mt-3 w-full rounded-full bg-secondary p-2 pl-5 text-white outline-none md:h-14 md:text-lg"
        />
        <input
          onChange={handleInputChangeName}
          name="password"
          type="password"
          placeholder="Password"
          className="mt-3 w-full rounded-full bg-secondary p-2 pl-5 text-white outline-none md:h-14 md:text-lg"
        />
        <div className="mt-1 mb-8 ml-8 flex h-6 w-full items-center gap-3">
          <label className="mt-2 cursor-pointer text-[10px] font-thin text-white md:text-sm">
            I have read the security policy
          </label>
          <input type="radio" className="mt-2" />
        </div>
        <div className="flex w-full justify-center">
          <Button text={"Registration"} />
        </div>
      </form>

      <div className="mt-12 flex w-7/12 flex-col items-center ">
        <p className="text-sm font-light text-white md:text-base ">
          OR Sing In with
        </p>
        <div className="mt-4 flex w-full items-center justify-center ">
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
