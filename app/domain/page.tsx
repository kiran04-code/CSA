"use client";

import React, { useRef, useEffect, ReactElement } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Code, Bot, ShieldCheck, CodeXml, Smartphone, Server } from 'lucide-react';

// Import your layout components
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CustomCursor from '../components/custumCorsor';

gsap.registerPlugin(ScrollTrigger);

const domains = [
  {
    title: "WEB DEVELOPMENT",
    subtitle: "FRONT-END & BACK-END",
    description: "From client-side frameworks like React and Next.js to server-side technologies like Node.js, we cover the full stack to build modern, scalable web applications.",
    icon: <CodeXml size={150} />,
    color: 'blue',
  },
  {
    title: "APP DEVELOPMENT",
    subtitle: "MOBILE-FIRST SOLUTIONS",
    description: "Focusing on creating seamless mobile experiences for both Android and iOS using modern toolkits like Flutter and React Native to bring ideas to life.",
    icon: <Smartphone size={150} />,
    color: 'green',
  },
  {
    title: "AI & ML",
    subtitle: "INTELLIGENT SYSTEMS",
    description: "Developing intelligent applications with machine learning integration, using TensorFlow, Python, and Google ML Kit to solve complex problems.",
    icon: <Bot size={150} />,
    color: 'pink',
  },
  {
    title: "COMPETITIVE CODING",
    subtitle: "ALGORITHMIC EXCELLENCE",
    description: "Honing problem-solving skills and preparing for top-tier coding competitions through advanced data structures and algorithms.",
    icon: <Code size={150} />,
    color: 'yellow',
  }
];

// Reusable component for the introductory section
const IntroSection: React.FC = () => {
    const sectionRef = useRef(null);
    const leftRef = useRef(null);
    const rightRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(leftRef.current, {
                opacity: 0, x: -50, duration: 1, ease: 'power3.out',
                scrollTrigger: { trigger: sectionRef.current, start: 'top 80%', toggleActions: 'play none none reverse' }
            });
            gsap.from(rightRef.current, {
                opacity: 0, x: 50, duration: 1, ease: 'power3.out',
                scrollTrigger: { trigger: sectionRef.current, start: 'top 80%', toggleActions: 'play none none reverse' }
            });
        }, sectionRef);
        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="max-w-5xl mx-auto px-8 md:px-16 my-24">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
                <div ref={leftRef} className="text-gray-300 w-110 text-lg leading-relaxed">
                    <p>
                        The <span className="text-[#FC8764] font-semibold">Computer Student Association</span> is the heart of technological creativity at our institute. We are a collective of passionate engineers who thrive on problem-solving, software development, and digital transformation. From workshops to hackathons, our goal is to nurture curiosity, teamwork, and leadership in every member.
                    </p>
                </div>
                <div>
                    <div ref={rightRef} className="border border-zinc-800 bg-zinc-900/50 backdrop-blur-sm p-6 rounded-lg">
                        <blockquote className="border-l-4 border-green-400 pl-6">
                            <p className="font-stylish text-xl italic text-white">
                                To build a strong community of innovators who contribute to the digital world through code, research, and impactful projects.
                            </p>
                            <cite className="block text-green-400 font-semibold mt-4 tracking-widest uppercase text-sm">Our Vision</cite>
                        </blockquote>
                    </div>
                </div>
            </div>
        </section>
    );
};


// Reusable component for a single domain section
interface DomainSectionProps {
  title: string;
  subtitle: string;
  description: string;
  icon: ReactElement;
  color: string;
  isReversed?: boolean;
  isLast?: boolean;
}

const DomainSection: React.FC<DomainSectionProps> = ({ title, subtitle, description, icon, color, isReversed, isLast }) => {
  const sectionRef = useRef(null);
  const leftContentRef = useRef(null);
  const rightContentRef = useRef(null);
  const separatorRef = useRef(null);
  
  const colorClasses = {
    blue: { text: 'text-prange-400', bg: 'bg-blue-400', border: 'border-blue-400/20', via: 'via-blue-400', shadow: 'drop-shadow-[0_0_25px_rgba(96,165,250,0.6)]', glow: 'shadow-blue-500/30', cardHoverBorder: 'hover:border-blue-400/50' },
    pink: { text: 'text-pink-400', bg: 'bg-pink-400', border: 'border-pink-400/20', via: 'via-pink-400', shadow: 'drop-shadow-[0_0_25px_rgba(236,72,153,0.6)]', glow: 'shadow-pink-500/30', cardHoverBorder: 'hover:border-pink-400/50' },
    yellow: { text: 'text-yellow-400', bg: 'bg-yellow-400', border: 'border-yellow-400/20', via: 'via-yellow-400', shadow: 'drop-shadow-[0_0_25px_rgba(250,204,21,0.6)]', glow: 'shadow-yellow-500/30', cardHoverBorder: 'hover:border-yellow-400/50' },
    green: { text: 'text-green-400', bg: 'bg-green-400', border: 'border-green-400/20', via: 'via-green-400', shadow: 'drop-shadow-[0_0_25px_rgba(74,222,128,0.6)]', glow: 'shadow-green-500/30', cardHoverBorder: 'hover:border-green-400/50' },
  }[color] || {};

  useEffect(() => {
    const ctx = gsap.context(() => {
        const trigger = sectionRef.current;
        // --- THIS IS THE RESTORED ANIMATION LOGIC ---
        // Animate the text content (left column)
        gsap.from(leftContentRef.current, { 
            opacity: 0, 
            x: isReversed ? 100 : -100, // Slide from right if reversed, else from left
            duration: 1, 
            ease: 'power3.out', 
            scrollTrigger: { trigger, start: 'top 70%', toggleActions: 'play none none reverse' } 
        });
        
        // Animate the icon (right column)
        gsap.from(rightContentRef.current, { 
            opacity: 0, 
            x: isReversed ? -100 : 100, // Slide from left if reversed, else from right
            scale: 0.8, 
            duration: 1, 
            ease: 'power3.out', 
            scrollTrigger: { trigger, start: 'top 70%', toggleActions: 'play none none reverse' } 
        });

        // Floating animation for the icon
        gsap.to(rightContentRef.current, { 
            y: 20, 
            rotationY: 10, 
            duration: 4, 
            repeat: -1, 
            yoyo: true, 
            ease: 'sine.inOut' 
        });

        // Separator animation
        if (separatorRef.current) {
            gsap.from(separatorRef.current, { 
                scaleX: 0, 
                duration: 1.5, 
                ease: 'power3.out', 
                scrollTrigger: { trigger: separatorRef.current, start: 'top 90%', toggleActions: 'play none none reverse' } 
            });
        }
    }, sectionRef);
    return () => ctx.revert();
  }, [isReversed]);

  return (
    <>
      <section ref={sectionRef} className="relative bg-black text-white py-24 px-8 md:px-16 overflow-hidden">
        <div className={`absolute w-96 h-96 ${colorClasses.bg}/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 ${isReversed ? 'left-3/4 top-1/2' : 'left-1/4 top-1/2'}`}></div>
        <div className={`max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center ${isReversed ? 'md:grid-flow-col-dense' : ''}`}>
          
          <div ref={leftContentRef} className={isReversed ? 'md:col-start-2' : ''}>
            <div className="flex items-center gap-4">
              <div className={`w-1 h-16 ${colorClasses.bg}`}></div>
              <div>
                <h2 className="text-4xl md:text-5xl font-black tracking-wider uppercase">{title}</h2>
                <p className={`font-semibold tracking-[0.2em] mt-1 ${colorClasses.text}`}>{subtitle}</p>
              </div>
            </div>
            <div className={`mt-8 border border-zinc-800 bg-zinc-900/50 backdrop-blur-sm p-6 rounded-lg transition-all duration-300 shadow-lg ${colorClasses.cardHoverBorder} hover:shadow-2xl ${colorClasses.glow}`}>
              <p className="text-gray-300 text-lg leading-relaxed max-w-md">
                {description}
              </p>
            </div>
          </div>

          <div ref={rightContentRef} className={`relative flex justify-center items-center h-80 ${isReversed ? 'md:col-start-1' : ''}`}>
              <div className={`absolute w-80 h-80 border-2 rounded-full scale-75 ${colorClasses.border}`}></div>
              <div className={`absolute w-80 h-80 border rounded-full scale-100 ${colorClasses.border}`}></div>
<div className={`relative z-10 ${colorClasses.shadow}`}>
  {React.cloneElement(icon as React.ReactElement<{ className?: string }>, {
    className: `${colorClasses.text} w-[150px] h-[150px]`,
  })}
</div>
          </div>
        </div>
      </section>

      {!isLast && (
        <div className="max-w-4xl mx-auto px-8 md:px-16">
            <div ref={separatorRef} className={`h-0.5 bg-gradient-to-r from-transparent to-transparent ${colorClasses.via}`} />
        </div>
      )}
    </>
  );
};

// The main component for the entire page
const DomainPage = () => {
  return (
    <main className="bg-black text-white min-h-screen relative">
        <div className="absolute inset-0 h-full w-full bg-transparent bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <div className="relative z-10">
            <CustomCursor />
            <Navbar />
            
            <div className="pt-32 pb-16 text-center flex flex-col items-center">
                <h1 className="font-heading text-4xl md:text-6xl font-extrabold mb-4 bg-gradient-to-r from-orange-300 via-red-400 to-orange-300 text-transparent bg-clip-text [text-shadow:0_0_20px_rgba(236,111,70,0.5)]">
                    Our Core Domains
                </h1>
                <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto px-4">
                    Each domain is a gateway to mastering new technologies, collaborating on impactful projects, and building a strong professional network.
                </p>
            </div>
            
            <IntroSection />

            {domains.map((domain, index) => (
                <DomainSection 
                    key={index}
                    {...domain}
                    isReversed={index % 2 !== 0}
                    isLast={index === domains.length - 1}
                />
            ))}

            <Footer />
        </div>
    </main>
  );
};

export default DomainPage;