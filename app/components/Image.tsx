"use client";

import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const Agent: React.FC = () => {
  const imageDiv = useRef<HTMLDivElement>(null);
  const imageDiv2 = useRef<HTMLImageElement>(null);

  const imageArry: string[] = [
    "/IMG_7804.jpg",
    "/IMG_7804.jpg",
    "/IMG_7804.jpg",
    "/IMG_7804.jpg",
    "/IMG_7804.jpg",
    "/IMG_7804.jpg",
    "/IMG_7804.jpg",
    "/IMG_7804.jpg",
    "/IMG_7804.jpg",
    "/IMG_7804.jpg",
    "/IMG_7804.jpg",
    "/IMG_7804.jpg",
    "/IMG_7801.jpg",
    "/IMG_7801.jpg",
    "/IMG_7801.jpg",
    "/IMG_7801.jpg",
    "/IMG_7801.jpg",
    "/IMG_7801.jpg",
    "/IMG_7801.jpg",
    "/IMG_7801.jpg",
    "/IMG_7801.jpg",
    "/IMG_7801.jpg",
    "/IMG_7801.jpg",
    "/IMG_7801.jpg",
    "/IMG_7801.jpg",
    "/IMG_7801.jpg",
    "/IMG_7801.jpg",
    "/IMG_7801.jpg",
    "/IMG_7801.jpg",
    "/IMG_7801.jpg",
    "/IMG_7801.jpg",
    "/IMG_7801.jpg",
    "/IMG_7801.jpg",
    "/IMG_7801.jpg",
    "/IMG_7801.jpg",
    "/IMG_7801.jpg",
    "/IMG_7801.jpg",
    "/IMG_7801.jpg",
    "/IMG_7801.jpg",
    "/IMG_7801.jpg",
    "/IMG_7801.jpg",
    "/IMG_7801.jpg",
    "/IMG_7801.jpg",
    "/IMG_7801.jpg",
    "/IMG_7801.jpg",
    "/IMG_7801.jpg",
    "/IMG_7801.jpg",
    "/IMG_7801.jpg",
    "/IMG_7804.jpg",
    "/IMG_7805.jpg",
    "/IMG_7805.jpg",
    "/IMG_7805.jpg",
    "/IMG_7805.jpg",
    "/IMG_7805.jpg",
    "/IMG_7805.jpg",
    "/IMG_7805.jpg",
    "/IMG_7805.jpg",
    "/IMG_7805.jpg",
    "/IMG_7805.jpg",
    "/IMG_7805.jpg",
    "/IMG_7805.jpg",
    "/IMG_7805.jpg",
    "/IMG_7805.jpg",
    "/IMG_7805.jpg",
    "/IMG_7805.jpg",
   
  ];

  useEffect(() => {
    if (!imageDiv.current || !imageDiv2.current) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: imageDiv.current,
        start: "top 20%",
        end: "top -90%",
        pin: true,
        scrub: true,
        onUpdate: (self) => {
          const index = Math.floor(self.progress * imageArry.length);
          if (imageDiv2.current) {
            imageDiv2.current.src = imageArry[Math.min(index, imageArry.length - 1)];
          }
        },
      },
    });

    // Scale and rotate image for dynamic effect
    tl.to(imageDiv.current, {
      scale: 1.05,
      rotation: 5,
      duration: 1,
      ease: "power2.out",
    })
      .to(
        imageDiv.current,
        {
          rotation: -5,
          y: -30,
          duration: 1,
          ease: "power2.inOut",
        },
        "<"
      )
      .to(imageDiv.current, {
        scale: 1,
        rotation: 0,
        y: 0,
        duration: 1,
        ease: "power2.out",
      });

    // Glow border effect
    gsap.to(imageDiv.current, {
    
      repeat: -1,
      yoyo: true,
      duration: 2,
      ease: "sine.inOut",
    });
  }, []);

  return (
    <div className="relative w-full  text-white overflow-hidden">
      {/* Image container */}
      <div
        ref={imageDiv}
        className="absolute top-[20%] left-232 transform -translate-x-1/2 h-[25vw] w-[30vw] rounded-3xl border-4 border-[#EC6F46] overflow-hidden shadow-2xl"
      >
        <Image
          ref={imageDiv2}
          src={imageArry[0]}
          width={450}
          height={450}
          className="h-full w-full object-center"
          alt="Team member"
        />
      </div>
    </div>
  );
};

export default Agent;
