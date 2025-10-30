"use client";


// SVG'nin kendisi (koyu arka plan, kartlar ve kuyruklar) bu dosyanın yerine geçecek.
// SVG dosyanızı projenizin 'public' klasörüne kaydedin.

export default function TestimonialsWithSVG() {
  // Tasarımın Kurumsal Renkleri
  const lightGreen = "#C9FF5E"; // Yeşil vurgu rengi
  const darkBg = "#191A23"; 

  // Yorum Verileri
  const testimonials = [
    {
      text: "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.",
      name: "John Smith",
      title: "Marketing Director at XYZ Corp",
      isCenter: true, // Merkezdeki aktif kart
    },
    {
      text: "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business.",
      name: "Jane Doe",
      title: "CTO at ABC Solutions",
      isCenter: false, // Kenardaki yarı görünür kart
    },
    // ... Diğer yorumlar
  ];

  // Sadece merkezi (aktif) yorumu alıyoruz.
  const centerTestimonial = testimonials.find(t => t.isCenter);

  return (
    <section className="py-24 px-4 md:px-16 bg-white" style={{ fontFamily: '"Space Grotesk", sans-serif' }}>
      {/* Header (Değişmedi) */}
      <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-14 max-w-[1200px] mx-auto font-[Space_Grotesk]">
        <h2 
          className={`text-4xl md:text-[42px] font-semibold bg-[${lightGreen}] text-[${darkBg}] inline-block px-4 py-1 rounded-md mb-4 md:mb-0 `}
        >
          Testimonials
        </h2>
        <p className={`text-[${darkBg}] text-[15px] md:text-[16px] max-w-[600px]`}>
          Hear from Our Satisfied Clients: Read Our Testimonials to Learn More
          about Our Digital Marketing Services
        </p>
      </div>

    
      <div className={`relative max-w-[1200px] mx-auto`}>
        
        <img 
          src="/Testimonials.svg"
          alt="Testimonial Background" 
          className="w-full h-auto rounded-[40px]" 
        />

      </div>
    </section>
  );
}