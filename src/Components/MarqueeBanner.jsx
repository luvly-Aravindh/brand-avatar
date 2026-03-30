import React from "react";
import grayStrip from "../assets/gray-bg.svg";
import blueStrip from "../assets/navyblue-bg.svg";

const MarqueeBanner = ({ speed = 20 }) => {
  const text =
    "100+ EVENTS DELIVERED ACROSS SOUTH INDIA | TRUSTED BY 80+ BRANDS | END-TO-END EVENT OWNERSHIP | 200+ EVENTS DELIVERED";

  return (
    <div className="relative w-full h-[340px] overflow-hidden flex items-center justify-center">

      {/* GRAY STRIP */}
      <div className="absolute w-[140%] rotate-[0deg] z-10">
        <img
          src={grayStrip}
          alt="gray"
          className="w-full h-[100px] object-cover opacity-90"
        />
      </div>

      {/* BLUE STRIP */}
      <div className="absolute w-[140%] rotate-[-5deg] flex items-center justify-center z-20">

        {/* Background */}
        <img
          src={blueStrip}
          alt="blue"
          className="absolute w-full h-[95px] object-cover"
        />

        {/* MARQUEE */}
        <div className="relative w-full overflow-hidden">
          <div
            className="flex"
            style={{
              animation: `marquee ${speed}s linear infinite`,
              willChange: "transform",
            }}
          >
            {/* FIRST SET */}
            <div className="flex shrink-0">
              {Array.from({ length: 2 }).map((_, i) => (
                <span
                  key={`first-${i}`}
                  className="whitespace-nowrap text-white font-bold text-lg md:text-xl px-16 tracking-wider"
                >
                  {text}
                </span>
              ))}
            </div>

            {/* SECOND SET (DUPLICATE FOR LOOP) */}
            <div className="flex shrink-0">
              {Array.from({ length: 2 }).map((_, i) => (
                <span
                  key={`second-${i}`}
                  className="whitespace-nowrap text-white font-bold text-lg md:text-xl px-16 tracking-wider"
                >
                  {text}
                </span>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default MarqueeBanner;