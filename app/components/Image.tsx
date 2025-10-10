"use client";

import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const mainImageSrc = "/IMG_7804.jpg";

const Agent: React.FC = () => {
  const imageContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const imageElement = imageContainerRef.current;
    if (!imageElement) return;

    gsap.to(imageElement, {
      y: 300, 
      opacity: 0, 
      ease: "none",
      scrollTrigger: {
        trigger: imageElement,
        start: "top 50%", 
        end: "bottom top", 
        scrub: true,
      },
    });
  }, []);

  return (
    <div className="relative w-full z-[1]">
      <div
        ref={imageContainerRef}
        // THE ONLY CHANGE IS HERE: top-[20%] is now top-[25%]
        className="absolute top-[25%] h-[50vw] w-[60vw] md:h-[25vw] md:w-[30vw] left-1/2 -translate-x-1/2 md:left-auto md:right-8 md:translate-x-0 rounded-3xl border-4 border-[#EC6F46] overflow-hidden shadow-2xl"
      >
        <Image
          src={mainImageSrc}
          width={450}
          height={450}
          className="h-full w-full object-cover object-center"
          alt="Computer Student Association Team"
          priority
        />
      </div>
    </div>
  );
};

export default Agent;