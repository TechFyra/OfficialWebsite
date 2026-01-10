import Navbar from "@/components/navbar";
import ServiceDetailCard from "@/components/ui/service-detail-card";

export default function Services() {
  return (
    <>
      <Navbar />
      
      <section className="min-h-screen bg-gradient-to-br from-[--color-indigo-900] via-[--color-purple-900] to-[--color-pink-900] pt-32 pb-24 flex items-center">
        <div className="max-w-6xl mx-auto px-8 text-center">
          <h1 className="text-7xl md:text-8xl font-black bg-gradient-to-r from-white via-[--color-cyan-400] to-[--color-blue-400] bg-clip-text text-transparent mb-16 leading-tight">
            Our Services
          </h1>
          <p className="text-3xl text-[--color-gray-200] max-w-4xl mx-auto leading-relaxed">
            Comprehensive data solutions tailored to your business needs
          </p>
        </div>
      </section>
      
      <section className="py-40 px-8 bg-[--color-gray-100]">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 mb-24">
            <ServiceDetailCard 
              icon={<span className="text-4xl">💬</span>}
              title="Big Data Consulting" 
              description="Sometimes you need to look far to see close. Our experts help you make sense of big data."
              color="indigo"
            />
            <ServiceDetailCard 
              icon={<span className="text-4xl">⚙️</span>}
              title="Data Infrastructure & Engineering" 
              description="It's not enough to have data, you also need to have the right tools to manage it day-to-day."
              color="pink"
            />
          </div>
          
          <div className="grid md:grid-cols-2 gap-16">
            <ServiceDetailCard 
              icon={<span className="text-4xl">📊</span>}
              title="Data Analytics" 
              description="From in-house training to tailored service packages, we offer a wide range of data analysis services."
              color="blue"
            />
            <ServiceDetailCard 
              icon={<span className="text-4xl">📈</span>}
              title="Data Visualization" 
              description="In order to make informed decisions, you need to understand your data. We can visualize yours for you."
              color="indigo"
            />
          </div>
        </div>
      </section>
      
      <section className="py-40 px-8 bg-white text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-6xl font-black text-[--color-navy-900] mb-12">Ready to get started?</h2>
          <p className="text-2xl text-[--color-gray-700] mb-16">Let's discuss how we can help transform your business</p>
          <button className="bg-gradient-to-r from-[--color-indigo-500] to-[--color-purple-500] text-white px-20 py-8 rounded-full font-bold text-3xl hover:scale-105 transition-all shadow-2xl">
            Contact Us
          </button>
        </div>
      </section>
    </>
  );
}