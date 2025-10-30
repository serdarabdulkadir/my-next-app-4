"use client";

import { useState } from "react";
import Image from "next/image";

export default function Contact() {
  const [selected, setSelected] = useState("say-hi");

  return (
    <section className="bg-white px-6 md:px-20 py-20 font-[Space_Grotesk]">
      {/* Header */}
      <div className="flex flex-col md:flex-row items-start md:items-center gap-4 mb-12">
        <h2 className="text-[26px] font-semibold text-[#191A23] bg-[#C9FF5E] px-3 py-1 rounded-md shadow-[0_2px_0_#191A23]">
          Contact Us
        </h2>
        <p className="text-[16px] text-[#555] max-w-[500px] leading-relaxed">
          Connect with Us: Let’s Discuss Your Digital Marketing Needs
        </p>
      </div>

      {/* Form Container */}
      <div className="relative bg-[#F3F3F3] rounded-[40px] shadow-[0_4px_0_#191A23] px-8 md:px-16 py-12 flex flex-col md:flex-row justify-between overflow-hidden">
        {/* Left Side Form */}
        <form className="flex flex-col gap-6 w-full md:max-w-[520px] z-10">
          {/* Radio Buttons */}
          <div className="flex items-center gap-8 mb-4">
            <label className="flex items-center gap-2 cursor-pointer select-none">
              <div
                onClick={() => setSelected("say-hi")}
                className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition ${
                  selected === "say-hi"
                    ? "border-[#C9FF5E]"
                    : "border-[#191A23]/50"
                }`}
              >
                {selected === "say-hi" && (
                  <div className="w-2.5 h-2.5 bg-[#C9FF5E] rounded-full"></div>
                )}
              </div>
              <span className="text-[#191A23] text-[16px]">Say Hi</span>
            </label>

            <label className="flex items-center gap-2 cursor-pointer select-none">
              <div
                onClick={() => setSelected("quote")}
                className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition ${
                  selected === "quote"
                    ? "border-[#C9FF5E]"
                    : "border-[#191A23]/50"
                }`}
              >
                {selected === "quote" && (
                  <div className="w-2.5 h-2.5 bg-[#C9FF5E] rounded-full"></div>
                )}
              </div>
              <span className="text-[#191A23] text-[16px]">Get a Quote</span>
            </label>
          </div>

          {/* Inputs */}
          <div className="flex flex-col gap-2">
            <label className="text-[15px] text-[#191A23]">Name</label>
            <input
              type="text"
              placeholder="Name"
              className="w-full border border-[#191A23]/30 rounded-[10px] px-4 py-3 text-[15px] outline-none focus:border-[#C9FF5E] transition"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-[15px] text-[#191A23]">Email*</label>
            <input
              type="email"
              placeholder="Email"
              className="w-full border border-[#191A23]/30 rounded-[10px] px-4 py-3 text-[15px] outline-none focus:border-[#C9FF5E] transition"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-[15px] text-[#191A23]">Message*</label>
            <textarea
              placeholder="Message"
              rows={4}
              className="w-full border border-[#191A23]/30 rounded-[10px] px-4 py-3 text-[15px] outline-none resize-none focus:border-[#C9FF5E] transition"
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-[#191A23] text-white text-[16px] font-medium py-3 rounded-[10px] hover:bg-[#2b2d33] transition-all duration-200"
          >
            Send Message
          </button>
        </form>

        {/* Right Decorative Image */}
        <div className="absolute md:static right-[-80px] top-1/2 -translate-y-1/2 hidden md:flex justify-center items-center">
          <img
            src="/Contact.svg"
            alt="Contact illustration"
            width={340}
            height={340}
            className="object-contain"
          />
        </div>
      </div>
    </section>
  );
}
