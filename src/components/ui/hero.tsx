"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import Image from "next/image";

export default function Hero() {
  const titleRef = useRef<HTMLHeadingElement | null>(null);
  const subtitleRef = useRef<HTMLParagraphElement | null>(null);

  useEffect(() => {
    if (!titleRef.current || !subtitleRef.current) return;

    gsap.fromTo(
      titleRef.current,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 1.6,
        ease: "power4.out",
      }
    );

    gsap.fromTo(
      subtitleRef.current,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 1.0,
        delay: 0.6,
        ease: "power3.out",
      }
    );
  }, []);

  return (
    <section className="min-h-screen bg-white flex items-center justify-center text-center px-4 sm:px-6 md:px-8 pt-28 pb-20 relative overflow-hidden">
      
      {/* BACKGROUND IMAGE */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/image.jpeg"
          alt="TechFyra Background"
          fill
          priority
          className="object-cover opacity-30 sm:opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/40 to-white z-10" />
      </div>

      <div className="max-w-6xl mx-auto z-20 relative">
        
        {/* TITLE */}
        <h1
          ref={titleRef}
          className="
            font-black tracking-tight leading-tight
            text-3xl
            sm:text-4xl
            md:text-5xl
            lg:text-[6.5rem]
            mb-6
          "
        >
          <span
            className="
              block
              bg-gradient-to-r from-pink-500 via-purple-600 to-indigo-700
              bg-clip-text text-transparent
              [text-shadow:_3px_6px_12px_rgba(168,85,247,0.3)]
              transition-transform duration-500 ease-out
              hover:scale-[1.04]
            "
          >
            Seamless Connections,
          </span>

          <span
            className="
              block
              bg-gradient-to-r from-pink-500 via-purple-600 to-indigo-700
              bg-clip-text text-transparent
              [text-shadow:_3px_6px_12px_rgba(168,85,247,0.3)]
              transition-transform duration-500 ease-out
              hover:scale-[1.04]
            "
          >
            For A Smarter Tomorrow
          </span>
        </h1>

        {/* SUBTITLE */}
        <p
          ref={subtitleRef}
          className="
            text-base
            sm:text-lg
            md:text-xl
            text-gray-800
            max-w-xl
            mx-auto
            font-semibold
            leading-relaxed
            [text-shadow:_0px_1px_2px_rgba(255,255,255,0.8)]
          "
        >
          Unlock growth through data insights and real outcomes.
          Expertise that scales with your ambition.
        </p>
      </div>

      {/* DECORATIVE GLOWS (RESPONSIVE) */}
      <div className="absolute top-1/4 -left-24 w-72 h-72 sm:w-[400px] sm:h-[400px] bg-pink-200 rounded-full blur-[150px] opacity-20 animate-pulse" />
      <div className="absolute bottom-1/4 -right-24 w-72 h-72 sm:w-[400px] sm:h-[400px] bg-purple-300 rounded-full blur-[150px] opacity-20 animate-pulse" />
    </section>
  );
}
