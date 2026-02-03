"use client";
import React, { useEffect, useRef } from "react";
import Agent from "./Image"; // Adjust path as needed

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
    <div ref={main} className="relative min-h-screen overflow-hidden bg-black">
      
      {/* 1. The Scrolling Background */}
      <div className="absolute inset-0 z-0">
        <Agent />
      </div>

      {/* 2. Overlays for readability (Matching your orange theme) */}
      <div className="absolute inset-0 bg-black/60 z-10"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent z-10"></div>

      {/* 3. Content */}
      <div className="relative z-20 w-full h-full">
        <section className="flex flex-col md:flex-row items-center justify-between min-h-screen text-white px-6 sm:px-12 md:px-20 py-20">
          
          <div className="w-full md:w-[65%] text-center md:text-left flex flex-col items-center md:items-start">
            <h1 ref={mainTextRef} className="text-4xl sm:text-5xl md:text-7xl font-bold leading-tight">
              We only <span className="text-[#ec6f46]">teach</span> what we are{" "}
              <span className="italic">really</span> really{" "}
              <span className="text-[#ec6f46]">good</span> at.
            </h1>

            <p ref={subTextRef} className="mt-6 text-gray-300 text-lg md:text-xl max-w-xl">
              Empowering minds through code, creativity, and collaboration — we are{" "}
              <span className="text-[#ec6f46] font-semibold">CSA</span>, the heart of innovation.
            </p>

            <button ref={buttonRef} className="mt-10 bg-[#ec6f46] text-white font-bold px-8 py-4 rounded-full hover:bg-[#d45d3a] transition-colors shadow-2xl">
              Explore Technical Clubs
            </button>
          </div>

          <div className="hidden md:block md:w-[30%]"></div>
        </section>
      </div>
    </div>
  );
};

export default HeroSection;