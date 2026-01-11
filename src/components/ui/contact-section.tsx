"use client";
import { useState } from "react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    lastName: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Add your form submission logic here
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 pt-32 pb-24 px-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-start relative z-10">
        {/* Left Side - Form */}
        <div className="max-w-2xl">
          <h2 className="text-7xl font-black mb-8 leading-tight">
            <span className="text-gray-900">Contact </span>
            <span className="bg-gradient-to-r from-[--color-pink-600] to-[--color-purple-600] bg-clip-text text-transparent">us</span>
          </h2>
          
          <p className="text-xl text-gray-600 mb-12 leading-relaxed">
            Whether you have a request, a query, or want to work with us, use the form below to get in touch with our team.
          </p>

          <form onSubmit={handleSubmit} className="space-y-8">
            <div>
              <label htmlFor="name" className="block text-gray-900 text-lg font-medium mb-3">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                className="w-full px-6 py-4 bg-white border-2 border-gray-200 rounded-xl text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[--color-indigo-600] focus:border-transparent hover:border-gray-300 transition-all"
                required
              />
            </div>

            <div>
              <label htmlFor="lastName" className="block text-gray-900 text-lg font-medium mb-3">
                Last name
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Your last name"
                className="w-full px-6 py-4 bg-white border-2 border-gray-200 rounded-xl text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[--color-indigo-600] focus:border-transparent hover:border-gray-300 transition-all"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-gray-900 text-lg font-medium mb-3">
                Your email<span className="text-[--color-pink-600]">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your email address"
                className="w-full px-6 py-4 bg-white border-2 border-gray-200 rounded-xl text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[--color-indigo-600] focus:border-transparent hover:border-gray-300 transition-all"
                required
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-gray-900 text-lg font-medium mb-3">
                Message<span className="text-[--color-pink-600]">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Enter your message"
                rows={6}
                className="w-full px-6 py-4 bg-white border-2 border-gray-200 rounded-xl text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[--color-indigo-600] focus:border-transparent hover:border-gray-300 transition-all resize-none"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-[--color-indigo-600] to-[--color-purple-600] text-white px-12 py-6 rounded-full font-bold text-2xl hover:scale-105 hover:shadow-2xl hover:from-[--color-indigo-700] hover:to-[--color-purple-700] transition-all shadow-xl"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Right Side - 3D Graphic */}
        <div className="relative h-[800px] flex items-center justify-center">
          <div className="relative w-full h-full flex items-center justify-center">
            {/* Holographic ribbon effect */}
            <div className="absolute w-96 h-96 animate-spin-slow">
              <div 
                className="absolute inset-0 rounded-full"
                style={{
                  background: 'linear-gradient(135deg, rgba(99,102,241,0.4) 0%, rgba(168,85,247,0.4) 25%, rgba(236,72,153,0.4) 50%, rgba(244,114,182,0.4) 75%, rgba(99,102,241,0.4) 100%)',
                  filter: 'blur(2px)',
                  transform: 'perspective(1000px) rotateY(25deg) rotateX(15deg)',
                }}
              />
            </div>
            
            {/* Inner glow */}
            <div className="absolute w-80 h-80 bg-gradient-to-br from-indigo-300 via-purple-300 to-pink-300 rounded-full opacity-40 blur-3xl animate-pulse" />
            
            {/* Metallic ring */}
            <div 
              className="absolute w-[500px] h-[500px] rounded-full border-8 border-transparent"
              style={{
                background: 'linear-gradient(135deg, #6366f1, #a855f7, #ec4899, #f472b6) border-box',
                WebkitMask: 'linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)',
                WebkitMaskComposite: 'xor',
                maskComposite: 'exclude',
                transform: 'perspective(1000px) rotateY(-35deg) rotateX(25deg)',
                boxShadow: '0 25px 50px -12px rgba(99,102,241,0.5), inset 0 2px 20px rgba(168,85,247,0.3)',
              }}
            />
            
            {/* Accent particles */}
            <div className="absolute top-20 right-20 w-4 h-4 bg-indigo-400 rounded-full animate-bounce blur-sm" />
            <div className="absolute bottom-32 left-20 w-3 h-3 bg-purple-400 rounded-full animate-pulse blur-sm" />
            <div className="absolute top-1/3 left-10 w-2 h-2 bg-pink-400 rounded-full animate-ping" />
          </div>
        </div>
      </div>
    </section>
  );
}