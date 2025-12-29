export default function Footer() {
  return (
    <footer className="w-full bg-[#0f0e17] text-gray-400 py-8 px-6 mt-auto">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
        
        {/* Brand Info */}
        <div className="mb-4 md:mb-0 text-center md:text-left">
          <h3 className="text-white font-bold text-lg">Lumina Agency</h3>
          <p className="text-sm mt-2">AI-Powered Solutions for Modern Businesses.</p>
        </div>

        {/* Copyright */}
        <div className="text-sm">
          &copy; {new Date().getFullYear()} Lumina Agency. All rights reserved.
        </div>
      </div>
    </footer>
  );
}