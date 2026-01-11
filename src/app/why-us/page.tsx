import Navbar from "@/components/navbar";
import ValueCard from "@/components/ui/value-card";

export default function WhyUs() {
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
      
      <section className="py-40 px-8 bg-gradient-to-br from-indigo-50 to-purple-50 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-6xl font-black text-gray-900 mb-12">Let's work together</h2>
          <p className="text-2xl text-gray-600 mb-16">Transform your data into actionable insights</p>
          <button className="bg-gradient-to-r from-[--color-indigo-600] to-[--color-purple-600] text-white px-20 py-8 rounded-full font-bold text-3xl hover:scale-105 hover:shadow-2xl transition-all shadow-xl">
            Start Your Project
          </button>
        </div>
      </section>
    </>
  );
}