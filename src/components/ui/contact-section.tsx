"use client";
import React, { useState } from "react";

import emailjs from "@emailjs/browser";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSuccess("");

    try {
     await emailjs.send(
  process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
  process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
  {
    from_name: formData.name,
    from_email: formData.email,
    phone: formData.phone,
    message: formData.message,
  },
  process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
);



      setSuccess("Message sent successfully! We’ll get back to you soon 💜");
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: ""
      });
    } catch (error) {
      // alert("Failed to send message. Please try again.");
      console.error("EmailJS error:", error);
  alert(JSON.stringify(error));
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 pt-32 pb-24 px-8 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-start relative z-10">
        {/* Left Side - Form */}
        <div className="max-w-2xl">
          <h2 className="text-7xl font-black mb-8 leading-tight">
            <span className="text-gray-900">Contact </span>
            <span className="bg-gradient-to-r from-[--color-pink-600] to-[--color-purple-600] bg-clip-text text-transparent">
              us
            </span>
          </h2>

          <form onSubmit={handleSubmit} className="space-y-8">
            <div>
              <label className="block text-gray-900 text-lg font-medium mb-3">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                className="w-full px-6 py-4 bg-white border-2 border-gray-200 rounded-xl"
                required
              />
            </div>

            <div>
              <label className="block text-gray-900 text-lg font-medium mb-3">
                Your email *
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your email address"
                className="w-full px-6 py-4 bg-white border-2 border-gray-200 rounded-xl"
                required
              />
            </div>

            <div>
              <label className="block text-gray-900 text-lg font-medium mb-3">
                Contact Number *
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Enter your phone number"
                maxLength={10}
                className="w-full px-6 py-4 bg-white border-2 border-gray-200 rounded-xl"
                required
              />
            </div>

            <div>
              <label className="block text-gray-900 text-lg font-medium mb-3">
                Message *
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={6}
                placeholder="Enter your message"
                className="w-full px-6 py-4 bg-white border-2 border-gray-200 rounded-xl resize-none"
                required
              />
            </div>

           <button
  type="submit"
  disabled={loading}
  className="
    w-full
    bg-gradient-to-r
    from-[#E9B7F5]
    via-[#C77DFF]
    to-[#9F6BFF]
    text-white
    px-12
    py-6
    rounded-full
    font-bold
    text-2xl
    shadow-[0_15px_35px_rgba(159,107,255,0.45)]
    hover:shadow-[0_20px_45px_rgba(159,107,255,0.6)]
    hover:scale-105
    transition-all
    duration-300
    disabled:opacity-60
    disabled:cursor-not-allowed
  "
>
  {loading ? "Sending..." : "Send Message"}
</button>


            {success && (
              <p className="text-green-600 font-medium mt-4">{success}</p>
            )}
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
          background:
            "linear-gradient(135deg, rgba(99,102,241,0.4) 0%, rgba(168,85,247,0.4) 25%, rgba(236,72,153,0.4) 50%, rgba(244,114,182,0.4) 75%, rgba(99,102,241,0.4) 100%)",
          filter: "blur(2px)",
          transform: "perspective(1000px) rotateY(25deg) rotateX(15deg)"
        }}
      />
    </div>

    {/* Inner glow */}
    <div className="absolute w-80 h-80 bg-gradient-to-br from-indigo-300 via-purple-300 to-pink-300 rounded-full opacity-40 blur-3xl animate-pulse" />

    {/* Metallic ring */}
    <div
      className="absolute w-[500px] h-[500px] rounded-full border-8 border-transparent"
      style={{
        background:
          "linear-gradient(135deg, #6366f1, #a855f7, #ec4899, #f472b6) border-box",
        WebkitMask:
          "linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)",
        WebkitMaskComposite: "xor",
        maskComposite: "exclude",
        transform: "perspective(1000px) rotateY(-35deg) rotateX(25deg)",
        boxShadow:
          "0 25px 50px -12px rgba(99,102,241,0.5), inset 0 2px 20px rgba(168,85,247,0.3)"
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