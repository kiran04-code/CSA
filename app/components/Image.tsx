"use client";

import React, { useRef, useEffect } from "react";
// Assuming GSAP and ScrollTrigger are loaded globally
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Agent = () => {
  const imageContainerRef = useRef(null);

  useEffect(() => {
    const gsap = window.gsap;
    if (!gsap || !gsap.ScrollTrigger) {
      console.warn("GSAP or ScrollTrigger not found. Animations will not run.");
      return;
    }

    gsap.registerPlugin(gsap.ScrollTrigger);

    const imageElement = imageContainerRef.current;
    if (!imageElement) return;

    // A subtle animation for when the component first loads
    gsap.from(imageElement, {
      duration: 1.2,
      autoAlpha: 0, // Fades in the element (opacity and visibility)
      scale: 0.95,    // Gently scales up
      y: -20,         // Rises slightly
      ease: "power3.out",
      delay: 0.5,     // A slight delay to let the page settle
    });


    // Existing scroll animation - UPDATED y value
    gsap.to(imageElement, {
      y: -130, // Moves upwards on scroll by 130px
      opacity: 0,
      ease: "none",
      scrollTrigger: {
        trigger: imageElement,
        start: "top 50%", // Animation starts when the top of the video hits the middle of the screen
        end: "bottom top", // Animation ends when the bottom of the video leaves the top of the screen
        scrub: true, // Smoothly scrubs the animation as you scroll
      },
    });
  }, []);

  return (
    <div className="relative w-full h-0 -z-20">
      {/* Container for the video element */}
      <div
        ref={imageContainerRef}
        className="absolute top-[20vh] h-[55vw] w-[85vw] max-h-[350px] left-1/2 -translate-x-1/2 
                   md:left-auto md:right-20 md:top-[25vh] md:h-[30vw] md:w-[38vw] md:max-h-none md:translate-x-0 
                   rounded-xl border border-[#EC6F46]/40 overflow-hidden 
                   shadow-[0_0_30px_5px_rgba(236,111,70,0.3)]" // New glowing shadow effect
      >
        <video
          src={
            "/AQPe6BZdkzQZk_Rk2uYEQo8d8jOoKwNynfiYXUgGmblUFxgSPAPUYDq-erHnxweo8FPZzu--jMban2624P_u69jRqikKA0jX6oA5wcM.mp4"
          }
          className="h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
        />
        {/* Orange Overlay: Opacity reduced for a more subtle effect */}
        <div className="absolute inset-0 w-full h-full bg-[#EC6F46]/40 mix-blend-multiply"></div>
      </div>
    </div>
  );
};

export default Agent;

