import React from 'react'
import { Link } from 'react-router-dom'

export default function Contact() {
    return (
        <div className='max-w-7xl mx-auto px-4 py-10'>
            <div className='max-w-7xl mx-auto flex flex-col md:flex-row  space-x-10'>
                {/* left */}
                <div className='w-full'>
                    <h1 className='text-5xl font-semibold'>Let’s Talk</h1>
                    <p className='mt-3 text-[#686868] text-xl'>
                        Have some big idea or brand to develop and need help? <br /> Then reach out we'd love to hear about your project <br />  and provide help</p>

                    <h3 className='text-2xl font-semibold mt-6'>Email</h3>
                    <p className='text-[#686868] mt-3'>beebs@gmail.com</p>

                    <h3 className='text-2xl font-semibold mt-6'>Socials</h3>
                    <div className='flex flex-col'>
                        <Link to='' className='text-[#686868] mt-3'>Instagram</Link>
                        <Link to='' className='text-[#686868] mt-3'>Twitter</Link>
                        <Link to='' className='text-[#686868] mt-3'>Facebook</Link>
                    </div>

                </div>

                {/* right */}
                <div className='bg-red- w-full'>
                    <form>
                        <label htmlFor="Name" className='text-xl font-semibold'>Name</label> <br />
                        <input type="text" placeholder='Name' className='bg-[#F7F7F7] p-3 w-full mt-2 mb-8 rounded-md outline-none' />
                        <label htmlFor="Email" className='text-xl font-semibold'>Email</label> <br />
                        <input type="text" placeholder='Email' className='bg-[#F7F7F7] p-3 w-full mt-2 mb-8 rounded-md outline-none' />

                        <label htmlFor="Service" className='text-xl font-semibold'>What service are you interested in</label> <br />
                        <input type="text" placeholder='Select project type' className='bg-[#F7F7F7] p-3 w-full mt-2 mb-8 rounded-md outline-none' />
                        <label htmlFor="Budget" className='text-xl font-semibold'>Budget</label> <br />
                        <input type="text" placeholder='Select project budget' className='bg-[#F7F7F7] p-3 w-full mt-2 mb-8 rounded-md outline-none' />
                        <label htmlFor="Massage" className='text-xl font-semibold'>Message</label> <br />
                        <textarea name="" id="" className='bg-[#F7F7F7] p-3 w-full h-[100px] mt-2 mb-8 rounded-md outline-none'></textarea>
                    </form>
                </div>

            </div>

        </div>
    )
}
