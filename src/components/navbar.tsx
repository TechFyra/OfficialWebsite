import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-8 py-6 absolute z-50 w-full top-0 bg-gradient-to-r from-[#fcf3fa] via-[#f8d5ec] to-[#fcf3fa] backdrop-blur-md border-b border-pink-200 shadow-sm">
      <Link href="/" className="text-4xl font-black italic tracking-tight hover:scale-105 transition-all">
        <span className="bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
          TechFyra
        </span>
      </Link>
      <div className="flex items-center gap-8 text-gray-800 font-semibold text-lg">
        <Link href="/what-we-do" className="hover:text-pink-600 transition-all hover:scale-105">Expertise</Link>
        <Link href="/services" className="hover:text-pink-600 transition-all hover:scale-105">Services</Link>
        <Link href="/why-us" className="hover:text-pink-600 transition-all hover:scale-105">Why Us</Link>
        <a 
          href="#contact" 
          className="bg-gradient-to-r from-pink-500 via-pink-600 to-purple-600 px-8 py-3 rounded-full text-white font-bold hover:scale-110 hover:shadow-xl hover:from-pink-600 hover:via-purple-600 hover:to-indigo-600 transition-all shadow-md"
        >
          Contact
        </a>
      </div>
    </nav>
  );
}