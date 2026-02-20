"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import Agent from "./Image";

const HeroSection = () => {
  const main = useRef(null);

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

          {/* Minimalist CTA */}
          <button className="group mt-16 flex flex-col items-center gap-4">
            <span className="text-white text-xs font-bold tracking-[0.4em] uppercase group-hover:text-[#ec6f46] transition-colors">
              Explore The Vault
            </span>
            <div className="cta-line w-32 h-[1px] bg-white/20 relative overflow-hidden">
              <div className="absolute inset-0 bg-[#ec6f46] -translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
            </div>
          </button>
        </div>
      </div>

  

    </div>
  );
};

export default HeroSection;