"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Consultation",
    description:
      "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
  },
  {
    number: "02",
    title: "Research and Strategy Development",
    description:
      "We analyze your market, competitors, and audience to create a data-driven strategy aligned with your goals.",
  },
  {
    number: "03",
    title: "Implementation",
    description:
      "Our team executes the strategy across selected channels using the best tools and practices.",
  },
  {
    number: "04",
    title: "Monitoring and Optimization",
    description:
      "We continuously monitor performance and optimize campaigns for better results.",
  },
  {
    number: "05",
    title: "Reporting and Communication",
    description:
      "You’ll receive regular performance reports and transparent communication throughout the process.",
  },
  {
    number: "06",
    title: "Continual Improvement",
    description:
      "We refine strategies over time based on analytics and your evolving business goals.",
  },
];

export default function WorkingProcess() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="bg-white px-6 md:px-20 py-20 font-[Space_Grotesk]">
      {/* Header */}
      <div className="flex flex-col md:flex-row items-start md:items-center gap-4 mb-12">
        <h2 className="text-[24px] md:text-[28px] font-medium text-[#191A23] bg-[#C9FF5E] px-3 py-1 rounded-md">
          Our Working Process
        </h2>
        <p className="text-[16px] text-[#555]">
          Step-by-Step Guide to Achieving Your Business Goals
        </p>
      </div>

      {/* Accordion */}
      <div className="flex flex-col gap-5">
        {steps.map((step, index) => {
          const isActive = activeIndex === index;
          return (
            <div
              key={index}
              className={`rounded-[20px] border border-[#191A23] shadow-[0_4px_0_#191A23] transition-all duration-300 ${
                isActive ? "bg-[#C9FF5E]" : "bg-[#F3F3F3]"
              }`}
            >
              <button
                onClick={() =>
                  setActiveIndex(isActive ? -1 : index)
                }
                className="w-full flex justify-between items-center px-6 py-6"
              >
                <div className="flex items-center gap-4">
                  <span className="text-[22px] md:text-[24px] font-bold">
                    {step.number}
                  </span>
                  <span className="text-[18px] md:text-[20px] font-medium">
                    {step.title}
                  </span>
                </div>
                {isActive ? (
                  <Minus className="text-[#191A23] w-5 h-5" />
                ) : (
                  <Plus className="text-[#191A23] w-5 h-5" />
                )}
              </button>

              {/* Açık olan içeriği */}
              {isActive && (
                <>
                  <div className="border-t border-[#191A23]/40 mx-6" />
                  <p className="px-6 py-4 text-[#191A23] text-[15px] leading-relaxed">
                    {step.description}
                  </p>
                </>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
