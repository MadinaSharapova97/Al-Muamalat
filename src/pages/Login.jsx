import React from 'react';

// images
import Logo from "../assets/images/Logo.png"
import RegisterImg from "../assets/images/Register.png"
import User from "../assets/images/user.png"

import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form';
import { useAuth } from '../context';
import Loading from '../components/Loading';

export default function Login() {

  const auth = useAuth()

  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    const { password, phone_number } = data

    auth.login({ password, phone_number }, () => {
    })

  }
 

  return (
    <>
      <div className="flex h-screen p-4">
        {/* Left Section */}
        <div className="w-full md:w-1/2 bg-white p-2 md:px-[50px]">
          <div className="flex items-center my-6 justify-between w-full px-4">
            <div className='flex items-center space-x-2 '>
              <img src={Logo} alt="Logo" className="mb-4 w-10 md:w-20" />
              <h2 className='text-[#009688] font-bold text-sm md:text-2xl'>AL MUAMALAT</h2>
            </div>
            <div className='relative'>
              <p className='text-[#8f8f8f]'>Questions?</p>
              <h1 className="text-xl md:text-2xl font-bold mb-4 text-[#009688]">Ask Diyor</h1>
              <img src={User} alt="user" className='absolute top-[70%] md:top-[-30%] md:right-[-120%]' />
            </div>
          </div>
          <h2 className="text-2xl md:text-6xl my-10 font-bold" style={{ fontFamily: "Inter" }}>Get Started</h2>

          <form onSubmit={handleSubmit(onSubmit)} className='w-5/6 h-[220px] flex flex-col justify-between items-center'>
            <input
              {...register("phone_number")}
              type="phone"
              placeholder="Phone Number"
              className="w-full p-3 mb-4 border rounded-md shadow-sm"
            />
            {/* Email and Password Input */}
            <input
              {...register("password")}
              type="password"
              placeholder="password"
              className="w-full  p-3 mb-6 border rounded-md shadow-sm"
            />
            {/* Sign In Button */}
            <button className="w-full  p-3 bg-[#009688] text-white rounded-md hover:bg-[#08664a]">
              Login
            </button>
            <Link to='/register' className='text-[#009688] hover:text-[#08e09f] mt-4'>Create a new account !</Link>
          </form>
        </div>



        {/* Right Section */}
        <div className="hidden md:flex flex-col justify-center space-y-6 rounded-lg items-center w-1/2 bg-[#009688] text-white p-8">
          <img src={RegisterImg} alt="Illustration" className="mb-4 w-full max-w-sm" />
          <h2 className="text-xl md:text-4xl text-center w-full max-w-3/4" style={{ fontFamily: "Inter" }}>
            Welcome to Al Muamalat – Empowering Your Journey in Islamic Finance
          </h2>
        </div>
      </div>
    </>

  )
}
