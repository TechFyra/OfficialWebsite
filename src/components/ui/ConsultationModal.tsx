"use client";

import { useEffect, useState } from "react";

const POPUP_DELAY = 20000; // 20 seconds

export default function ConsultationModal() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const hasSeenPopup = localStorage.getItem("consultation-popup");

    if (hasSeenPopup) return;

    const timer = setTimeout(() => {
      setOpen(true);
      localStorage.setItem("consultation-popup", "true");
    }, POPUP_DELAY);

    return () => clearTimeout(timer);
  }, []);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
      <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-xl">
        <h2 className="text-xl font-semibold">
          👋 Planning something for your business?
        </h2>

        <p className="mt-2 text-sm text-gray-600">
          Get a free 15-minute consultation on automation, web, or data solutions.
        </p>

        <form className="mt-4 space-y-3">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full rounded-lg border p-2"
            required
          />

          <input
            type="email"
            placeholder="Email Address"
            className="w-full rounded-lg border p-2"
            required
          />

          <select className="w-full rounded-lg border p-2">
            <option>Automation</option>
            <option>Web Development</option>
            <option>Data Analytics</option>
            <option>Data Visualization</option>
            <option>ML Solutions</option>
            <option>Other</option>
          </select>

          <textarea
            placeholder="Briefly describe your requirement (optional)"
            className="w-full rounded-lg border p-2"
          />

          <button
            type="submit"
            className="w-full rounded-lg bg-black py-2 text-white hover:opacity-90"
          >
            Get Free Consultation
          </button>
        </form>

        <button
          onClick={() => setOpen(false)}
          className="mt-3 w-full text-sm text-gray-500 hover:underline"
        >
          Maybe later
        </button>
      </div>
    </div>
  );
}
