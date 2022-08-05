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
        <div className='container relative flex flex-col items-center justify-center h-screen max-w-4xl mx-auto'>
            <div className='flex items-center justify-center'>
                <img className='md:w-52 md:h-52' src={require('../img/favicon.png')} alt="logo" />
            </div>

            <form onSubmit={handleSubmit} className='flex flex-col items-center justify-center w-full px-5 mt-6'>
                <h1 className='text-2xl text-white'>Sign In</h1>
                <input onChange={handleInputChangeName} name="email" type="email" placeholder='Email' className='w-full p-2 pl-5 mt-4 text-white rounded-full outline-none bg-secondary' />
                <input onChange={handleInputChangeName} name="password" type="password" placeholder='Password' className='w-full p-2 pl-5 mt-3 text-white rounded-full outline-none bg-secondary' />
                <input type="submit" value="Sing In" className='w-full p-3 mt-8 text-white rounded-full cursor-pointer bg-primary' />
                <p className='text-white text-[10px] font-thin mt-2 cursor-pointer'>Forgot Password ?</p>
            </form>

            <div className='flex flex-col items-center w-7/12 mt-24 md:mt-10'>
                <p className='text-sm font-light text-white md:text-base'>Sing In with</p>
                <div className='flex items-center justify-center w-full mt-4 '>
                    <div className='flex items-center justify-end w-2/4 border-r border-[#363D6B] w-41'>
                        <img src={require("../img/google.png")} alt="" className='mr-2 cursor-pointer md:w-8' onClick={handleGoogle} />
                    </div>
                    <div className='w-2/4 '>
                        <img src={require("../img/facebook.png")} alt="" className='ml-2 cursor-pointer md:w-8' onClick={handleFacebook} />
                    </div>
                </div>
            </div>

            <div className='absolute bottom-10'>
                <p className='text-sm font-light text-white md:text-base'>D’ont have an account ?
                    {' '}
                    <Link to="/register"><span className='font-medium cursor-pointer text-primary'>Sign In</span></Link>
                </p>
            </div>

        </div>
    )
}
