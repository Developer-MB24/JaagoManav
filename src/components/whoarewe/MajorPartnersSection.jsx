// src/components/whoweare/MajorPartnersSection.jsx
import React from "react";

const partnerLogos = [
  "/images/logo-2.webp",
  "/images/logo-3.webp",
  "/images/logo-4.webp",
  "/images/logo-5.webp",
  "/images/logo-6.webp",
  "/images/logo-7.webp",
];

export default function MajorPartnersSection() {
  return (
    <section className="pt-20 pb-32 md:pt-20 md:pb-24 bg-white">
      <div className="mx-auto max-w-6xl px-4">
        {/* Title */}
        <div className="flex items-center justify-center gap-6 mb-10">
          <div className="hidden sm:block w-20 md:w-28">
            <img
              src="/images/shape-4.webp"
              alt="shape-left"
              className="w-full h-auto"
            />
          </div>
          <h3 className="text-2xl md:text-3xl font-semibold text-[#134A43]">
            Major Partners
          </h3>
          <div className="hidden sm:block w-20 md:w-28">
            <img
              src="/images/shape-4.webp"
              alt="shape-right"
              className="w-full h-auto"
            />
          </div>
        </div>

        {/* Logos marquee */}
        <div className="border-y border-[rgba(0,69,64,0.08)] py-10 my-4 overflow-hidden">
          <div className="relative partner-marquee flex items-center">
            {/* Track 1 */}
            <div className="partner-marquee-track flex items-center gap-10 md:gap-14">
              {partnerLogos.map((src, idx) => (
                <div
                  key={`p1-${idx}`}
                  className="flex items-center bg-black justify-center min-w-[130px]"
                >
                  <img
                    src={src}
                    alt="partner-logo"
                    className="max-h-10 md:max-h-12 w-auto object-contain opacity-90 hover:opacity-100 transition-opacity duration-200"
                  />
                </div>
              ))}
            </div>
            {/* Track 2 (duplicate for seamless loop) */}
            <div className="partner-marquee-track flex items-center gap-10 md:gap-14">
              {partnerLogos.map((src, idx) => (
                <div
                  key={`p2-${idx}`}
                  className="flex items-center bg-black justify-center min-w-[130px]"
                >
                  <img
                    src={src}
                    alt="partner-logo"
                    className="max-h-10 md:max-h-12 w-auto object-contain opacity-90 hover:opacity-100 transition-opacity duration-200"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Button */}
        <div className="text-center mt-8">
          <a
            href="/contact"
            className="inline-flex items-center gap-3 rounded-full bg-[#134A43] text-[#FF9933] px-8 py-3 text-sm md:text-base font-semibold overflow-hidden relative group shadow-md"
          >
            <span className="relative z-10">Become a Partner</span>
            <span className="relative z-10 flex items-center justify-center w-8 h-8 rounded-full bg-[#FF9933] text-[#134A43] transition-colors duration-300 group-hover:bg-white group-hover:text-[#FF9933]">
              <span className="flex items-center gap-[2px]">
                <span className="block text-xs leading-none group-hover:-translate-x-[1px] transition-transform duration-200">
                  →
                </span>
                <span className="block text-xs leading-none group-hover:translate-x-[1px] transition-transform duration-200 delay-75">
                  →
                </span>
              </span>
            </span>
            <span className="absolute inset-0 bg-[#FF9933]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
          </a>
        </div>
      </div>

      {/* marquee animation */}
      <style>{`
        .partner-marquee {
          width: max-content;
        }
        .partner-marquee-track {
          animation: partner-marquee 22s linear infinite;
        }
        .partner-marquee-track:nth-child(2) {
          animation-delay: -11s;
        }

        @keyframes partner-marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
}
