import React from 'react';
import { useForm } from 'react-hook-form';
import { useMutation } from '@tanstack/react-query'
import { Link } from 'react-router-dom'
import axios from 'axios';
import { useAuth } from '../context'

// images
import Logo from "../assets/images/Logo.png"
import RegisterImg from "../assets/images/Register.png"
import User from "../assets/images/user.png"

export default function Register() {

  const auth = useAuth()

  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    const { full_name, password, phone_number } = data

    auth.register({full_name, password, phone_number},() =>{
    })

  }


  console.log(auth);



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
          <h2 className="text-2xl md:text-6xl mt-10 font-bold text-center" style={{ fontFamily: "Inter" }}>Get Started</h2>
          <div className='flex mx-auto justify-center items-center space-x-2 mb-10'>
            <p className='text-[#8f8f8f]'>Already have an account?</p>
            <Link to='/login' className='text-[#009688] hover:text-[#08e09f]'>Sign In</Link>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit(onSubmit)} className='w-5/6 h-[220px] flex flex-col justify-between mx-auto items-center'>
            <input
              {...register("full_name")}
              placeholder="Enter your name"
              className="w-full p-3 mb-4 border rounded-md shadow-sm"
            />
            {/* Email and Password Input */}
            <input
              {...register("password")}
              placeholder="Enter your name password"
              className="w-full  p-3 mb-6 border rounded-md shadow-sm"
            />

            {/* Phone Number */}

            <input
              {...register("phone_number")}
              placeholder="Phone number"
              className="w-full  p-3 mb-6 border rounded-md shadow-sm"
            />

            {/* Sign In Button */}
            <button className="w-full  p-3 bg-[#009688] text-white rounded-md hover:bg-[#08e09f]">
              Log in
            </button>
          </form>
        </div>



        {/* Right Section */}
        <div className="hidden md:flex flex-col justify-center space-y-6 rounded-3xl items-center w-1/2 bg-[#009688] text-white p-8">
          <img src={RegisterImg} alt="Illustration" className="mb-4 w-full max-w-sm" />
          <h2 className="text-xl md:text-4xl text-center w-full max-w-3/4" style={{ fontFamily: "Inter" }}>
            Welcome to Al Muamalat – Empowering Your Journey in Islamic Finance
          </h2>
        </div>
      </div>
    </>

  )
}
