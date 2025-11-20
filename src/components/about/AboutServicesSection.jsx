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
  <section className="w-full   py-16 flex flex-col items-center relative">
    <div className="absolute top-0 left-0 w-full md:mt-[-140px] overflow-hidden  z-50 pointer-events-none rotate-180">
      <svg
        className="w-full h-full"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          d="M0,64 C360,220 1080,220 1440,64 L1440,0 L0,0 Z"
          fill="#FF9933"
        />
        {/* <path
          d="M0,120 C360,270 1080,270 1440,120 L1440,0 L0,0 Z"
          fill="#138808"
          fillOpacity="0.08"
        /> */}
      </svg>
    </div>

    {/* optional left green strip */}
    {/* <div className="absolute top-24 left-0 h-56 w-8 bg-[#138808] rounded-r-2xl z-10 pointer-events-none" /> */}

    {/* CARDS */}
    <div className="relative z-20 flex flex-col md:flex-row w-full gap-8 justify-center items-center mt-24 px-6 md:px-20">
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
                  <div className="relative flex items-center justify-center w-14 h-14 rounded-full bg-white">
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

      .flip-parent { perspective: 800px; }
      .flip-child {
        transform: rotateY(0deg);
        transition: transform 0.7s cubic-bezier(.45,1.1,.53,1.13);
        transform-style: preserve-3d;
        backface-visibility: hidden;
        will-change: transform;
      }
      .group:hover .flip-child { transform: rotateY(360deg); }
    `}</style>
  </section>
);

export default AboutServicesSection;
