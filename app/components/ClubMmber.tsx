"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Home, User, Mail, Zap, Sun, ChevronLeft, ChevronRight } from "lucide-react";

const headsData = [
  { id: "01", name: "Mayur Sabale", role: "CHAIRPERSON", imageUrl: "/572686763_18064228076136143_4569054778650063095_n.-removebg-preview.png", links: ["LinkedIn", "Twitter"] },
  { id: "02", name: "arnav jadhav", role: "SECRETARY", imageUrl: "/564092544_18081865292049096_4136043250377579190_n.-removebg-preview.png", links: ["LinkedIn", "Instagram"] },
  { id: "03", name: "Vikas Doifode", role: "TECH LEAD", imageUrl: "/554358462_17858858610506946_74122786426826604_n.-removebg-preview.png", links: ["GitHub", "Portfolio", "LinkedIn"] },
  { id: "04", name: "dev lahrani", role: "TREASURER", imageUrl: "/569906048_18096504400747807_5783845083126788977_n.-removebg-preview.png", links: ["LinkedIn", "Instagram"] },
  { id: "05", name: "Sneha Reddy", role: "PR OFFICER", imageUrl: "/559287359_17892448425201886_6035933195257899327_n.-removebg-preview.png", links: ["Behance", "Twitter"] },
];

const MultiHeadSection = () => {
  const [index, setIndex] = useState(0);

  const nextMember = () => setIndex((prev) => (prev + 1) % headsData.length);
  const prevMember = () => setIndex((prev) => (prev - 1 + headsData.length) % headsData.length);

  return (
    <div className="bg-black py-10">
      {/* HEADER SECTION */}
      <h1 className="text-5xl md:text-8xl font-black tracking-tighter leading-[1.1] mb-4">
        <span className="block overflow-hidden text-center">
          <span className="title-span block px-5 text-transparent bg-clip-text bg-gradient-to-b from-[#EC6F46] to-white/10">
            MEET OUR TEAM
          </span>
        </span>
      </h1>

      <section className="relative min-h-[90vh] bg-[#ec6f46] text-black overflow-hidden font-sans select-none md:rounded-[60px] m-2 md:m-6 shadow-[0_0_100px_rgba(0,0,0,0.5)]">
        
        {/* Decorative Top Notch */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-6 bg-black rounded-b-3xl z-20 hidden md:block opacity-90" />

        <div className="max-w-[1600px] mx-auto min-h-screen grid grid-cols-12 gap-4 p-6 md:p-12 relative">
          
          {/* LEFT: Branding & Navigation */}
          <div className="col-span-12 md:col-span-3 flex flex-col justify-between py-6 z-10">
            <div>
              <div className="flex items-center gap-2 mb-12 drop-shadow-md">
                <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center text-[#EB5C2D] font-black italic">C</div>
                <span className="font-black tracking-tighter text-2xl uppercase">CSA_Heads</span>
              </div>
              
              <nav className="flex flex-col gap-5">
                {['HOME', 'ABOUT', 'SKILLS', 'PROJECTS'].map((item) => (
                  <a key={item} href="#" className="text-5xl font-black uppercase tracking-tighter hover:text-white transition-all opacity-20 hover:opacity-100 hover:drop-shadow-[0_4px_10px_rgba(0,0,0,0.3)]">
                    {item}
                  </a>
                ))}
              </nav>
            </div>
            
            <div className="font-mono text-[10px] tracking-[0.3em] bg-black text-white p-3 w-fit rounded-lg shadow-xl font-bold">
              MEMBER_INDEX: {index + 1} / {headsData.length}
            </div>
          </div>

          {/* CENTER: Profile Focus */}
          <div className="col-span-12 md:col-span-6 relative flex flex-col items-center justify-start pt-10 md:pt-20">
            
            {/* Background Name Mask */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
               <h2 className="text-[12vw] font-black opacity-[0.1] uppercase leading-none text-center select-none">
                  {headsData[index].name.split(" ")[0]}
               </h2>
            </div>

            {/* Dynamic Name and Role with Black Shadows */}
            <div className="relative z-30 text-center mb-8 drop-shadow-[0_10px_10px_rgba(0,0,0,0.2)]">
                <h3 className="text-5xl md:text-6xl font-black uppercase text-black mb-2 tracking-tighter drop-shadow-[0_5px_15px_rgba(0,0,0,0.4)]">
                    {headsData[index].name}
                </h3>
                <div className="bg-black text-[#EB5C2D] px-6 py-1 text-[10px] font-black tracking-[0.5em] inline-block rounded-full shadow-2xl">
                    {headsData[index].role}
                </div>
            </div>

            {/* Nav Arrows */}
            <div className="absolute inset-x-0 top-[60%] -translate-y-1/2 flex justify-between z-40 px-2 md:-px-10">
              <button onClick={prevMember} className="p-4 bg-black text-white hover:bg-white hover:text-black rounded-full transition-all shadow-2xl active:scale-90">
                <ChevronLeft size={32} />
              </button>
              <button onClick={nextMember} className="p-4 bg-black text-white hover:bg-white hover:text-black rounded-full transition-all shadow-2xl active:scale-90">
                <ChevronRight size={32} />
              </button>
            </div>

            {/* Portrait Area with Heavy Drop Shadow */}
            <div className="relative w-full h-[50vh] md:h-[65vh] flex items-end justify-center group">
              <div className="relative w-full h-full max-w-sm transition-transform duration-500 group-hover:scale-105">
                  <Image 
                    src={headsData[index].imageUrl}
                    alt={headsData[index].name}
                    fill
                    className="object-contain grayscale group-hover:grayscale-0 transition-all duration-700 
                               drop-shadow-[30px_50px_40px_rgba(0,0,0,0.6)]" // THE BLACK IMAGE SHADOW
                    priority
                  />
              </div>
            </div>
          </div>

          {/* RIGHT: Actions & Matrix Links */}
          <div className="col-span-12 md:col-span-3 flex flex-col justify-between items-end py-6 z-10">
            <div className="text-right">
               <div className="flex flex-col items-end gap-6 text-right mt-20">
                  <span className="font-mono text-[10px] tracking-[0.4em] opacity-40 uppercase font-bold">Social_Matrix</span>
                  {headsData[index].links.map((link) => (
                      <a key={link} href="#" className="text-4xl font-black uppercase tracking-tighter hover:text-white transition-colors hover:drop-shadow-[0_5px_15px_rgba(0,0,0,0.3)]">
                        {link}
                      </a>
                  ))}
               </div>
            </div>
            
            <div className="text-right font-mono drop-shadow-md">
              <p className="text-[10px] opacity-40 uppercase tracking-widest font-bold">System_Status</p>
              <p className="font-black text-2xl italic tracking-tighter">ACTIVE // 0{index + 1}</p>
            </div>
          </div>
        </div>

        {/* Marquee Ticker */}
        <div className="absolute bottom-0 w-full bg-black py-4 flex overflow-hidden">
          <div className="flex animate-marquee whitespace-nowrap gap-12 font-mono text-[10px] font-black uppercase tracking-[0.6em] text-[#ec6f46]">
            <span>Leadership</span> <span>•</span> <span>Innovation</span> <span>•</span> <span>Technology</span> <span>•</span> <span>Community</span> <span>•</span> <span>Leadership</span> <span>•</span> <span>Innovation</span> <span>•</span> <span>Technology</span> <span>•</span> <span>Community</span>
          </div>
        </div>

        <style jsx>{`
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-marquee {
            animation: marquee 30s linear infinite;
          }
        `}</style>
      </section>
    </div>
  );
};

export default MultiHeadSection;