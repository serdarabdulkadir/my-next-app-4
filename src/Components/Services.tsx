"use client";

import { ArrowUpRight } from "lucide-react";

const caseStudies = [
  {
    text: "For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales.",
  },
  {
    text: "For a B2B software company, we developed an SEO strategy that resulted in a first page ranking for key keywords and a 200% increase in organic traffic.",
  },
  {
    text: "For a national retail chain, we created a social media marketing campaign that increased followers by 25% and generated a 20% increase in online sales.",
  },
];

export default function CaseStudiesPage() { // Bileşen adını CaseStudiesPage olarak değiştirdim
  return (
    <main className="bg-white px-6 md:px-20 pt-20 font-[Space_Grotesk]">
      
      {/* 1. Header */}
      <div className="flex flex-col gap-4 mb-16">
        <div className="flex flex-col md:flex-row md:items-center gap-4">
            {/* Yeşil Vurgulu Başlık */}
            <h2 className="text-[24px] md:text-[28px] font-medium text-[#191A23] bg-[#C9FF5E] px-4 py-1 rounded-md whitespace-nowrap">
            Case Studies
            </h2>
            <p className="text-[16px] text-[#555] max-w-xl mt-2 md:mt-0">
            Explore Real-Life Examples of Our Proven Digital Marketing Success through Our Case Studies
            </p>
        </div>
      </div>

      {/* 2. Case Studies Grid */}
      {/* Ana Kutu Yuvarlaklığı: rounded-[40px] yerine görseldeki gibi daha büyük olan rounded-[50px] veya rounded-3xl/4xl denedik */}
      <div className="bg-[#191A23] text-white rounded-[40px] px-8 py-12 md:py-16 lg:py-20 flex flex-col md:flex-row justify-between gap-8 md:gap-0 shadow-[0_4px_0_#191A23]">
        
        {caseStudies.map((item, index) => (
          <div
            key={index}
            // Her bir sütunun genişliği ve dikey ayırıcı (divider) çizgileri
            className={`flex flex-col justify-between md:w-1/3 px-0 lg:px-10 relative 
              ${index < caseStudies.length - 1 ? "md:pr-10" : "pr-0"}
              ${index > 0 ? "md:pl-10" : "pl-0"}
            `}
          >
            {/* Dikey Ayırıcı Çizgi (Görseldeki gibi dikey olarak tam uzatılmış) */}
            {/* İlk sütunda çizgi yok, diğerlerinde solda var */}
            {index > 0 && (
                <div className="hidden md:block absolute left-0 top-0 h-full w-[1px] bg-[#555]/50"></div>
            )}

            {/* Yatay Ayırıcı Çizgi (Mobil Görünüm için) */}
            {index > 0 && (
                 <div className="block md:hidden absolute top-0 left-0 w-full h-[1px] bg-[#555]/50 -mt-4"></div>
            )}


            <p className="text-[17px] leading-relaxed mb-8">{item.text}</p>
            
            <div className="flex items-center gap-2 text-[#C9FF5E] cursor-pointer group">
              <span className="text-[17px] font-medium">Learn more</span>
              {/* Okun yeşil olması ve sağa doğru hafifçe çıkması */}
              <ArrowUpRight className="w-5 h-5 text-[#C9FF5E] group-hover:translate-x-1 transition-transform" />
            </div>
            
            {/* Mobil görünümde kartlar arasına dikey boşluk eklemek için */}
             {index < caseStudies.length - 1 && (
                <div className="block md:hidden pb-4"></div> 
            )}
          </div>
        ))}
      </div>
    </main>
  );
}