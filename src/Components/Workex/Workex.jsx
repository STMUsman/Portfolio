import React from "react";
import about1 from '../Assets/about-1.jpg'
import about2 from '../Assets/about-2.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleChevronDown } from '@fortawesome/free-solid-svg-icons'


const Workex = () => {
    return (
        <div className="w-full text-[#FFFFFF] h-screen bg-transparent flex items-center gap-14 justify-center px-24">
            <div className="bg-transparent w-1/2 h-full">
                <div className="w-full  flex gap-8">
                    <div className="text-[160px] text-[#FFFFFF] font-semibold">15</div>
                    <div className="text-2xl text-[#FFFFFF] font-medium flex items-center">Years of working experience as a web designer & developer</div>
                </div>

                <div className="font-normal text-[#B0B0B0] text-base mt-4">
                    Stet no et lorem dolor et diam, amet duo ut dolore vero eos. No stet est diam rebum amet diam ipsum.
                    Clita clita labore, dolor duo nonumy clita sit at, sed sit sanctus dolor eos.
                </div>

                <ul className="mt-7 text-[#E0E0E0] flex flex-col gap-5">
                    <li className="font-normal text-base flex gap-5 items-center"><FontAwesomeIcon icon={faCircleChevronDown} className="text-[#7FFF00] text-base" />Affordable Prices</li>
                    <li className="font-normal text-base  flex gap-5 items-center"><FontAwesomeIcon icon={faCircleChevronDown} className="text-[#7FFF00] text-base" />High Quality Product</li>
                    <li className="font-normal text-base  flex gap-5 items-center"><FontAwesomeIcon icon={faCircleChevronDown} className="text-[#7FFF00] text-base" />On Time Project Delivery</li>
                </ul>

                <div className="mt-10">
                    <button className="bg-[#7FFF00] text-base font-medium text-[#000000] px-10 py-4 rounded-lg hover:bg-[#5CD800] transition">
                        Read More
                    </button>
                </div>
            </div>

            <div className="bg-transparent w-1/2 h-full">
                <div className="flex gap-4.5">
                    <div className="rounded-2xl overflow-hidden"><img src={about1} alt="" /></div>
                    <div className="rounded-2xl overflow-hidden"><img src={about2} alt="" /></div>
                </div>
                <div className="mt-10">
                    <div className="text-[#CCCCCC] text-xl font-medium flex items-center">Happy Clients <span className="mx-3.5 font-thin">|</span> <strong className="text-3xl text-[#7FFF00] font-medium">1234</strong></div>
                    <div className="text-[#B0B0B0] font-normal text-sm mt-4">Stet no et lorem dolor et diam, amet duo ut dolore vero eos. No stet est diam amet diam ipsum clita labore dolor duo clita.</div>
                </div>
                <div className="mt-6">
                    <div className="text-[#CCCCCC] text-xl font-medium flex items-center">Projects Completed <span className="mx-3.5 font-thin">|</span> <strong className="text-3xl text-[#7FFF00] font-medium">1234</strong></div>
                    <div className="text-[#B0B0B0] font-normal text-sm mt-4">Stet no et lorem dolor et diam, amet duo ut dolore vero eos. No stet est diam amet diam ipsum clita labore dolor duo clita.</div>
                </div>
            </div>

        </div>
    );
};

export default Workex;
