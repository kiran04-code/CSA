'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import CSALogo from '../../public/logo.svg'; 
import Link from 'next/link';

const NAV_LINKS = [
  { name: 'Home', href: '/' },
  { name: 'Domains', href: '/domain' },
  { name: 'Events', href: '#events' },
  { name: 'Contact', href: '/Contacts' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [isAnimating, setIsAnimating] = useState(false);
  const lastScrollYRef = useRef(0);
  const [rotationAngle, setRotationAngle] = useState(0);

  const handleToggle = () => {
    setIsAnimating(true);
    setIsOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY || 0;
      setRotationAngle(currentY * 0.5); // Slightly slowed for smoothness

      if (currentY > lastScrollYRef.current + 10) {
        if (isOpen) setIsOpen(false);
      } else if (currentY < lastScrollYRef.current - 20) {
        // Optional: Show navbar again when scrolling UP
        // setIsOpen(true); 
      }
      lastScrollYRef.current = currentY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isOpen]);

  return (
    <header className="fixed md:ml-8 top-8 md:top-12 inset-x-0 px-4 md:px-12 z-[100] pointer-events-none">
      <div className="max-w-7xl mx-auto flex items-center justify-start gap-3 md:gap-6 pointer-events-auto">
        
        {/* Logo / Toggle Section */}
        <div className="relative flex flex-col items-start">
          {!isOpen && (
            <button
              onClick={handleToggle}
              className="absolute -top-8 left-0 mb-1 w-max whitespace-nowrap py-1 px-3 rounded-full bg-black/80 border border-[#ec6f46]/50 text-[10px] uppercase tracking-widest text-[#ec6f46] shadow-[0_0_15px_rgba(236,111,70,0.2)] animate-bounce"
            >
              Press to open
            </button>
          )}
          
          <button
            onClick={handleToggle}
            onAnimationEnd={() => setIsAnimating(false)}
            className={`w-14 h-14 md:w-16 md:h-16 bg-black rounded-full border-2 border-orange-500 flex items-center justify-center hover:scale-105 active:scale-95 shadow-[0_0_25px_rgba(236,111,70,0.4)] transition-all duration-300 ${
              isAnimating ? 'animate-[spin-once_0.7s_ease-in-out]' : ''
            }`}
          >
            <Image
              src={CSALogo}
              alt="Logo"
              width={35}
              height={35}
              className="rounded-full md:w-[40px] md:h-[40px]"
              style={{ transform: `rotate(${rotationAngle}deg)` }}
            />
          </button>
        </div>

        {/* Links Navigation */}
        <nav
          className={`flex items-center h-14 md:h-16 bg-black/80 backdrop-blur-md border border-[#ec6f46]/40 rounded-full shadow-[0_0_30px_rgba(236,111,70,0.2)] transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] overflow-hidden ${
            isOpen 
              ? 'px-4 md:px-8 opacity-100 max-w-[90vw] md:max-w-4xl' 
              : 'px-0 opacity-0 pointer-events-none max-w-0 border-none'
          }`}
        >
          <div className="flex items-center space-x-5 md:space-x-10">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-gray-300 hover:text-[#ec6f46] transition-colors duration-300 font-medium text-sm md:text-base whitespace-nowrap uppercase tracking-tight md:tracking-normal"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;