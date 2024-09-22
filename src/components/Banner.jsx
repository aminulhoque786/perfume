import React from "react";
import "./banner.css";
import "slick-carousel/slick/slick.css";
import Slider from "react-slick";

import "slick-carousel/slick/slick-theme.css";
const Banner = () => {
  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    waitForAnimate: false,
  };

  

  return (
    <>
  <div className="bg-banner text-center bg-center bg-cover bg-no-repeat h-[800px] py-[250px] relative">
  <div className="max-w-container mx-auto md:p-10 flex flex-col items-center justify-center">
    <h1 className="text-[30px] text-white md:text-6xl font-pops lg:font-bold mb-4 text-center">
      Welcome to Our Website
    </h1>

    {/* Buttons */}
    <div className="flex gap-4 mt-4 justify-center">
      <button className="px-3 py-2 lg:px-6 lg:py-3 hover:text-white text-black duration-500 bg-white hover:bg-slate-400 font-semibold rounded-md">
        Explore Our Purpose
      </button>
      <button className="px-2 lg:px-6 lg:py-3 hover:text-white bg-white duration-500 hover:bg-slate-400 text-black font-semibold rounded-md">
        Contact Us
      </button>
    </div>
  </div>

  {/* Arrow at the bottom */}
  <div
    className="absolute bottom-4 left-1/2 transform -translate-x-1/2 cursor-pointer"
    onClick={() => {
      window.scrollTo({
        top: document.body.scrollHeight,
        behavior: "smooth",
      });
    }}
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      className="w-12 h-12 text-white animate-bounce"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M19 9l-7 7-7-7"
      />
    </svg>
  </div>
</div>



  {/* Scrollable section */}
  <div className="max-w-container mx-auto mt-4">
    <div className="field">
      
    </div>
  </div>


    
    </>
  )
};

export default Banner;
