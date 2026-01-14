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
      
      <section className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 pt-32 pb-24 flex items-center">
        <div className="max-w-6xl mx-auto px-8 text-center">
          <h1 className="text-7xl md:text-8xl font-black bg-gradient-to-r from-gray-900 via-indigo-600 to-purple-600 bg-clip-text text-transparent mb-16 leading-tight">
            Why Choose Us?
          </h1>
          <p className="text-3xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            We combine technical expertise with business acumen to deliver real results
          </p>
        </div>
      </section>
      
      <section className="py-40 px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 mb-16">
            <ValueCard 
              icon={<span className="text-4xl">🤖</span>}
              title="Automation-First Mindset" 
              description="We believe repetitive work should be handled by systems—not people."
            />
            <ValueCard 
              icon={<span className="text-4xl">💻</span>}
              title="Python & Django Expertise" 
              description="Strong technical foundation for building robust, scalable solutions."
            />
          </div>
          
          <div className="grid md:grid-cols-2 gap-16">
            <ValueCard 
              icon={<span className="text-4xl">📊</span>}
              title="Data-Driven Approach" 
              description="Clean dashboards that support real decisions, not just pretty charts."
            />
            <ValueCard 
              icon={<span className="text-4xl">💼</span>}
              title="Business-Focused Solutions" 
              description="Practical solutions designed to solve actual business problems."
            />
          </div>
        </div>
      </section>
      
     
          
        <PageCTA
  title="Let’s Build Something Great"
  subtitle="Talk to us about your idea, problem, or vision."
  buttonText="Contact Us"
  href="/#contact"
/>

     <Footer/> 
    </>
  );
}