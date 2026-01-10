import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-8 py-6 absolute z-50 w-full top-0">
      <Link href="/" className="text-3xl font-black bg-gradient-to-r from-[--color-indigo-400] to-[--color-purple-400] bg-clip-text text-transparent hover:scale-105 transition-all">
        Ilio
      </Link>
      <div className="flex space-x-8 text-white font-medium">
        <Link href="/#services" className="hover:text-[--color-indigo-400] transition-all">Services</Link>
        <Link href="/what-we-do" className="hover:text-[--color-indigo-400] transition-all">Expertise</Link>
        <Link href="/services" className="hover:text-[--color-indigo-400] transition-all">Solutions</Link>
        <Link href="/why-us" className="hover:text-[--color-indigo-400] transition-all">Why Us</Link>
        <a href="#contact">
          <button className="bg-gradient-to-r from-[--color-purple-400] to-[--color-pink-400] px-8 py-3 rounded-full text-white font-bold hover:scale-105 hover:shadow-lg transition-all">
            Contact
          </button>
        </a>
      </div>
    </nav>
  );
}
