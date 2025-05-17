import React from 'react'
import { Link } from 'react-router-dom'

//images

import course1 from "../../assets/images/ProgramsCourses1.png";
import course2 from "../../assets/images/ProgramsCourses2.png";
import course3 from "../../assets/images/ProgramsCourses3.png";
import star from "../../assets/images/star.png";

export default function Courses() {

    const courses = [
        { img: course1, numbers: 20 },
        { img: course2, numbers: 102 },
        { img: course3, numbers: 102 },

    ]

    return (
        <div className='max-w-7xl mx-auto px-4 py-20'>
            <div className='flex items-center gap-4'>
                <Link to='/profile' className='py-3 border text-[#686868] text-xl text-center font-semibold border-[#686868] hover:text-white hover:bg-[#009688] rounded-md w-[130px]'>
                    Profile
                </Link>
                <button className='p-3 bg-[#009688] text-white text-xl rounded-md w-[130px]'>Courses</button>
            </div>

            <div className="w-full py-5">
                <div className="grid grid-col-1 sm:grid-cols-2 md:grid-cols-3 gap-5 mt-10">
                    {courses.map((item, index) => (
                        <div
                            className="flex-[0_0_100%] sm:flex-[0_0_33.3333%] px-2"
                            key={index}
                        >
                            <div className="bg-white shadow-lg rounded-lg p-3">
                                <img src={item.img} alt="" className="flex items-center mx-auto w-full" />
                                <p className="text-[#363A3D] text-xl mt-2">Various versions have evolved daf</p>
                                <div className="flex items-center gap-3 mt-3 border-b-2 pb-4">
                                    <img src={star} alt="star" />
                                    <img src={star} alt="star" />
                                    <img src={star} alt="star" />
                                    <img src={star} alt="star" />
                                    <img src={star} alt="star" />
                                    <p className="text-xl"> ({item.numbers}) </p>
                                </div>
                                <div className="flex justify-between items-center mt-4">
                                    <p className="text-2xl text-[#1B1D1F] font-bold">$ 500 </p>
                                    <div className="w-10 h-10 rounded-full bg-[#bce0dd] text-[#009688] hover:bg-[#009688] hover:text-white transition-colors duration-300 flex items-center justify-center">
                                        <i className="fa-solid fa-arrow-up transition-colors duration-300 cursor-pointer rotate-45"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
