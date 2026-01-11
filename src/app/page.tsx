import Navbar from "@/components/navbar";
import Hero from "@/components/ui/hero";
import ServicesCard from "@/components/ui/services-card";
import ContactSection from "@/components/ui/contact-section";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      
      <section className="py-40 px-8 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-16">
            <ServicesCard 
              icon="💬" 
              title="Big Data Consulting" 
              description="Sometimes you need to look far to see close. Our experts help you make sense of big data." 
            />
            <ServicesCard 
              icon="⚙️" 
              title="Data Infrastructure & Engineering" 
              description="It's not enough to have data, you also need to have the right tools to manage it day-to-day." 
            />
            <ServicesCard 
              icon="📊" 
              title="Data Analytics" 
              description="From in-house training to tailored service packages, we offer a wide range of data analysis services." 
            />
            <ServicesCard 
              icon="📈" 
              title="Data Visualization" 
              description="In order to make informed decisions, you need to understand your data. We can visualize yours for you." 
            />
          </div>
        </div>
      </section>
      
      <ContactSection />
    </>
  );
}