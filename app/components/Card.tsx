"use client";

import React, { useRef, useEffect, ReactElement } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Code, Bot, ShieldCheck, Zap, Layers, Server } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

interface Domain {
  id: number;
  icon: ReactElement;
  title: string;
  description: string;
}

const domainData: Domain[] = [
  {
    id: 1,
    icon: <Code size={60} />,
    title: "Competitive Programming",
    description:
      "Sharpen your problem-solving skills and compete in coding challenges.",
  },
  {
    id: 2,
    icon: <Bot size={60} />,
    title: "AI & Machine Learning",
    description:
      "Dive into the world of artificial intelligence and work on exciting ML projects.",
  },
  {
    id: 3,
    icon: <ShieldCheck size={60} />,
    title: "Cybersecurity",
    description:
      "Participate in Capture The Flag (CTF) events and security workshops.",
  },
  {
    id: 4,
    icon: <Zap size={60} />,
    title: "Web Development",
    description:
      "Collaborate with peers on real-world projects and learn modern frameworks.",
  },
  {
    id: 5,
    icon: <Layers size={60} />,
    title: "App Development",
    description:
      "Build amazing mobile applications for Android and iOS using modern tools.",
  },
  {
    id: 6,
    icon: <Server size={60} />,
    title: "Cloud & DevOps",
    description:
      "Explore cloud computing platforms and learn about automated deployment pipelines.",
  },
];

const HorizontalScroller: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const track = trackRef.current;
    const container = containerRef.current;
    if (!track || !container) return;

    const scrollWidth = track.scrollWidth - container.offsetWidth;

    const horizontalScroll = gsap.to(track, {
      x: -scrollWidth,
      ease: "none",
      scrollTrigger: {
        trigger: container,
        start: "top top",
        end: () => `+=${scrollWidth}`,
        scrub: 1.5,
        pin: true,
        anticipatePin: 1,
        invalidateOnRefresh: true,
      },
    });

    itemRefs.current.forEach((item) => {
      if (!item) return;

      const indexNumber = item.querySelector<HTMLElement>(
        ".domain-index-number"
      );
      const icon = item.querySelector<HTMLElement>(".domain-icon");
      const title = item.querySelector<HTMLElement>(".domain-title");
      const description = item.querySelector<HTMLElement>(
        ".domain-description"
      );

      const targets = [icon, title, description, indexNumber].filter(
        Boolean
      ) as gsap.TweenTarget[];

      gsap.fromTo(
        targets,
        {
          opacity: 0.15,
          y: (i) => (i === 0 ? -50 : i === 3 ? 0 : 50),
          scale: 0.9,
          filter: "blur(10px)",
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          filter: "blur(0px)",
          ease: "power2.out",
          scrollTrigger: {
            trigger: item,
            containerAnimation: horizontalScroll,
            start: "left center",
            end: "center center",
            scrub: true,
          },
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative h-[100vh] sm:h-[120vh] w-full overflow-hidden"
    >
      <div className="max-w-7xl mx-auto h-full flex flex-col justify-center px-6 sm:px-8">
        {/* ✅ Responsive Heading */}
        <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold mb-10 text-white relative z-10 text-left leading-tight">
          Our{" "}
          <span className="text-[#ec6f46] bg-[#ffffff10] px-3 py-1 rounded-xl">
            Core
          </span>{" "}
          Domains
        </h2>

        <div
          ref={trackRef}
          className="flex items-center gap-16 sm:gap-24 md:gap-40 pl-[15vw] sm:pl-[25vw] pr-[40vw]"
        >
          {domainData.map((domain, index) => (
            <div
              key={domain.id}
              ref={(el) => {
                if (el) itemRefs.current[index] = el;
              }}
              className={`relative flex-shrink-0 ${
                index === 0 ? "ml-[10vw]" : ""
              } w-[80vw] sm:w-[60vw] md:w-[40vw] lg:w-[30vw] flex flex-col items-center justify-center text-center`}
            >
              <span className="domain-index-number absolute -z-10 text-[8rem] sm:text-[10rem] md:text-[12rem] font-black text-gray-500/10 opacity-20">
                {String(index + 1).padStart(2, "0")}
              </span>

              <div className="domain-icon mb-6 text-[#ec6f46]">{domain.icon}</div>

              <h3 className="domain-title text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#ec6f46] mb-4">
                {domain.title}
              </h3>

              <p className="domain-description text-gray-400 text-sm sm:text-base max-w-xs sm:max-w-sm">
                {domain.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HorizontalScroller;
