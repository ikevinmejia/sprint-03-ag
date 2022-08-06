import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "../Hooks/useForm";
import { useDispatch } from "react-redux";
import Button from "./Button";
import {
  loginFacebook,
  loginGoogle,
  LoginWithEmail,
} from "../Redux/Actions/userActions";

const Login = () => {
  const { formValue, handleInputChangeName, reset } = useForm({
    email: "",
    password: "",
  });
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formValue);
    dispatch(LoginWithEmail(formValue.email, formValue.password));
    reset();
  };

  const handleGoogle = () => {
    dispatch(loginGoogle());
  };

  const handleFacebook = () => {
    dispatch(loginFacebook());
  };

  return (
    <div className="container relative flex flex-col items-center justify-center h-screen max-w-4xl mx-auto">
      <div className="flex items-center justify-center">
        <img
          className="md:h-52 md:w-52"
          src={require("../img/favicon.png")}
          alt="logo"
        />
      </div>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center justify-center w-full max-w-md px-5 mt-6"
      >
        <h1 className="text-2xl text-white">Sign In</h1>
        <input
          onChange={handleInputChangeName}
          name="email"
          type="email"
          placeholder="Email"
          className="w-3/4 p-2 mt-4 text-center text-white transition-all duration-500 rounded-full outline-none bg-secondary focus:w-full"
        />
        <input
          onChange={handleInputChangeName}
          name="password"
          type="password"
          placeholder="Password"
          className="w-3/4 p-2 mt-4 text-center text-white transition-all duration-500 rounded-full outline-none bg-secondary focus:w-full"
        />
        <div className="w-full mt-5 text-center">
          <Button text={"Sing in"} />
        </div>
        <p className="mt-2 cursor-pointer text-[10px] font-thin text-white hover:text-primary">
          Forgot Password ?
        </p>
      </form>

      <div className="flex flex-col items-center w-7/12 mt-24 md:mt-10">
        <p className="text-sm font-light text-white md:text-base">
          Sing In with
        </p>
        <div className="flex items-center justify-center w-full mt-4 ">
          <div className="w-41 flex w-2/4 items-center justify-end border-r border-[#363D6B]">
            <img
              src={require("../img/google.png")}
              alt=""
              className="mr-2 cursor-pointer md:w-8"
              onClick={handleGoogle}
            />
          </div>
          <div className="w-2/4 ">
            <img
              src={require("../img/facebook.png")}
              alt=""
              className="ml-2 cursor-pointer md:w-8"
              onClick={handleFacebook}
            />
          </div>
        </div>
      </div>

      <div className="absolute bottom-10">
        <p className="text-sm font-light text-white md:text-base">
          Don't have an account?{" "}
          <Link to="/register">
            <span className="font-medium cursor-pointer text-primary">
              Create Account
            </span>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
