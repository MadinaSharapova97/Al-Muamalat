import React from 'react'
// import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa'
// import { AiFillLinkedin } from 'react-icons/ai'

import { Link } from 'react-router-dom'

// images import
import Dior from '../assets/images/dior.png'
import Youtube from '../assets/images/youtube.png'
import Facebook from '../assets/images/facebook.png'
import Twittter from '../assets/images/twitter.png'
import Instagram from '../assets/images/instagram.png'

export default function Footer() {
    return (
        <footer className="bg-[#009688] text-white py-12">
            <div className="container mx-auto flex flex-col items-center gap-4 pb-8 border-b border-white">
                <div className='flex items-center gap-3'>
                    <img src={Dior} alt="" />
                    <h1 className='text-3xl font-bold'>Dior <br /> design</h1>
                </div>
                <ul className="flex gap-8 mt-4">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/">About</Link></li>
                    <li><Link to="/">Service</Link></li>
                    <li><Link to="/">Contact Us</Link></li>
                </ul>
                <div className='flex gap-4 mt-4'>
                    <img src={Youtube} alt="" />
                    <img src={Facebook} alt="" />
                    <img src={Twittter} alt="" />
                    <img src={Instagram} alt="" />
                </div>
            </div>
            <p className='text-center mt-6 text-[#CFD3D7]'>Copyright Satyam Studio</p>
        </footer>
    )
}
