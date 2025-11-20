// JourneySection.jsx
import React, { useState } from "react";
import { ArrowRight } from "lucide-react";

const years = [2020, 2021, 2022, 2023, 2024];

const JourneySection = () => {
  const [selected, setSelected] = useState(2020);

  return (
    <section className="relative overflow-hidden flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-16 min-h-[430px] bg-white">
      {/* Background gradients (optional for global consistency) */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-[#FF9933] to-transparent opacity-20" />
        <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-[#138808] to-transparent opacity-20" />
      </div>
      {/* Left: image */}
      <div className="w-full md:w-1/2 flex justify-start items-end z-10">
        <img
          src="/images/about-two-img-2.jpg"
          alt="Eco energy"
          className="object-contain w-[410px] max-w-full"
          draggable="false"
        />
      </div>
      {/* Right: content */}
      <div className="w-full md:w-1/2 flex flex-col z-10 mt-8 md:mt-0">
        <div className="flex items-center gap-2 mb-4">
          <span className="text-[#138808] font-bold">
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
              <circle cx="11" cy="11" r="10" stroke="#138808" strokeWidth="2" />
              <path
                d="M11 7v4l2 2"
                stroke="#138808"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </span>
          <span className="font-medium text-[#FF9933] text-lg">
            Our History
          </span>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-[#138808] mb-6">
          Journey Was Started
        </h2>
        {/* Years Switcher */}
        <div className="flex gap-3 mb-6">
          {years.map((year) => (
            <button
              key={year}
              onClick={() => setSelected(year)}
              className={`
                px-5 py-2 rounded-full font-semibold text-base transition
                ${
                  selected === year
                    ? "bg-[#FF9933] text-white"
                    : "bg-transparent text-[#138808] border border-[#138808] hover:bg-[#FF9933] hover:text-white"
                }
              `}
            >
              {year}
            </button>
          ))}
        </div>
        {/* Example content for selected year */}
        <div>
          <div className="text-[#138808] font-semibold">Year {selected}</div>
          <div className="font-bold text-lg text-[#138808] mb-1 mt-2">
            Got First Reward From (NYC)
          </div>
          <p className="text-[#138808] opacity-80 max-w-lg mb-6 text-base">
            Despite applying for three times and even hiring a lawyer to assist
            with the process. Morgan was unable to get authorization to fly to
            the USA for the premiere of her film about a factory-farmed pig.
          </p>
          <button className="flex items-center gap-2 bg-[#FF9933] px-6 py-3 rounded-full font-bold text-[#138808] text-base transition hover:bg-[#ffae49] shadow">
            See Our Achievement
            <span className="rounded-full bg-[#138808] text-white p-1 ml-2">
              <ArrowRight size={20} />
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default JourneySection;
