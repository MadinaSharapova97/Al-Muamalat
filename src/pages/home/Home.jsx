import React from 'react'

// images
import Student from '../../assets/images/student.png'
import Button from "../../assets/images/Button.png"
import Card1 from "../../assets/images/card1.png"
import TeamCarousel from './Carousel';
import DoubleCarousel from './DoubleCarousel';
import MediaCarousel from './MediaCarousel';
import StudenSayCarousel from './StudentSayCarousel';
import FAQ from './Faq';
import Consultation from './Consultation';

export default function Home() {
  const services = [
    {
      title: "Islamic Fund Management",
      description:
        "We establish connections with local and international organizations to promote Islamic financial systems and create partnerships that support financial inclusion.",
      image: Card1,
      bg: " #DEEAFF"
    },
    {
      title: "International Relations",
      description:
        "We assist retail and institutional clients in managing their funds in accordance with Islamic principles, providing practical advice for making halal investments.",
      image: Card1,
      bg: "#D5F6ED"

    },
    {
      title: "Education and Training",
      description:
        "We offer short-term training courses, seminars, and conferences conducted by experts, along with study tours to leading Islamic financial institutions.",
      image: Card1,
      bg: "#FBE2F4"
    },
    {
      title: "For Islamic Banks",
      description:
        "We provide experienced consulting on the establishment and management of Islamic banks and branches. We support the development of competitive financial products and services based on Shariah principles.",
      image: Card1,
      bg: "#E2DBF9"
    },
    {
      title: "Islamic Capital Market",
      description:
        "We provide expert advice on the Islamic capital market, including Shariah-compliant investment products, sukuk issuance, and ethical portfolio management.",
      image: Card1,
      bg: "#EBEFF3"
    },
    {
      title: "Shariah Compliance Audit",
      description:
        "We provide Shariah supervision and audit services, examining the compliance of business models with Shariah principles.",
      image: Card1,
      bg: "#FFEDB6"
    },
  ];
  return (
    <>
      {/* Main */}
      <main className="bg-[#009688] py-3 flex items-center justify-center" style={{height:"calc(100vh - 55px)"}}>
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
              className="w-[420px] "
            />
          </div>

        </div>
      </main>

      {/* Services */}

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-1 text-gray-800">
            Our Services
          </h2>
          <p className='text-center my-3 text-[#8f8f8f]'>Expert guidance for managing funds in alignment with Islamic <br /> principles,
            helping you make informed, halal investment <br /> decisions.</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                style={{ backgroundColor: service.bg }}
                className="rounded-lg shadow-md p-6 flex flex-col justify-between hover:shadow-lg transition duration-300 ease-in-out"
              >
                {/* Top: Image + Title */}
                <div className="flex items-center mb-4">
                  <img
                    src={service.image}
                    alt="Service"
                    className="w-10 h-10 mr-3"
                  />
                  <h3 className="text-lg font-semibold text-gray-800">
                    {service.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-gray-600 text-sm mb-6">
                  {service.description}
                </p>

                {/* Learn More Button */}
                <button className="mt-auto bg-[#152032] text-white px-4 py-2 rounded-md hover:bg-[#05070a] text-sm">
                  Learn More
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
      <TeamCarousel />
      <DoubleCarousel />
      <MediaCarousel />
      <StudenSayCarousel />
      <FAQ />
      <Consultation />
      
    </>
  )
}
