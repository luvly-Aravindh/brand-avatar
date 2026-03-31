import React from "react";
import bgImage from "../assets/image.webp";
import girlImage from "../assets/girl.svg";

const HeroSection = () => {
  return (
    <div
      className="relative w-full text-white bg-cover bg-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* 🔥 GRADIENT OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/60 to-black z-10" />

      {/* MAIN CONTAINER */}
      <div className="relative z-20 flex flex-col h-full px-4 sm:px-6 md:px-12 lg:px-24 pt-20 pb-20">
        
        {/* 🔥 TOP CENTER HEADING */}
        <div className="text-center max-w-7xl mx-auto">
          <h1 className="text-4xl sm:text-4xl md:text-[98px] head leading-tight md:leading-[85px]">
            ONE PARTNER. <br />
            <span className="text-purple-500">
              TOTAL OWNERSHIP.
            </span>
          </h1>
        </div>

        {/* 🔥 MIDDLE SECTION */}
        <div className="flex flex-col lg:flex-row flex-1 items-center justify-between mt-8 md:mt-0 gap-10">
          
          {/* LEFT CONTENT */}
          <div className="max-w-xl flex flex-col justify-center lg:relative lg:-top-20 text-center lg:text-left">
            <h4 className="text-[30px] sm:text-3xl md:text-6xl text-gray-300 head leading-tight">
              <span>From Concept To</span> <br />
              <span className="text-white">
                Applause, Everything <br className="block sm:hidden" />
                Runs Through <br className="block sm:hidden" />
                One Team.
              </span>
            </h4>

            <p className="mt-4 text-base sm:text-lg md:text-3xl font-semibold text-gray-300">
              Brand Avatar manages the entire event lifecycle so your team stays
              focused on what matters: the brand, the guests, and the outcome.
            </p>
          </div>

          {/* RIGHT IMAGE */}
          <div className="flex justify-end relative top-0 sm:-top-20">
            <img
              src={girlImage}
              alt="model"
              className="h-full sm:h-[88vh] object-cover"
            />
          </div>
        </div>

        {/* 🔥 BOTTOM GRID */}
        <div className="border border-gray-400 mb-10 md:mb-20 mt-0">
          <div className="grid grid-cols-1 sm:grid-cols-2">
            {[
              "Ideate event strategy and concept design",
              "Venue planning and stage production",
              "Guest experience and registration systems",
              "Technology, lighting, and AV production",
              "On-ground event management",
              "Post-event reporting and insights",
            ].map((item, i) => (
              <div
                key={i}
                className="border border-gray-400 p-3 sm:p-4 text-center font-bold text-sm sm:text-lg md:text-2xl text-gray-300"
              >
                {item}
              </div>
            ))}
          </div>

          <p className="text-center text-sm sm:text-base md:text-2xl text-gray-400 py-4 px-4">
            Every project is led by a{" "}
            <span className="font-semibold text-white">
              senior event strategist
            </span>{" "}
            with a dedicated production team behind them.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;