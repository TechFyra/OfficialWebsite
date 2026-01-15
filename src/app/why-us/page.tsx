"use client";
"use client";
import Navbar from "@/components/navbar";
import ValueCard from "@/components/ui/value-card";
import { useRouter } from "next/navigation";
import PageCTA from "@/components/ui/page-cta";
import Footer from "@/components/footer";

export default function WhyUs() {
  const router = useRouter();

  return (
    <>
      <Navbar />

      {/* MAIN CONTENT */}
      <section className="bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 pt-32 pb-12">
        <div className="w-full px-6">
          <div className="max-w-7xl mx-auto text-center">
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

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 place-items-center">
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

      {/* FORCE ZERO GAP */}
      <div className="mb-0">
        <PageCTA
          title="Let’s Build Something Great"
          subtitle="Talk to us about your idea, problem, or vision."
          buttonText="Contact Us"
          href="/#contact"
        />

        <Footer />
      </div>
    </>
  );
}
