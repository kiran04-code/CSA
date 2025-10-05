"use client";

import React, { useState } from "react";
import Image from "next/image";
import { gsap } from "gsap";

interface ClubMember {
  id: string;
  name: string;
  role: string;
  imageUrl: string;
  link: string;
}

const clubMembers: ClubMember[] = [
  { id: "club-head", name: "John Doe", role: "Head of Domain", imageUrl: "/IMG_7804.jpg", link: "/club/john-doe" },
  { id: "treasurer", name: "Jane Smith", role: "Treasurer", imageUrl: "/IMG_7804.jpg", link: "/club/jane-smith" },
  { id: "event-coord", name: "Mike Johnson", role: "Event Coordinator", imageUrl: "/IMG_7804.jpg", link: "/club/mike-johnson" },
  { id: "secretary", name: "Emily White", role: "Secretary", imageUrl: "/IMG_7804.jpg", link: "/club/emily-white" },
];

const ClubMembersSection: React.FC = () => {
  const [hoveredMemberId, setHoveredMemberId] = useState<string | null>(null);

  const handleMouseEnter = (memberId: string) => {
    setHoveredMemberId(memberId);
    gsap.to(`#image-${memberId}`, {
      opacity: 1,
      x: 0,
      duration: 0.4,
      ease: "power3.out",
    });
    gsap.to(`#text-${memberId}`, {
      x: 180, // shift text right
      duration: 0.4,
      ease: "power3.out",
    });
  };

  const handleMouseLeave = (memberId: string) => {
    setHoveredMemberId(null);
    gsap.to(`#image-${memberId}`, {
      opacity: 0,
      x: -50,
      duration: 0.4,
      ease: "power3.out",
    });
    gsap.to(`#text-${memberId}`, {
      x: 0, // move text back
      duration: 0.4,
      ease: "power3.out",
    });
  };

  return (
    <section className="min-h-screen bg-black  px-4 sm:px-8 md:px-25 text-white flex flex-col ">


<h2 className="text-2xl sm:text-4xl md:text-6xl lg:text-7xl font-extrabold mb-5 sm:mb-10 md:mb-16  sm:text-left leading-snug sm:leading-tight px-1 sm:px-0">
  Meet Our{" "}
  <span className="bg-[#EB5C2D] px-3 sm:px-5 md:px-6 py-1 sm:py-2 rounded-lg sm:rounded-2xl md:rounded-3xl text-black shadow-md inline-block">
    Club Leadership
  </span>
</h2>


      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 items-center mb-20 md:mb-28 text-left">
        {/* Column 1: Small Label */}
        <div className="md:col-span-3">
          <p className="text-sm text-gray-400 flex items-center">
            <span className="w-2 h-2 bg-[#EB5C2D]  rounded-full mr-3"></span>
            Our Expertise
          </p>
        </div>

        {/* Column 2: Main Heading */}
        <div className="md:col-span-5">
          <h3 className="text-4xl md:text-5xl font-medium leading-tight text-white">
            How we take your skills to the next level
          </h3>
        </div>

        {/* Column 3: Description & Button */}
        <div className="md:col-span-4 flex flex-col items-start gap-6">
          <p className="text-base text-gray-400">
            We are a student-led club with expertise and a mission to help you take the next step in your professional development journey.
          </p>
          <button className="bg-[#EB5C2D] text-white font-semibold text-sm py-2 pl-6 pr-2 rounded-full flex items-center gap-4 group transition-transform hover:scale-105">
            See all members
            <span className="bg-[#EB5C2D] w-8 h-8 rounded-full flex items-center justify-center transition-transform group-hover:rotate-12">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4 text-white">
                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
              </svg>
            </span>
          </button>
        </div>
      </div>
      {/* ================================================ */}
      {/* ===== END: EXISTING TOP TEXT SECTION ========= */}
      {/* ================================================ */}

      {/* ===== CLUB MEMBERS LIST ===== */}
      <div className="w-full max-w-5xl">
        {clubMembers.map((member) => (
          <div
            key={member.id}
            className="relative overflow-hidden group mb-6 md:mb-8"
            onMouseEnter={() => handleMouseEnter(member.id)}
            onMouseLeave={() => handleMouseLeave(member.id)}
          >
            {/* Image */}
            <div
              id={`image-${member.id}`}
              className="absolute top-1/2 -translate-y-1/2 left-0 w-[150px] h-[150px] md:w-[200px] md:h-[200px] rounded-full overflow-hidden opacity-0 -translate-x-1/2 z-0"
            >
              <Image
                src={member.imageUrl}
                alt={member.name}
                width={250}
                height={250}
                objectFit="cover"
                className="transition-transform duration-500 ease-out"
              />
            </div>

            {/* Text */}
            <a
              href={member.link}
              id={`text-${member.id}`}
              className="relative block text-left py-4 md:py-6 border-b border-[#EC6F46] hover:border-white transition-colors duration-300 ease-in-out cursor-pointer z-10"
            >
              <h3
                className={`text-4xl md:text-6xl font-extrabold transition-colors duration-300 ease-in-out ${
                  hoveredMemberId === member.id ? "text-white" : "text-r3-500 group-hover:text-white"
                }`}
              >
                {member.role}
              </h3>
              <p
                className={`text-lg md:text-xl font-medium transition-colors duration-300 ease-in-out ${
                  hoveredMemberId === member.id ? "text-gray-300" : "text-gray-600 group-hover:text-gray-500"
                }`}
              >
                {member.name}
              </p>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ClubMembersSection;
