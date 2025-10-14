"use client";

import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Agent = () => {
  const imageContainerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const imageElement = imageContainerRef.current;
    if (!imageElement) return;

    // Entry animation
    gsap.from(imageElement, {
      duration: 1.2,
      autoAlpha: 0,
      scale: 0.95,
      y: -20,
      ease: "power3.out",
      delay: 0.5,
    });

    // Scroll-triggered downward movement
    gsap.to(imageElement, {
      y: 130, // move down 130px
      ease: "none",
      scrollTrigger: {
        trigger: imageElement,
        start: "top 80%", 
        end: "bottom top",
        scrub: 1,
        // markers: true, // enable for debugging
      },
    });

    // Cleanup on unmount
    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <div className="relative w-full -z-50"> {/* enough height to scroll */}
      <div
        ref={imageContainerRef}
        className="absolute top-[0vh] h-[85vw] w-[90vw] max-h-[350px] left-1/2 -translate-x-1/2 
                   md:left-auto md:right-20 md:top-[25vh] md:h-[30vw] md:w-[38vw] md:max-h-none md:translate-x-0 
                   rounded-xl border border-[#EC6F46]/40 overflow-hidden 
                   shadow-[0_0_30px_5px_rgba(236,111,70,0.3)]"
      >
        <video
          src="/AQPe6BZdkzQZk_Rk2uYEQo8d8jOoKwNynfiYXUgGmblUFxgSPAPUYDq-erHnxweo8FPZzu--jMban2624P_u69jRqikKA0jX6oA5wcM.mp4"
          className="h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
        />
        <div className="absolute inset-0 w-full h-full bg-[#EC6F46]/70 mix-blend-multiply"></div>
      </div>
    </div>
  );
};

export default Agent;
