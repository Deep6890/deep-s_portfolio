import React, { useState, useEffect } from 'react'
import Linkedin from '../assets/LinkedIn.svg'
import Github from '../assets/GitHub.png'
import Instagram from '../assets/256px-Instagram_icon.png'
export default function Ending() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        mobile: '',
        notes: ''
    })
    const [visitors, setVisitors] = useState(0)

    useEffect(() => {
        // Track visitor count (exclude admin)
        const isAdmin = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1'
        if (!isAdmin) {
            const currentCount = localStorage.getItem('visitorCount') || '0'
            const newCount = parseInt(currentCount) + 1
            localStorage.setItem('visitorCount', newCount.toString())
            setVisitors(newCount)
        } else {
            const currentCount = localStorage.getItem('visitorCount') || '0'
            setVisitors(parseInt(currentCount))
        }
    }, [])

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const timestamp = new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })
        const message = `🌟 *New Portfolio Contact* 🌟%0A%0A👤 *Name:* ${formData.name}%0A📧 *Email:* ${formData.email}%0A📱 *Mobile:* ${formData.mobile}%0A%0A💬 *Message:*%0A${formData.notes || 'No additional message'}%0A%0A⏰ *Contacted on:* ${timestamp}%0A🌐 *From:* Portfolio Website%0A📊 *Total Portfolio Views:* ${visitors.toLocaleString()}`
        const whatsappUrl = `https://wa.me/917016332374?text=${message}`
        window.open(whatsappUrl, '_blank')
        setFormData({ name: '', email: '', mobile: '', notes: '' })
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
            <div className='text-center max-w-2xl w-full px-8'>
                {/* Large Email Icon */}
                <div className='mb-8'>
                    {/* <div className='w-24 h-24 mx-auto bg-black rounded-full flex items-center justify-center mb-4'>
                        <span className='text-white text-4xl'>✉</span>
                    </div> */}
                    {/* <div className='w-16 h-1 bg-black mx-auto'></div> */}
                </div>

                <div className='relative mb-16 text-center'>
                    <h1 className='font-display text-7xl font-bold text-gray-800 mb-4 tracking-tight'>
                        <span className='bg-gradient-to-r from-gray-900 via-gray-700 to-gray-500 bg-clip-text text-transparent'>
                            Let's Talk
                        </span>
                        <span className='text-4xl font-light text-gray-400 ml-2'>& Build</span>
                    </h1>
                    <div className='flex items-center justify-center gap-4 mt-6'>
                        <div className='w-16 h-px bg-gradient-to-r from-transparent to-gray-300'></div>
                        <span className='font-mono text-sm text-gray-500 px-4'>START A CONVERSATION</span>
                        <div className='w-16 h-px bg-gradient-to-l from-transparent to-gray-300'></div>
                    </div>
                    <p className='text-sm text-gray-500 mt-6'>Portfolio Views: {visitors.toLocaleString()}</p>
                </div>

                <form onSubmit={handleSubmit} className='space-y-6 max-w-lg'>
                    <div className='relative'>
                        <input
                            type='text'
                            name='name'
                            value={formData.name}
                            onChange={handleInputChange}
                            placeholder='Your Name'
                            className='w-full px-6 py-4 text-lg border-2 border-gray-800 bg-transparent focus:outline-none focus:border-gray-600 transition-colors'
                            required
                        />
                        <div className='absolute -bottom-2 -right-2 w-full h-full border-2 border-gray-300 -z-10'></div>
                    </div>

                    <div className='relative'>
                        <input
                            type='email'
                            name='email'
                            value={formData.email}
                            onChange={handleInputChange}
                            placeholder='Your Email'
                            className='w-full px-6 py-4 text-lg border-2 border-gray-800 bg-transparent focus:outline-none focus:border-gray-600 transition-colors'
                            required
                        />
                        <div className='absolute -bottom-2 -right-2 w-full h-full border-2 border-gray-300 -z-10'></div>
                    </div>

                    <div className='relative'>
                        <input
                            type='tel'
                            name='mobile'
                            value={formData.mobile}
                            onChange={handleInputChange}
                            placeholder='Mobile Number'
                            className='w-full px-6 py-4 text-lg border-2 border-gray-800 bg-transparent focus:outline-none focus:border-gray-600 transition-colors'
                            required
                        />
                        <div className='absolute -bottom-2 -right-2 w-full h-full border-2 border-gray-300 -z-10'></div>
                    </div>

                    <div className='relative'>
                        <textarea
                            name='notes'
                            value={formData.notes}
                            onChange={handleInputChange}
                            placeholder='Additional Notes (Optional)'
                            rows='3'
                            className='w-full px-6 py-4 text-lg border-2 border-gray-800 bg-transparent focus:outline-none focus:border-gray-600 transition-colors resize-none'
                        />
                        <div className='absolute -bottom-2 -right-2 w-full h-full border-2 border-gray-300 -z-10'></div>
                    </div>

                    <button
                        type='submit'
                        className='w-full py-4 px-6 bg-green-600 text-white text-lg font-semibold hover:bg-green-700 transition-colors relative'
                    >
                        <div className='absolute -bottom-2 -right-2 w-full h-full bg-gray-300 -z-10'></div>
                        Send via WhatsApp
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
                        <a href='https://www.linkedin.com/in/deep-kayastha-763514319/' target='_blank' rel='noopener noreferrer' className='flex flex-col items-center group'>
                            <div className='w-16 h-16 flex items-center justify-center hover:scale-110 transition-transform'>
                                <img src={Linkedin} alt='LinkedIn' className='w-12 h-12 object-contain' />
                            </div>
                            <p className='text-sm text-gray-600 mt-2'>LinkedIn</p>
                        </a>

                        {/* GitHub */}
                        <a href='https://github.com/Deep6890' target='_blank' rel='noopener noreferrer' className='flex flex-col items-center group'>
                            <div className='w-16 h-16 flex items-center justify-center hover:scale-110 transition-transform'>
                                <img src={Github} alt='GitHub' className='w-12 h-12 object-contain' />
                            </div>
                            <p className='text-sm text-gray-600 mt-2'>GitHub</p>
                        </a>

                        {/* Instagram */}
                        <a href='https://www.instagram.com/deep__kayastha/' target='_blank' rel='noopener noreferrer' className='flex flex-col items-center group'>
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
