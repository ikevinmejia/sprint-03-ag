import React from 'react'
import { Link } from "react-router-dom"


const Login = () => {
    return (
        <div className='container relative flex flex-col items-center justify-center h-screen max-w-4xl mx-auto'>
            <div className='flex items-center justify-center'>
                <img className='md:w-52 md:h-52' src={require('../img/favicon.png')} alt="logo" />
            </div>

            <form className='flex flex-col items-center justify-center w-full max-w-xl px-5 mt-6'>
                <h1 className='text-2xl text-white md:text-3xl'>Sign In</h1>
                <input type="email" placeholder='Email' className='w-full p-2 pl-5 mt-4 text-white rounded-full outline-none md:h-14 md:text-lg bg-secondary' />
                <input type="password" placeholder='Password' className='w-full p-2 pl-5 mt-3 text-white rounded-full outline-none md:text-lg md:h-14 bg-secondary' />
                <input type="submit" value="Sing In" className='w-full p-3 mt-8 text-white rounded-full cursor-pointer md:text-lg bg-primary' />
                <p className='text-white text-[10px] font-thin mt-2 cursor-pointer md:text-base'>Forgot Password ?</p>
            </form>

            <div className='flex flex-col items-center w-7/12 mt-24 md:mt-10'>
                <p className='text-sm font-light text-white md:text-base'>Sing In with</p>
                <div className='flex items-center justify-center w-full mt-4 '>
                    <div className='flex items-center justify-end w-2/4 border-r border-[#363D6B] w-41'>
                        <img src={require("../img/google.png")} alt="" className='mr-2 cursor-pointer md:w-8' />
                    </div>
                    <div className='w-2/4 '>
                        <img src={require("../img/facebook.png")} alt="" className='ml-2 cursor-pointer md:w-8' />
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

export default Login