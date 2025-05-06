import React from 'react'
import Tick from '../assets/images/tick.png'

export default function Programs() {
    return (
        <main className='max-w-7xl mx-auto px-4 py-10'>
            <div>
                <h1 className='text-2xl md:text-4xl text-center text-[#152032] font-semibold '>International educational programs</h1>
                <p className='text-center text-[#686868] font-semibold mt-3'>Al Muamalat Education's international study programs <br /> offer an in-depth learning experience at leading Islamic <br /> financial institutions around the world.</p>
                <section className='flex flex-col md:flex-row gap-10 mt-10'>
                    {/* left */}
                    <div className='bg-[#F3F8FF] p-7 rounded-lg '>
                        <h2 className='text-2xl text-center font-semibold'>What you'll learn</h2>
                        <ul>
                            <li className='flex items-center gap-2 mt-3 '>
                                <img src={Tick} alt="" />
                                <p className='font-semibold'>Gain a comprehensive understanding of Islamic finance principles and ethics.</p>
                            </li>
                            <li className='flex items-center gap-2 mt-3 '>
                                <img src={Tick} alt="" />
                                <p className='font-semibold'>Build a portfolio with 10+ real-world projects in Islamic financial services.</p>
                            </li>
                            <li className='flex items-center gap-2 mt-3 '>
                                <img src={Tick} alt="" />
                                <p className='font-semibold'>Learn to develop and manage Sharia-compliant financial products.</p>
                            </li>
                            <li className='flex items-center gap-2 mt-3 '>
                                <img src={Tick} alt="" />
                                <p className='font-semibold'>Master key concepts in Islamic banking, investment, and wealth management.</p>
                            </li>
                            <li className='flex items-center gap-2 mt-3 '>
                                <img src={Tick} alt="" />
                                <p className='font-semibold'>Gain a comprehensive understanding of Islamic finance principles and ethics.</p>
                            </li>
                            <li className='flex items-center gap-2 mt-3 '>
                                <img src={Tick} alt="" />
                                <p className='font-semibold'>Gain a comprehensive understanding of Islamic finance principles and ethics.</p>
                            </li>
                        </ul>

                    </div>
                    {/* right */}
                    <div>
                        <h2>What you'll learn</h2>
                        <ul>
                            <li className='flex items-center gap-2'>
                            <img src={Tick} alt="" />
                            <p>Gain a comprehensive understanding of Islamic finance principles and ethics.</p>
                        </li>
                    </ul>

            </div>
        </section>
            </div>
        </main>
    )
}
