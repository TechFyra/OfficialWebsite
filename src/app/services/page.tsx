"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

import ServicesCard from "@/components/ui/services-card";
import PageCTA from "@/components/ui/page-cta";
import Footer from "@/components/footer";

gsap.registerPlugin(ScrollTrigger);

export default function ServicesPage() {
  const headingRef = useRef<HTMLDivElement | null>(null);
  const cardsRef = useRef<HTMLDivElement | null>(null);
  const ctaRef = useRef<HTMLDivElement | null>(null);

  const services = [
    {
      title: "Custom Website Development",
      description:
        "High-performance, scalable websites designed with modern frameworks and optimized user experience...",
      image: "/images/custom-web.png",
    },
    {
      title: "Web Automation",
      description:
        "Streamline workflows and automate repetitive tasks to boost productivity and operational efficiency...",
      image: "/images/web-automation.png",
    },
    {
      title: "Database Design & Management",
      description:
        "Secure and scalable database solutions engineered for reliability, speed, and long-term growth...",
      image: "/images/database-design.png",
    },
    {
      title: "Data Analytics & Insights",
      description:
        "Transform raw data into actionable insights that support smarter, data-driven decisions...",
      image: "/images/data-analytics.png",
    },
    {
      title: "AI-Powered Integrations",
      description:
        "Intelligent AI integrations that enhance automation, prediction accuracy, and personalization...",
      image: "/images/ai-integrations.png",
    },
    {
      title: "Security & Performance Optimization",
      description:
        "Advanced security measures and performance tuning to keep your systems fast and protected...",
      image: "/images/security-performance.png",
    },
  ];

  useEffect(() => {
    if (!headingRef.current || !cardsRef.current || !ctaRef.current) return;

    // 🔒 INITIAL STATE (HIDDEN)
    gsap.set(headingRef.current, { opacity: 0, y: 60 });
    gsap.set(cardsRef.current.children, { opacity: 0, y: 40 });
    gsap.set(ctaRef.current, { opacity: 0, scale: 0.96 });

    // PAGE HEADING
    gsap.to(headingRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.9,
      ease: "power3.out",
      scrollTrigger: {
        trigger: headingRef.current,
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });

    // SERVICES CARDS (STAGGER ON SCROLL)
    ScrollTrigger.batch(cardsRef.current.children, {
      start: "top 85%",
      onEnter: (elements) =>
        gsap.to(elements, {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: "power3.out",
        }),
    });

    // CTA
    gsap.to(ctaRef.current, {
      opacity: 1,
      scale: 1,
      duration: 0.7,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ctaRef.current,
        start: "top 85%",
        toggleActions: "play none none none",
      },
    });
  }, []);

  return (
    <>
      <section className="pt-28 px-6 bg-[#faf7ff]">
        {/* HEADING */}
        <div ref={headingRef} className="text-center mb-24">
          <h1 className="text-8xl md:text-9xl font-extrabold mb-8">
            Our{" "}
            <span className="bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
              Services
            </span>
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Powerful digital solutions crafted to scale, secure, and elevate your business.
          </p>
        </div>

        {/* SERVICES GRID */}
        <div
          ref={cardsRef}
          className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-14 place-items-center"
        >
          {services.map((service, index) => (
            <ServicesCard key={index} {...service} />
          ))}
        </div>

        {/* CTA */}
        <div ref={ctaRef} className="mt-32">
          <PageCTA
            title="Why TechFyra?"
            subtitle="See what makes us different from other tech partners."
            buttonText="Why Choose Us"
            href="/why-us"
          />
        </div>
      </section>

      <Footer />
    </>
  );
}
