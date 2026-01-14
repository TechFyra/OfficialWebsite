import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative mt-24 bg-gradient-to-r from-[#fcf3fa] via-[#f8d5ec] to-[#fcf3fa] border-t border-pink-200">
      <div className="max-w-7xl mx-auto px-8 py-16 grid grid-cols-1 md:grid-cols-4 gap-12">

        {/* Brand */}
        <div>
          <h2 className="text-3xl font-black italic tracking-tight">
            <span className="bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
              TechFyra
            </span>
          </h2>
          <p className="mt-4 text-gray-600 leading-relaxed">
            Turning big data into big success.  
            We design, build, and scale digital solutions that matter.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-bold text-gray-800 mb-4">Company</h3>
          <ul className="space-y-3 text-gray-600 font-medium">
            <li><Link href="/why-us" className="hover:text-pink-600 transition">Why Us</Link></li>
            <li><Link href="/services" className="hover:text-pink-600 transition">Services</Link></li>
            <li><Link href="/what-we-do" className="hover:text-pink-600 transition">Expertise</Link></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-lg font-bold text-gray-800 mb-4">What We Do</h3>
          <ul className="space-y-3 text-gray-600 font-medium">
            <li>Big Data Analytics</li>
            <li>AI & ML Solutions</li>
            <li>Web & App Development</li>
            <li>Cloud & Automation</li>
          </ul>
        </div>

        {/* Contact / CTA */}
        <div>
          <h3 className="text-lg font-bold text-gray-800 mb-4">Let’s Connect</h3>
          <p className="text-gray-600 mb-6">
            Have an idea or a project in mind?  
            We’d love to hear from you.
          </p>
          <a
            href="#contact"
            className="inline-block bg-gradient-to-r from-pink-500 via-pink-600 to-purple-600 px-8 py-3 rounded-full text-white font-bold hover:scale-110 hover:shadow-xl transition-all shadow-md"
          >
            Contact Us
          </a>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-pink-200 py-6 text-center text-gray-600 text-sm">
        © {new Date().getFullYear()} <span className="font-semibold">TechFyra</span>. All rights reserved.
      </div>
    </footer>
  );
}