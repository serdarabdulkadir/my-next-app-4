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

export default function ServicesPage() {
  return (
    <main className="bg-white min-h-screen px-6 md:px-20 py-20 font-[Space_Grotesk]">
      {/* Header */}
      <div className="flex flex-col md:flex-row items-start md:items-center gap-4 mb-12">
        <h2 className="text-[24px] md:text-[28px] font-medium text-[#191A23] bg-[#C9FF5E] px-3 py-1 rounded-md">
          Case Studies
        </h2>
        <p className="text-[16px] text-[#555] max-w-2xl">
          Explore Real-Life Examples of Our Proven Digital Marketing Success
          through Our Case Studies
        </p>
      </div>

      {/* Case Studies Grid */}
      <div className="bg-[#191A23] text-white rounded-[40px] px-8 py-12 flex flex-col md:flex-row justify-between gap-10 md:gap-0 shadow-[0_4px_0_#191A23]">
        {caseStudies.map((item, index) => (
          <div
            key={index}
            className={`flex flex-col justify-between md:w-1/3 px-0 md:px-8 ${
              index < caseStudies.length - 1
                ? "md:border-r border-[#555]"
                : "border-none"
            }`}
          >
            <p className="text-[16px] leading-relaxed mb-6">{item.text}</p>
            <div className="flex items-center gap-2 text-[#C9FF5E] cursor-pointer group">
              <span className="text-[16px] font-medium">Learn more</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
