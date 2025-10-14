"use client";

import React, { useEffect, useRef } from "react";
import Agent from "./Image";
import Image from "next/image";

// The component that was imported as "Agent" is not defined.
// You will need to create and import this component for your 3D model to appear.
// For now, I've commented out its usage to prevent errors.
// import Agent from "./Image"; 

// Note: GSAP is now expected to be loaded via a <script> tag in your main HTML file,
// for example: <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>

const HeroSection = () => {
  const main = useRef(null);
  const mainTextRef = useRef(null);
  const subTextRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    // Ensure gsap is available on the window object before running animations
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
    // Use min-h-screen to ensure the section always fills at least the viewport height
    <div ref={main} className="relative md:px-10 overflow-hidden min-h-screen bg-black">
      {/* BACKGROUND IMAGE: 
        - Replaced Next.js <Image> with a standard <img> tag.
        - Used Tailwind classes to make it cover the full screen.
      */}
      <Image
        src="/background-pattern.svg"
        alt="Background pattern"
        className="absolute inset-0 w-full h-full object-cover z-100"
        aria-hidden="true"
        width={250}
        height={250}
      />
      
      {/* OVERLAY: Placed on top of the background image with a higher z-index */}
      <div className="absolute inset-0 bg-[#ec6f46]/50 mix-blend-multiply z-10"></div>

      {/* CONTENT WRAPPER:
        - All content is placed inside this wrapper.
        - `relative` and a higher z-index (`z-20`) ensure it sits on top of the background and overlay.
      */}
      <div className="relative z-20">
        {/* Placeholder for the Agent component */}
        <Agent />
        <section className="flex flex-col md:mt-0 mt-5 md:flex-row justify-between items-center min-h-screen text-white px-8 md:px-12">
          {/* Left Content */}
          <div className="w-full md:w-[65%] mt-10 md:mt-0">
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
              ref={buttonRef} // Re-enabled the ref for the animation
              className="mt-10 bg-[#ec6f46] text-black font-semibold px-8 py-3 rounded-lg text-sm md:text-lg hover:bg-[#d95a3a] transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Explore Our Technical Clubs
            </button>
          </div>

          {/* Right Content (empty spacer) */}
          <div className="mt-10 md:mt-0 md:w-[30%]"></div>
        </section>
      </div>
    </div>
  );
};

export default HeroSection;

