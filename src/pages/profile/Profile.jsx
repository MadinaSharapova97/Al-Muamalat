import React from 'react'
import { Link } from 'react-router-dom'

import Alexa from '../../assets/images/Alexa.png'

export default function Profile() {
  return (
    <div className='py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>

      <div className='flex items-center gap-4'>
        <button className='p-3 bg-[#009688] text-white text-xl rounded-md w-[130px]'>Profile</button>
        <Link to='/courses' className='py-3 border text-[#686868] text-xl text-center font-semibold border-[#686868] hover:text-white hover:bg-[#009688] rounded-md w-[130px]'>
          Courses
        </Link>
      </div>

      {/* Form */}
      <div className='px-6 py-8 bg-white rounded-lg shadow-lg mt-8'>
        <div className='flex items-center justify-between'>
          <div className='flex items-center gap-8'>
            <img src={Alexa} alt="alexa" />
            <h1 className='text-3xl font-semibold'>Alexa Rawles</h1>
          </div>
          <button className='py-3 px-5 rounded-md text-white font-semibold bg-[#009688]'>Save</button>
        </div>

        <form className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className='flex flex-col gap-4'>
            <label htmlFor="First Name">First Name</label>
            <input type="text" placeholder='Your First Name' className='bg-[#F9F9F9] rounded-md p-4 outline-none' />
          </div>
          <div className='flex flex-col gap-4'>
            <label htmlFor="First Name">First Name</label>
            <input type="text" placeholder='Your First Name' className='bg-[#F9F9F9] rounded-md p-4 outline-none' />
          </div>
          <div className='flex flex-col gap-4'>
            <label htmlFor="First Name">First Name</label>
            <input type="text" placeholder='Your First Name' className='bg-[#F9F9F9] rounded-md p-4 outline-none' />
          </div>
          <div className='flex flex-col gap-4'>
            <label htmlFor="First Name">First Name</label>
            <input type="text" placeholder='Your First Name' className='bg-[#F9F9F9] rounded-md p-4 outline-none' />
          </div>
        </form>

      </div>
    </div>
  )
}
