import React from "react";

const causes = [
  {
    img: "/images/about-two-img-3.jpg",
    percent: 85,
    title: "Your Little Help Can Heal Their Helps",
    desc: "Join our community of dedicated supporter by becoming member. Enjoy exclusive benefit.",
    raised: "$45,000.00",
    goal: "$60,000.00",
  },
  {
    img: "/images/about-two-img-2.jpg",
    percent: 85,
    title: "Help Children poor Insurance & Medical",
    desc: "Join our community of dedicated supporter by becoming member. Enjoy exclusive benefit.",
    raised: "$45,000.00",
    goal: "$60,000.00",
  },
  {
    img: "/images/about-two-img-1.jpg",
    percent: 85,
    title: "Help us touch their lives of these youths",
    desc: "Join our community of dedicated supporter by becoming member. Enjoy exclusive benefit.",
    raised: "$45,000.00",
    goal: "$60,000.00",
  },
  {
    img: "/images/about-two-img-2.jpg",
    percent: 85,
    title: "Raise Fund for Clean & Healthy Water",
    desc: "Join our community of dedicated supporter by becoming member. Enjoy exclusive benefit.",
    raised: "$45,000.00",
    goal: "$60,000.00",
  },
];

const DonationCausesSection = () => (
  <section className="relative overflow-hidden py-12 md:py-20 bg-[#f7faf7]">
    <div className="absolute inset-0 pointer-events-none z-0">
      <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-[#FF9933] to-transparent opacity-30 animate-slideDown" />
      <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-[#138808] to-transparent opacity-30 animate-slideUp" />
    </div>

    {/* Heading */}
    <div className="relative z-10 flex flex-col items-center mb-4">
      <div className="flex items-center gap-2 mb-2">
        <span className="text-[#138808]">
          <svg
            width="18"
            height="18"
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
        <span className="italic font-semibold text-[#FF9933]">
          Let's Start Donating
        </span>
      </div>
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-2 text-[#222]">
        See Your Impact: Transparent
        <br />
        Donation Causes
      </h2>
    </div>

    {/* Cards */}
    <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
      {causes.map((c, idx) => (
        <div
          key={idx}
          className="bg-white rounded-2xl shadow-md flex flex-col sm:flex-row p-4 gap-5 items-center group hover:shadow-xl transition"
        >
          {/* Card Image */}
          <div className="relative min-w-[140px] w-[140px] h-[120px] overflow-hidden rounded-xl">
            <img
              src={c.img}
              alt={c.title}
              className="w-full h-full object-cover group-hover:scale-105 transition"
            />

            <span className="absolute top-2 left-2 bg-[#138808] text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md">
              {c.percent}%
            </span>
          </div>

          {/* Card  */}
          <div className="flex-1 flex flex-col justify-between pl-2 w-full">
            <div>
              <h3 className="font-semibold text-md md:text-lg text-[#222] mb-1">
                {c.title}
              </h3>
              <p className="text-xs text-gray-500 mb-2">{c.desc}</p>
            </div>

            <div className="flex items-center gap-6 mt-2 mb-1">
              <div>
                <div className="text-xs text-gray-500">Raised</div>
                <div className="font-semibold text-sm">{c.raised}</div>
              </div>
              <div>
                <div className="text-xs text-gray-500">Goal</div>
                <div className="font-semibold text-sm">{c.goal}</div>
              </div>
            </div>

            <div className="w-24 h-1 rounded bg-[#FF9933] mt-2 mb-2" />

            {/* Donate button */}
            <button className="bg-[#138808] hover:bg-[#1e785e] text-white px-6 py-2 rounded-full font-semibold shadow mt-1 transition text-sm flex items-center justify-center gap-2">
              Donate Now <span className="ml-1">↗</span>
            </button>
          </div>
        </div>
      ))}
    </div>

    {/* Animations  */}
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

export default DonationCausesSection;
