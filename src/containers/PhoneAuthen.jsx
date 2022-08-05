import React from 'react'
import Button from '../components/Button'

const PhoneAuthen = () => {
  return (
<div className='container mx-auto w-full text-white flex flex-col items-center h-screen'>
        <img className='w-40 h-40 mt-36 md:w-52 md:h-52' src="https://res.cloudinary.com/dnont3pur/image/upload/v1659547006/Sprint-3/Logo_ljuqhr.png" alt="logo" />
        <div className='flex flex-col text-center gap-5 mt-5'>
            <h1 className='text-2xl md:text-3xl'>Phone verification</h1>
            <div className='text-sm font-light md:text-base md:font-normal'>
                <p>Enter the four-digit code from SMS</p>
                <p>SMS not received Send again?</p>
            </div> 
            <form className='flex w-full gap-5'>
                <input className='md:w-20 md:h-20 md:text-5xl active:outline-none focus:outline-none w-16 h-16 bg-transparent border-solid border rounded-xl border-white font-medium text-4xl flex justify-center text-center' type="text" maxLength="1" />
                <input className='md:w-20 md:h-20 md:text-5xl active:outline-none focus:outline-none w-16 h-16 bg-transparent border-solid border rounded-xl border-white font-medium text-4xl flex justify-center text-center' type="text" maxLength="1" />
                <input className='md:w-20 md:h-20 md:text-5xl active:outline-none focus:outline-none w-16 h-16 bg-transparent border-solid border rounded-xl border-white font-medium text-4xl flex justify-center text-center' type="text" maxLength="1" />
                <input className='md:w-20 md:h-20 md:text-5xl active:outline-none focus:outline-none w-16 h-16 bg-transparent border-solid border rounded-xl border-white font-medium text-4xl flex justify-center text-center' type="text" maxLength="1" />
            </form>
        </div>
        <div className='w-full mt-36 px-5 justify-center flex max-w-sm'>
            <Button />
        </div>
    </div>
  )
}

export default PhoneAuthen