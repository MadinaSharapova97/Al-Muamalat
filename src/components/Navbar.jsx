import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import Logo from '../assets/images/Logo.png';
import { Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { Request } from '../pages/services/Request';

export default function Navbar() {

  const getUserToken = localStorage.getItem("testUserToken");
  

  const countries = [
    {
      name: 'Uzb',
      code: 'uz',
      flag: 'https://flagcdn.com/w40/uz.png',
    },
    {
      name: 'US',
      code: 'us',
      flag: 'https://flagcdn.com/w40/us.png',
    }
  ];

  const programs = [
    {
      name: "International educational programs",
      link: "programs"
    },
    {
      name: "Specialized courses"
    },
    {
      name: "Certification program"
    },
  ]

  const { data, isLoading, error } = useQuery({
    queryKey: ['courseData'],
    queryFn: () =>
      Request.get('/courses/main')
  })

  const [selected, setSelected] = useState(countries[0]);
  const [open, setOpen] = useState(false);
  const [programOpen, setProgramOpen] = useState(false);

  return (

    <nav className="relative w-full bg-white shadow-md">
      <div className="max-w-7xl  mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img src={Logo} alt="Logo" className="h-8 w-8" />
          <span className="text-xl font-bold text-[#009688]">AL MUAMALAT</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-[70px]">
          <ul className='flex items-center gap-10'>

            <li>
              <Link to="home" className="text-[#8f8f8f] hover:text-[#009688]">Home</Link>
            </li>
            <li>
              {/* Programs */}
              <div to='programs' className='flex items-center justify-center gap-8'>
                <div className="relative w-full">
                  <button
                    className="w-full flex items-center gap-2"
                    onMouseOver={() => setProgramOpen(!programOpen)}
                    onMouseLeave={() => setProgramOpen(programOpen)}
                  >
                    <div className="flex items-center gap-2">
                      <span className="text-[#8f8f8f]">Programs</span>
                    </div>
                    <ChevronDown className="w-4 h-4 text-gray-500" />
                  </button>

                  {programOpen && (
                    <ul
                      onMouseLeave={() => setProgramOpen(false)}
                      className="absolute mt-4 w-[260px] bg-white rounded-md shadow-lg z-10 px-3">
                      {data?.data?.data?.map((programs) => (
                        <li
                          key={programs?.course_id}
                          className="w-full flex py-2 border-t-2 items-center gap-2 cursor-pointer mt-2 hover:bg-gray-100"
                        >
                          <Link to={`/programs/${programs?.course_id}`} className='text-[#8f8f8f]'>{programs.name_uz}</Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </li>
            <li>
              <Link to="finance" className="text-[#8f8f8f] hover:text-[#009688]">Finance Tools</Link>
            </li>
            <li>
              <Link to="contact" className="text-[#8f8f8f] hover:text-[#009688]">Contact</Link>
            </li>
          </ul>

        </div>

        {/* Right - Language & Sign In */}
        <div className="hidden md:flex items-center gap-8 relative">

          {/* Language Dropdown with flags */}

          <div className='flex items-center justify-center gap-8'>
            <div className="relative w-full">
              <button
                className="w-full flex items-center gap-2"
                onClick={() => setOpen(!open)}
              >
                <div className="flex items-center gap-2">
                  <img src={selected.flag} alt={selected.name} className="w-7 h-5" />
                  <span className="text-[#8f8f8f]">{selected.name}</span>
                </div>
                <ChevronDown className="w-4 h-4 text-gray-500" />
              </button>

              {open && (
                <ul className="absolute mt-1 w-full bg-white rounded-md shadow-lg z-10 p-2">
                  {countries.map((country) => (
                    <li
                      key={country.code}
                      onClick={() => {
                        setSelected(country);
                        setOpen(false);
                      }}
                      className="flex items-center gap-2 cursor-pointer mt-2 hover:bg-gray-100"
                    >
                      <img src={country.flag} alt={country.name} className="w-7 h-5" />
                      <span className='text=[#8f8f8f]'>{country.name}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>

          <Link to='register' className='w-[120px] p-2 text-center text-white font-semibold rounded-md  bg-[#009688] hover:bg-[#025e55]' >Sign Up</Link>
        </div>



      </div>
    </nav>
  );
}

