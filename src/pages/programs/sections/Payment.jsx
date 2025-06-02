import React from 'react'
import { useMutation, useQuery } from '@tanstack/react-query'
import { Request } from '../../services/Request'
import Loading from '../../../components/Loading'
import { get } from 'lodash'

//

import tick from '../../../assets/images/tick2.png'

export default function Payment({ id }) {

  const { data, isLoading, isPending } = useQuery({
    queryKey: ['userData'],
    queryFn: () =>
      Request.get('/users/me')
  })

  const { mutate } = useMutation({
    mutationFn: (payload) => {
      return Request.post("/courses/user", payload)
        .then((res) => {
          console.log(res?.data?.data)
          Request.get(`/courses/purchase/${res?.data?.data?.id}`)
            .then((res) => {
              const url = get(res, "data.data.data") // Response ichidan url ni olish
              if (url) {
                //Dinamik <a> tegi yaratish
                const aTag = document.createElement('a');
                aTag.href = url; // URL ni hrefga qo'shish 
                aTag.target = '_blank'; // Sahifani Yangi oynada ochish 
                aTag.rel = 'noopener noreferrer'; // Xavfsizlik uchun rel atributini qo'shish
                document.body.appendChild(aTag); // <a> tegini DOM ga qo'shish
                aTag.click(); // Linkni avtomatik bosish 

              }
            })
            .catch((err) => {
              console.log(err);
            })
        })
    },
  })


  const onSubmit = () => {
    const submitData = {
      course_id: id,
      user_id: data?.data?.data?.user_id,
    }
    mutate(submitData)
  }

  // if (isLoading || isPending) {
  //   return <Loading />
  // }

  return (
    <section className='max-w-7xl mx-auto my-10 flex flex-col md:flex-row' style={{ boxShadow: '0 0 20px rgba(0,0,0,0.25)' }}>
      {/* left */}
      <div className='w-full bg-[#009688] py-10 px-16'>
        <h1 className='text-white font-semibold text-4xl mt-4'>Our Services</h1>
        <ul className='flex flex-col space-y-6 mt-10'>
          <li className='flex space-x-3 items-start '>
            <img src={tick} alt="tick" className='w-6 pt-3 ml-1' />
            <div>
              <h2 className='text-white text-2xl font-semibold'>Space for creative ideas</h2>
              <p className='text-white mt-2'>Cyber Square nourishes young aspiring minds
                to get a clear vision of their ideas. We guide
                them in analyzing and building their vision
                and ideas into reality.</p>
            </div>

          </li>
          <li className='flex space-x-3 items-start '>
            <img src={tick} alt="tick" className='w-6 pt-3 ml-1' />
            <div>
              <h2 className='text-white text-2xl font-semibold'>Engaging and fun curriculum</h2>
              <p className='text-white mt-2'>
                Our goal is to create an engaging system that
                provides exciting activities so children can
                understand the programming concepts
                thoroughly so that they can perform them on
                their own. With Cyber Square kids have fun
                while they learn without frustrations.</p>
            </div>
          </li>
          <li className='flex space-x-3 items-start '>
            <img src={tick} alt="tick" className='w-6 pt-3 ml-1' />
            <div>
              <h2 className='text-white text-2xl font-semibold'>Professional teaching methods</h2>
              <p className='text-white mt-2'>
                We professionals at Cyber Square, have
                developed an in-depth understanding in how
                to teach kids and how to code. Moreover, we
                believe in exposing kids to real programming
                languages and professional tools.
              </p>
            </div>
          </li>
        </ul>

      </div>
      {/* right */}
      <div div className='w-full pt-10 px-16' >
        <h1 className='font-semibold text-4xl mt-4'>Payment </h1>
        <ul className="list-disc list-outside marker:text-[#009688] flex flex-col space-y-4 mt-10 ml-4">
          <li>Space for creative ideas</li>
          <li>Engaging and fun curriculum</li>
          <li>Professional teaching methods</li>
          <li>Learn from AI & Data Science experts</li>
          <li>Courses by IIT, NIT, and IIM alumni</li>
          <li>UK certification upon completion</li>
          <li>Personalized one-to-one training</li>
        </ul>

        <button
          onClick={onSubmit}
          className='inline-block my-8 bg-[#009688] font-semibold text-white rounded-md py-3 px-8'
        >
          Purchase Now
        </button>

      </div>
    </section>
  )
}
