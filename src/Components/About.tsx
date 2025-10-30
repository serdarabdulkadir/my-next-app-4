"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

const services = [
  {
    title: "Search engine optimization",
    image: "/About1.svg",
    color: "bg-[#B9FF66]",
    text: "text-[#000000]",
  },
  {
    title: "Pay-per-click advertising",
    image: "/About2.svg",
    color: "bg-[#C9FF5E]",
    text: "text-[#000000]",
  },
  {
    title: "Social Media Marketing",
    image: "/About3.svg",
    color: "bg-[#191A23]",
    text: "text-white",
  },
  {
    title: "Email Marketing",
    image: "/About4.svg",
    color: "bg-[#F3F3F3]",
    text: "text-[#191A23]",
  },
  {
    title: "Content Creation",
    image: "/About5.svg",
    color: "bg-[#C9FF5E]",
    text: "text-[#191A23]",
  },
  {
    title: "Analytics and Tracking",
    image: "/About6.svg",
    color: "bg-[#191A23]",
    text: "text-white",
  },
];

export default function AboutPage() {
  return (
    <main className="bg-white min-h-screen px-6 md:px-20 py-20 font-[Space_Grotesk]">
      {/* Header */}
      <div className="flex items-start md:items-center gap-4 mb-14 flex-col md:flex-row">
        <h2 className="text-[24px] md:text-[28px] font-medium text-[#191A23] bg-[#C9FF5E] px-3 py-1 rounded-md">
          Services
        </h2>
        <p className="text-[16px] text-[#555] max-w-2xl">
          At our digital marketing agency, we offer a range of services to help
          businesses grow and succeed online. These services include:
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-20">
        {services.map((service, index) => (
          <div
            key={index}
            className={`relative flex flex-col justify-between rounded-[24px] shadow-[0_4px_0_#191A23] px-8 py-8 h-[240px] ${service.color} ${service.text}`}
          >
            <div>
              <h3 className="text-[22px] font-medium bg-[#C9FF5E] inline-block px-2 py-1 rounded">
                {service.title}
              </h3>
            </div>

            <div className="flex items-end justify-between mt-6">
              <div className="flex items-center gap-2 cursor-pointer group">
                <div className="w-8 h-8 rounded-full bg-[#191A23] flex items-center justify-center group-hover:scale-110 transition">
                  <ArrowUpRight className="w-5 h-5 text-white" />
                </div>
                <span className="text-[16px] font-medium">Learn more</span>
              </div>

              <img
                src={service.image}
                alt={service.title}
                width={90}
                height={90}
                className="object-contain"
              />
            </div>
          </div>
        ))}
      </div>

      {/* CTA Section */}
      <div className="bg-[#F3F3F3] rounded-[24px]  px-10 py-12 flex flex-col md:flex-row justify-between items-center">
        <div className="max-w-md">
          <h3 className="text-[24px] md:text-[26px] font-semibold text-[#191A23] mb-4">
            Let’s make things happen
          </h3>
          <p className="text-[16px] text-[#555] mb-6">
            Contact us today to learn more about how our digital marketing
            services can help your business grow and succeed online.
          </p>
          <button className="bg-[#191A23] text-white px-6 py-3 rounded-lg text-[15px] font-medium hover:bg-[#2b2d33] transition">
            Get your free proposal
          </button>
        </div>

        <div className="mt-10 md:mt-0 relative">
          <img
            src="/About7.svg"
            alt="CTA illustration"
            width={220}
            height={220}
            className="object-contain"
          />
        </div>
      </div>
    </main>
  );
}
