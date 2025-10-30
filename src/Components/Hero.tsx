"use client";


export default function Hero() {


  return (
    <section className="bg-white w-full flex flex-col lg:flex-row items-center justify-between px-8 lg:px-24 py-20"
          style={{ fontFamily: '"Space Grotesk", sans-serif' }}>
      {/* Sol Metin Bloğu */}
      <div className="max-w-xl">
        <h1
          className="text-[58px] leading-[68px] font-medium text-[#191A23] mb-8 tracking-tight"
        >
          Navigating the <br /> digital landscape <br /> for success
        </h1>

        <p
          className="text-[18px] leading-[28px] text-[#555]"
          style={{ fontFamily: '"Space Grotesk", sans-serif' }}
        >
          Our digital marketing agency helps businesses grow and succeed online
          through a range of services including SEO, PPC, social media
          marketing, and content creation.
        </p>

        <button
          className="mt-10 bg-[#191A23] text-white text-[18px] font-medium px-8 py-4 rounded-xl hover:bg-black transition-all duration-200"
          style={{ fontFamily: '"Space Grotesk", sans-serif' }}
        >
          Book a consultation
        </button>
      </div>

      {/* Sağ Görsel */}
      <div className="mt-16 lg:mt-0 lg:ml-24 flex justify-center">
        <img
          src="/Illustration.svg" // SVG dosyanın adını burada belirt
          alt="Marketing Illustration"
          width={520}
          height={400}
        />
      </div>

    </section>
  );
}
