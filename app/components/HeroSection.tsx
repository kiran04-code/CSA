"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Agent from "./Image";

const HeroSection = () => {
  const main = useRef<HTMLDivElement>(null);
  const mainTextRef = useRef(null);
  const subTextRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { duration: 1, ease: "power3.out" } });

      tl.from(mainTextRef.current, { y: 80, opacity: 0 })
        .from(subTextRef.current, { y: 40, opacity: 0 }, "-=0.5")
        .from(buttonRef.current, { y: 30, opacity: 0, scale: 0.8 }, "-=0.4");
    }, main);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={main} className="relative overflow-hidden md:px-15">
      {/* 🔸 Background Video */}
    

      {/* 🔸 Orange Overlay — fixed z-index */}
      <div className="absolute inset-0 bg-[#ec6f46]/50 mix-blend-multiply -z-0"></div>

      {/* 🔸 Agent Component */}
      <Agent />

      <section className="relative flex flex-col md:mt-0  mt-16  md:flex-row justify-between items-center min-h-[100vh] text-white px-8 md:px-8">
        {/* Background Glows */}
        <div className="absolute md:flex hidden top-20 left-10 w-[400px] h-[400px] bg-[#ec6f46]/15 blur-[350px] rounded-full -z-0"></div>
        <div className="absolute md:flex hidden  bottom-10 right-10 w-[400px] h-[400px] bg-[#ec6f46]/20 blur-[180px] rounded-full -z-0"></div>

        {/* Left Content */}
        <div className="relative z-10 w-full md:w-[65%] mt-10 md:mt-0">
          <h1
            ref={mainTextRef}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight"
          >
            We only <span className="text-[#ec6f46]">teach</span> what we are{" "}
            <span className="italic">really</span> really{" "}
            <span className="text-[#ec6f46] font-semibold">good</span> at.
          </h1>

          <p
            ref={subTextRef}
            className="mt-6 text-gray-100 text-lg md:text-xl max-w-xl leading-relaxed"
          >
            Empowering minds through code, creativity, and collaboration — we are{" "}
            <span className="text-[#ec6f46] font-semibold">
              Computer Student Association
            </span>
            , the heart of innovation and technology at our campus.
          </p>

          <button
            // ref={buttonRef}
            className="mt-10 z-10 bg-[#ec6f46] text-black font-semibold px-8 py-3 rounded-lg text-[12px] md:text-lg hover:bg-[#e4640f] transition-all duration-300"
          >
            Explore Our Technical Clubs
          </button>
        </div>

        {/* Right Content */}
        <div className="relative z-10 mt-10 md:mt-0 md:w-[30%]"></div>
      </section>
    </div>
  );
};

export default HeroSection;
