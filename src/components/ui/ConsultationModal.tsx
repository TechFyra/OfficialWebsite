"use client";


import { useEffect, useState } from "react";


const POPUP_DELAY = 20000;
const MAX_WORDS = 300;


// very common fake email prefixes
const FAKE_EMAIL_PATTERNS = [
  "test",
  "abcd",
  "abc",
  "demo",
  "sample",
  "example",
];


export default function ConsultationModal() {
  const [open, setOpen] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);


  const [service, setService] = useState("");
  const [description, setDescription] = useState("");
  const [wordCount, setWordCount] = useState(0);


  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");


  useEffect(() => {
    const timer = setTimeout(() => {
      setOpen(true);
    }, POPUP_DELAY);

      return () => clearTimeout(timer);
    }, []);



  if (!open && !showSuccess) return null;


  /* ---------------- Email Validation ---------------- */
  const validateEmail = (value: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(value)) {
      return "Please enter a valid email format";
    }


    const prefix = value.split("@")[0].toLowerCase();
    if (FAKE_EMAIL_PATTERNS.some((fake) => prefix.includes(fake))) {
      return "Please enter a real, active email address";
    }


    return "";
  };


  /* ---------------- Description ---------------- */
  const handleDescriptionChange = (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const words = e.target.value.trim().split(/\s+/).filter(Boolean);
    if (words.length <= MAX_WORDS) {
      setDescription(e.target.value);
      setWordCount(words.length);
    }
  };


  /* ---------------- Submit ---------------- */
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();


    const error = validateEmail(email);
    if (error) {
      setEmailError(error);
      return;
    }


    // ✅ success
    setOpen(false);
    setShowSuccess(true);
  };


  return (
    <>
      {/* MAIN MODAL */}
      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4">
          <div className="w-full max-w-md rounded-3xl bg-gradient-to-br from-[#fcf3fa] via-[#f8d5ec] to-[#fcf3fa] p-7 shadow-2xl">
            <h2 className="text-2xl font-black text-gray-900">
              Let’s talk,{" "}
              <span className="bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                TechFyra
              </span>{" "}
              style ✨
            </h2>


            <p className="mt-2 text-sm text-gray-600">
              Get a free 15-minute consultation with our experts.
            </p>


            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              <input
                type="text"
                placeholder="Your name"
                required
                className="w-full rounded-xl border border-pink-200 bg-white px-4 py-2 text-sm"
              />


              {/* EMAIL */}
              <div>
                <input
                  type="email"
                  placeholder="Your email address"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    setEmailError("");
                  }}
                  required
                  className="w-full rounded-xl border border-pink-200 bg-white px-4 py-2 text-sm focus:ring-2 focus:ring-pink-400 outline-none"
                />
                {emailError && (
                  <p className="mt-1 text-xs text-red-500">
                    {emailError}
                  </p>
                )}
              </div>


              <select
                required
                value={service}
                onChange={(e) => setService(e.target.value)}
                className="w-full rounded-xl border border-pink-200 bg-white px-4 py-2 text-sm"
              >
                <option value="">Select a service</option>
                <option>Automation</option>
                <option>Web Development</option>
                <option>Data Analytics</option>
                <option>Data Visualization</option>
                <option>ML Solutions</option>
                <option>Other</option>
              </select>


              {service === "Other" && (
                <input
                  type="text"
                  placeholder="Please specify"
                  required
                  className="w-full rounded-xl border border-pink-200 bg-white px-4 py-2 text-sm"
                />
              )}


              <div>
                <textarea
                  rows={4}
                  placeholder="Briefly describe your requirement (max 300 words)"
                  required
                  value={description}
                  onChange={handleDescriptionChange}
                  className="w-full rounded-xl border border-pink-200 bg-white px-4 py-2 text-sm"
                />
                <p className="mt-1 text-xs text-gray-500 text-right">
                  {wordCount}/{MAX_WORDS} words
                </p>
              </div>


              <button
                type="submit"
                className="w-full rounded-full bg-gradient-to-r from-pink-500 via-pink-600 to-purple-600 py-3 text-sm font-bold text-white hover:scale-[1.03] transition-all"
              >
                Get Free Consultation
              </button>
            </form>


            <button
              onClick={() => setOpen(false)}
              className="mt-4 w-full text-xs text-gray-500 hover:text-pink-600"
            >
              Maybe later
            </button>
          </div>
        </div>
      )}


      {/* SUCCESS POPUP */}
      {showSuccess && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4">
          <div className="max-w-sm rounded-3xl bg-white p-8 text-center shadow-2xl">
            <h3 className="text-xl font-black text-gray-900">
              Thank you
            </h3>
            <p className="mt-3 text-sm text-gray-600">
              Thank you for choosing <span className="font-semibold">TechFyra</span>.  
              Our team will get back to you within{" "}
              <span className="font-semibold">24–48 hours</span>.
            </p>


            <button
              onClick={() => setShowSuccess(false)}
              className="mt-6 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 px-6 py-2 text-sm font-bold text-white"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}