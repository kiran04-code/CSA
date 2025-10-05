"use client";

import React from "react";
import { gsap } from "gsap";

import { Linkedin, Github, Mail } from "lucide-react";
import Image from "next/image";

// It's good practice to place static assets in the `/public` folder.
const enhancedImageUrl = "/IMG_7805.jpg";

const Footer: React.FC = () => {
  const sectionRef = React.useRef<HTMLDivElement | null>(null);

  // Using the modern useGSAP hook for cleaner code and automatic cleanup

    const tl = gsap.timeline({ defaults: { ease: "power3.out", duration: 1 } });

    // Use string selectors for better performance with useGSAP
    tl.from(".title-line-1", { y: 50, opacity: 0 }, 0.2)
      .from(".title-line-2", { y: 50, opacity: 0 }, 0.4)
      .from(".tagline", { y: 30, opacity: 0 }, 0.6)
      .from(".top-icon", { y: -20, opacity: 0, scale: 0.8 }, 0.8)
      .from(".contact-links", { y: 20, opacity: 0, scale: 0.9 }, 1);


  return (
    <section
      ref={sectionRef}
      className="relative h-screen text-white overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${enhancedImageUrl})`, transform: "scale(1.05)" }}
      />

      {/* Dark Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent" />

      {/* Top-left Minimal Icon */}
      <div
        className="top-icon absolute top-4 left-4 md:top-6 md:left-6 z-20 opacity-70 hover:opacity-100 transition-opacity duration-300"
      >
        <Image
          src="/Gemini_Generated_Image_c73zwnc73zwnc73z_1_-removebg-preview.png" // Replace with your club's logo or icon
          alt="Join Us"
          width={250}
          height={250}
          className="w-15 h-15 md:w-12 md:h-12"
        />
      </div>

      {/* Main Content Container - Using Flexbox to control vertical layout */}
      <div className="relative z-10 flex flex-col h-full p-4 sm:p-6 md:p-8">
        {/* This spacer pushes the title towards the middle */}
        <div className="flex-grow" />

        {/* Centered Title */}
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl md:text-7xl md:mb-30 lg:text-8xl font-extrabold tracking-tight leading-tight">
            <span className="block overflow-hidden">
              <span className="title-line-1 inline-block">We Are The</span>
            </span>
            <span className="block text-[#EC6F46] mt-1 md:mt-2 overflow-hidden">
              <span className="title-line-2 inline-block">Computer Student Association</span>
            </span>
          </h1>
        </div>

        {/* This spacer pushes the bottom content to the very bottom of the screen */}
        <div className="flex-grow" />

        {/* REMOVED absolute positioning for a robust flexbox layout */}
        {/* On mobile, items stack. On md screens and up, they sit side-by-side. */}
        <div className="w-full flex flex-col md:flex-row justify-between items-end gap-4">
          {/* Bottom-left Tagline */}
          <div className="tagline text-left max-w-md">
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
              Empowering innovation through collaboration, learning, and creativity at VIT Pune.
            </p>
          </div>

          {/* Bottom-right Contact */}
          <div
            className="contact-links flex flex-row md:flex-col items-start md:items-end gap-3"
          >
            <a href="mailto:techverseclub@gmail.com" className="flex items-center gap-2 text-gray-300 hover:text-[#EC6F46] transition-colors">
              <Mail size={18} />
              <span className="hidden sm:inline">Email</span>
            </a>
            <a href="https://linkedin.com/company/techverseclub" target="_blank" className="flex items-center gap-2 text-gray-300 hover:text-[#EC6F46] transition-colors">
              <Linkedin size={18} />
               <span className="hidden sm:inline">LinkedIn</span>
            </a>
            <a href="https://github.com/techverseclub" target="_blank" className="flex items-center gap-2 text-gray-300 hover:text-[#EC6F46] transition-colors">
              <Github size={18} />
               <span className="hidden sm:inline">GitHub</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;

