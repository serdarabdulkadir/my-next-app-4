import Image from "next/image";
import Link from "next/link";

export default function FooterPage() {
  return (
    <footer className="bg-[#191919] text-white rounded-t-3xl py-12 px-6 md:px-16 lg:px-28">
      <div className="flex flex-col md:flex-row justify-between gap-10 md:gap-16">
        {/* Sol Kısım */}
        <div className="flex flex-col gap-6 md:w-1/2">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <img
              src="/Icon1.svg"
              alt="Positivus Logo"
              width={28}
              height={28}
              className="object-contain"
            />
            <span className="text-xl font-semibold">Positivus</span>
          </div>

          {/* Menü */}
          <nav className="flex flex-wrap gap-4 text-gray-300 text-sm">
            <Link href="#" className="hover:text-[#D1FF4C]">
              About us
            </Link>
            <Link href="#" className="hover:text-[#D1FF4C]">
              Services
            </Link>
            <Link href="#" className="hover:text-[#D1FF4C]">
              Use Cases
            </Link>
            <Link href="#" className="hover:text-[#D1FF4C]">
              Pricing
            </Link>
            <Link href="#" className="hover:text-[#D1FF4C]">
              Blog
            </Link>
          </nav>

          {/* Contact */}
          <div className="bg-[#292929] rounded-3xl p-6 flex flex-col gap-3">
            <span className="bg-[#D1FF4C] text-black text-sm font-semibold px-3 py-1 rounded-md w-fit">
              Contact us:
            </span>
            <p className="text-sm text-gray-200">
              Email: info@positivus.com
              <br />
              Phone: 555-567-8901
              <br />
              Address: 1234 Main St, Moonstone City, Stardust State 12345
            </p>
          </div>
        </div>

        {/* Sağ Kısım */}
        <div className="flex flex-col justify-between md:w-1/2">
          {/* Sosyal ikonlar */}
          <div className="flex justify-end gap-3 mb-6 md:mb-0">
            <Link href="#" className="rounded-full p-2 hover:bg-[#D1FF4C] transition">
              <img src="/Linkedin.svg" alt="LinkedIn" width={18} height={18} />
            </Link>

            <Link href="#" className="rounded-full p-2 hover:bg-[#D1FF4C] transition">
              <img src="/Facebook.svg" alt="Facebook" width={18} height={18} />
            </Link>

            <Link href="#" className=" rounded-full p-2 hover:bg-[#D1FF4C] transition">
              <img src="/X.svg" alt="Twitter (X)" width={18} height={18} />
            </Link>

          </div>

          {/* Subscribe Alanı */}
          <div className="bg-[#292929] rounded-3xl p-6 flex flex-col sm:flex-row items-center gap-4">
            <input
              type="email"
              placeholder="Email"
              className="flex-1 w-full rounded-md border border-gray-500 bg-transparent px-4 py-3 text-sm text-white placeholder-gray-400 focus:outline-none"
            />
            <button className="bg-[#D1FF4C] text-black px-6 py-3 rounded-md font-medium text-sm hover:brightness-110 transition">
              Subscribe to news
            </button>
          </div>
        </div>
      </div>

      {/* Alt Bilgi */}
      <div className="border-t border-gray-600 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
        <p>© 2023 Positivus. All Rights Reserved.</p>
        <Link href="#" className="hover:text-[#D1FF4C]">
          Privacy Policy
        </Link>
      </div>
    </footer>
  );
}
