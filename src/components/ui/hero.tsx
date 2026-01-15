"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import Image from "next/image";

export default function Hero() {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    gsap.fromTo(
      titleRef.current,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 2,
        ease: "power3.out",
      }
    );

    gsap.fromTo(
      subtitleRef.current,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.7,
        delay: 2,
        ease: "power3.out",
      }
    );
  }, []);

  return (
    <section className="min-h-screen bg-white flex flex-col justify-center items-center text-center px-8 pt-20 relative overflow-hidden">
      
      {/* BACKGROUND IMAGE LAYER */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/images/image.jpeg" 
          alt="TechFyra Background"
          fill
          priority
          className="object-cover opacity-40" 
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/40 to-white z-10" />
      </div>

      <div className="max-w-7xl mx-auto z-20 relative">
        {/* Animated 3D Gradient Text */}
        <h1
          ref={titleRef}
          className="text-5xl md:text-6xl lg:text-[6.5rem] font-black tracking-tighter leading-[1.1] filter drop-shadow-2xl"
        >
          <span className="bg-gradient-to-r from-pink-500 via-purple-600 to-indigo-700 bg-clip-text text-transparent block mb-1
            [text-shadow:_3px_6px_12px_rgba(168,85,247,0.3),_0px_10px_20px_rgba(0,0,0,0.1)]
            transition-all duration-500 hover:tracking-normal">
            Seamless Connections,
          </span>
          
          <span className="bg-gradient-to-r from-pink-500 via-purple-600 to-indigo-700 bg-clip-text text-transparent block
            [text-shadow:_3px_6px_12px_rgba(168,85,247,0.3),_0px_10px_20px_rgba(0,0,0,0.1)]
            transition-all duration-500 hover:tracking-normal">
            For A Smarter Tomorrow
          </span>
        </h1>

        <p
          ref={subtitleRef}
          className="mt-10 text-lg md:text-xl text-gray-800 max-w-2xl mx-auto font-bold leading-relaxed 
          [text-shadow:_0px_1px_2px_rgba(255,255,255,0.8)]"
        >
          Unlock growth through data insights and real outcomes. 
          Expertise that scales with your ambition.
        </p>
      </div>

      {/* Decorative Glows */}
      <div className="absolute top-1/4 -left-20 w-[400px] h-[400px] bg-pink-200 rounded-full blur-[150px] opacity-20 animate-pulse"></div>
      <div className="absolute bottom-1/4 -right-20 w-[400px] h-[400px] bg-purple-300 rounded-full blur-[150px] opacity-20 animate-pulse"></div>
    </section>
  );
}