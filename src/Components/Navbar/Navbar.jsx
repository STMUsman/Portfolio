import React from 'react';

const Navbar = () => {
    return (
        <div className='w-full px-24 py-4 h-auto flex justify-between bg-[#000000] items-center'>
            <div className='w-auto h-auto'>
                <h1 className='text-[#7FFF00] font-bold text-2xl'>&lt;/&gt; | usmandev</h1>
            </div>
            <div>
                <ul className='flex gap-8 text-sm text-[#F5F5F5] font-semibold'>
                    <li className='hover:text-[#7FFF00] transition duration-300 cursor-pointer'>HOME</li>
                    <li className='hover:text-[#7FFF00] transition duration-300 cursor-pointer'>ABOUT US</li>
                    <li className='hover:text-[#7FFF00] transition duration-300 cursor-pointer'>SERVICES</li>
                    <li className='hover:text-[#7FFF00] transition duration-300 cursor-pointer'>WORKS</li>
                </ul>
            </div>
            <div>
                <button className='bg-[#7FFF00] px-9 py-2.5 rounded-full text-sm text-[#000000] font-semibold shadow-md hover:bg-[#5ACC00] hover:text-[#222222] transition duration-300'>
                    HIRE ME
                </button>
            </div>
        </div>
    );
};

export default Navbar;
