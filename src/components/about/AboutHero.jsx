// Home.jsx
import React from "react";

const AboutHero = () => {
  return (
    <section className="relative w-full min-h-screen flex items-center bg-black overflow-hidden py-12">
      {/* RIGHT SIDE IMAGE – HIDDEN IN MOBILE */}
      <div className="hidden sm:block absolute inset-y-0 right-0 w-1/2 overflow-hidden z-10 pointer-events-none">
        {/* Optional white sliding panel (desktop accent) */}
        <div className="hidden lg:block absolute left-[-140px] top-0 w-[900px] h-full bg-white animate-slideInRight z-10" />

        <img
          src="/images/process-1-1.jpg"
          alt="Children"
          className="absolute inset-0 z-20 h-full w-full object-cover shadow-2xl animate-zoomIn"
          style={{ animationDelay: "1.2s" }}
        />

        {/* Decorative blob – desktop only */}
        <div className="hidden lg:block absolute left-[-80px] top-20 z-30 animate-bounce">
          <svg
            width="80"
            height="80"
            viewBox="0 0 80 80"
            fill="none"
            aria-hidden
          >
            <path
              d="M25 20 C40 0, 80 30, 35 72 Q8 55, 25 20 Z"
              fill="#138808"
            />
            <circle cx="45" cy="40" r="12" fill="#FF9933" />
          </svg>
        </div>
      </div>

      {/* CURVED WHITE PANEL */}
      <div
        className="
          absolute left-0 top-0 bottom-0 
          w-full sm:w-4/5 lg:w-[60%]
          bg-white shadow-2xl z-30 overflow-hidden flex justify-center items-center
        "
        style={{
          borderTopRightRadius: "50%",
          borderBottomRightRadius: "70%",
        }}
      >
        {/* LEFT CONTENT CENTERED */}
        <div className="w-full max-w-3xl px-6 sm:px-8 lg:px-20 relative z-40">
          <div
            className="flex items-center gap-3 mb-4 animate-fadeInDown"
            style={{ animationDelay: "0.2s" }}
          >
            <span className="w-16 h-0.5 bg-[#FF9933] rounded animate-wiggle" />
            <span className="text-[#138808] text-base sm:text-lg italic font-semibold drop-shadow-md animate-pulse">
              Give Hope For Homeless
            </span>
          </div>

          <h1
            className="font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight mb-4 animate-fadeInLeft"
            style={{ animationDelay: "0.4s" }}
          >
            Donate For A
            <br />
            Better <span className="text-[#FF9933] animate-pop">World</span>
          </h1>

          <p
            className="text-base sm:text-lg text-gray-700 mb-8 animate-fadeInUp"
            style={{ animationDelay: "0.6s" }}
          >
            Explore the variety of volunteer opportunities available. From event
            planning and fundraising to fieldwork and administrative support.
          </p>

          {/* BUTTONS */}
          <div className="flex items-center gap-6 flex-wrap">
            {/* DISCOVER NOW - WIPE / LAYER REMOVAL HOVER EFFECT */}
            <a
              href="#"
              className="relative inline-flex items-center justify-center w-auto rounded-full font-semibold text-base sm:text-lg overflow-hidden group focus:outline-none"
              aria-label="Discover Now"
            >
              {/* Bottom/revealed color (#FF9933) */}
              <span
                className="absolute inset-0 block pointer-events-none"
                aria-hidden="true"
                style={{ backgroundColor: "#FF9933" }}
              />

              {/* Top sliding layer (original green) */}
              <span
                className="absolute inset-0 block transform transition-transform duration-500 ease-[cubic-bezier(.33,1,.68,1)] group-hover:-translate-y-full"
                aria-hidden="true"
                style={{ backgroundColor: "#138808" }}
              />

              {/* Content */}
              <span className="relative z-10 px-8 sm:px-10 py-3 sm:py-4 flex items-center gap-2 transition-colors duration-300 text-white group-hover:text-white">
                <span>Discover Now</span>
                <span className="ml-2">↗</span>
              </span>

              {/* Focus ring */}
              <span className="absolute inset-0 rounded-full ring-0 transition-shadow pointer-events-none group-focus-visible:ring-4 group-focus-visible:ring-[#FF9933]/20" />
            </a>

            {/* PLAY BUTTON */}
            <button
              aria-label="Play"
              className="relative w-20 h-20 sm:w-24 sm:h-24 flex justify-center items-center rounded-full group"
            >
              {/* Outer pulsing glow */}
              <span className="absolute w-full h-full rounded-full bg-[#FFE8B3] animate-pulseGlow"></span>

              {/* Inner circle */}
              <span className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#FFAA00] flex justify-center items-center shadow-lg">
                <span className="text-white text-2xl sm:text-3xl">&#9658;</span>
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* CSS ANIMATIONS */}
      <style>
        {`
          @keyframes fadeInDown { 0%{opacity:0;transform:translateY(-30px);} 100%{opacity:1;transform:translateY(0);} }
          .animate-fadeInDown { animation: fadeInDown 1000ms ease forwards; }

          @keyframes fadeInLeft { 0%{opacity:0;transform:translateX(-50px);} 100%{opacity:1;transform:translateX(0);} }
          .animate-fadeInLeft { animation: fadeInLeft 1.2s cubic-bezier(.34,1.56,.64,1) forwards; }

          @keyframes fadeInUp { 0%{opacity:0;transform:translateY(60px);} 100%{opacity:1;transform:translateY(0);} }
          .animate-fadeInUp { animation: fadeInUp 1000ms cubic-bezier(.28,.84,.42,1) forwards; }

          @keyframes bounce { 0%,100%{transform:translateY(0);} 50%{transform:translateY(-10px);} }
          .animate-bounce { animation: bounce 1.5s infinite; }

          @keyframes zoomIn { 0%{opacity:0;transform:scale(0.8);} 100%{opacity:1;transform:scale(1);} }
          .animate-zoomIn { animation: zoomIn 1.3s cubic-bezier(.45,1.1,.53,1.12) forwards; }

          @keyframes slideInRight { 0%{opacity:0;transform:translateX(100px);} 100%{opacity:1;transform:translateX(0);} }
          .animate-slideInRight { animation: slideInRight 850ms ease-out forwards; }

          @keyframes fadeIn { 0%{opacity:0;} 100%{opacity:1;} }
          .animate-fadeIn { animation: fadeIn 1200ms ease-in-out forwards; }

          @keyframes wiggle { 0%,100%{transform:rotate(-8deg);} 50%{transform:rotate(8deg);} }
          .animate-wiggle { animation: wiggle 1.4s ease-in-out infinite; }

          @keyframes pop { 0%{transform:scale(.7);opacity:0.2;} 70%{transform:scale(1.2);} 100%{transform:scale(1);opacity:1;} }
          .animate-pop { animation: pop 1.4s cubic-bezier(.47,1.64,.41,.8) 450ms both; }

          /* PULSE GLOW FOR PLAY BUTTON */
          @keyframes pulseGlow {
            0% { transform: scale(1); opacity: 0.9; }
            50% { transform: scale(1.25); opacity: 0.4; }
            100% { transform: scale(1); opacity: 0.9; }
          }
          .animate-pulseGlow {
            animation: pulseGlow 2.2s infinite ease-in-out;
          }

          /* small adaptive tweaks for the discover button layers so edges stay smooth */
          a[aria-label="Discover Now"] span[aria-hidden="true"] {
            display: block;
          }
          a[aria-label="Discover Now"] {
            border-radius: 9999px;
          }
          a[aria-label="Discover Now"] .group-focus-visible\\:ring-4 {
            outline: none;
          }
        `}
      </style>
    </section>
  );
};

export default AboutHero;
