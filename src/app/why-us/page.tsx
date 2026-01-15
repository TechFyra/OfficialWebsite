"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

import Navbar from "@/components/navbar";
import ValueCard from "@/components/ui/value-card";
import PageCTA from "@/components/ui/page-cta";
import Footer from "@/components/footer";

gsap.registerPlugin(ScrollTrigger);

export default function WhyUs() {
  const headingRef = useRef<HTMLDivElement | null>(null);
  const cardsRef = useRef<HTMLDivElement | null>(null);
  const ctaRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
  if (!headingRef.current || !cardsRef.current || !ctaRef.current) return;

  // Initial hidden state
  gsap.set(headingRef.current, { opacity: 0, y: 80 });
  gsap.set(cardsRef.current.children, { opacity: 0, y: 60 });
  gsap.set(ctaRef.current, { opacity: 0, scale: 0.95 });

  // Heading + subtitle (slower reveal)
  gsap.to(headingRef.current, {
    opacity: 1,
    y: 0,
    duration: 1.4,
    delay: 0.15,
    ease: "power4.out",
    scrollTrigger: {
      trigger: headingRef.current,
      start: "top 85%",
      toggleActions: "play none none none",
    },
  });

  // Value cards (slower stagger)
  ScrollTrigger.batch(cardsRef.current.children, {
    start: "top 90%",
    onEnter: (elements) =>
      gsap.to(elements, {
        opacity: 1,
        y: 0,
        duration: 1.1,
        stagger: 0.25,
        delay: 0.2,
        ease: "power3.out",
      }),
  });

  // CTA (gentle scale + fade)
  gsap.to(ctaRef.current, {
    opacity: 1,
    scale: 1,
    duration: 1.0,
    delay: 0.25,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ctaRef.current,
      start: "top 90%",
      toggleActions: "play none none none",
    },
  });
}, []);


  return (
    <>
      <Navbar />

      {/* MAIN CONTENT */}
      <section className="bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 pt-32 pb-12">
        <div className="w-full px-6">
          <div className="max-w-7xl mx-auto text-center">
            
            {/* HEADING */}
            <div ref={headingRef}>
              <h2 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold mb-6 tracking-tight">
                Why Choose{" "}
                <span className="bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
                  TechFyra
                </span>
              </h2>

              <p className="text-lg sm:text-xl text-gray-700 font-medium max-w-3xl mx-auto mb-20">
                We focus on efficiency, scalability, and clarity to deliver
                technology solutions that actually work.
              </p>
            </div>

            {/* VALUE CARDS */}
            <div
              ref={cardsRef}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 place-items-center"
            >
              <ValueCard
                title="Business-Driven Solutions"
                image="/images/business.png"
                description="We design technology around real business needs, focusing on outcomes, performance, and measurable impact..."
              />
              <ValueCard
                title="End-to-End Expertise"
                image="/images/endtoend.png"
                description="From web development and automation to databases, analytics, and AI..."
              />
              <ValueCard
                title="Scalable & Reliable Systems"
                image="/images/scalable.png"
                description="Our systems are built to scale effortlessly while remaining secure..."
              />
              <ValueCard
                title="Transparent Execution"
                image="/images/transparent.png"
                description="We believe in honest communication and realistic timelines..."
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <div ref={ctaRef}>
        <PageCTA
          title="Let’s Build Something Great"
          subtitle="Talk to us about your idea, problem, or vision."
          buttonText="Contact Us"
          href="/#contact"
        />
      </div>

      <Footer />
    </>
  );
}
