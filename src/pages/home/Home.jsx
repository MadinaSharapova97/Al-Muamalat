import React from 'react'

// images
import Student from '../../assets/images/student.png'
import Button from "../../assets/images/Button.png"

//  sections
import TeamCarousel from './sections/Carousel';
import DoubleCarousel from './sections/DoubleCarousel';
import MediaCarousel from './sections/MediaCarousel';
import StudenSayCarousel from './sections/StudentSayCarousel';
import FAQ from './sections/Faq';
import Consultation from './sections/Consultation';
import Services from './sections/Services';

export default function Home() {

  return (
    <>
      {/* Main */}
      <main className="bg-[#009688] py-3 flex items-center justify-center" style={{ height: "calc(100vh - 54px)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex flex-col md:flex-row items-center">

          {/* Left Side - Text */}
          <div className=" md:w-1/2 flex flex-col items-center md:items-start space-y-8">
            <span className='bg-white py-2 px-6 text[#252641] font-semibold  rounded-md '
              style={{ lineHeight: '100%', fontWeight: "500", letterSpacing: "2%" }}>
              Seeking Knowledge is an Obligation in Islam</span>
            <h1 className="text-3xl text-center md:text-start sm:text-4xl md:text-5xl font-bold text-white leading-tight">
              Enhance Your Understanding of Islamic Ethics with Al-Muamalat
            </h1>

            <div className='relative'>
              <button className='ml-[-50%] md:ml-0 bg-[#FD661F] py-3 px-4 md:px-10 text-white rounded-md hover:bg-[#e84e07]'>Students’ opnion</button>
              <img src={Button} alt="students" className='absolute top-1 md:top-0 right-[-40%] md:right-[-90%]' />
            </div>
          </div>

          {/* Right Side - Image */}
          <div className="mt-8 md:mt-0 md:w-1/2 flex justify-center">
            <img
              src={Student}
              alt="Student"
              className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl h-auto object-contain"
            />
          </div>

        </div>
      </main>
      <Services />
      <TeamCarousel />
      <DoubleCarousel />
      <MediaCarousel />
      <StudenSayCarousel />
      <FAQ />
      <Consultation />

    </>
  )
}
