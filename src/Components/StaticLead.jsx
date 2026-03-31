import React from "react";
import grayStrip from "../assets/gray-bg.svg";
import blueStrip from "../assets/navyblue-bg.svg";
import pinkButtonBg from "../assets/button-bg.png";

const StaticLead = () => {
  return (
    <div className="relative w-full h-[140px] md:h-[200px] overflow-hidden flex items-center justify-center py-20 md:py-44">

      {/* GRAY STRIP */}
      <div className="absolute w-[160%] md:w-[140%] rotate-[2deg] z-10">
        <img
          src={grayStrip}
          alt="gray"
          className="w-full h-[60px] md:h-[90px] object-cover opacity-90"
        />
      </div>

      {/* BLUE STRIP */}
      <div className="absolute w-[160%] md:w-[140%] rotate-[-4deg] flex items-center justify-center z-20">

        {/* Background */}
        <img
          src={blueStrip}
          alt="blue"
          className="absolute w-full h-[55px] md:h-[85px] object-cover"
        />

        {/* STATIC TEXT */}
        <div className="relative text-center px-3 md:px-4">
          <p className="text-white font-bold text-sm sm:text-base md:text-3xl tracking-wide md:tracking-wider">
            One Brief | One Point of Contact | Zero Coordination Chaos
          </p>
        </div>

      </div>

      {/* 🔥 BUTTON SECTION */}
      <div className="absolute bottom-[-5px] md:bottom-[-8px] w-full flex justify-center">

        {/* DASH LINE */}
        <div className="absolute top-6 md:top-12 w-full border-t-2 border-dashed border-yellow-400"></div>

        {/* BUTTON */}
        <button
          className="
            relative z-10
            text-white text-md sm:text-base md:text-3xl
            px-4 sm:px-5 md:px-8
            py-2 sm:py-3 md:py-6
            font-bold
            bg-cover bg-center
            transition-all duration-300 hover:scale-105
          "
          style={{
            backgroundImage: `url(${pinkButtonBg})`,
          }}
        >
          START PLANNING YOUR EVENT
        </button>

      </div>
    </div>
  );
};

export default StaticLead;