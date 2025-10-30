"use client";

import { ArrowLeft, ArrowRight } from "lucide-react";

export default function Testimonials() {
  return (
    <section className="py-24 px-4 md:px-16 bg-white">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-14 max-w-[1200px] mx-auto">
        <h2 className="text-4xl md:text-[42px] font-bold bg-[#B9FF66] text-black inline-block px-4 py-1 rounded-md mb-4 md:mb-0">
          Testimonials
        </h2>
        <p className="text-[#191A23] text-[15px] md:text-[16px] max-w-[600px] leading-relaxed">
          Hear from Our Satisfied Clients: Read Our Testimonials to Learn More
          about Our Digital Marketing Services
        </p>
      </div>

      {/* Dark container */}
      <div className="bg-[#191A23] text-white rounded-[40px] px-6 md:px-16 py-20 overflow-hidden relative max-w-[1200px] mx-auto">
        {/* Cards */}
        <div className="flex items-start justify-center gap-6 md:gap-10">
          {/* Left cut card */}
          <div className="hidden md:block w-[30%] border border-[#B9FF66] rounded-[30px] p-8 text-gray-400 text-[15px] leading-relaxed opacity-60 overflow-hidden">
            <p>
              ”We have been working with Positivus for the past year and have
              seen a significant increase in website traffic and leads as a
              result of their efforts. The team is professional, responsive, and
              truly cares about the success of our business.”
            </p>
          </div>

          {/* Center main card */}
          <div className="relative w-full md:w-[40%] border border-[#B9FF66] rounded-[30px] p-10">
            <p className="text-[17px] md:text-[18px] leading-relaxed mb-12">
              ”We have been working with Positivus for the past year and have
              seen a significant increase in website traffic and leads as a
              result of their efforts. The team is professional, responsive, and
              truly cares about the success of our business. We highly recommend
              Positivus to any company looking to grow their online presence.”
            </p>

            {/* Speech tail */}
            <div className="absolute left-[48%] -bottom-[19px] w-5 h-5 bg-[#191A23] border-l border-b border-[#B9FF66] rotate-45"></div>

            {/* Person info */}
            <div>
              <p className="text-[#B9FF66] font-semibold text-[16px]">
                John Smith
              </p>
              <p className="text-gray-300 text-[14px]">
                Marketing Director at XYZ Corp
              </p>
            </div>
          </div>

          {/* Right cut card */}
          <div className="hidden md:block w-[30%] border border-[#B9FF66] rounded-[30px] p-8 text-gray-400 text-[15px] leading-relaxed opacity-60 overflow-hidden">
            <p>
              ”We have been working with Positivus for the past year and have
              seen a significant increase in website traffic and leads as a
              result of their efforts. The team is professional, responsive, and
              truly cares about the success of our business.”
            </p>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-center items-center gap-8 mt-14">
          <button className="p-2 rounded-full hover:bg-[#222] transition">
            <ArrowLeft className="w-6 h-6 text-gray-300" />
          </button>

          {/* Dots */}
          <div className="flex gap-2">
            <span className="w-3 h-3 rounded-[2px] bg-[#B9FF66]"></span>
            <span className="w-3 h-3 rounded-[2px] bg-gray-400"></span>
            <span className="w-3 h-3 rounded-[2px] bg-gray-400"></span>
            <span className="w-3 h-3 rounded-[2px] bg-gray-400"></span>
            <span className="w-3 h-3 rounded-[2px] bg-gray-400"></span>
          </div>

          <button className="p-2 rounded-full hover:bg-[#222] transition">
            <ArrowRight className="w-6 h-6 text-gray-300" />
          </button>
        </div>
      </div>
    </section>
  );
}
