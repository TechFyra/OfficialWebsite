"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Link from "next/link";

import Navbar from "@/components/navbar";
import Hero from "@/components/ui/hero";
import ContactSection from "@/components/ui/contact-section";
import Footer from "@/components/footer";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const clarityHeadingRef = useRef<HTMLDivElement | null>(null);
  const cardsRef = useRef<HTMLDivElement | null>(null);
  const processHeadingRef = useRef<HTMLDivElement | null>(null);
  const processCardsRef = useRef<HTMLDivElement | null>(null);
  const ctaRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    // ensure correct positions after Hero loads
    ScrollTrigger.refresh();

    const ctx = gsap.context(() => {

      /* =============================
         FROM COMPLEXITY TO CLARITY
      ============================== */
      if (clarityHeadingRef.current) {
        gsap.from(clarityHeadingRef.current, {
          opacity: 0,
          y: 50,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: clarityHeadingRef.current,
            start: "top 75%",
          },
        });
      }

      /* =============================
         BEFORE / AFTER CARDS
      ============================== */
      if (cardsRef.current) {
        const cards = Array.from(cardsRef.current.children);

        gsap.from(cards, {
          opacity: 0,
          y: 40,
          x: (i) => (i === 0 ? -60 : 60),
          duration: 1,
          stagger: 0.25,
          ease: "power3.out",
          scrollTrigger: {
            trigger: cardsRef.current,
            start: "top 70%",
          },
        });

        cards.forEach((card, index) => {
          const items = card.querySelectorAll("li");
          gsap.from(items, {
            opacity: 0,
            x: index === 0 ? -20 : 20,
            stagger: 0.1,
            duration: 0.6,
            delay: 0.4,
            ease: "power2.out",
            scrollTrigger: {
              trigger: card,
              start: "top 65%",
            },
          });
        });
      }

      /* =============================
         HOW WE WORK
      ============================== */
      if (processHeadingRef.current) {
        gsap.from(processHeadingRef.current, {
          opacity: 0,
          y: 40,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: processHeadingRef.current,
            start: "top 75%",
          },
        });
      }

      if (processCardsRef.current) {
        gsap.from(processCardsRef.current.children, {
          opacity: 0,
          scale: 0.85,
          y: 40,
          duration: 0.7,
          stagger: 0.15,
          ease: "back.out(1.4)",
          scrollTrigger: {
            trigger: processCardsRef.current,
            start: "top 70%",
          },
        });
      }

      /* =============================
         CTA SECTION
      ============================== */
      if (ctaRef.current) {
        gsap.from(ctaRef.current.children, {
          opacity: 0,
          y: 30,
          stagger: 0.2,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ctaRef.current,
            start: "top 75%",
          },
        });
      }
    });

    return () => ctx.revert();
  }, []);

  return (
    <>
      <Navbar />
      <Hero />

      {/* FROM COMPLEXITY TO CLARITY */}
      <section className="py-40 px-8 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-6xl mx-auto">
          <div ref={clarityHeadingRef} className="mb-24 text-center">
            <h2 className="text-4xl font-bold tracking-tight">
              From complexity to clarity
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              We help teams move from confusion to confident execution.
            </p>
          </div>

          <div
            ref={cardsRef}
            className="grid grid-cols-1 md:grid-cols-2 gap-x-24 gap-y-16 place-items-center"
          >
            {/* BEFORE */}
            <div className="w-full max-w-md rounded-2xl border border-pink-300/60 bg-pink-50/40 p-8 shadow-sm">
              <h3 className="mb-8 text-2xl font-semibold text-pink-600 text-center">
                Before TechFyra
              </h3>
              <ul className="space-y-6 text-gray-600">
                <li>✕ Manual workflows</li>
                <li>✕ Scattered data</li>
                <li>✕ Low-conversion websites</li>
                <li>✕ Confusing AI</li>
              </ul>
            </div>

            {/* AFTER */}
            <div className="w-full max-w-md rounded-2xl border border-pink-300/60 bg-pink-50/40 p-8 shadow-sm">
              <h3 className="mb-8 text-2xl font-semibold text-pink-600 text-center">
                After TechFyra
              </h3>
              <ul className="space-y-6 text-gray-700">
                <li>✓ Automated systems</li>
                <li>✓ Clear dashboards</li>
                <li>✓ Scalable architecture</li>
                <li>✓ Practical ML</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* HOW WE WORK */}
      <section className="py-32 px-8 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <div ref={processHeadingRef}>
            <h2 className="text-3xl font-bold">How we work</h2>
            <p className="mt-4 text-gray-600">
              A clear, transparent process — no surprises.
            </p>
          </div>

          <div
            ref={processCardsRef}
            className="mt-20 grid grid-cols-1 md:grid-cols-4 gap-12"
          >
            <div><p className="text-pink-600 font-semibold">01</p><h3>Understand</h3></div>
            <div><p className="text-pink-600 font-semibold">02</p><h3>Design</h3></div>
            <div><p className="text-pink-600 font-semibold">03</p><h3>Build</h3></div>
            <div><p className="text-pink-600 font-semibold">04</p><h3>Deliver</h3></div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 px-8 bg-gradient-to-b from-gray-50 to-white">
        <div ref={ctaRef} className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold">
            Ready to build smarter systems?
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Let’s talk about automation, data & ML.
          </p>
          <div className="mt-12">
            <Link
              href="/what-we-do"
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-pink-500 to-purple-600 px-14 py-6 text-white text-xl font-semibold shadow-xl hover:scale-105 transition-all"
            >
              Get Started
            </Link>
          </div>
        </div>
      </section>

      <ContactSection />
      <Footer />
    </>
  );
}
