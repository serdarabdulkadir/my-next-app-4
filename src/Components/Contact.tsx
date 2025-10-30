"use client";

import { useState } from "react";
// Bu bileşeni kullanmak için, projenizin 'public' klasörüne
// görseldeki dekoratif deseni içeren bir "contact-decoration.svg"
// veya benzeri bir dosya eklemeniz gerektiğini unutmayın.
// Ben, tasarımınıza en yakın görseli kullanmanız için
// src="/contact-decoration.svg" yolunu varsayılan olarak kullanacağım.

export default function Contact() {
  const [selected, setSelected] = useState("say-hi");

  return (
    // Tasarımdaki dış çerçeve rengi genelde beyaz (bg-white)
    <section className="bg-white px-6 md:px-20 py-20"
          style={{ fontFamily: '"Space Grotesk", sans-serif' }}>
      {/* Başlık (Tasarımda bu kısım görünmüyor, ancak kodda var ve iyi bir uygulama) */}
      <div className="flex flex-col md:flex-row items-start md:items-center gap-4 mb-12">
        <h2 className="text-[26px] font-semibold text-[#191A23] bg-[#C9FF5E] px-3 py-1 rounded-md shadow-[0_2px_0_#191A23]">
          Contact Us
        </h2>
        <p className="text-[16px] text-[#555] max-w-[500px] leading-relaxed">
          Connect with Us: Let's Discuss Your Digital Marketing Needs
        </p>
      </div>
    
      {/* Form Ana Konteyneri */}
      {/* Arka plan rengi, gölge ve köşeler tasarım ile eşleşmeli */}
      <div className="relative bg-[#F3F3F3] rounded-[30px] shadow-[0_4px_0_#191A23] px-8 md:px-16 py-12 flex flex-col md:flex-row justify-between overflow-hidden">
        {/* Sol Taraftaki Form Alanı */}
        <form className="flex flex-col gap-6 w-full md:max-w-[500px] z-20"> {/* Max genişlik ayarlandı */}
          {/* Radyo Butonları */}
          <div className="flex items-center gap-8 mb-4">
            {/* Say Hi */}
            <label className="flex items-center gap-2 cursor-pointer select-none">
              <div
                onClick={() => setSelected("say-hi")}
                className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition ${
                  selected === "say-hi"
                    ? "border-[#C9FF5E]" // Seçili olduğunda yeşil çerçeve
                    : "border-[#191A23]/50" // Seçili değilken hafif koyu çerçeve
                }`}
              >
                {selected === "say-hi" && (
                  // İçindeki yeşil dolgu
                  <div className="w-2.5 h-2.5 bg-[#C9FF5E] rounded-full"></div>
                )}
              </div>
              <span className="text-[#191A23] text-[16px]">Say Hi</span>
            </label>

            {/* Get a Quote */}
            <label className="flex items-center gap-2 cursor-pointer select-none">
              <div
                onClick={() => setSelected("quote")}
                className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition ${
                  selected === "quote"
                    ? "border-[#C9FF5E]" // Seçili olduğunda yeşil çerçeve
                    : "border-[#191A23]/50" // Seçili değilken hafif koyu çerçeve
                }`}
              >
                {selected === "quote" && (
                  // İçindeki yeşil dolgu
                  <div className="w-2.5 h-2.5 bg-[#C9FF5E] rounded-full"></div>
                )}
              </div>
              <span className="text-[#191A23] text-[16px]">Get a Quote</span>
            </label>
          </div>

          {/* İsim Girişi */}
          <div className="flex flex-col gap-1">
            <label className="text-[15px] text-[#191A23] font-medium">Name</label>
            <input
              type="text"
              placeholder="Name"
              className="w-full border border-[#191A23]/30 rounded-[10px] px-4 py-3 text-[15px] outline-none focus:border-[#C9FF5E] transition"
            />
          </div>

          {/* Email Girişi */}
          <div className="flex flex-col gap-1">
            <label className="text-[15px] text-[#191A23] font-medium">Email*</label>
            <input
              type="email"
              placeholder="Email"
              className="w-full border border-[#191A23]/30 rounded-[10px] px-4 py-3 text-[15px] outline-none focus:border-[#C9FF5E] transition"
            />
          </div>

          {/* Mesaj Alanı */}
          <div className="flex flex-col gap-1">
            <label className="text-[15px] text-[#191A23] font-medium">Message*</label>
            <textarea
              placeholder="Message"
              rows={4}
              className="w-full border border-[#191A23]/30 rounded-[10px] px-4 py-3 text-[15px] outline-none resize-none focus:border-[#C9FF5E] transition"
            ></textarea>
          </div>

          {/* Gönder Butonu */}
          <button
            type="submit"
            // Tasarımdaki koyu arka plan ve yuvarlak köşeler
            className="bg-[#191A23] text-white text-[16px] font-medium py-3 rounded-[10px] hover:bg-[#2b2d33] transition-all duration-200 mt-4"
          >
            Send Message
          </button>
        </form>

        {/* Sağ Taraftaki Dekoratif Görsel */}
        {/* Görseli, formun sağ üst köşesine yakın konumlandırıp,
            formun genel akışını bozmadan yerleştirmek için 'absolute' kullanıldı.
            Bu görselin tasarımınızdaki gibi büyük bir alan kaplamasını sağlar.
            Z-index görselin formun arkasında kalmasını engeller. */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-[25%] hidden md:block w-full max-w-[500px] h-full z-10">
          {/* Görselin formun sağ tarafında kaybolan kısmını gizlemek için
              ana konteynerde `overflow-hidden` olduğundan emin olun. */}
          <img
            // Lütfen bu yolun projenizdeki gerçek görsel yoluyla eşleştiğinden emin olun.
            src="/Contact.svg" 
            alt="Contact illustration"
            className="object-contain w-full h-full"
          />
          {/* Eğer orijinal görsel bir SVG ise ve yolunu bilmiyorsanız,
              görseldeki dekoratif desene çok benzeyen bir SVG oluşturup
              onu contact-decoration.svg olarak kaydedebilirsiniz. */}
        </div>
        
        {/* Küçük ekranlarda dekorasyonu gizlemek için üstteki `hidden md:block` kullanıldı */}
      </div>
    </section>
  );
}