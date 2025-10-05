"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Agent from "./Image";


const HeroSection = () => {
  const mainTextRef = useRef(null);
  const subTextRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { duration: 1, ease: "power3.out" } });

    tl.from(mainTextRef.current, { y: 80, opacity: 0 })
      .from(subTextRef.current, { y: 40, opacity: 0 }, "-=0.5")
      .from(buttonRef.current, { y: 30, opacity: 0, scale: 0.8 }, "-=0.4");
  }, []);

  return (
   <div>
    <Agent/>
     <section className="relative flex flex-col mt-10 md:flex-row justify-between items-center min-h-[90vh] text-white px-8 md:px-8 overflow-hidden">
      {/* Video Background */}
      
    <div className="md:p-5">
        {/* <video
        src="/83c745cf.mp4" // place this in public folder
        autoPlay
        loop
        muted
        className="absolute inset-0 w-full h-full object-cover -z-0"
      /> */}

    </div>
      {/* Slight dark overlay so text pops */}
      <div className="absolute inset-0 bg-black/30 -z-20"></div>

      {/* Background Glow */}
      <div className="absolute top-20 left-10 w-[400px] h-[400px] bg-[#ec6f46]/30 blur-[150px] rounded-full -z-10"></div>
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-[#ec6f46]/20 blur-[180px] rounded-full -z-10"></div>

      {/* Left Content */}
      <div className="relative z-10 w-full md:w-[65%] mt-10 md:mt-0">
        <h1
          // ref={mainTextRef}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight"
        >
          We only <span className="text-[#ec6f46]">teach</span> what we are{" "}
          <span className="italic">really</span> really{" "}
          <span className="text-[#ec6f46] font-semibold">good</span> at.
        </h1>

        <p
          // ref={subTextRef}
          className="mt-6 text-gray-100 text-lg md:text-xl max-w-xl leading-relaxed"
        >
          Empowering minds through code, creativity, and collaboration — we are{" "}
          <span className="text-[#ec6f46] font-semibold">
            Computer Student Association
          </span>
          , the heart of innovation and technology at our campus.
        </p>

        <button

          className="mt-10 z-10 bg-[#ec6f46] text-black font-semibold px-8 py-3 rounded-lg text-[12px] md:text-lg hover:bg-[#e4640f] transition-all duration-300"
        >
          Explore Our Technical Clubs
        </button>
      </div>

      {/* Right Content */}

      <div className="relative z-10 mt-10 md:mt-0 md:w-[30%] text-gray-100 text-sm sm:text-base leading-relaxed md:text-right">
        <p>
          Join our journey to explore{" "}
          <span className="text-[#ec6f46]">AI, Web, IoT, and Cybersecurity</span>.
          Collaborate with innovators, lead impactful projects, and shape the
          future of technology.
        </p>
      </div>
    </section>
   </div>
  );
};

export default HeroSection;
