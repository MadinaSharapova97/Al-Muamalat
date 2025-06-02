import React from 'react'
import { useQuery } from '@tanstack/react-query'
import { Request } from "../services/Request"

// sections

import Services from '../home/sections/Services'
import ProgramsCarousel from './sections/ProgramsCarousel'
import Payment from './sections/Payment'

// images
import Tick from '../../assets/images/tick.png'
import Dot from '../../assets/images/dot.png'
import ArrowDown from '../../assets/images/ArrowDown.png'
import { useParams } from 'react-router-dom'

export default function Programs() {

    const { id } = useParams()

    const { data, isloading, error } = useQuery({
        queryKey: ['aboutCourseData'],
        queryFn: () =>
            Request.get('/courses/main')
    })
    const aboutData = data?.data?.data?.find(item => item.course_id === id)
    console.log(aboutData);

    return (
        <main className='max-w-7xl mx-auto px-4 py-10'>
            <div>
                <h1 className='text-2xl md:text-4xl text-center text-[#152032] font-semibold '>{aboutData?.name_uz}</h1>
                <p className='text-center text-[#686868] font-semibold mt-3'
                    dangerouslySetInnerHTML={{
                        __html: aboutData?.description_uz
                    }}
                />
                <section className='flex flex-col md:flex-row gap-10 mt-10'>
                    {/* left */}
                    <div className='bg-[#F3F8FF] p-7 rounded-lg w-full'>
                        <h2 className='text-2xl text-center font-semibold'>What you'll learn</h2>
                        <ul>
                            <li className='flex items-center gap-3 mt-3 '>
                                <img src={Tick} alt="" />
                                <p className='font-semibold'>Gain a comprehensive understanding of Islamic finance principles and ethics.</p>
                            </li>
                            <li className='flex items-center gap-3 mt-3 '>
                                <img src={Tick} alt="" />
                                <p className='font-semibold'>Build a portfolio with 10+ real-world projects in Islamic financial services.</p>
                            </li>
                            <li className='flex items-center gap-3 mt-3 '>
                                <img src={Tick} alt="" />
                                <p className='font-semibold'>Learn to develop and manage Sharia-compliant financial products.</p>
                            </li>
                            <li className='flex items-center gap-3 mt-3 '>
                                <img src={Tick} alt="" />
                                <p className='font-semibold'>Master key concepts in Islamic banking, investment, and wealth management.</p>
                            </li>
                            <li className='flex items-center gap-3 mt-3 '>
                                <img src={Tick} alt="" />
                                <p className='font-semibold'>Understand the fundamentals of risk management in Islamic finance.</p>
                            </li>
                            <li className='flex items-center gap-3 mt-3 '>
                                <img src={Tick} alt="" />
                                <p className='font-semibold'>Develop skills to work as an Islamic finance consultant.</p>
                            </li>
                        </ul>

                    </div>
                    {/* right */}
                    <div className='bg-[#F3F8FF] p-7 rounded-lg w-full'>
                        <h2 className='text-2xl text-center font-semibold '>Why should you study at <br /> "AL-MUAMALAT"?</h2>
                        <ul>
                            <li className='flex items-center gap-4 mt-3'>
                                <img src={Dot} alt="" />
                                <p>Lifetime access</p>
                            </li>
                            <li className='flex items-center gap-4 mt-3'>
                                <img src={Dot} alt="" />
                                <p>Video lessons</p>
                            </li>
                            <li className='flex items-center gap-4 mt-3' >
                                <img src={Dot} alt="" />
                                <p>Tests</p>
                            </li>
                            <li className='flex items-center gap-4 mt-3' >
                                <img src={Dot} alt="" />
                                <p>Projects</p>
                            </li>
                            <li className='flex items-center gap-4 mt-3' >
                                <img src={Dot} alt="" />
                                <p>Downloadable resources</p>
                            </li>
                            <li className='flex items-center gap-4 mt-3' >
                                <img src={Dot} alt="" />
                                <p>Access via mobile device</p>
                            </li>
                        </ul>

                    </div>
                </section>
            </div>

            <section className='max-w-5xl mx-auto px-4 py-12'>
                <h1 className='text-2xl md:text-4xl text-center font-semibold text-[#152032]'>Brief information about the course</h1>
                <div className='max-w-6xl mx-auto flex flex-col md:flex-row gap-10 mt-10'>
                    {/* left */}
                    <div className=''>
                        <div className='flex gap-2 relative w-[150px]'>
                            <h3 className='text-2xl text-[#009688] font-semibold'>Videodarslar</h3>
                            <img src={ArrowDown} alt="arrow" className='w-5 h-3 absolute top-3 right-0' />
                        </div>
                        <p>Lessons are posted on the platform in the  form of videos, which can be viewed anytime and anywhere. Video lessons are updated.</p>
                    </div>

                    {/* right */}
                    <div>
                        <div className='flex gap-2 relative w-[150px]'>
                            <h3 className='text-2xl text-[#009688] font-semibold'>Videodarslar</h3>
                            <img src={ArrowDown} alt="arrow" className='w-5 h-3 absolute top-3 right-0' />
                        </div>
                        <p>Lessons are posted on the platform in the form of videos, which can be viewed anytime and anywhere. Video lessons are updated.</p>
                    </div>
                </div>
            </section>

            <ProgramsCarousel />
            <Payment id={id}/>
            <Services />
        </main>
    )
}
