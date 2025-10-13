"use client";

import React, { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
import { Github, Linkedin, Instagram } from "lucide-react";

const ContactPage = () => {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  // Animate heading and description on mount
  useEffect(() => {
    if (headingRef.current) {
      gsap.fromTo(
        headingRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 1 }
      );
    }
    if (descRef.current) {
      gsap.fromTo(
        descRef.current,
        { opacity: 0, y: 10 },
        { opacity: 1, y: 0, duration: 1, delay: 0.3 }
      );
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Sending...");
    try {
      const res = await fetch("/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus("Message sent successfully!");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setStatus("Failed to send message.");
      }
    } catch (err) {
      setStatus("Error sending message.");
    }
  };

  return (
    <section className="pt-40 pb-20 px-4 flex flex-col items-center justify-start">
      <h1
        className="text-4xl font-bold mb-6"
        ref={headingRef}
      >
        Contact Us
      </h1>
      <p
        className="text-center mb-12 max-w-xl"
        ref={descRef}
      >
        We'd love to hear from you! Fill out the form below or reach us through our social channels.
      </p>

      <div className="w-full max-w-3xl bg-black/70 border border-red-500 rounded-2xl p-8 shadow-[0_0_30px_rgba(236,111,70,0.35)]">
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="p-3 rounded-lg bg-black/60 border border-red-500/60 text-white focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className="p-3 rounded-lg bg-black/60 border border-red-500/60 text-white focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
            required
          />
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={formData.subject}
            onChange={handleChange}
            className="p-3 rounded-lg bg-black/60 border border-red-500/60 text-white focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            className="p-3 rounded-lg bg-black/60 border border-red-500/60 text-white focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 resize-none h-32"
            required
          />

          <button
            type="submit"
            className="bg-black border-2 border-orange-500 hover:border-orange-400 transition-colors duration-300 py-3 rounded-lg font-semibold shadow-[0_0_20px_rgba(236,111,70,0.35)]"
          >
            Send Message
          </button>
          {status && <p className="mt-2 text-center">{status}</p>}
        </form>

        <div className="flex justify-center mt-8 space-x-6 text-white">
          <a 
            href="https://github.com/kiran04-code/CSA/tree/main/app" 
            target="_blank" 
            rel="noreferrer" 
            className="hover:text-[#ec6f46] transition-colors duration-300 hover:scale-110 transform"
            aria-label="GitHub"
          >
            <Github size={32} />
          </a>
          <a 
            href="https://linkedin.com/in/csa_vit_pune" 
            target="_blank" 
            rel="noreferrer" 
            className="hover:text-[#ec6f46] transition-colors duration-300 hover:scale-110 transform"
            aria-label="LinkedIn"
          >
            <Linkedin size={32} />
          </a>
          <a 
            href="https://instagram.com/vitpune_csa" 
            target="_blank" 
            rel="noreferrer" 
            className="hover:text-[#ec6f46] transition-colors duration-300 hover:scale-110 transform"
            aria-label="Instagram"
          >
            <Instagram size={32} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;