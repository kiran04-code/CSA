"use client";

import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const ClubsSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const textRef = useRef<HTMLDivElement | null>(null);
  const imageRef = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          end: "bottom 60%",
          toggleActions: "play none none reverse",
        },
      });

      tl.from(textRef.current, {
        x: -100,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
      });

      tl.from(
        imageRef.current,
        {
          x: 100,
          opacity: 0,
          scale: 0.9,
          duration: 1.2,
          ease: "power3.out",
        },
        "-=0.8"
      );

      // Floating idle animation for image
      gsap.to(imageRef.current, {
        y: -10,
        duration: 2,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative text-white  md:px-20 px-10 flex flex-col-reverse md:flex-row items-center justify-between gap-14 overflow-hidden"
    >
      <div className="flex-1 flex items-center justify-center">
        <Image
         width={450}
          height={450}
          src="/Gemini_Generated_Image_1fxne11fxne11fxn-removebg-preview(1).png"
          alt="Club Illustration"
          className="w-full max-w-md object-contain rounded-2xl   duration-700"
        />
      </div>
      {/* Left Content */}
      <div className="flex-1 md:pr-10">
        <h2  className="font-heading text-4xl md:text-5xl font-bold mb-6 leading-tight [text-shadow:0_0_15px_#EC6F46]">
          Our <span className="text-[#EC6F46]">Domains</span>
        </h2>
        <p className="text-gray-200  leading-relaxed md:w-[90%] text-xl base">
          Explore{" "}
          <span className="text-[#ec6f46] font-semibold">
            AI, Web Development, IoT, Blockchain, Cybersecurity, and Data
            Analytics
          </span>{" "}
          with our clubs. Each domain empowers students to create, learn, and
          collaborate on groundbreaking projects. We believe in fostering a
          community that drives innovation and technological excellence.
        </p>
        <div className="mt-6 inline-block border border-[#EC6F46] text-[#EC6F46] px-6 py-2 rounded-lg font-medium hover:bg-[#EC6F46] hover:text-white transition duration-300">
          Explore Our Domains
        </div>
      </div>

      {/* Right Content / Image */}

      {/* Subtle Background Glow */}
    
    </section>
  );
};

export default ClubsSection;
