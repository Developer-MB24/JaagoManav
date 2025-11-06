import React from "react";

const logos = [
  <img src="/images/logo1.png" alt="Certified" className="h-12 w-auto" />,
  <img src="/images/logo2.png" alt="ISO" className="h-12 w-auto" />,
  <img src="/images/logo3.png" alt="Logoipsum" className="h-12 w-auto" />,
  <img
    src="/images/logo4.png"
    alt="Ultra Prestigious"
    className="h-12 w-auto"
  />,
  <img src="/images/logo5.png" alt="Power XR2" className="h-12 w-auto" />,
];

const TrustedCompaniesCarousel = () => (
  <section className="relative group  py-10 overflow-hidden">
    <div className="absolute inset-0 pointer-events-none z-0">
      <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-[#FF9933] to-transparent opacity-25 animate-slideDown" />
      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-[#138808] to-transparent opacity-25 animate-slideUp" />
    </div>

    {/* Heading */}
    <div className="relative z-10 text-center mb-7 px-4">
      <span className="text-black text-xl font-semibold">
        Trusted by over <span className="text-[#FF9933] font-bold">90K+</span>{" "}
        companies worldwide
      </span>
    </div>

    {/*  fade mask */}
    <div
      className="pointer-events-none absolute inset-x-0 top-[72px] md:top-[76px] h-[72px] md:h-[80px] z-10"
      style={{
        WebkitMaskImage:
          "linear-gradient(to right, transparent 0%, black 12%, black 88%, transparent 100%)",
        maskImage:
          "linear-gradient(to right, transparent 0%, black 12%, black 88%, transparent 100%)",
      }}
      aria-hidden="true"
    />

    {/* Carousel */}
    <div className="relative z-10 w-full overflow-hidden">
      <div
        className="carousel-track flex items-center gap-16 md:gap-20 will-change-transform"
        style={{ ["--speed"]: "23s" }}
        role="list"
        aria-label="Trusted companies logos"
      >
        {[...logos, ...logos, ...logos].map((item, idx) => (
          <div
            key={idx}
            role="listitem"
            className="shrink-0 flex items-center justify-center opacity-90 hover:opacity-100 transition-opacity"
          >
            <div className="px-2 md:px-3 transform-gpu transition-transform duration-300 group-hover:translate-y-[-2px]">
              {item}
            </div>
          </div>
        ))}
      </div>
    </div>

    {/* <div className="absolute left-0 right-0 -bottom-2 z-10" aria-hidden="true">
      <svg
        width="100%"
        height="38px"
        viewBox="0 0 100 8"
        preserveAspectRatio="none"
      >
        <polyline
          points="0,8 3,3 8,7 16,2 23,8 30,6 37,8 43,3 52,8 58,7 68,3 75,8 84,5 90,8 100,3"
          fill="#134A43"
        />
      </svg>
    </div> */}

    {/* Styles */}
    <style>{`
      /* Marquee animation */
      .carousel-track {
        min-width: max-content;
        animation: carouselMove var(--speed) linear infinite;
      }
      .group:hover .carousel-track {
        animation-play-state: paused;
      }
      @keyframes carouselMove {
        0%   { transform: translateX(0); }
        100% { transform: translateX(-33.333%); } /* 3x duplication => shift by 1/3 */
      }

      /* Animated gradient bands (shared) */
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

      /* Respect users who prefer reduced motion */
      @media (prefers-reduced-motion: reduce) {
        .carousel-track {
          animation: none;
          transform: none;
        }
      }
    `}</style>
  </section>
);

export default TrustedCompaniesCarousel;
