import React from "react";
import { HandCoins, HandHeart, Stethoscope } from "lucide-react";

const cards = [
  {
    title: "Fundraising Trust",
    desc: "Stay updated with the latest news, events, and impact stories from our organization. Subscribe to our newsletter.",
    color: "#138808",
    Icon: HandCoins,
  },
  {
    title: "Charity Donate",
    desc: "Stay updated with the latest news, events, and impact stories from our organization. Subscribe to our newsletter.",
    color: "#FF9933",
    Icon: HandHeart,
  },
  {
    title: "Treatment Help",
    desc: "Stay updated with the latest news, events, and impact stories from our organization. Subscribe to our newsletter.",
    color: "#138808",
    Icon: Stethoscope,
  },
];

const AboutServicesSection = () => (
  <section className="w-full bg-[#F6F6F6] py-16 flex flex-col items-center relative overflow-hidden">
    <div className="absolute top-0 left-0 w-full h-72 z-0 pointer-events-none">
      <svg className="w-full h-full" viewBox="0 0 1440 320" aria-hidden="true">
        <path
          fill="#FF9933"
          fillOpacity="1"
          d="M0,224L1440,32L1440,0L0,0Z"
        ></path>
      </svg>
    </div>

    <div className="absolute inset-0 pointer-events-none z-[1]">
      <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-[#FF9933] to-transparent opacity-30 animate-slideDown will-change-transform" />
      <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-[#138808] to-transparent opacity-30 animate-slideUp will-change-transform" />
    </div>

    {/* Cards */}
    <div className="relative z-10 flex flex-col md:flex-row w-full gap-8 justify-center items-center mt-20">
      {cards.map(({ title, desc, color, Icon }, idx) => (
        <div
          key={title}
          className="group w-80 bg-white rounded-[2.6rem] shadow-xl pb-6 pt-10 px-7 text-center transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl flex flex-col items-center animate-fadeIn"
          style={{
            animationDelay: `${0.2 + idx * 0.2}s`,
            animationFillMode: "both",
          }}
        >
          <div className="mb-6 flex justify-center items-center">
            <div className="rounded-full p-4 bg-gradient-to-br from-[#F6F6F6] to-[#e0e0e0]">
              <div className="flip-parent">
                <div className="flip-child">
                  <div
                    className="relative flex items-center justify-center w-14 h-14 rounded-full bg-white"
                    aria-hidden="true"
                  >
                    <Icon
                      size={40}
                      strokeWidth={2.25}
                      className="drop-shadow-sm"
                      style={{ color }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <h3 className="font-bold text-2xl mb-3">{title}</h3>
          <p className="text-gray-500 mb-6">{desc}</p>

          <a
            href="#"
            className="text-base font-semibold text-[#138808] group-hover:text-[#FF9933] underline transition-colors"
          >
            View Details <span className="ml-1">↗</span>
          </a>
        </div>
      ))}
    </div>

    <style>{`
      @keyframes fadeIn {
        0% { opacity: 0; transform: scale(0.96); }
        100% { opacity: 1; transform: scale(1); }
      }
      .animate-fadeIn { animation: fadeIn 1.4s cubic-bezier(.45,1.1,.53,1.13); }

      /* 360° flip on hover */
      .flip-parent { perspective: 800px; }
      .flip-child {
        transform: rotateY(0deg);
        transition: transform 0.7s cubic-bezier(.45,1.1,.53,1.13);
        transform-style: preserve-3d;
        backface-visibility: hidden;
        will-change: transform;
      }
      .group:hover .flip-child { transform: rotateY(360deg); }

      /* NEW: animated gradient wash */
      @keyframes slideDown {
        0% { transform: translateY(-25%); }
        100% { transform: translateY(0%); }
      }
      @keyframes slideUp {
        0% { transform: translateY(25%); }
        100% { transform: translateY(0%); }
      }
      .animate-slideDown { animation: slideDown 14s ease-in-out infinite alternate; }
      .animate-slideUp   { animation: slideUp   14s ease-in-out infinite alternate; }
    `}</style>
  </section>
);

export default AboutServicesSection;
