import React from "react";
import borderImg from "../assets/border-bg.png";
import starIcon from "../assets/star.png";
import boltIcon from "../assets/bolt.png";
import smileIcon from "../assets/emoji.png";
import emojiIcon from "../assets/smile.png";
import pinkButtonBg from "../assets/button-bg.png";
import yellowBoxBg from "../assets/yellow-button-bg.png";

const RealitySection = () => {
  return (
    <section className="bg-black text-white pt-36 px-4 relative overflow-hidden">

      <div className="max-w-5xl mx-auto text-center">

        {/* ================= TOP BADGE ================= */}
        <div className="relative mb-14 flex justify-center">
          <img src={borderImg} className="w-full max-w-3xl" />

          <div className="absolute inset-0 flex items-center justify-center px-10">

            <div className="flex items-center gap-5">
              <img src={starIcon} className="w-12" />
              <div className="text-left leading-tight">
                <p className="text-2xl text-gray-400">TRUSTED BY</p>
                <p className="text-yellow-400 font-extrabold text-2xl">
                  80+ BRANDS &nbsp;
                </p>
              </div>
            </div>

            <div className="flex items-center gap-5">
              <img src={boltIcon} className="w-8" />
              <p className="text-yellow-400 font-extrabold text-2xl">200+</p>
              <img src={smileIcon} className="w-12" />
              <p className="text-2xl text-gray-200">EVENTS DELIVERED</p>
            </div>

          </div>
        </div>

        {/* ================= HEADING ================= */}
        <h2 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6 tracking-tight">
          THE REALITY MOST{" "}
          <span className="inline-block align-middle">
            <img src={emojiIcon} className="w-20 inline" />
          </span>{" "}
          BRANDS FACE
        </h2>

        {/* ================= SUBTEXT ================= */}
        <p className="text-gray-300 text-lg md:text-2xl mb-10">
          Planning an event shouldn’t turn into <br />
          endless vendor follow-ups.
        </p>

        {/* ================= CONTENT ================= */}
        <div className="space-y-5 text-gray-400 text-sm md:text-2xl">

          <p className="opacity-80">
            Most corporate events fall apart before they even begin.
          </p>

          <div className="border-t-2 border-dashed border-gray-700"></div>

          <p className="text-yellow-400 font-extrabold uppercase tracking-wide">
            NOT BECAUSE THE IDEA WAS BAD, BUT BECAUSE THE EXECUTION GETS SCATTERED.
          </p>

          <div className="border-t-2 border-dashed border-gray-700"></div>

          <p>
            Different vendors for stage, registration, production, and logistics.
          </p>

          <div className="border-t-2 border-dashed border-gray-700"></div>

          <p>
            Soon your team is busy managing vendors instead of running the event.
          </p>

          <div className="border-t-2 border-dashed border-gray-700"></div>

          <p>
            And when something goes wrong, nobody owns it.
          </p>

        </div>

{/* ================= YELLOW TICKET ================= */}
<div className="mt-12 w-full flex justify-center">
  <div
    className="
      w-full
      max-w-5xl
      text-center
      text-black font-bold
      text-lg md:text-4xl
      py-6 md:py-10
      px-6 md:px-20
      bg-no-repeat bg-center bg-cover
      flex items-center justify-center
    "
    style={{
      backgroundImage: `url(${yellowBoxBg})`,
    }}
  >
    That’s exactly what Brand Avatar is here to fix
  </div>
</div>

{/* ================= CTA ================= */}


<div className="relative mt-10 flex justify-center">

  {/* HORIZONTAL DASH LINE (BEHIND) */}
  <div className="absolute top-12 w-full max-w-ful border-t-2 border-dashed border-yellow-400"></div>

  {/* BUTTON */}
  <button
    className="
      relative z-10
      text-white text-3xl px-8 py-6 font-bold
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

    </section>
  );
};

export default RealitySection;