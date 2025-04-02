import React from 'react'

const About = () => {
    return (
        <div className='w-full h-screen bg-transparent flex items-center justify-center px-24'>
            <div className='w-1/2'>
                <h1 className='text-white text-[40px] font-medium'>Skills & Experience</h1>
                <p className='text-[#F5F5F5] mt-10 font-normal'>
                    Stet no et lorem dolor et diam, amet duo ut dolore vero eos. No stet est diam rebum amet diam ipsum clita dolor duo clita sit.
                </p>
                <h2 className='text-white text-3xl mt-6 font-medium'>My Skills</h2>
                <div className='mt-4'>
                    <div className='flex gap-4'>
                        <div className='w-20 h-20 bg-gray-700'></div>
                        <div className='w-20 h-20 bg-gray-700'></div>
                        <div className='w-20 h-20 bg-gray-700'></div>
                    </div>
                    <div className='flex gap-4 mt-4'>
                        <div className='w-20 h-20 bg-gray-700'></div>
                        <div className='w-20 h-20 bg-gray-700'></div>
                        <div className='w-20 h-20 bg-gray-700'></div>
                    </div>
                </div>
            </div>
            <div className='w-1/2'></div>
        </div>
    )
}

export default About
