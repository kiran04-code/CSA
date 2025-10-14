"use client";

import React, { useRef, useEffect, ReactElement } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Code,
  Bot,
  ShieldCheck,
  Server,
  ArrowRight,
  CodeXml,      // New icon for Web Development
  Smartphone,  // New icon for App Development
} from "lucide-react";
import { useRouter } from "next/navigation";

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
        description: "Sharpen your problem-solving skills and compete in coding challenges.",
    },
    {
        id: 2,
        icon: <Bot size={60} />,
        title: "AI & Machine Learning",
        description: "Dive into the world of artificial intelligence and work on exciting ML projects.",
    },
    {
        id: 3,
        icon: <ShieldCheck size={60} />,
        title: "Cybersecurity",
        description: "Participate in Capture The Flag (CTF) events and security workshops.",
    },
    {
        id: 4,
        icon: <CodeXml size={60} />,
        title: "Web Development",
        description: "Collaborate with peers on real-world projects and learn modern frameworks.",
    },
    {
        id: 5,
        icon: <Smartphone size={60} />,
        title: "App Development",
        description: "Build amazing mobile applications for Android and iOS using modern tools.",
    },
    {
        id: 6,
        icon: <Server size={60} />,
        title: "Cloud & DevOps",
        description: "Explore cloud computing platforms and learn about automated deployment pipelines.",
    },
];

const HorizontalScroller: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
  // --- NEW: Ref for the separator line ---
  const separatorRef = useRef<HTMLDivElement | null>(null);
const nav = useRouter()
  useEffect(() => {
    const ctx = gsap.context(() => {
      // --- NEW: Animation for the separator line ---
      // This animates the width of the separator from 0% to 100% when it scrolls into view
      gsap.from(separatorRef.current, {
        width: "0%",
        duration: 1.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: separatorRef.current,
          start: "top 85%", // Starts the animation when the top of the line is 85% from the top of the viewport
          toggleActions: "play none none none",
        },
      });

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
        
        const icon = item.querySelector<HTMLElement>(".domain-icon");
        const title = item.querySelector<HTMLElement>(".domain-title");
        const description = item.querySelector<HTMLElement>(".domain-description");

        const targets = [icon, title, description].filter(Boolean) as gsap.TweenTarget[];

        gsap.fromTo(
          targets,
          {
            opacity: 0.15,
            y: (i) => (i === 0 ? -50 : 50),
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
    }, containerRef); 

    return () => ctx.revert(); 
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative h-[100vh] w-full overflow-hidden bg-black"
    >
      <div className="max-w-7xl mx-auto h-full flex flex-col justify-center px-6 sm:px-8">
        
        <div className="relative z-10 mb-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold text-white text-left leading-tight [text-shadow:0_0_15px_#ec6f46]">
            Our{" "}
            <span className="text-[#ec6f46] bg-[#ffffff10] px-3 py-1 rounded-xl">
              Core
            </span>{" "}
            Domains
          </h2>
          <button onClick={()=>nav.push("/domain")}  className="group self-start sm:self-center flex items-center gap-2 px-6 py-3 bg-[#ec6f46] text-white font-semibold rounded-full shadow-lg hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105">
            Explore More
            <ArrowRight className="transition-transform duration-300 group-hover:translate-x-1" size={20} />
          </button>
        </div>

        {/* --- NEW: Animated Separator Line --- */}
        <div
          ref={separatorRef}
          className="w-full h-0.5 bg-gradient-to-r from-transparent via-[#ec6f46] to-transparent mb-12"
        />

        <div
          ref={trackRef}
          className="flex items-center gap-8 sm:gap-24 md:gap-40 pl-[10vw] sm:pl-[20vw] pr-[40vw]"
        >
          {domainData.map((domain, index) => (
            <div
              key={domain.id}
              ref={(el) => { if (el) itemRefs.current[index] = el; }}
              className={`relative flex-shrink-0 w-[70vw] sm:w-[60vw] md:w-[40vw] lg:w-[30vw] flex flex-col items-center justify-center text-center p-8 rounded-2xl bg-zinc-900/50 backdrop-blur-sm border-2 border-transparent transition-all duration-300 hover:border-red-500 hover:shadow-[0_0_25px_rgba(239,68,68,0.6)]`}
            >
              <div className="domain-icon mb-6 text-[#ec6f46]">{domain.icon}</div>
              <h3 className="domain-title text-2xl sm:text-3xl md:text-4xl font-bold text-[#ec6f46] mb-4">
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