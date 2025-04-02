import React from 'react';
import image from '../Assets/handsome-young-man-shirt-pointing-fingers-left-promo-showing-logo-standing-blue-background-removebg-preview.png';

const Hero = () => {
    return (
        <div className='w-full px-24 justify-between items-center flex h-screen bg-[#000000]'>
            <div className='flex flex-col gap-8'>
        
                <p className='text-[#F5F5F5] font-bold text-6xl leading-tight'>
                    Hello, my <br /> name is <strong className='text-[#7FFF00]'>Usman</strong>. <br /> I'm a <strong className='text-[#7FFF00]'>full-stack <br />  developer</strong>.
                </p>

                <div className='flex gap-4'>
                    <button className='bg-[#7FFF00] border-2 border-[#7FFF00] px-9 py-4.5 rounded-full text-[#000000] font-semibold text-sm shadow-md hover:bg-[#5ACC00] hover:text-[#222222] transition duration-300'>
                        CONTACT ME
                    </button>
                    <button className='text-[#F5F5F5] border-2 border-[#7FFF00] px-9 py-4.5 rounded-full font-semibold text-sm hover:bg-[#5ACC00] hover:text-[#000000] transition duration-300'>
                        DOWNLOAD CV
                    </button>
                </div>
            </div>
            <div>
                <img className='w-[600px]' src={image} alt="Usman" />
            </div>
        </div>

    );
};

export default Hero;
