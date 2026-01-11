import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-8 py-6 absolute z-50 w-full top-0 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <Link href="/" className="text-3xl font-black bg-gradient-to-r from-[--color-indigo-600] to-[--color-purple-600] bg-clip-text text-transparent hover:scale-105 transition-all">
        Ilio
      </Link>
      <div className="flex items-center space-x-6 text-gray-900 font-medium">
        <Link href="/#services" className="hover:text-[--color-indigo-600] transition-all">Services</Link>
        <Link href="/what-we-do" className="hover:text-[--color-indigo-600] transition-all">Expertise</Link>
        <Link href="/services" className="hover:text-[--color-indigo-600] transition-all">Solutions</Link>
        <Link href="/why-us" className="hover:text-[--color-indigo-600] transition-all">Why Us</Link>
        <a href="#contact" className="bg-gradient-to-r from-[--color-indigo-600] to-[--color-purple-600] px-6 py-2.5 rounded-full text-white font-bold hover:scale-105 hover:shadow-lg transition-all ml-2">
          Contact
        </a>
      </div>
    </nav>
  );
}