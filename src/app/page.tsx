"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

import Navbar from "@/components/navbar";
import Hero from "@/components/ui/hero";
import ContactSection from "@/components/ui/contact-section";
import Footer from "@/components/footer";

export default function Home() {
  const clarityHeadingRef = useRef<HTMLDivElement | null>(null);
  const cardsRef = useRef<HTMLDivElement | null>(null);
  const processHeadingRef = useRef<HTMLDivElement | null>(null);
  const processCardsRef = useRef<HTMLDivElement | null>(null);
  const ctaRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // CLARITY HEADING - Fade up
    if (clarityHeadingRef.current) {
      gsap.fromTo(
        clarityHeadingRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: clarityHeadingRef.current,
            start: "top 75%",
            toggleActions: "play none none none",
          },
        }
      );
    }

    // BEFORE / AFTER CARDS - Stagger from sides
    if (cardsRef.current) {
      const cards = Array.from(cardsRef.current.children);
      
      // First card from left
      gsap.fromTo(
        cards[0],
        { opacity: 0, x: -60, y: 30 },
        {
          opacity: 1,
          x: 0,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: cardsRef.current,
            start: "top 70%",
          },
        }
      );

      // Second card from right
      gsap.fromTo(
        cards[1],
        { opacity: 0, x: 60, y: 30 },
        {
          opacity: 1,
          x: 0,
          y: 0,
          duration: 1,
          delay: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: cardsRef.current,
            start: "top 70%",
          },
        }
      );

      // Animate list items inside each card
      cards.forEach((card, cardIndex) => {
        const listItems = card.querySelectorAll("li");
        gsap.fromTo(
          listItems,
          { opacity: 0, x: cardIndex === 0 ? -20 : 20 },
          {
            opacity: 1,
            x: 0,
            duration: 0.6,
            stagger: 0.1,
            delay: 0.5 + cardIndex * 0.2,
            ease: "power2.out",
            scrollTrigger: {
              trigger: card,
              start: "top 65%",
            },
          }
        );
      });
    }

    // HOW WE WORK HEADING
    if (processHeadingRef.current) {
      gsap.fromTo(
        processHeadingRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: processHeadingRef.current,
            start: "top 75%",
          },
        }
      );
    }

    // HOW WE WORK CARDS - Pop in one by one
    if (processCardsRef.current) {
      const processSteps = Array.from(processCardsRef.current.children);
      
      processSteps.forEach((step, index) => {
        gsap.fromTo(
          step,
          { opacity: 0, scale: 0.8, y: 40 },
          {
            opacity: 1,
            scale: 1,
            y: 0,
            duration: 0.7,
            delay: index * 0.15,
            ease: "back.out(1.4)",
            scrollTrigger: {
              trigger: processCardsRef.current,
              start: "top 70%",
            },
          }
        );
      });
    }

    // CTA SECTION - Smooth fade up
    if (ctaRef.current) {
      const ctaChildren = ctaRef.current.children;
      
      gsap.fromTo(
        ctaChildren[0],
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ctaRef.current,
            start: "top 75%",
          },
        }
      );

      gsap.fromTo(
        ctaChildren[1],
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ctaRef.current,
            start: "top 75%",
          },
        }
      );

      gsap.fromTo(
        ctaChildren[2],
        { opacity: 0, scale: 0.9 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.6,
          delay: 0.4,
          ease: "back.out(1.2)",
          scrollTrigger: {
            trigger: ctaRef.current,
            start: "top 75%",
          },
        }
      );
    }
  }, []);

  return (
    <>
      <Navbar />
      <Hero />

      {/* CLARITY SECTION */}
      <section className="py-40 px-8 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-6xl mx-auto">
          {/* Section Heading */}
          <div ref={clarityHeadingRef} className="mb-24 text-center">
            <h2 className="text-4xl font-bold tracking-tight">
              From complexity to clarity
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              We help teams move from confusion to confident execution.
            </p>
          </div>

          {/* Cards Grid */}
          <div
            ref={cardsRef}
            className="grid grid-cols-1 md:grid-cols-2 gap-x-24 gap-y-16 place-items-center"
          >
            {/* BEFORE TECHFYRA CARD */}
            <div className="w-full max-w-md rounded-2xl border border-pink-300/60 bg-pink-50/40 p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-md hover:shadow-pink-200/50">
              <h3 className="mb-8 text-2xl font-semibold text-pink-600 text-center">
                Before TechFyra
              </h3>

              <ul className="space-y-6 text-gray-600">
                <li className="flex items-start gap-3">
                  <span className="mt-1 text-red-500 text-xl">✕</span>
                  <span>Too many manual, repetitive workflows</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 text-red-500 text-xl">✕</span>
                  <span>Data scattered across tools and reports</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 text-red-500 text-xl">✕</span>
                  <span>Websites that don't convert visitors</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 text-red-500 text-xl">✕</span>
                  <span>AI & ML that feels confusing and impractical</span>
                </li>
              </ul>
            </div>

            {/* AFTER TECHFYRA CARD */}
            <div className="w-full max-w-md rounded-2xl border border-pink-300/60 bg-pink-50/40 p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-md hover:shadow-pink-200/50">
              <h3 className="mb-8 text-2xl font-semibold text-pink-600 text-center">
                After TechFyra
              </h3>

              <ul className="space-y-6 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="mt-1 text-pink-500 text-xl">✓</span>
                  <span>Automated workflows that save time and effort</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 text-pink-500 text-xl">✓</span>
                  <span>Clear analytics and decision-ready dashboards</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 text-pink-500 text-xl">✓</span>
                  <span>Performance-first web systems built to scale</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 text-pink-500 text-xl">✓</span>
                  <span>Practical ML solutions focused on real impact</span>
                </li>
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
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              A clear, transparent process — no surprises.
            </p>
          </div>

          <div
            ref={processCardsRef}
            className="mt-20 grid grid-cols-1 md:grid-cols-4 gap-12"
          >
            <div>
              <p className="text-sm font-semibold text-pink-600">01</p>
              <h3 className="mt-2 text-lg font-semibold">Understand</h3>
              <p className="mt-2 text-gray-600">
                We listen carefully to your problem and goals.
              </p>
            </div>

            <div>
              <p className="text-sm font-semibold text-pink-600">02</p>
              <h3 className="mt-2 text-lg font-semibold">Design</h3>
              <p className="mt-2 text-gray-600">
                We plan a solution tailored to your workflow.
              </p>
            </div>

            <div>
              <p className="text-sm font-semibold text-pink-600">03</p>
              <h3 className="mt-2 text-lg font-semibold">Build</h3>
              <p className="mt-2 text-gray-600">
                We implement with performance and scale in mind.
              </p>
            </div>

            <div>
              <p className="text-sm font-semibold text-pink-600">04</p>
              <h3 className="mt-2 text-lg font-semibold">Deliver</h3>
              <p className="mt-2 text-gray-600">
                We test, refine, and support you post-launch.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-32 px-8 bg-gradient-to-b from-gray-50 to-white">
        <div ref={ctaRef} className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold tracking-tight">
            Ready to build smarter systems?
          </h2>

          <p className="mt-4 text-lg text-gray-600">
            Let's talk about how automation, data, and ML can move your business forward.
          </p>

          <div className="mt-12">
            <Link
              href="/what-we-do"
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-pink-500 to-purple-600 px-14 py-6 text-white text-xl font-semibold hover:scale-105 transition-all shadow-xl"
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