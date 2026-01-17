"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const handleContactClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setOpen(false);

    if (pathname === "/") {
      const contactSection = document.getElementById("contact");
      contactSection?.scrollIntoView({ behavior: "smooth" });
    } else {
      router.push("/");
      setTimeout(() => {
        const contactSection = document.getElementById("contact");
        contactSection?.scrollIntoView({ behavior: "smooth" });
      }, 400);
    }
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-gradient-to-r from-[#fcf3fa] via-[#f8d5ec] to-[#fcf3fa] backdrop-blur-md border-b border-pink-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="flex h-16 items-center justify-between">
          
          {/* Logo */}
          <Link
            href="/"
            className="text-3xl sm:text-4xl font-black italic tracking-tight hover:scale-105 transition-all"
          >
            <span className="bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
              TechFyra
            </span>
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center gap-8 text-gray-800 font-semibold text-lg">
            <Link href="/what-we-do" className="hover:text-pink-600 transition-all hover:scale-105">
              Expertise
            </Link>
            <Link href="/services" className="hover:text-pink-600 transition-all hover:scale-105">
              Services
            </Link>
            <Link href="/why-us" className="hover:text-pink-600 transition-all hover:scale-105">
              Why Us
            </Link>
            <a
              href="#contact"
              onClick={handleContactClick}
              className="bg-gradient-to-r from-pink-500 via-pink-600 to-purple-600 px-6 py-2 rounded-full text-white font-bold hover:scale-110 hover:shadow-xl transition-all shadow-md cursor-pointer"
            >
              Contact
            </a>
          </nav>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden flex flex-col gap-1.5"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            <span className="w-6 h-0.5 bg-gray-800" />
            <span className="w-6 h-0.5 bg-gray-800" />
            <span className="w-6 h-0.5 bg-gray-800" />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-pink-200">
          <nav className="flex flex-col px-6 py-6 gap-6 text-gray-800 font-semibold text-lg">
            <Link onClick={() => setOpen(false)} href="/what-we-do">
              Expertise
            </Link>
            <Link onClick={() => setOpen(false)} href="/services">
              Services
            </Link>
            <Link onClick={() => setOpen(false)} href="/why-us">
              Why Us
            </Link>
            <a
              href="#contact"
              onClick={handleContactClick}
              className="mt-2 text-center bg-gradient-to-r from-pink-500 via-pink-600 to-purple-600 py-3 rounded-full text-white font-bold shadow-md"
            >
              Contact
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
