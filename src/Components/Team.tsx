"use client";

import Image from "next/image";
import { Linkedin } from "lucide-react";

const team = [
  {
    name: "John Smith",
    role: "CEO and Founder",
    experience:
      "10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy",
    image: "/Team1.svg",
  },
  {
    name: "Jane Doe",
    role: "Director of Operations",
    experience:
      "7+ years of experience in project management and team leadership. Strong organizational and communication skills",
    image: "/Team2.svg",
  },
  {
    name: "Michael Brown",
    role: "Senior SEO Specialist",
    experience:
      "5+ years of experience in SEO and content creation. Proficient in keyword research and on-page optimization",
    image: "/Team3.svg",
  },
  {
    name: "Emily Johnson",
    role: "PPC Manager",
    experience:
      "3+ years of experience in paid search advertising. Skilled in campaign management and performance analysis",
    image: "/Team4.svg",
  },
  {
    name: "Brian Williams",
    role: "Social Media Specialist",
    experience:
      "4+ years of experience in social media marketing. Proficient in creating and scheduling content, analyzing metrics, and building engagement",
    image: "/Team5.svg",
  },
  {
    name: "Sarah Kim",
    role: "Content Creator",
    experience:
      "2+ years of experience in writing and editing. Skilled in creating compelling, SEO-optimized content for various industries",
    image: "/Team6.svg",
  },
];

export default function TeamSection() {
  return (
    <section className="bg-white px-6 md:px-20 py-20 font-[Space_Grotesk]">
      {/* Header */}
      <div className="flex flex-col md:flex-row items-start md:items-center gap-4 mb-12">
        <h2 className="text-[24px] md:text-[28px] font-medium text-[#191A23] bg-[#C9FF5E] px-3 py-1 rounded-md">
          Team
        </h2>
        <p className="text-[16px] text-[#555] max-w-[500px]">
          Meet the skilled and experienced team behind our successful digital marketing strategies
        </p>
      </div>

      {/* Team Grid */}
      <div className="grid md:grid-cols-3 gap-6">
        {team.map((member, index) => (
          <div
            key={index}
            className="border border-[#191A23] rounded-[20px] shadow-[0_4px_0_#191A23] bg-[#F3F3F3] p-6 flex flex-col items-start justify-between"
          >
            {/* Fotoğraf */}
            <div className="relative mb-4">
              <div className="absolute inset-0" />
              <img
                src={member.image}
                alt={member.name}
                width={100}
                height={80}
                className="relative z-10"
              />
            </div>

            {/* Bilgiler */}
            <div className="flex justify-between items-start w-full mb-2">
              <div>
                <h3 className="text-[18px] font-semibold text-[#191A23]">
                  {member.name}
                </h3>
                <p className="text-[15px] text-[#191A23]/80">{member.role}</p>
              </div>
              <img src="/Linkedin1.svg" alt="" />
            </div>

            <hr className="border-t border-[#191A23] w-full my-3" />

            <p className="text-[14px] text-[#191A23] leading-relaxed">
              {member.experience}
            </p>
          </div>
        ))}
      </div>

      {/* CTA Button */}
      <div className="flex justify-end mt-12">
        <button className="bg-[#191A23] text-white px-8 py-3 rounded-[12px] hover:bg-[#000] transition">
          See all team
        </button>
      </div>
    </section>
  );
}
