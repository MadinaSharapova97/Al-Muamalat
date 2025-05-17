import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';




export default function MobileNavbarMenu() {

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
            name: "International educational programs"
        },
        {
            name: "Specialized courses"
        },
        {
            name: "Certification program"
        },
    ]


    const [menuOpen, setMenuOpen] = useState(false);
    const [selected, setSelected] = useState(countries[0]);
    const [open, setOpen] = useState(false);
    const [programOpen, setProgramOpen] = useState(false);
    return (
        <>

            {/* Mobile Toggle */}
            <div>
                <button className="flex md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
                    {menuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>

                {/* Mobile Menu */}
                {menuOpen && (
                    <div className="absolute top-[50px] left-0 w-full flex flex-col items-center justify-center  md:hidden bg-white px-4 pt-4 pb-6 space-y-3">
                        <Link to="home" className="block text-[#8f8f8f]">Home</Link>


                        {/* Programs */}
                        <Link to='programs' className='flex items-center justify-center gap-8'>
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
                        </Link>




                        <Link to="finance" className="block text-[#8f8f8f]">Finance Tools</Link>
                        <Link to="contact" className="block text-[#8f8f8f]">Contact</Link>

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

                        <Link to='register' className="w-full mt-2 bg-[#009688] text-white px-4 py-2 rounded-md">
                            Sign In
                        </Link>
                    </div>
                )}
            </div>
        </>

    )
}
