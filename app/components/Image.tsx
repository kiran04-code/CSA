"use client";
import React from "react";

const Agent = () => {
  const columnImages = [
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500",
    "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=500",
    "https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?w=500",
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500",
    "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=500",
  ];

  const renderColumn = (reverse = false) => (
    <div className="flex flex-col gap-4 animate-scroll-down">
      {/* Triple the array to ensure no gaps during high-speed scroll */}
      {[...columnImages, ...columnImages, ...columnImages].map((src, i) => (
        <div key={i} className="relative w-full h-64 md:h-80 overflow-hidden rounded-sm border border-white/10">
          <img 
            src={src} 
            className="w-full h-full object-cover grayscale brightness-110" 
            alt="gallery" 
          />
          <div className="absolute bottom-2 left-2 bg-black text-[8px] px-1 text-white font-bold uppercase">
            Creative TD
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <div className="absolute inset-0 z-0 bg-black overflow-hidden">
      {/* This container creates the "Angle" 
          - skew-y: tilts the columns
          - scale: ensures the tilted images still cover the corners
      */}
      <div className="relative w-[120%] h-[120%] -left-[10%] -top-[10%] grid grid-cols-3 gap-4 transform -skew-y-12 scale-110 opacity-50">
        {renderColumn()}
        {renderColumn()}
        {renderColumn()}
      </div>

      {/* THE AMBER COLOR GRADE (Same as image) */}
      <div className="absolute inset-0 bg-[#ec6f46] mix-blend-multiply opacity-80 pointer-events-none"></div>
      
      {/* RADIAL GRADIENT (Makes center visible, edges dark) */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,black_90%)] pointer-events-none"></div>
    </div>
  );
};

export default Agent;