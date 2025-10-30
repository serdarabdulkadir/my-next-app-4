"use client";
import Link from "next/link";
// React'ta ikonları kolayca kullanabilmek için react-icons kütüphanesini varsayıyorum.
// Eğer yüklü değilse: npm install react-icons

export default function Footer() {
  // Tasarımdaki renkler:
  const darkBg = "#191A23"; // Ana koyu arka plan
  const lightGreen = "#C9FF5E"; // Yeşil vurgu rengi
  const whiteText = "white"; 

  return (
    // Ana konteyner: Koyu arka plan ve yuvarlatılmış köşeler
    <footer className={`bg-[${darkBg}] px-6 md:px-20 py-16 text-${whiteText} rounded-t-[40px] font-[Space_Grotesk]`}>
      {/* Üst Bölüm: Logo, Menü, Sosyal Medya */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-12">
        {/* Sol: Logo */}
        <div className="flex items-center space-x-2 mb-6 md:mb-0">
          {/* Logo İkonu (Bir X veya yıldız şekli, burada basit bir yer tutucu kullanıyorum) */}
          <img src="/Icon1.svg" alt="" />
         
          <span className="text-xl font-bold">Positivus</span>
        </div>

        {/* Orta: Menü Bağlantıları */}
        <nav className="flex flex-wrap gap-x-8 gap-y-4 text-base font-medium text-white/80 underline-offset-4 mb-6 md:mb-0">
          {/* !!! Burası Değişti: linklere "duration-500" eklendi !!! */}
          <Link href="#About" className="hover:text-gray-600 transition-colors **duration-500** underline">
            About us
          </Link>
          <Link href="#Services" className="hover:text-gray-600 transition-colors **duration-500** underline">
            Services
          </Link>
          <Link href="#Working" className="hover:text-gray-600 transition-colors **duration-500** underline">
            Use Cases
          </Link>
          <Link href="#Team" className="hover:text-gray-600 transition-colors **duration-500** underline">
            Pricing
          </Link>
          <Link href="#Test" className="hover:text-gray-600 transition-colors duration-500 underline">
            Blog
          </Link>
        </nav>

        {/* Sağ: Sosyal Medya İkonları */}
        <div className="flex space-x-4">
          <Link href="#" aria-label="LinkedIn">
            <div className={`w-8 h-8 rounded-full bg-white flex items-center justify-center text-[${darkBg}] hover:opacity-80 transition`}>
              <img src="/Linkedin.svg" alt="" />
            </div>
          </Link>
          <Link href="#" aria-label="Facebook">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center text-[${darkBg}] hover:opacity-80 transition`}>
              <img src="/Facebook.svg" alt="" />
            </div>
          </Link>
          <Link href="#" aria-label="Twitter">
            <div className={`w-8 h-8 rounded-full bg-white flex items-center justify-center text-[${darkBg}] hover:opacity-80 transition`}>
              <img src="/X.svg" alt="" />
            </div>
          </Link>
        </div>
      </div>
      
      {/* Ana İçerik ve Abonelik Formu */}
      <div className="flex flex-col lg:flex-row justify-between pt-8 pb-12">
        {/* Sol: İletişim Bilgileri */}
        <div className="flex flex-col space-y-3 mb-10 lg:mb-0 w-full lg:max-w-[400px]">
          {/* İletişim Başlığı */}
          <h3 className={`text-[18px] font-semibold text-black bg-[${lightGreen}] px-3 py-1 rounded-md shadow-[0_2px_0_#000] inline-block w-fit`}>
            Contact us:
          </h3>
          
          {/* Bilgiler */}
          <p className="text-base text-white/80 mt-4">Email: info@positivus.com</p>
          <p className="text-base text-white/80">Phone: 555-567-8901</p>
          <p className="text-base text-white/80">
            Address: 1234 Main St <br /> Moonstone City, Stardust State 12345
          </p>
        </div>
        
        {/* Sağ: Abonelik Formu */}
        <div className={`bg-[#292A32] p-12 rounded-[25px] flex items-center justify-center w-full lg:max-w-[500px] h-fit`}>
          <div className="flex flex-col sm:flex-row gap-4 w-full">
            <input
              type="email"
              placeholder="Email"
              className={`flex-grow bg-transparent border-2 border-white/80 rounded-xl text-white placeholder-white/50 px-3 py-2 text-[16px] outline-none focus:border-[${lightGreen}] transition`}
            />
            <button
              type="submit"
              className={`bg-[${lightGreen}] text-[${darkBg}] text-[16px] font-medium px-6 py-3 rounded-xl hover:opacity-90 transition-all duration-200 whitespace-nowrap`}
            >
              Subscribe to news
            </button>
          </div>
        </div>
      </div>

      {/* Ayırıcı Çizgi */}
      <hr className="border-t border-white/20 mb-6" />

      {/* Alt Bölüm: Telif Hakkı ve Gizlilik Politikası */}
      <div className="flex flex-col sm:flex-row justify-between items-center text-sm text-white/70">
        <p className="mb-2 sm:mb-0">
          © 2023 Positivus. All Rights Reserved.
        </p>
        <Link href="/privacy" className="underline hover:text-white transition">
          Privacy Policy
        </Link>
      </div>
    </footer>
  );
}