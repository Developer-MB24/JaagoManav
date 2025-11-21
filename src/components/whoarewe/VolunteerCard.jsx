// src/components/whoweare/VolunteersSection.jsx
import React from "react";
import { ArrowRight, Share2, Facebook, Twitter, Instagram } from "lucide-react";

const volunteers = [
  {
    name: "Joshua Sendu",
    role: "CEO-Founder",
    image: "/images/thumb-17.webp",
  },
  {
    name: "John Maxwell",
    role: "Team Leader",
    image: "/images/thumb-18.webp",
  },
  {
    name: "Bm Ashik (Moni)",
    role: "Sr. Volunteer",
    image: "/images/thumb-19.webp",
  },
  {
    name: "Denial Pasha",
    role: "Volunteer",
    image: "/images/thumb-20.webp",
  },
];

export default function VolunteersSection() {
  return (
    <section className="w-full bg-[#F8F7F0] py-24 md:py-24 px-4">
      <div className="mx-auto max-w-6xl">
        {/* Top row: title + actions */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          {/* Left */}
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <img src="/images/icon-2.svg" alt="icon-2" className="w-9 h-9" />
              <span className="text-sm font-semibold text-[#138808]">
                We Are Volunteer
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#134A43]">
              Together For The Planet
            </h2>
          </div>

          {/* Right: contact-details */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5">
            {/* View all volunteer button */}
            <a
              href="/volunteer"
              className="group inline-flex items-center gap-3 rounded-full px-7 py-3 text-sm md:text-base font-semibold text-[#FF9933] bg-[#134A43] overflow-hidden relative"
            >
              <span className="relative z-10">View All Volunteer</span>
              <span className="relative z-10 flex items-center justify-center w-8 h-8 rounded-full bg-[#FF9933] text-[#134A43] transition-colors duration-300 group-hover:bg-white group-hover:text-[#FF9933]">
                <span className="flex items-center gap-[2px]">
                  <ArrowRight
                    size={16}
                    className="block leading-none group-hover:-translate-x-[1px] transition-transform duration-200"
                  />
                </span>
              </span>
              <span className="absolute inset-0 bg-[#FF9933]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
            </a>

            {/* Join us mini CTA */}
            <div className="flex items-center gap-3 sm:gap-2 px-0 sm:px-0">
              <img
                src="/images/shape-12.webp"
                alt="shape-12"
                className="hidden xs:hidden sm:block w-16 h-16 object-contain"
              />
              <a
                href="/be-volunteer"
                className="flex items-center gap-3 sm:gap-2 border-2 border-[#0045401A] sm:border-none rounded-full sm:rounded-none px-4 py-2 sm:px-0 sm:py-0"
              >
                <span className="text-sm font-semibold text-[#134A43] max-w-[120px] leading-snug">
                  If you want can join us
                </span>
                <span className="border-2 border-[#0045401A] rounded-full p-2 hover:bg-[#FF9933] hover:border-[#FF9933] hover:text-white transition-colors duration-200 flex items-center justify-center">
                  <ArrowRight size={14} />
                </span>
              </a>
            </div>
          </div>
        </div>

        {/* Volunteer cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {volunteers.map((v) => (
            <div
              key={v.name}
              className="group relative bg-white p-2.5 rounded-[10px] shadow-sm"
            >
              <a href="/volunteer-details" className="block">
                {/* Image */}
                <div className="overflow-hidden rounded-[10px]">
                  <img
                    src={v.image}
                    alt={v.name}
                    className="w-full h-full object-cover rounded-[10px] transition-transform duration-500 group-hover:scale-110"
                  />
                </div>

                {/* Author info */}
                <div className="mt-2.5 text-center rounded-[10px] bg-[#F8F7F0] px-4 py-3 transition-colors duration-300 group-hover:bg-[#134A43]">
                  <h5 className="text-[20px] md:text-[22px] font-semibold leading-[32px] text-[#134A43] mb-1 transition-colors duration-300 group-hover:text-[#FF9933]">
                    {v.name}
                  </h5>
                  <p className="text-sm text-[#4B5563] leading-[22px] transition-colors duration-300 group-hover:text-white">
                    {v.role}
                  </p>
                </div>
              </a>

              {/* Socials */}
              <div className="absolute top-4 right-4 flex flex-col gap-2">
                {/* Share button */}
                <button className="w-10 h-10 rounded-full bg-[#FF9933] border-2 border-white flex items-center justify-center text-[#134A43] hover:bg-[#134A43] hover:border-[#FF9933] hover:text-[#FF9933] transition-colors duration-200">
                  <Share2 size={18} />
                </button>

                {/* Hidden links that appear on card hover */}
                <div className="flex flex-col gap-2 opacity-0 -translate-y-3 pointer-events-none transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto">
                  <a
                    href="https://facebook.com"
                    className="w-10 h-10 rounded-full bg-white border-2 border-white flex items-center justify-center text-[#4B5563] hover:bg-[#FF9933] hover:text-[#134A43] transition-colors duration-200"
                  >
                    <Facebook size={16} />
                  </a>
                  <a
                    href="https://twitter.com"
                    className="w-10 h-10 rounded-full bg-white border-2 border-white flex items-center justify-center text-[#4B5563] hover:bg-[#FF9933] hover:text-[#134A43] transition-colors duration-200"
                  >
                    <Twitter size={16} />
                  </a>
                  <a
                    href="https://www.instagram.com"
                    className="w-10 h-10 rounded-full bg-white border-2 border-white flex items-center justify-center text-[#4B5563] hover:bg-[#FF9933] hover:text-[#134A43] transition-colors duration-200"
                  >
                    <Instagram size={16} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
