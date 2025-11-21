// src/components/whoweare/JourneySection.jsx
import React, { useState } from "react";

const tabs = [
  { year: 2020 },
  { year: 2021 },
  { year: 2022 },
  { year: 2023 },
  { year: 2024 },
];

const description =
  "Despite applying for three times and even hiring a lawyer to assist with the process, Morgan was unable to get authorization to fly to the USA for the premiere of her film about a factory-farmed pig.";

export default function JourneySection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeYear = tabs[activeIndex].year;

  return (
    <section
      className="relative py-20 md:py-24 px-4"
      style={{
        backgroundImage:
          "url(/images/why-us-bg.webp), url(/images/about-us-bg.webp)",
        backgroundPosition: "bottom right, bottom left 1%",
        backgroundRepeat: "no-repeat, no-repeat",
        backgroundSize: "contain, contain",
      }}
    >
      <div className="mx-auto max-w-5xl flex justify-end mb-8">
        <div className="w-full lg:w-[70%] xl:w-[60%] bg-white/90 rounded-2xl shadow-sm px-4 sm:px-6 lg:px-12 py-10 lg:py-16">
          {/* Subtitle */}
          <div className="flex items-center gap-3 mb-3">
            <img src="/images/icon-2.svg" alt="icon-2" className="w-9 h-9" />
            <span className="text-[#138808] font-semibold text-base">
              Our History
            </span>
          </div>

          {/* Title */}
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
            Journey Was Started
          </h2>

          {/* Tabs */}
          <div className="mb-8">
            <div className="flex flex-wrap items-center gap-3">
              {tabs.map((tab, idx) => {
                const active = idx === activeIndex;
                return (
                  <button
                    key={tab.year}
                    type="button"
                    onClick={() => setActiveIndex(idx)}
                    className="px-5 sm:px-7 py-2.5 rounded-full text-sm sm:text-base font-semibold border transition-all"
                    style={
                      active
                        ? {
                            backgroundColor: "#F8F7F0",
                            color: "black",
                            borderColor: "#138808",
                            boxShadow: "0 6px 16px -3px rgba(0, 69, 64, 0.11)",
                          }
                        : {
                            backgroundColor: "#FFFFFF",
                            color: "#4B5563",
                            borderColor: "transparent",
                          }
                    }
                  >
                    {tab.year}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Active tab content */}
          <div>
            <div className="mb-2">
              <h6 className="text-[18px] leading-[30px] font-medium text-black">
                Year {activeYear}
              </h6>
            </div>
            <div className="mb-3">
              <h5 className="text-[22px] md:text-[24px] leading-[32px] md:leading-[36px] font-semibold text-black">
                Got First Reward From (NYC)
              </h5>
            </div>
            <p className="text-[#4B5563] mb-7 leading-relaxed">{description}</p>

            {/* CTA button */}
            <div className="flex items-center">
              <a
                href="/project"
                className="inline-flex items-center gap-3 rounded-full bg-[#138808] text-[#fff] px-7 py-3 text-sm md:text-base font-semibold overflow-hidden relative group"
              >
                <span className="relative z-10">See Our Achievement</span>
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
        </div>
      </div>
    </section>
  );
}
