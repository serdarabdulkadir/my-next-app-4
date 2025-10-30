"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full bg-white flex items-center justify-between px-20 py-6">
      {/* Sol Logo */}
      <div className="flex items-center space-x-3">
        <img src="./Icon.svg" alt="" className="w-[24px] h-[24px]"/>
        <span className="text-[22px] font-semibold text-black tracking-tight">
          Positivus
        </span>
      </div>

      {/* Menü */}
      <div className="flex items-center space-x-12 text-[18px] text-black">
        <Link href="#About" className="hover:text-gray-600 transition-colors">
          About us
        </Link>
        <Link href="#Services" className="hover:text-gray-600 transition-colors">
          Services
        </Link>
        <Link href="#Working" className="hover:text-gray-600 transition-colors">
          Use Cases
        </Link>
        <Link href="#Team" className="hover:text-gray-600 transition-colors">
          Pricing
        </Link>
        <Link href="#Test" className="hover:text-gray-600 transition-colors">
          Blog
        </Link>
      </div>

      {/* Sağ Buton */}
      <button className="border border-black text-[18px] text-black px-8 py-3 rounded-2xl hover:bg-black hover:text-white transition-all duration-200">
        Request a quote
      </button>
    </nav>
  );
}
