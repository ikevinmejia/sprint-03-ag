import React from 'react'
import { useForm } from '../Hooks/useForm'
import Button from './Button'

const Register = () => {


    const { formValue, handleInputChangeName, reset } = useForm({
        name: '',
        email: '',
        phoneNumber: '',
        password: ''
    })


    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formValue);
        // dispatch(LoginWithEmail(formValue.email, formValue.password))
        reset()
    }


    return (
        <div className='relative flex flex-col items-center justify-center h-screen max-w-4xl mx-auto'>
            <div className='flex items-center justify-center'>
                <img src={require('../img/favicon.png')} alt="" className='md:w-52 md:h-52' />
            </div>

            <form onSubmit={handleSubmit} className='flex flex-col items-center justify-center w-full max-w-xl px-5 mt-6'>
                <h1 className='text-2xl text-white md:text-3xl'>Sign Un</h1>
                <input onChange={handleInputChangeName} name="name" type="text" placeholder='Full name' className='w-full p-2 pl-5 mt-4 text-white rounded-full outline-none bg-secondary md:h-14 md:text-lg' />
                <input onChange={handleInputChangeName} name="email" type="email" placeholder='Email' className='w-full p-2 pl-5 mt-3 text-white rounded-full outline-none bg-secondary md:h-14 md:text-lg' />
                <input onChange={handleInputChangeName} name="phoneNumber" type="number" placeholder='Phone number' className='w-full p-2 pl-5 mt-3 text-white rounded-full outline-none bg-secondary md:h-14 md:text-lg' />
                <input onChange={handleInputChangeName} name="password" type="password" placeholder='Password' className='w-full p-2 pl-5 mt-3 text-white rounded-full outline-none bg-secondary md:h-14 md:text-lg' />
                <div className='flex items-center w-full h-6 gap-3 mt-1 mb-8 ml-8'>
                    <label className='text-white text-[10px] font-thin mt-2 md:text-sm cursor-pointer'>I have read the security policy</label>
                    <input type="radio" className='mt-2' />
                </div>
                <div className="flex justify-center w-full">
                    <Button text={"Registration"} />
                </div>

            </form>

            <div className='flex flex-col items-center w-7/12 mt-12 '>
                <p className='text-sm font-light text-white md:text-base '>OR Sing In with</p>
                <div className='flex items-center justify-center w-full mt-4 '>
                    <div className='flex items-center justify-end w-2/4 border-r border-[#363D6B] w-41'>
                        <img src={require("../img/google.png")} alt="" className='mr-2 cursor-pointer md:w-8' />
                    </div>
                    <div className='w-2/4 '>
                        <img src={require("../img/facebook.png")} alt="" className='ml-2 cursor-pointer md:w-8' />
                    </div>
                </div>
            </div>



        </div>
    )
}

export default Register