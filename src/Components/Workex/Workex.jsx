import React from "react";

const Workex = () => {
  return (
    <div className="w-full text-[#f5f5f5] h-screen bg-transparent flex items-center justify-center px-24">
      <div className="bg-transparent w-1/2 h-full">
        <div className="flex items-center gap-8">
          <div className="text-[160px] font-semibold flex justify-center items-center">15</div>
          <div className="text-2xl">Years of working experience as a web designer & developer</div>
        </div>

        <div className="font-normal text-base mt-4">
          Stet no et lorem dolor et diam, amet duo ut dolore vero eos. No stet est diam rebum amet diam ipsum.
          Clita clita labore, dolor duo nonumy clita sit at, sed sit sanctus dolor eos.
        </div>

        <ul className="mt-7 flex flex-col gap-5">
          <li className="font-normal text-base">Affordable Prices</li>
          <li className="font-normal text-base">High Quality Product</li>
          <li className="font-normal text-base">On Time Project Delivery</li>
        </ul>

        <div className="mt-6">
          <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition">
            Read More
          </button>
        </div>
      </div>

      <div className="bg-transparent w-1/2 h-full"></div>

    </div>
  );
};

export default Workex;
