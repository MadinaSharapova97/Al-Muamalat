import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useMutation, useQuery } from '@tanstack/react-query'
import { Request } from '../services/Request'
import axios from 'axios'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import Loading from '../../components/Loading'

import Alexa from '../../assets/images/Alexa.png'


export default function Profile() {

  const [image, setImage] = useState(null)

  const { register, handleSubmit } = useForm()

  const { data, isLoading, error } = useQuery({
    queryKey: ['userData'],
    queryFn: () =>
      Request.get('/users/me')
  })
  console.log(data);


  const { mutate, isPending } = useMutation({
    mutationFn: (submitData) => {
      return axios.put(`https://api.al-muamalat.uz/api/users${data?.data?.data?.user_id}`, submitData)
        .then((res) => {
          console.log(res?.data)
          toast.success("Muvoffaqiyatli amalga oshirildi")
        }
        ).catch((err) => {
          console.error(err)
          toast.error("Xatolik yuz berdi")
        })
    }
  })

  const onSubmit = () => {
    const submitData = {
      images: image,
      ...data,
    }
    mutate(submitData)

  }


  if (isLoading || isPending) {
    return <Loading />
  }

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
            <h1 className='text-3xl font-semibold'>{data?.data?.data?.full_name}</h1>
          </div>
        </div>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className='flex flex-col gap-4'>
              <label htmlFor="Full Name">Full Name</label>
              <input
                {...register("full_name")}
                type="text"
                placeholder='Your Full Name'
                className='bg-[#F9F9F9] rounded-md p-4 outline-none' />
            </div>
            <div className='flex flex-col gap-4'>
              <label htmlFor="Phone Number">Phone Number</label>
              <input
                {...register("phone_number")}
                type="text"
                placeholder='Phone Number'
                className='bg-[#F9F9F9] rounded-md p-4 outline-none' />
            </div>
            <div className='flex flex-col gap-4'>
              <label htmlFor="Address">Address</label>
              <input
                {...register("address")}
                type="text"
                placeholder='Your Address'
                className='bg-[#F9F9F9] rounded-md p-4 outline-none' />
            </div>
            <div className='flex flex-col gap-4'>
              <label htmlFor="Avatar">Avatar</label>
              <input
                {...register("image")}
                type="file"
                accept='image/*'
                onChange={(e) => setImage(e.target.files[0])}
                placeholder=''
                className='bg-[#F9F9F9] rounded-md p-4 outline-none' />
            </div>
          </div>
          <div className='flex items-center justify-end '>
            <button type="submit"
              className='mt-8 py-3 px-5 rounded-md text-white font-semibold bg-[#009688] w-full md:w-[160px] hover:bg-[#00796b] transition-colors duration-300'>
              Save Profile
            </button>
          </div>

        </form>

      </div>
    </div>
  )
}
