import React, { useState } from 'react'
import Linkedin from '../assets/linkedin.svg'
import Github from '../assets/GitHub.png'
import Instagram from '../assets/256px-Instagram_icon.png'
export default function Ending() {
    const [email, setEmail] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('Email submitted:', email)
        setEmail('')
    }

    return (
        <div className='h-screen w-screen flex items-center justify-center relative'>
            {/* Geometric Design Elements */}
            <div className='absolute top-20 left-20 w-32 h-32 border-4 border-gray-300 rotate-45 opacity-20'></div>
            <div className='absolute top-40 right-32 w-24 h-24 bg-gray-200 rounded-full opacity-30'></div>
            <div className='absolute bottom-32 left-40 w-40 h-40 border-2 border-gray-400 opacity-25'></div>
            <div className='absolute bottom-20 right-20 w-20 h-20 bg-gray-300 rotate-12 opacity-20'></div>

            {/* Diagonal Lines */}
            <div className='absolute top-0 left-1/4 w-px h-full bg-gray-200 opacity-30 rotate-12'></div>
            <div className='absolute top-0 right-1/3 w-px h-full bg-gray-200 opacity-30 -rotate-12'></div>

            {/* Main Content */}
            <div className='text-center max-w-md w-full px-8'>
                {/* Large Email Icon */}
                <div className='mb-8'>
                    {/* <div className='w-24 h-24 mx-auto bg-black rounded-full flex items-center justify-center mb-4'>
                        <span className='text-white text-4xl'>✉</span>
                    </div> */}
                    {/* <div className='w-16 h-1 bg-black mx-auto'></div> */}
                </div>

                <h1 className='text-5xl font-bold mb-4 text-gray-800'>Drop Your Email</h1>
                <p className='text-xl text-gray-600 mb-12'>Let's connect and collaborate</p>

                <form onSubmit={handleSubmit} className='space-y-8'>
                    <div className='relative'>
                        <input
                            type='email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder='Enter your email address'
                            className='w-full px-6 py-4 text-lg border-2 border-gray-800 bg-transparent focus:outline-none focus:border-gray-600 transition-colors'
                            required
                        />
                        <div className='absolute -bottom-2 -right-2 w-full h-full border-2 border-gray-300 -z-10'></div>
                    </div>

                    <button
                        type='submit'
                        className='w-full py-4 px-6 bg-black text-white text-lg font-semibold hover:bg-gray-800 transition-colors relative'
                    >
                        <div className='absolute -bottom-2 -right-2 w-full h-full bg-gray-300 -z-10'></div>
                        Send Message
                    </button>
                </form>

                <p className='text-sm text-gray-500 mt-8'>
                    I'll get back to you within 24 hours
                </p>

                {/* Social Links */}
                <div className='mt-12'>
                    <p className='text-lg text-gray-700 mb-6'>Or connect with me on:</p>
                    <div className='flex justify-center items-center space-x-8'>
                        {/* LinkedIn */}
                        <a href='https://linkedin.com' target='_blank' rel='noopener noreferrer' className='flex flex-col items-center group'>
                            <div className='w-16 h-16 flex items-center justify-center hover:scale-110 transition-transform'>
                                <img src={Linkedin} alt='LinkedIn' className='w-12 h-12 object-contain' />
                            </div>
                            <p className='text-sm text-gray-600 mt-2'>LinkedIn</p>
                        </a>

                        {/* GitHub */}
                        <a href='https://github.com' target='_blank' rel='noopener noreferrer' className='flex flex-col items-center group'>
                            <div className='w-16 h-16 flex items-center justify-center hover:scale-110 transition-transform'>
                                <img src={Github} alt='GitHub' className='w-12 h-12 object-contain' />
                            </div>
                            <p className='text-sm text-gray-600 mt-2'>GitHub</p>
                        </a>

                        {/* Instagram */}
                        <a href='https://instagram.com' target='_blank' rel='noopener noreferrer' className='flex flex-col items-center group'>
                            <div className='w-16 h-16 flex items-center justify-center hover:scale-110 transition-transform'>
                                <img src={Instagram} alt='Instagram' className='w-12 h-12 object-contain' />
                            </div>
                            <p className='text-sm text-gray-600 mt-2'>Instagram</p>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}
