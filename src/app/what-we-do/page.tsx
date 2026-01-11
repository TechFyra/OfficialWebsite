"use client";
import Navbar from "@/components/navbar";
import ExpertiseCard from "@/components/ui/expertise-card";
import { useRouter } from "next/navigation";

export default function WhatWeDo() {
  const router = useRouter();

  return (
    <>
      <Navbar />
      
      <section className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 pt-32 pb-24 flex items-center">
        <div className="max-w-6xl mx-auto px-8 text-center">
          <h1 className="text-7xl md:text-8xl font-black bg-gradient-to-r from-gray-900 via-indigo-600 to-purple-600 bg-clip-text text-transparent mb-16 leading-tight">
            What we're good at?
          </h1>
          <p className="text-3xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            We believe in your success and that data can help you achieve the best results for your business, regardless of your field or target.
          </p>
        </div>
      </section>
      
      <section className="py-40 px-8 bg-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-24">
          <ExpertiseCard 
            icon="💬" 
            title="Big Data" 
            description="You don't need to look further. Our big data consulting services help you unlock insights from massive datasets." 
          />
          <ExpertiseCard 
            icon="⚙️" 
            title="Data Engineering & Infrastructure" 
            description="It's not enough to have data. You also need robust infrastructure to process, store, and analyze it efficiently." 
          />
        </div>
      </section>

      <section className="py-40 px-8 bg-gradient-to-br from-pink-50 to-purple-50 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-6xl font-black text-gray-900 mb-12">See Our Services</h2>
          <p className="text-2xl text-gray-600 mb-16">Discover the full range of solutions we offer</p>
          <button 
            onClick={() => router.push('/services')}
            className="bg-gradient-to-r from-pink-500 via-pink-600 to-purple-600 text-white px-20 py-8 rounded-full font-bold text-3xl hover:scale-105 hover:shadow-2xl transition-all shadow-xl"
          >
            View Services
          </button>
        </div>
      </section>
    </>
  );
}
