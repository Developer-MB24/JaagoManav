// CompanyStatsSection.jsx
import React from "react";
import { TrendingUp, Lightbulb, ThumbsUp, Users } from "lucide-react";

const stats = [
  {
    icon: <TrendingUp className="h-10 w-10 text-[#134A43]" />,
    label: "Company Success",
    value: "98%",
    border: "#FFCC40",
  },
  {
    icon: <Lightbulb className="h-10 w-10 text-[#134A43]" />,
    label: "Company Strategies",
    value: "565+",
    border: "#FFCC40",
  },
  {
    icon: <ThumbsUp className="h-10 w-10 text-[#134A43]" />,
    label: "Complete Projects",
    value: "36k",
    border: "#FFCC40",
  },
  {
    icon: <Users className="h-10 w-10 text-[#134A43]" />,
    label: "Experienced Members",
    value: "100+",
    border: "#FFCC40",
  },
];

export default CompanyStatsSection = () => (
  <section
    className="relative py-24 px-3 overflow-hidden bg-[#FAFBF5] flex justify-center items-center"
    style={{ minHeight: 380 }}
  >
    {/* Gradient and background image */}
    <div className="absolute inset-0 pointer-events-none z-0">
      <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-[#FF9933] to-transparent opacity-30 animate-slideDown" />
      <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-[#138808] to-transparent opacity-30 animate-slideUp" />
      {/* Background image overlay */}
      <img
        src="/images/image.jpg" // update this path if needed
        alt=""
        className="absolute inset-0 w-full h-full object-cover opacity-20 select-none pointer-events-none"
      />
    </div>
    {/* Foreground content */}
    <div className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-4 gap-12 z-10 relative">
      {stats.map((s, i) => (
        <div key={i} className="flex flex-col items-center text-center">
          <span
            className="inline-flex items-center justify-center w-28 h-28 mb-6 rounded-full bg-white shadow transition"
            style={{
              border: `4px solid ${s.border}`,
              boxShadow: "0 3px 24px 0 rgb(255 204 64 / 0.08)",
            }}
          >
            {s.icon}
          </span>
          <div className="text-5xl font-extrabold text-white mb-2">
            {s.value}
          </div>
          <div className="text-white text-xl">{s.label}</div>
        </div>
      ))}
    </div>
    {/* Animation CSS */}
    <style>
      {`
        @keyframes slideDown {0%{transform: translateY(-60px); opacity:0;} 100%{transform: translateY(0); opacity:1;}}
        .animate-slideDown {animation: slideDown 1.3s 750ms cubic-bezier(.44,.52,.57,1) forwards;}
        @keyframes slideUp {0%{transform: translateY(60px); opacity:0;} 100%{transform: translateY(0); opacity:1;}}
        .animate-slideUp {animation: slideUp 1.3s 850ms cubic-bezier(.44,.52,.57,1) forwards;}
      `}
    </style>
  </section>
);
