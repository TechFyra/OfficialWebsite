"use client";


import { useEffect, useRef } from "react";
import gsap from "gsap";


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
    <section className="min-h-screen bg-gradient-to-br from-[--color-indigo-900] via-[--color-purple-900] to-[--color-pink-900] flex flex-col justify-center items-center text-center px-8 pt-32 pb-20 relative overflow-hidden">
      <div className="max-w-6xl mx-auto z-10">
       <h1
          ref={titleRef}
          className="text-7xl md:text-9xl font-black mb-12 leading-tight"
        >
          <span className="text-black block">Big data</span>
          <span className="text-black block">for big</span>
          <span className="text-8xl md:text-[11rem] text-black">
            success
          </span>
        </h1>

        <p
          ref={subtitleRef}
          className="text-2xl text-[--color-gray-200] max-w-3xl mx-auto leading-relaxed mb-16"
        >
          Unlock growth through data insights and real outcomes
        </p>
      </div>

      <div className="absolute -bottom-40 left-20 w-80 h-80 bg-[--color-green-400] rounded-full blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute -bottom-20 right-20 w-96 h-96 bg-[--color-indigo-400] rounded-full blur-3xl opacity-20 animate-pulse"></div>
    </section>
  );
}
