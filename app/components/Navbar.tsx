'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import CSALogo from '../../public/logo.svg'; // adjust path if needed

const NAV_LINKS = [
  { name: 'Home', href: '#home' },
  { name: 'Domains', href: '#Domains' },
  { name: 'Events', href: '#events' },
  { name: 'Contact', href: '/contact' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [isAnimating, setIsAnimating] = useState(false);
  const lastScrollYRef = useRef(0);

  const leftLinks = NAV_LINKS.slice(0, 2);
  const rightLinks = NAV_LINKS.slice(2);

  const handleToggle = () => {
    setIsAnimating(true);
    setIsOpen((prev) => !prev);
  };

  // Hide navbar when user scrolls down; do not auto-open on scroll up
  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY || 0;
      if (currentY > lastScrollYRef.current + 5) {
        if (isOpen) setIsOpen(false);
      }
      lastScrollYRef.current = currentY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isOpen]);

  return (
    <header className="fixed top-10 left-15 right-0 z-50">
      <div className="relative h-16">
        <div className="flex items-center gap-6">
          {/* Toggle button with inline hint above when collapsed (left side) */}
          <div className="relative z-10 flex flex-col items-start">
            {!isOpen && (
              <button
                onClick={handleToggle}
                className="mb-1 w-max whitespace-nowrap px-0.5 py-1 rounded-full bg-black/70 border border-orange-500 text-[10px] leading-none text-gray-300 shadow-[0_0_12px_rgba(236,111,70,0.35)] hover:border-orange-400 transition-colors"
              >
                Press to open
              </button>
            )}
            <button
              onClick={handleToggle}
              onAnimationEnd={() => setIsAnimating(false)}
              className={`w-16 h-16 bg-black rounded-full border-2 border-orange-500 flex items-center justify-center hover:border-orange-400 shadow-[0_0_30px_rgba(236,111,70,0.5)] transition-colors ${
                isAnimating ? 'animate-[spin-once_0.7s_ease-in-out]' : ''
              }`}
            >
              <Image
                src={CSALogo}
                alt="Logo"
                width={40}
                height={40}
                className="rounded-full"
              />
            </button>
          </div>

          {/* Links container to the right of the button */}
          <nav
            className={`flex items-center h-16 bg-black/70 backdrop-blur-sm border border-red-500 rounded-full shadow-[0_0_20px_rgba(236,111,70,0.5)] transition-all duration-700 ease-in-out overflow-hidden ${
              isOpen ? 'px-6 opacity-100 max-w-4xl' : 'px-0 opacity-0 pointer-events-none max-w-0'
            }`}
          >
            <div className="flex items-center space-x-10">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-gray-300 hover:text-red-400 transition-colors duration-300 font-medium whitespace-nowrap"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
