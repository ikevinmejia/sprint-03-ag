import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "../Hooks/useForm";
import { useDispatch } from "react-redux";
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
    <div className="container relative mx-auto flex h-screen max-w-4xl flex-col items-center justify-center">
      <div className="flex items-center justify-center">
        <img
          className="md:h-52 md:w-52"
          src={require("../img/favicon.png")}
          alt="logo"
        />
      </div>

      <form
        onSubmit={handleSubmit}
        className="mt-6 flex w-full flex-col items-center justify-center px-5"
      >
        <h1 className="text-2xl text-white">Sign In</h1>
        <input
          onChange={handleInputChangeName}
          name="email"
          type="email"
          placeholder="Email"
          className="mt-4 w-full rounded-full bg-secondary p-2 pl-5 text-white outline-none"
        />
        <input
          onChange={handleInputChangeName}
          name="password"
          type="password"
          placeholder="Password"
          className="mt-3 w-full rounded-full bg-secondary p-2 pl-5 text-white outline-none"
        />
        <input
          type="submit"
          value="Sing In"
          className="mt-8 w-full cursor-pointer rounded-full bg-primary p-3 text-white"
        />
        <p className="mt-2 cursor-pointer text-[10px] font-thin text-white">
          Forgot Password ?
        </p>
      </form>

      <div className="mt-24 flex w-7/12 flex-col items-center md:mt-10">
        <p className="text-sm font-light text-white md:text-base">
          Sing In with
        </p>
        <div className="mt-4 flex w-full items-center justify-center ">
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
          D’ont have an account ?{" "}
          <Link to="/register">
            <span className="cursor-pointer font-medium text-primary">
              Sign In
            </span>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
