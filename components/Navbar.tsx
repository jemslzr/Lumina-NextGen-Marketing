import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="w-full bg-[#1e1b4b] text-white py-4 px-6 fixed top-0 left-0 z-50 shadow-md">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text">
          Lumina Agency
        </div>

        {/* Links */}
        <div className="hidden md:flex space-x-8 text-sm font-medium">
          <Link href="/" className="hover:text-purple-300 transition">Home</Link>
          <Link href="#expertise" className="hover:text-purple-300 transition">Our Expertise</Link>
          <Link href="#contact" className="hover:text-purple-300 transition">Contact Us</Link>
        </div>
      </div>
    </nav>
  );
}