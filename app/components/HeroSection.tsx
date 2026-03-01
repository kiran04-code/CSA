"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import Agent from "./Image";

const HeroSection = () => {
  const main = useRef(null);
const handleScroll = () => {
    // Make sure your EventSection has id="latest-event"
    const eventSection = document.getElementById("latest-event");
    if (eventSection) {
      eventSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power4.inOut", duration: 1.5 } });

      tl.from(".hero-bg", { opacity: 0, filter: "grayscale(100%)", scale: 1.1, duration: 2 })
        .from(".big-title span", { 
          y: 200, 
          rotate: 5, 
          stagger: 0.1, 
          opacity: 0 
        }, "-=1.5")
        .from(".sub-info", { opacity: 0, y: 20 }, "-=0.8")
        .from(".cta-line", { width: 0, transformOrigin: "left" }, "-=1");
    }, main);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={main} className="relative min-h-screen w-full bg-[#0a0a0a] flex flex-col justify-center items-center overflow-hidden">
      
      {/* 1. Subtle Background Image */}
      <div className="hero-bg absolute inset-0 z-0 opacity-40">
        <Agent />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-transparent to-[#0a0a0a]" />
      </div>

      {/* 2. Massive Background Text (Watermark Style) */}
      <div className="absolute inset-0 flex items-center justify-center select-none pointer-events-none opacity-[0.09] z-10">
        <h2 className="text-[30vw] font-black text-[#fff] leading-none tracking-tighter">CSA</h2>
      </div>

      {/* 3. Main Content */}
      <div className="relative z-20 flex flex-col items-center text-center px-4">
        
        <h1 className="big-title text-white text-[10vw] md:text-[8vw] font-black leading-[0.8] tracking-[-0.05em] uppercase">
          <span className="block">TEACHING</span>
          <span className="block text-[#ec6f46] ">EXCELLENCE.</span>
        </h1>

        <div className="sub-info mt-12 flex flex-col items-center">
          <p className="text-gray-400 text-sm md:text-lg max-w-lg font-light tracking-wide leading-relaxed">
            We don't follow trends. We set the standard. <br/>
            The core hub for <span className="text-white border-b border-[#ec6f46]">Technical Mastery</span>.
          </p>

        {/* --- HIGH VISIBILITY CTA --- */}
{/* --- ARCHITECTURAL CTA BUTTON --- */}
<button 
  onClick={handleScroll}
  className="cta-btn group mt-20 relative flex items-center gap-6 transition-all duration-500 active:scale-95"
>
  {/* Left Side: Number/Status Indicator */}
  <div className="flex flex-col items-end">
    <span className="text-[#ec6f46] font-mono text-[10px] leading-none font-bold tracking-tighter">01</span>
    <div className="h-8 w-[1px] bg-gradient-to-b from-[#ec6f46] to-transparent mt-1 group-hover:h-12 transition-all duration-500"></div>
  </div>

  {/* Main Button Body: Glass + Border */}
  <div className="relative overflow-hidden border border-white/10 bg-white/5 backdrop-blur-md px-12 py-5 rounded-sm transition-all duration-500 group-hover:border-[#ec6f46]/50 group-hover:bg-[#ec6f46]/5">
    
    {/* Moving Glint Effect */}
    <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />

    <div className="relative z-10 flex items-center gap-4">
      <span className="text-white text-xs md:text-sm font-black uppercase tracking-[0.6em] group-hover:tracking-[0.8em] transition-all duration-500">
        New Event
      </span>
      
      {/* Small Arrow Icon */}
      <svg 
        width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"
        className="text-[#ec6f46] group-hover:translate-x-2 transition-transform duration-500"
      >
        <path d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path>
      </svg>
    </div>

    {/* Bottom Glow bar */}
    <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#ec6f46] group-hover:w-full transition-all duration-700" />
  </div>

  {/* Background Glow Shadow */}
  <div className="absolute -inset-4 bg-[#ec6f46]/20 blur-3xl opacity-0 group-hover:opacity-40 transition-opacity duration-700 pointer-events-none" />
</button>
        </div>
      </div>

  

    </div>
  );
};

export default HeroSection;