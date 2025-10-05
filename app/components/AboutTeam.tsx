"use client";

import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";

function AboutTeam() {
  
    const headingRef = useRef(null);
    const paragraphRefs = useRef<HTMLParagraphElement[]>([]);
    paragraphRefs.current = [];

    const addToRefs = (el: HTMLParagraphElement) => {
        if (el && !paragraphRefs.current.includes(el)) {
            paragraphRefs.current.push(el);
        }
    };

    useEffect(() => {
        const tl = gsap.timeline({ defaults: { duration: 1, ease: "power3.out" } });

        tl.from(headingRef.current, {
            y: -50,
            opacity: 0,
            scale: 0.9,
        });

        paragraphRefs.current.forEach((p, i) => {
            tl.from(
                p,
                { x: -50, opacity: 0, duration: 0.8 },
                "-=0.6" + i * 0.1
            );
        });
    }, []);

    return (
        <div
        
            className="flex flex-col md:flex-row items-start md:px-20 px-10 py-20 gap-10"
        >
            {/* Left Content */}
            <div className="flex-1 space-y-6">
                <h1
                   
                   
                    className="text-5xl font-bold"
                    style={{ color: "#ffffff" }}
                >
                    About <span className="text-[#EC6F46]">Us</span>
                </h1>

                <div className="relative z-10 mt-10 md:mt-0 md:w-170 text-gray-100 text-sm sm:text-base space-y-2">
                    <p >
                        A community of student developers exploring technology.
                    </p>
                    <p >
                        We host workshops, hackathons, and seminars to sharpen skills and collaborate.
                    </p>
                    <p >
                        Whether youre a seasoned coder or beginner, we provide a space to learn and innovate.
                    </p>
                    <p >
                        Explore <span className="text-[#ec6f46]">AI, Web, IoT, Blockchain, Cybersecurity, and Data Analytics</span> with our clubs.
                    </p>
                </div>

            </div>

            {/* Right Content / Image Placeholder */}
            <div className="flex-1 flex items-center justify-center">

            </div>
        </div>
    );
}

export default AboutTeam;
