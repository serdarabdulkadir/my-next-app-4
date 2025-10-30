"use client";

import { ArrowUpRight } from "lucide-react";

// NOT: Görseldeki renklere daha yakın tonlar ve daha büyük gölge için güncellenmiştir.
const services = [
  // Görseldeki ilk kartın rengi yeşil tonu gibi duruyor (B9FF66), ancak siz F3F3F3 istediğiniz için bıraktım.
  {
    title: "Search engine optimization",
    color: "bg-[#F3F3F3]", // Tasarımda açık yeşil (B9FF66) gibi görünüyor, F3F3F3 ise e-posta pazarlama kartının rengi.
    text: "text-[#191A23]",
  },
  {
    title: "Pay-per-click advertising",
    color: "bg-[#C9FF5E]",
    text: "text-[#191A23]",
  },
  {
    title: "Social Media Marketing",
    color: "bg-[#191A23]",
    text: "text-white",
  },
  {
    title: "Email Marketing",
    color: "bg-[#F3F3F3]",
    text: "text-[#191A23]",
  },
  {
    title: "Content Creation",
    color: "bg-[#C9FF5E]",
    text: "text-[#191A23]",
  },
  {
    title: "Analytics and Tracking",
    color: "bg-[#191A23]",
    text: "text-white",
  },
];

export default function ServicesPage() {
  return (
    // Tailwind config'inizde 'Space Grotesk' fontunu tanımladığınızı varsayıyorum
    <main className="bg-white min-h-screen px-6 md:px-20 py-20 font-[Space_Grotesk]">
      
      {/* 1. Header */}
      <div className="flex items-start gap-4 mb-16 flex-col">
        {/* Görselde başlık kutusu ve metin yan yana */}
        <div className="flex flex-col md:flex-row md:items-center gap-4">
            {/* Yeşil Vurgulu Başlık */}
            <h2 className="text-[24px] md:text-[28px] font-medium text-[#191A23] bg-[#C9FF5E] px-4 py-1 rounded-md whitespace-nowrap">
            Services
            </h2>
            <p className="text-[16px] text-[#555] max-w-2xl mt-2 md:mt-0">
            At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include:
            </p>
        </div>
      </div>

      {/* 2. Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
        {services.map((service, index) => (
          // Her bir servis kartı
          <div
            key={index}
            // Gölge: Tasarımla tam uyumlu olması için büyük ve keskin gölge
            // Yuvarlaklık: Görseldeki gibi büyük (rounded-[24px])
            className={`relative flex flex-col justify-between rounded-[24px] border border-[#191A23] shadow-[0_5px_0_#191A23] px-8 py-8 h-[260px] ${service.color} ${service.text}`}
          >
            <div>
              {/* Başlık: Vurgulu başlık (Görselde başlık, kartın rengine göre ya yeşil ya da beyaz/koyu) */}
              <h3 
                className={`text-[24px] font-medium inline-block px-3 py-1 rounded
                  ${service.color.includes('bg-[#191A23]') ? 'bg-white text-[#191A23]' : 'bg-[#C9FF5E] text-[#191A23]'} 
                  ${service.color.includes('bg-[#F3F3F3]') && index !== 3 ? 'bg-[#C9FF5E] text-[#191A23]' : ''} 
                  ${service.color.includes('bg-[#C9FF5E]') && index !== 3 ? 'bg-[#FFFFFF] text-[#191A23]' : ''} 
                `}
              >
                {service.title}
              </h3>
            </div>

            <div className="flex items-end justify-between mt-6">
              {/* Learn More Linki */}
              <div className="flex items-center gap-2 cursor-pointer group">
                {/* Ok butonu: Arka plan her zaman koyu siyah */}
                <div className={`w-9 h-9 rounded-full bg-[#191A23] flex items-center justify-center group-hover:scale-110 transition
                  ${service.color.includes('bg-[#191A23]') ? 'border border-[#FFFFFF]' : 'bg-black text-[#191A23]'} 
                `}>
                  <ArrowUpRight className="w-5 h-5 text-white" />
                </div>
                {/* Metin rengi kart rengine göre ayarlanmıştır. */}
                <span className={`text-[17px] font-medium ${service.text}`}>Learn more</span>
              </div>

              {/* SVG İllüstrasyon */}
              {/* Görseldeki illüstrasyonlar genellikle sağ üst köşede veya kartın genelinde dağınık duruyor, bu yüzden bottom-0 ve right-0 ile konumlandırmak yeterli olmayabilir. Ancak SVG'lerinizin doğru yolda olduğunu varsayıyoruz. */}
              <img
                src={`/About${index + 1}.svg`}
                alt={service.title}
                width={100} 
                height={100}
                className="object-contain"
              />
            </div>
          </div>
        ))}
      </div>

      {/* 3. CTA Section: Let's make things happen */}
      <div className="bg-[#F3F3F3] rounded-[24px] px-10 py-12 flex flex-col md:flex-row justify-between items-center relative overflow-hidden">
        
        {/* Sol Taraftaki Metin ve Buton */}
        <div className="max-w-lg z-10 text-center md:text-left">
          <h3 className="text-[28px] font-semibold text-[#191A23] mb-4">
            Let’s make things happen
          </h3>
          <p className="text-[17px] text-[#555] mb-8">
            Contact us today to learn more about how our digital marketing
            services can help your business grow and succeed online.
          </p>
          <button className="bg-[#191A23] text-white px-8 py-4 rounded-xl text-[16px] font-medium hover:bg-[#2b2d33] transition shadow-[0_4px_0_#000000]">
            Get your free proposal
          </button>
        </div>

        {/* Sağ Taraftaki İllüstrasyon */}
        {/* Tasarımdaki gibi sağ alt köşeden taşan illüstrasyon için konumlandırma */}
        <div className="absolute right-[-10px] bottom-[-10px] hidden lg:block">
          <img
            src={`/About7.svg`}
            alt="CTA illustration"
            width={280} 
            height={280}
            className="object-contain"
          />
        </div>

        {/* Küçük ekranlar için illüstrasyonu alta ve merkeze alıyoruz */}
        <div className="mt-8 block lg:hidden opacity-70">
           <img
            src={`/About7.svg`}
            alt="CTA illustration"
            width={180} 
            height={180}
            className="object-contain mx-auto"
          />
        </div>
      </div>
    </main>
  );
}
