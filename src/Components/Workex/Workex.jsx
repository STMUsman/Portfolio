import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleChevronDown } from '@fortawesome/free-solid-svg-icons'


const Workex = () => {
    return (
        <div className="w-full text-[#FFFFFF] h-screen bg-transparent flex items-center justify-center px-24">
            <div className="bg-transparent w-1/2 h-full">
                <div className="flex items-center gap-8">
                    <div className="text-[160px] text-[#FFFFFF] font-semibold flex justify-center items-center">15</div>
                    <div className="text-2xl text-[#FFFFFF]">Years of working experience as a web designer & developer</div>
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
                <div>
                    <div></div>
                    <div></div>
                </div>
                <div>
                    <div>Happy Clients | 1234</div>
                    <div>Stet no et lorem dolor et diam, amet duo ut dolore vero eos. No stet est diam amet diam ipsum clita labore dolor duo clita.</div>
                </div>
                <div>
                    <div>Projects Completed | 1234</div>
                    <div>Stet no et lorem dolor et diam, amet duo ut dolore vero eos. No stet est diam amet diam ipsum clita labore dolor duo clita.</div>
                </div>
            </div>

        </div>
    );
};

export default Workex;
