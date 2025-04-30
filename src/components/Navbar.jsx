import React, { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import Logo from '../assets/images/Logo.png';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [programsOpen, setProgramsOpen] = useState(false);


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
    },
    {
      name: 'Ru',
      code: 'ru',
      flag: 'https://flagcdn.com/w40/ru.png',
    },
  ];

  const programs = [
    {
      name:"International educational programs"
    },
    {
      name:"Specialized courses"
    },
    {
      name:"Certification program"
    },
  ]

  const [selected, setSelected] = useState(countries[0]);
  const [open, setOpen] = useState(false);
  const [programOpen, setProgramOpen] = useState(false);

  return (



    <nav className="relative w-full bg-white shadow fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img src={Logo} alt="Logo" className="h-8 w-8" />
          <span className="text-xl font-bold text-[#009688]">AL MUAMALAT</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-10">
          <a href="#" className="text-[#8f8f8f] hover:text-[#009688]">Home</a>

             {/* Programs */}
             <div className='flex items-center justify-center gap-8'>
                <div className="relative w-full">
                  <button
                    className="w-full flex items-center gap-2"
                    onClick={() => setProgramOpen(!programOpen)}
                  >
                    <div className="flex items-center gap-2">
                      <span className="text-[#8f8f8f]">Programs</span>
                    </div>
                    <ChevronDown className="w-4 h-4 text-gray-500" />
                  </button>

                  {programOpen && (
                    <ul className="absolute mt-4 w-[260px] bg-white rounded-md shadow-lg z-10 px-3">
                      {programs.map((programs) => (
                        <li
                          key={programs.code}
                          className="w-full flex py-2 border-t-2 items-center gap-2 cursor-pointer mt-2 hover:bg-gray-100"
                        >
                          <Link to='/' className='text-[#8f8f8f]'>{programs.name}</Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>

          <a href="#" className="text-[#8f8f8f] hover:text-[#009688]">Finance Tools</a>
          <a href="#" className="text-[#8f8f8f] hover:text-[#009688]">Contact</a>
          {/* Right - Language & Sign In */}
          <div className=" md:flex items-center gap-8 relative">

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
              <button className='w-[120px] p-2 text-white font-semibold rounded-md  bg-[#009688] hover:bg-[#025e55]' >Sign In</button>
            </div>

          </div>
        </div>



        {/* Mobile Toggle */}
        <div>
          <button className="flex md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Mobile Menu */}
          {menuOpen && (
            <div className="absolute top-[50px] left-0 w-full flex flex-col items-center justify-center  md:hidden bg-white px-4 pt-4 pb-6 space-y-3">
              <a href="#" className="block text-[#8f8f8f]">Home</a>


              {/* Programs */}
              <div className='flex items-center justify-center gap-8'>
                <div className="relative w-full">
                  <button
                    className="w-full flex items-center gap-2"
                    onClick={() => setProgramOpen(!programOpen)}
                  >
                    <div className="flex items-center gap-2">
                      <span className="text-[#8f8f8f]">Programs</span>
                    </div>
                    <ChevronDown className="w-4 h-4 text-gray-500" />
                  </button>

                  {programOpen && (
                    <ul className="absolute mt-1 w-[180px] bg-white rounded-md shadow-lg z-10 p-2">
                      {programs.map((programs) => (
                        <li
                          key={programs.code}
                          className="w-full flex items-center gap-2 cursor-pointer mt-2 hover:bg-gray-100"
                        >
                          <Link to={'/'} className='text-[#8f8f8f]'>{programs.name}</Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>




              <a href="#" className="block text-[#8f8f8f]">Finance Tools</a>
              <a href="#" className="block text-[#8f8f8f]">Contact</a>

              {/* Language selector */}
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

              <button className="w-full mt-2 bg-[#009688] text-white px-4 py-2 rounded-md">
                Sign In
              </button>
            </div>
          )}
        </div>

      </div>
    </nav>
  );
}

