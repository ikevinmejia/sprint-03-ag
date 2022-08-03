import React from 'react'



const Login = () => {
    return (
        <div className='relative flex flex-col items-center justify-center h-screen'>
            <div className='flex items-center justify-center'>
                <img src={require('../img/favicon.png')} alt="" />
            </div>

            <form className='flex flex-col items-center justify-center w-full px-5 mt-6'>
                <h1 className='text-2xl text-white'>Sign In</h1>
                <input type="email" placeholder='Email' className='w-full p-2 pl-5 mt-4 text-white rounded-full outline-none bg-secondary' />
                <input type="password" placeholder='Password' className='w-full p-2 pl-5 mt-3 text-white rounded-full outline-none bg-secondary' />
                <input type="submit" value="Sing In" className='w-full p-3 mt-8 text-white rounded-full cursor-pointer bg-primary hover:bg-cyan-300' />
                <p className='text-white text-[10px] font-thin mt-2 cursor-pointer'>Forgot Password ?</p>
            </form>

            <div className='flex flex-col items-center w-7/12 mt-24 '>
                <p className='text-sm font-light text-white '>Sing In with</p>
                <div className='flex items-center justify-center w-full mt-4 '>
                    <div className='flex items-center justify-end w-2/4 border-r border-[#363D6B] w-41'>
                        <img src={require("../img/google.png")} alt="" className='mr-2 cursor-pointer' />
                    </div>
                    <div className='w-2/4 '>
                        <img src={require("../img/facebook.png")} alt="" className='ml-2 cursor-pointer' />
                    </div>
                </div>
            </div>

            <div className='absolute bottom-10'>
                <p className='text-sm font-light text-white'>D’ont have an account ?
                    {' '}
                    <span className='font-medium cursor-pointer text-primary'>Sign In</span>
                </p>
            </div>

        </div>
    )
}

export default Login