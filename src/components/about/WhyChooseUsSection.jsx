import React, { useEffect, useState } from "react";
import { Users, HandCoins } from "lucide-react";

const stats = [
  { label: "Donations", percent: 55, color: "#138808" },
  { label: "Charity", percent: 85, color: "#FF9933" },
];

const WhyChooseUsSection = () => {
  const [animatedPercents, setAnimatedPercents] = useState([0, 0]);
  const targetPercents = stats.map((s) => s.percent);

  useEffect(() => {
    let intervals = [];
    targetPercents.forEach((target, i) => {
      intervals[i] = setInterval(() => {
        setAnimatedPercents((curr) => {
          const next = [...curr];
          if (next[i] < target) {
            next[i] += 1;
            return next;
          } else {
            clearInterval(intervals[i]);
            next[i] = target;
            return next;
          }
        });
      }, 12);
    });

    return () => intervals.forEach(clearInterval);
  }, [targetPercents]);

  return (
    <section className="relative overflow-hidden w-full flex flex-col md:flex-row items-stretch py-8 md:py-14 px-4 md:px-8">
      {/* Background gradients */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-0 left-0 w-full h-48 sm:h-64 bg-gradient-to-b from-[#FF9933] to-transparent opacity-30 animate-slideDown" />
        <div className="absolute bottom-0 left-0 w-full h-48 sm:h-64 bg-gradient-to-t from-[#138808] to-transparent opacity-30 animate-slideUp" />
      </div>

      {/* Left: Image */}
      <div className="w-full md:w-1/2 relative z-10 mb-6 md:mb-0">
        <img
          src="/images/about-two-img-1.jpg"
          alt="Community"
          className="object-cover w-full h-56 sm:h-72 md:h-full max-h-96 md:rounded-l-xl rounded-t-xl md:rounded-tr-none grayscale"
        />
      </div>

      {/* Right: Content */}
      <div className="w-full md:w-1/2 relative z-10 flex flex-col justify-center bg-white/80 backdrop-blur-sm mx-0 md:mx-10 px-4 sm:px-6 md:px-10 py-6 md:rounded-xl rounded-b-xl md:rounded-bl-none">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-[#138808]">
            <svg
              width="20"
              height="20"
              fill="none"
              viewBox="0 0 20 20"
              aria-hidden="true"
            >
              <path
                d="M10 18l-1.45-1.32C2.4 11.36-.97 7.28.02 4.5.02 1.42 2.44-1 5.52-1c2.54 0 4.08 1.19 4.5 3.09C10.92 0.19 12.46-1 15-1c3.08 0 5.5 2.42 5.5 5.5 0 3.78-3.4 7.86-8.55 12.54L10 18z"
                fill="#138808"
              />
            </svg>
          </span>
          <span className="italic font-semibold text-xs sm:text-sm text-[#FF9933]">
            Why Choose Us
          </span>
        </div>

        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#222] mb-3 leading-snug">
          Together, We Can Make A
          <br className="hidden sm:block" />
          <span className="sm:hidden"> Difference</span>
          <span className="hidden sm:inline"> Difference</span>
        </h2>

        <p className="text-gray-500 text-xs sm:text-sm mb-4">
          Our secure online donation platform allows you to make contribution
          quickly and safely. Choose from various payment methods and set up
          one-time or recurring donations with ease. Your support helps us
          continue our mission.
        </p>

        {/* Animated Progress Bars */}
        <div className="space-y-2 mb-4">
          {stats.map((stat, idx) => (
            <div
              key={stat.label}
              className="flex items-center text-xs sm:text-sm"
            >
              <div className="w-20 sm:w-28 text-gray-700 font-semibold">
                {stat.label}
              </div>
              <div className="flex-1 mx-2">
                <div className="relative w-full h-2 bg-gray-200 rounded-full">
                  <div
                    className="absolute h-2 left-0 top-0 rounded-full"
                    style={{
                      width: `${animatedPercents[idx]}%`,
                      background: stat.color,
                      transition: "width 1s cubic-bezier(.45,1.1,.53,1.13)",
                    }}
                  />
                </div>
              </div>
              <div
                className="w-8 text-right font-semibold"
                style={{ color: stat.color }}
              >
                {animatedPercents[idx]}%
              </div>
            </div>
          ))}
        </div>

        {/* Highlights */}
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 mt-3">
          <div className="flex items-start gap-2">
            <span className="bg-[#138808]/10 rounded-full p-2">
              <Users className="text-[#138808]" size={24} />
            </span>
            <span>
              <div className="font-semibold text-[#134A43] text-sm sm:text-base">
                Global Community
              </div>
              <div className="text-gray-500 text-xs">
                Volunteers are the heart of our organization. Join our team to
                make a hands.
              </div>
            </span>
          </div>
          <div className="flex items-start gap-2">
            <span className="bg-[#FF9933]/10 rounded-full p-2">
              <HandCoins className="text-[#FF9933]" size={24} />
            </span>
            <span>
              <div className="font-semibold text-[#134A43] text-sm sm:text-base">
                Crowdfunding
              </div>
              <div className="text-gray-500 text-xs">
                Join our monthly giving program to provide consistent support
              </div>
            </span>
          </div>
        </div>

        {/* Button */}
        <button className="mt-6 sm:mt-7 py-2.5 px-6 sm:px-8 rounded-full bg-[#138808] hover:bg-[#FF9933] text-white font-semibold text-sm sm:text-lg shadow transition flex items-center justify-center gap-2 w-full sm:w-auto">
          Learn More <span className="ml-1">↗</span>
        </button>
      </div>

      {/* Animations */}
      <style>{`
        @keyframes slideDown {
          0%   { transform: translateY(-25%); }
          100% { transform: translateY(0%); }
        }
        @keyframes slideUp {
          0%   { transform: translateY(25%); }
          100% { transform: translateY(0%); }
        }
        .animate-slideDown { animation: slideDown 14s ease-in-out infinite alternate; }
        .animate-slideUp   { animation: slideUp   14s ease-in-out infinite alternate; }
      `}</style>
    </section>
  );
};

export default WhyChooseUsSection;
