import React from "react";
import logo from "../assets/logo.svg";
import personImg from "../assets/profile.webp";
import starBg from "../assets/ani-bg.svg";
import buttonBg from "../assets/button-bg.png";
import circleIcon from "../assets/circle-icon.png";
import circleIcon2 from "../assets/circle-icon-2.png";

const AvatarHero = () => {
  return (
    <section className="w-full bg-[#FFE600] overflow-hidden relative">
      
      {/* Container */}
      <div className="max-w-7xl mx-auto px-4 py-10 md:pt-20 md:pb-12 grid md:grid-cols-2 items-center gap-10">
        
        {/* LEFT CONTENT */}
        <div className="text-center md:text-left z-10">
          
          {/* Logo */}
          <img
            src={logo}
            alt="logo"
            className="h-16 md:h-16 mb-4 md:mb-6 mx-auto md:mx-0 md:relative md:-top-16"
          />

          {/* Heading */}
          <h1 className="text-[48px] sm:text-4xl md:text-[90px] font-extrabold leading-[55px] md:leading-[85px] text-black text-center md:text-center">
            THE EVENT <br />
            PARTNER BRANDS <br />
            CALL WHEN IT HAS <br />
            TO GO RIGHT
          </h1>

          {/* Subtext */}
          <p className="mt-4 md:mt-6 text-lg sm:text-base text-black/80 text-center md:text-center">
            You host the moment. We handle everything behind it.
          </p>

          {/* CTA */}
    <button
  className="mt-5 md:mt-6 mx-auto block text-center text-white text-xl sm:text-lg md:text-3xl px-5 sm:px-6 md:px-8 py-3 sm:py-4 md:py-6 font-bold shadow-lg transition-all duration-300 bg-cover bg-center hover:scale-105"
  style={{
    backgroundImage: `url(${buttonBg})`,
  }}
>
  PLAN YOUR EVENT WITH OUR TEAM
</button>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative flex justify-center md:justify-start mt-10 md:mt-0">
          
          {/* Background Star Shape */}
          <img
            src={starBg}
            alt="bg-shape"
            className="absolute w-[340px] sm:w-[300px] md:w-full -top-4 sm:-top-10 md:-top-20 left-1/2 -translate-x-1/2 md:left-auto md:translate-x-0 md:-left-28 z-0"
          />

          {/* Person Image */}
          <img
            src={personImg}
            alt="person"
            className="relative z-10 w-[350px] sm:w-[260px] md:w-full"
          />

          {/* Decorative circle (hide on mobile) */}
          <img
            src={circleIcon2}
            alt="circle icon"
            className="hidden md:block absolute  sm:-bottom-16 -left-[40rem] w-28 h-28 object-contain"
          />

          {/* Small dot */}
          <div className="absolute bottom-10 md:bottom-44 left-1/2 md:left-0 -translate-x-1/2 md:translate-x-0 w-2 h-2 md:w-3 md:h-3 bg-purple-600 rounded-full"></div>
        </div>
      </div>

      {/* Floating elements */}

      {/* Top circle (adjusted for mobile) */}
      <img
        src={circleIcon}
        alt="circle icon"
        className="absolute -top-6 right-4 md:-top-10 md:left-96 w-16 h-16 md:w-28 md:h-28 object-contain"
      />

      {/* Bottom dot */}
      <div className="absolute bottom-4 left-4 md:-bottom-44 md:left-10 w-2 h-2 md:w-3 md:h-3 bg-purple-600 rounded-full"></div>

    </section>
  );
};

export default AvatarHero;