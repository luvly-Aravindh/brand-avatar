import React from "react";
import logo from "../assets/logo.svg";
import personImg from "../assets/person.svg";
import starBg from "../assets/ani-bg.svg"; // purple splash shape
import buttonBg from "../assets/button-bg.png";
import circleIcon from "../assets/circle-icon.png";
import circleIcon2 from "../assets/circle-icon-2.png"

const AvatarHero = () => {
  return (
    <section className="w-full bg-[#FFE600] overflow-hidden relative">
      
      {/* Container */}
      <div className="max-w-7xl mx-auto px-4 py-12 md:pt-20 md:pb-12 grid md:grid-cols-2 items-center gap-0">
        
        {/* LEFT CONTENT */}
        <div className="text-center md:text-left z-10">
          
          {/* Logo */}
          <img src={logo} alt="logo" className="h-16 mb-6 mx-auto md:mx-0 relative -top-16" />

          {/* Heading */}
          <h1 className="text-3xl sm:text-[90px] font-extrabold leading-tight sm:leading-[85px] text-black text-center">
            THE EVENT <br />
            PARTNER BRANDS <br />
            CALL WHEN IT HAS <br />
            TO GO RIGHT
          </h1>

          {/* Subtext */}
          <p className="mt-6 text-sm sm:text-base text-black/80 text-center">
            You host the moment. We handle everything behind it.
          </p>

          {/* CTA */}
<button
  className="mt-6 mx-auto block text-white text-3xl px-8 py-6 font-bold shadow-lg transition-all duration-300 bg-cover bg-center hover:scale-105"
  style={{
    backgroundImage: `url(${buttonBg})`,
  }}
>
  PLAN YOUR EVENT WITH OUR TEAM
</button>

        </div>

        {/* RIGHT IMAGE */}
        <div className="relative flex justify-center md:justify-start">
          
          {/* Background Star Shape */}
          <img
            src={starBg}
            alt="bg-shape"
            className="absolute w-[280px] sm:w-full -top-10 md:-top-20 -left-28 z-0"
          />

          {/* Person Image */}
          <img
            src={personImg}
            alt="person"
            className="relative z-10 w-[250px] sm:w-full"
          />

          {/* Decorative circle */}
<img
  src={circleIcon2}
  alt="circle icon"
  className="absolute -bottom-1 -left-[40rem] w-28 h-28 object-contain"
/>      <div className="absolute bottom-44 left-0 w-3 h-3 bg-purple-600 rounded-full"></div>
        </div>
      </div>

      {/* Small floating dots */}
<img
  src={circleIcon}
  alt="circle icon"
  className="absolute -top-10 left-96 w-28 h-28 object-contain"
/>      <div className="absolute -bottom-44 left-10 w-3 h-3 bg-purple-600 rounded-full"></div>

    </section>
  );
};

export default AvatarHero;