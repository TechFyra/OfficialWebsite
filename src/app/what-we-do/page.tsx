import Navbar from "@/components/navbar";
import ExpertiseCard from "@/components/ui/expertise-card";
import Image from "next/image";
import PageCTA from "@/components/ui/page-cta";
import Footer from "@/components/footer";

export default function WhatWeDo() {
  return (
    <>
      <Navbar />

      {/* HERO SECTION */}
      <section className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-indigo-50 pt-32 pb-28 flex items-center">
        <div className="max-w-7xl mx-auto px-8 grid md:grid-cols-2 gap-16 items-center">

          {/* LEFT TEXT */}
          <div>
            <h1
              className="
                text-7xl md:text-8xl font-black leading-tight mb-10
                bg-gradient-to-r from-pink-500 via-purple-600 to-indigo-600
                bg-clip-text text-transparent
              "
            >
              We grow.<br />
              You grow<br />
              with us.
            </h1>

            <p className="text-2xl text-gray-600 max-w-xl leading-relaxed">
              At TechFyra, growth isn’t a milestone — it’s a journey.
              Our expertise grows alongside your business. As your needs evolve,
              we scale systems, automate workflows, and unlock insights that help
              you move faster, smarter, and stronger.
            </p>
          </div>

          {/* RIGHT GRAPHIC */}
          <div className="flex justify-center md:justify-end">
            <Image
              src="/images/growth-graphic.png"
              alt="Growth graphic"
              width={560}
              height={420}
              priority
              className="
                select-none
                drop-shadow-2xl
                mix-blend-multiply
                brightness-110
                contrast-110
              "
            />
          </div>

        </div>
      </section>
      <section className="pt-32 pb-20 text-center">
  <h1 className="text-6xl md:text-7xl font-extrabold mb-6">
    Our <span className="bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
      Expertise
    </span>
  </h1>
  <p className="text-xl text-gray-600 max-w-3xl mx-auto">
    We don’t just deliver projects — we build scalable systems and long-term partnerships.
  </p>
</section>


      {/* EXPERTISE CARDS */}
      <section className="py-40 bg-white">
        <div className="max-w-7xl mx-auto px-8 grid md:grid-cols-2 gap-24 ">

          <ExpertiseCard
            title="Scalable Thinking"
            description="We design systems that grow with your business — from early foundations to enterprise-scale performance."
            image="/images/scalable-thinking.png"
            className="min-h-[420px]"
          />

          <ExpertiseCard
            title="Long-Term Growth Partnership"
            description="We work as an extension of your team, continuously improving automation, data, and intelligence as you grow."
            image="/images/long-term-partnership.png"
            className="min-h-[420px]"
          />
          <section className="bg-gradient-to-b from-white to-pink-50">

          
</section>



        </div>
      
      </section>
        <PageCTA
  title="Want to See What We Build?"
  subtitle="Explore the services we deliver using this expertise."
  buttonText="View Our Services"
  href="/services"
/>
<Footer/>
    </>
    
  );
}