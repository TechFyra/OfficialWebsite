import Navbar from "@/components/navbar";
import ExpertiseCard from "@/components/ui/expertise-card";

export default function WhatWeDo() {
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
    </>
  );
}
