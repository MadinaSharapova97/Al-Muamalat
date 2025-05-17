import React from 'react'

export default function Consultation() {
    return (
        <div className='py-20 px-4 md:px-0 '>
            <div className='flex flex-col md:flex-row max-w-6xl md:h-[420px] mx-auto items-center justify-center'>
                {/* left */}
                <div className='p-12 bg-[#FAE9D3] w-full  md:w-3/4 h-full '>
                    <h2 className='text-[#D28527] font-semibold text-2xl mb-3'>Workshops and Spiritual Development</h2>
                    <p className='text-[#D28527]'>Participate in our weekly workshops focused on Islamic studies and spiritual growth. These sessions are designed to help you strengthen your connection with faith and acquire essential skills for daily life</p>
                </div>
                {/* right */}
                <div className='p-12 bg-[#F9F7F3] w-full md:w-2/3 h-full'>
                    <h2 className='text-[#152032] font-semibold text-2xl mb-3'>Free consultation</h2>
                    <p className='text-[#030303]'>Leave your phone number, and we will reach out to provide you with complete information about our courses. </p>
                    <div className='flex flex-col items-center justify-center gap-6 mt-4'>
                        <input type="text" placeholder='Name' className='border border-[#686868] rounded-md p-2 w-full' />
                        <input type="text" placeholder='Number' className='border border-[#686868] rounded-md p-2 w-full' />
                        <div className='flex items-center justify-center gap-2'>
                            <input type="checkbox" />
                            <p className='text-[#152032]'>I agree to the use of my personal information for consultation purposes.</p>
                        </div>
                        <button className='bg-[#009688] w-full p-2 rounded-md text-white font-semibold hover:bg-[#02443e]'>Submit</button>
                    </div>
                </div>
            </div>

        </div>
    )
}
