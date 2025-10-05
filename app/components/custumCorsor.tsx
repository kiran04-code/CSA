"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const CustomCursor: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    // Set initial position to the center for a nice entry
    gsap.set(cursor, {
      xPercent: -50,
      yPercent: -50,
      x: window.innerWidth / 2,
      y: window.innerHeight / 2,
    });

    // Animate the cursor to follow the mouse
    const handleMouseMove = (e: MouseEvent) => {
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.5, // Controls the "lag" for a smoother feel
        ease: "power3.out",
      });
    };

    // Add hover effects for interactive elements
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      // Check if the target is a link, button, or other clickable element
      if (target.matches("a, button, [role='button'], input, select")) {
        gsap.to(cursor, {
          scale: 1.5,
          backgroundColor: "#ffffff",
          mixBlendMode: "difference", // Creates a cool inversion effect
          duration: 0.3,
          ease: "power3.out",
        });
      }
    };

    // Revert the cursor style on mouse out
    const handleMouseOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.matches("a, button, [role='button'], input, select")) {
        gsap.to(cursor, {
          scale: 1,
          backgroundColor: "#EC6F46", // Original color
          mixBlendMode: "normal",
          duration: 0.3,
          ease: "power3.out",
        });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseout", handleMouseOut);

    // Cleanup listeners on component unmount
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseout", handleMouseOut);
    };
  }, []); // Empty dependency array ensures this runs only once

  return (
    <>
      {/* Hide the default system cursor */}
      <style>{`body, a, button, * { cursor: none; }`}</style>

      {/* The custom cursor element */}
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 w-14 h-14 rounded-full bg-[#EC6F46] flex items-center justify-center pointer-events-none z-[9999]"
      >
        {/* SVG for the up-right arrow */}
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="text-white"
        >
          <path
            d="M6 18L18 6M18 6V17M18 6H7"
            stroke="#111111"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </>
  );
};

export default CustomCursor;