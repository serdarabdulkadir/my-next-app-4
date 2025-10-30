"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Smooth scroll
    const links = document.querySelectorAll("a[href^='#']");
    links.forEach(link => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        const targetId = link.getAttribute("href")?.slice(1);
        const targetElement = document.getElementById(targetId!);
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 80,
            behavior: "smooth",
          });
          setMenuOpen(false);
        }
      });
    });
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 bg-white transition-all duration-300 ${
        isScrolled ? "shadow-md py-3" : "py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 md:px-20">
        {/* Sol Logo */}
        <div className="flex items-center space-x-3">
          <img src="./Icon.svg" alt="logo" className="w-6 h-6" />
          <span className="text-[22px] font-semibold text-black tracking-tight">
            Positivus
          </span>
        </div>

        {/* Menü - Desktop */}
        <div className="hidden md:flex items-center space-x-12 text-[18px] text-black">
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

        {/* Sağ Buton (Desktop) */}
        <button className="hidden md:block border border-black text-[18px] text-black px-8 py-3 rounded-2xl hover:bg-black hover:text-white transition-all duration-200">
          Request a quote
        </button>

        {/* Hamburger Menü (Mobile) */}
        <button
          className="md:hidden text-black"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobil Menü */}
      <div
        className={`fixed top-0 left-0 h-screen w-full bg-white flex flex-col items-start justify-start px-8 pt-24 space-y-6 text-[22px] text-black transition-transform duration-500 ease-in-out ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <Link href="#About" className="hover:text-gray-600" onClick={() => setMenuOpen(false)}>
          About us
        </Link>
        <Link href="#Services" className="hover:text-gray-600" onClick={() => setMenuOpen(false)}>
          Services
        </Link>
        <Link href="#Working" className="hover:text-gray-600" onClick={() => setMenuOpen(false)}>
          Use Cases
        </Link>
        <Link href="#Team" className="hover:text-gray-600" onClick={() => setMenuOpen(false)}>
          Pricing
        </Link>
        <Link href="#Test" className="hover:text-gray-600" onClick={() => setMenuOpen(false)}>
          Blog
        </Link>
        <button className="border border-black text-[18px] text-black px-8 py-3 rounded-2xl hover:bg-black hover:text-white transition-all duration-200">
          Request a quote
        </button>
      </div>
    </nav>
  );
}
