"use client";
import Navbar from "@/components/navbar";
import ServiceDetailCard from "@/components/ui/service-detail-card";
import { useRouter } from "next/navigation";
import ServicesCard from "@/components/ui/services-card";
import PageCTA from "@/components/ui/page-cta";
import Footer from "@/components/footer";

export default function ServicesPage() {
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


  return (
    <section className="py-28 px-6 bg-[#faf7ff]">
      <div className="text-center mb-24">
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


      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-14 place-items-center">
        {services.map((service, index) => (
          <ServicesCard key={index} {...service} />
        ))}
      </div>
      <PageCTA
  title="Why TechFyra?"
  subtitle="See what makes us different from other tech partners."
  buttonText="Why Choose Us"
  href="/why-us"
/>
<Footer/>
    </section>
    
  );
}
