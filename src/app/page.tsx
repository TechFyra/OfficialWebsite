"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger)
import Navbar from "@/components/navbar";
import Hero from "@/components/ui/hero";
import ContactSection from "@/components/ui/contact-section";
import Footer from "@/components/footer";
import PageCTA from "@/components/ui/page-cta";

export default function Home() {
  const clarityRef = useRef<HTMLDivElement | null>(null);
  const cardsRef = useRef<HTMLDivElement | null>(null);
  const processRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
  if (!clarityRef.current || !cardsRef.current || !processRef.current) return;

  // CLARITY SECTION
  gsap.fromTo(
    clarityRef.current,
    { opacity: 0, y: 60 },
    {
      opacity: 1,
      y: 0,
      duration: 0.9,
      ease: "power3.out",
      scrollTrigger: {
        trigger: clarityRef.current,
        start: "top 80%", // 👈 AFTER HERO
        toggleActions: "play none none none",
      },
    }
  );

  // BEFORE / AFTER CARDS
  gsap.fromTo(
    Array.from(cardsRef.current.children),
    { opacity: 0, y: 40 },
    {
      opacity: 1,
      y: 0,
      duration: 0.8,
      stagger: 0.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: cardsRef.current,
        start: "top 85%",
      },
    }
  );

  // HOW WE WORK
  gsap.fromTo(
    Array.from(processRef.current.children),
    { opacity: 0, y: 30 },
    {
      opacity: 1,
      y: 0,
      duration: 0.7,
      stagger: 0.15,
      ease: "power3.out",
      scrollTrigger: {
        trigger: processRef.current,
        start: "top 85%",
      },
    }
  );
}, []);


  return (
    <>
      <Navbar />
      <Hero />

      {/* CLARITY SECTION */}
      <section
        ref={clarityRef}
        className="py-40 px-8 bg-gradient-to-b from-white to-gray-50"
      >
        <div className="max-w-6xl mx-auto text-center mb-24">
          <h2 className="text-4xl font-bold">From complexity to clarity</h2>
          <p className="mt-4 text-lg text-gray-600">
            We help teams move from confusion to confident execution.
          </p>
        </div>

        {/* BEFORE / AFTER */}
        <div
          ref={cardsRef}
          className="grid grid-cols-1 md:grid-cols-2 gap-x-24 gap-y-16 place-items-center"
        >
          <div className="w-full max-w-md rounded-2xl border border-pink-300/60 bg-pink-50/40 p-8 shadow-sm">
            <h3 className="mb-8 text-2xl font-semibold text-pink-600 text-center">
              Before TechFyra
            </h3>
            <ul className="space-y-6 text-gray-600">
              <li>✕ Too many manual workflows</li>
              <li>✕ Scattered data</li>
              <li>✕ Low-converting websites</li>
              <li>✕ Confusing AI</li>
            </ul>
          </div>

          <div className="w-full max-w-md rounded-2xl border border-pink-300/60 bg-pink-50/40 p-8 shadow-sm">
            <h3 className="mb-8 text-2xl font-semibold text-pink-600 text-center">
              After TechFyra
            </h3>
            <ul className="space-y-6 text-gray-700">
              <li>✓ Automated workflows</li>
              <li>✓ Clear dashboards</li>
              <li>✓ Scalable systems</li>
              <li>✓ Practical ML</li>
            </ul>
          </div>
        </div>
      </section>

      {/* HOW WE WORK */}
      <section className="py-32 px-8 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold">How we work</h2>
          <p className="mt-4 text-gray-600">
            A clear, transparent process — no surprises.
          </p>

          <div
            ref={processRef}
            className="mt-20 grid grid-cols-1 md:grid-cols-4 gap-12"
          >
            <div>
              <p className="text-pink-600 font-semibold">01</p>
              <h3>Understand</h3>
              <p>We listen carefully</p>
            </div>
            <div>
              <p className="text-pink-600 font-semibold">02</p>
              <h3>Design</h3>
              <p>We plan smartly</p>
            </div>
            <div>
              <p className="text-pink-600 font-semibold">03</p>
              <h3>Build</h3>
              <p>We execute cleanly</p>
            </div>
            <div>
              <p className="text-pink-600 font-semibold">04</p>
              <h3>Deliver</h3>
              <p>We support long-term</p>
            </div>
          </div>
        </div>
      </section>

      <PageCTA
        title="Ready to Get Started?"
        subtitle="See how TechFyra turns complexity into clarity."
        buttonText="Explore Our Expertise"
        href="/what-we-do"
      />

      <ContactSection />
      <Footer />
    </>
  );
}
