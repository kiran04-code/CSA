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
    const container = containerRef.current;
    const track = trackRef.current;

    if (!container || !track) return;

    const isMobile = window.innerWidth < 768;

    // 🧹 Kill previous triggers if resizing
    ScrollTrigger.getAll().forEach((t) => t.kill());

    if (!isMobile) {
      // 💻 Desktop: Horizontal scroll animation
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

        const targets = [
          item.querySelector(".domain-icon"),
          item.querySelector(".domain-title"),
          item.querySelector(".domain-description"),
        ].filter(Boolean) as gsap.TweenTarget[];

        gsap.fromTo(
          targets,
          { opacity: 0.2, y: 50, scale: 0.9 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
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
    } else {
      // 📱 Mobile: Vertical fade-in animations only
      itemRefs.current.forEach((item) => {
        if (!item) return;
        gsap.fromTo(
          item,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: item,
              start: "top 90%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });
    }

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative w-full overflow-hidden py-20"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <h2 className="text-3xl sm:text-5xl md:text-5xl font-extrabold mb-16 text-white text-left leading-tight">
          Our{" "}
          <span className="text-[#ec6f46] bg-[#ffffff10] px-3 py-1 rounded-xl">
            Core
          </span>{" "}
          Domains
        </h2>

        <div
          ref={trackRef}
          className="flex md:flex-row flex-col items-center gap-16 sm:gap-24 md:gap-40"
        >
          {domainData.map((domain, index) => (
            <div
              key={domain.id}
              ref={(el) => (itemRefs.current[index] = el)}
              className={`relative flex-shrink-0 text-center ${
                index === 0 ? "ml-0" : ""
              } w-full md:w-[40vw] lg:w-[30vw] flex flex-col items-center justify-center`}
            >
              <span className="absolute -z-10 text-[6rem] sm:text-[8rem] md:text-[10rem] font-black text-gray-500/10 opacity-20">
                {String(index + 1).padStart(2, "0")}
              </span>

              <div className="domain-icon mb-6 text-[#ec6f46]">
                {domain.icon}
              </div>

              <h3 className="domain-title text-2xl sm:text-3xl md:text-4xl font-bold text-[#ec6f46] mb-3">
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
