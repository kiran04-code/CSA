"use client";

import React, { useEffect, useRef } from "react";
import Agent from "./Image";
import Image from "next/image";

const HeroSection = () => {
  const main = useRef(null);
  const mainTextRef = useRef(null);
  const subTextRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    if (window.gsap) {
      const ctx = window.gsap.context(() => {
        const tl = window.gsap.timeline({ defaults: { duration: 1, ease: "power3.out" } });

        tl.from(mainTextRef.current, { y: 80, opacity: 0 })
          .from(subTextRef.current, { y: 40, opacity: 0 }, "-=0.5")
          .from(buttonRef.current, { y: 30, opacity: 0, scale: 0.8 }, "-=0.4");
      }, main);

      return () => ctx.revert();
    }
  }, []);

  return (
    <div ref={main} className="relative overflow-hidden  bg-black">
      
      <div className="absolute inset-0 bg-[#ec6f46]/40 mix-blend-multiply z-10 pointer-events-none"></div>
      <div className="relative z-20 w-full">
        <Agent />
        
        <section className="flex flex-col md:flex-row items-center justify-between min-h-screen text-white px-6 sm:px-12 md:px-20 py-20 md:py-0">
          
          {/* Left Content: Text scales and aligns for mobile */}
          <div className="w-full md:w-[65%] text-center md:text-left flex flex-col items-center md:items-start">
            <h1
              ref={mainTextRef}
              className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight"
            >
              We only <span className="text-[#ec6f46]">teach</span> what we are{" "}
              <span className="italic">really</span> really{" "}
              <span className="text-[#ec6f46] font-semibold">good</span> at.
            </h1>

            <p
              ref={subTextRef}
              className="mt-6 text-gray-200 text-base sm:text-lg md:text-xl max-w-xl leading-relaxed opacity-90"
            >
              Empowering minds through code, creativity, and collaboration — we are{" "}
              <span className="text-[#ec6f46] font-semibold">
                Computer Student Association
              </span>
              , the heart of innovation and technology at our campus.
            </p>

            <button
              ref={buttonRef}
              className="mt-8 md:mt-10 bg-[#ec6f46] text-black font-bold px-6 py-3 md:px-8 md:py-4 rounded-lg text-sm md:text-lg hover:scale-105 transition-all duration-300 shadow-xl"
            >
              Explore Our Technical Clubs
            </button>
          </div>

          {/* Right Content Spacer: Maintains layout balance on desktop */}
          <div className="hidden md:block md:w-[30%]"></div>
          
        </section>
      </div>
    </div>
  );
};

export default HeroSection;