"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

import Navbar from "@/components/navbar";
import ExpertiseCard from "@/components/ui/expertise-card";
import Image from "next/image";
import PageCTA from "@/components/ui/page-cta";
import Footer from "@/components/footer";

gsap.registerPlugin(ScrollTrigger);

export default function WhatWeDo() {
  const heroRef = useRef<HTMLDivElement | null>(null);
  const headerRef = useRef<HTMLDivElement | null>(null);
  const cardsRef = useRef<HTMLDivElement | null>(null);
  const whyRef = useRef<HTMLDivElement | null>(null);
  const ctaRef = useRef<HTMLDivElement | null>(null);

  const expertiseAreas = [
    {
      title: "Intelligent Automation",
      description:
        "Python-based workflow automation and AI-powered task orchestration to eliminate repetitive work.",
      image: "/images/intelligent-automation (1).png",
    },
    {
      title: "Modern Web Solutions",
      description:
        "Secure, high-performance full-stack applications using Next.js, React, and Django with cloud-ready architectures.",
      image: "/images/modern-web.png",
    },
    {
      title: "Machine Learning & AI",
      description:
        "Custom ML models, NLP-based systems, and predictive analytics embedded directly into your workflows.",
      image: "/images/ml-ai.png",
    },
    {
      title: "Data Analytics",
      description:
        "Advanced Power BI dashboards and SQL-driven modeling to convert raw data into powerful visual insights.",
      image: "/images/data-analytics-dashboards.png",
    },
    {
      title: "Data Visualization",
      description:
        "Turning complex datasets into clear, decision-ready visuals that drive understanding and action.",
      image: "/images/dashboards.png",
    },
  ];

  useEffect(() => {
    if (
      !heroRef.current ||
      !headerRef.current ||
      !cardsRef.current ||
      !whyRef.current ||
      !ctaRef.current
    )
      return;

    /* ---------------- INITIAL STATES ---------------- */
    gsap.set(heroRef.current.children, { opacity: 0, y: 60 });
    gsap.set(headerRef.current, { opacity: 0, y: 60 });
    gsap.set(cardsRef.current.children, { opacity: 0, y: 60 });
    gsap.set(whyRef.current.children, { opacity: 0, y: 40 });
    gsap.set(ctaRef.current, { opacity: 0, scale: 0.95 });

    /* ---------------- HERO ---------------- */
    gsap.to(heroRef.current.children, {
      opacity: 1,
      y: 0,
      duration: 1.3,
      stagger: 0.2,
      ease: "power4.out",
      scrollTrigger: {
        trigger: heroRef.current,
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });

    /* ---------------- HEADER ---------------- */
    gsap.to(headerRef.current, {
      opacity: 1,
      y: 0,
      duration: 1.2,
      ease: "power4.out",
      scrollTrigger: {
        trigger: headerRef.current,
        start: "top 85%",
      },
    });

    /* ---------------- EXPERTISE CARDS ---------------- */
    ScrollTrigger.batch(cardsRef.current.children, {
      start: "top 90%",
      onEnter: (elements) =>
        gsap.to(elements, {
          opacity: 1,
          y: 0,
          duration: 1.1,
          stagger: 0.25,
          ease: "power3.out",
        }),
    });

    /* ---------------- WHY TECHFYRA ---------------- */
    ScrollTrigger.batch(whyRef.current.children, {
      start: "top 90%",
      onEnter: (elements) =>
        gsap.to(elements, {
          opacity: 1,
          y: 0,
          duration: 0.9,
          stagger: 0.15,
          ease: "power3.out",
        }),
    });

    /* ---------------- CTA ---------------- */
    gsap.to(ctaRef.current, {
      opacity: 1,
      scale: 1,
      duration: 1.0,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ctaRef.current,
        start: "top 90%",
      },
    });
  }, []);

  return (
    <>
      <Navbar />

      {/* HERO */}
      <section
        ref={heroRef}
        className="min-h-[80vh] bg-gradient-to-br from-pink-50 via-purple-50 to-indigo-50 pt-32 pb-28 flex items-center"
      >
        <div className="max-w-7xl mx-auto px-8 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h1 className="text-7xl md:text-8xl font-black leading-tight mb-10 bg-gradient-to-r from-pink-500 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
              We grow.<br /> You grow<br /> with us.
            </h1>
            <p className="text-2xl text-gray-600 max-w-xl leading-relaxed">
              At TechFyra, expertise isn’t just about technology—it’s about solving
              real business problems with precision and intelligence.
            </p>
          </div>

          <div className="flex justify-center md:justify-end">
            <Image
              src="/images/growth-graphic.png"
              alt="Growth"
              width={560}
              height={420}
              priority
              className="select-none drop-shadow-2xl mix-blend-multiply brightness-110 contrast-110"
            />
          </div>
        </div>
      </section>

      {/* HEADER */}
      <section ref={headerRef} className="pt-32 pb-10 text-center">
        <h2 className="text-6xl md:text-7xl font-extrabold mb-6">
          Our{" "}
          <span className="bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
            Expertise
          </span>
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          We combine deep technical knowledge and modern engineering practices to
          deliver measurable outcomes.
        </p>
      </section>

      {/* EXPERTISE CARDS */}
      <section className="bg-white">
        <div ref={cardsRef} className="max-w-5xl mx-auto px-8">
          {expertiseAreas.map((item, index) => (
            <ExpertiseCard
              key={index}
              title={item.title}
              description={item.description}
              image={item.image}
            />
          ))}
        </div>
      </section>

      {/* WHY TECHFYRA */}
      <section className="pt-24 pb-0 bg-gray-50">
        <div ref={whyRef} className="max-w-5xl mx-auto px-8 text-center">
          <h2 className="text-4xl font-bold mb-12">Why TechFyra?</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
            {[
              "Solution-focused, not tool-focused",
              "Scalable and future-proof designs",
              "Automation-first mindset",
              "Enterprise-level quality & security",
              "Data-driven engineering approach",
              "Long-term digital asset building",
            ].map((text, i) => (
              <div
                key={i}
                className="flex items-center space-x-3 p-4 bg-white rounded-xl shadow-sm border border-gray-100"
              >
                <span className="text-green-500 font-bold">✔</span>
                <span className="text-gray-700 font-medium">{text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section ref={ctaRef} className="py-0">
        <PageCTA
          title="Want to See What We Build?"
          subtitle="Explore the services we deliver using this expertise."
          buttonText="View Our Services"
          href="/services"
        />
      </section>

      <Footer />
    </>
  );
}
