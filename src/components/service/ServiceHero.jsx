// src/components/service/ServiceHero.jsx
import React, { useEffect, useState } from "react";

const slides = [
  {
    id: 1,
    bgImage: "images/hero-bg-1.webp",
    subtitleIcon: "images/icon-1.svg",
    subtitle: "Let's Go Save Environment",
    title: "Shape This World to",
    highlight: "Heart's Concept",
    text: "The implant fixture is first placed, so that it is likely to then a dental prosthetic is added then dental prosthetic.",
    ctaText: "Join Us Today",
    statValue: "122.6k+",
    statLabel: "Team Members",
  },
  {
    id: 2,
    bgImage: "images/hero-bg-6.webp",
    subtitleIcon: "images/icon-1.svg",
    subtitle: "Let’s Act for Nature’s Future",
    title: "Build This Earth with",
    highlight: "Heart’s True Vision",
    text: "A seed is gently first planted, so it slowly starts to grow a tree, then blossoms and bears fruit with nature’s help.",
    ctaText: "Become One Today",
    statValue: "122.6k+",
    statLabel: "Earth Helpers",
  },
];

const socialLinks = [
  { href: "https://facebook.com", label: "Facebook", short: "f" },
  { href: "https://twitter.com", label: "X", short: "X" },
  { href: "https://www.instagram.com", label: "Instagram", short: "IG" },
  { href: "https://linkedin.com", label: "LinkedIn", short: "in" },
];

export default function ServiceHero() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(
      () => setActiveIndex((prev) => (prev + 1) % slides.length),
      7000
    );
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative z-[1]">
      <div className="relative h-[540px] md:h-[620px] lg:h-[700px] overflow-hidden">
        {slides.map((slide, index) => {
          const isActive = index === activeIndex;

          return (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-700 ease-out ${
                isActive
                  ? "opacity-100 pointer-events-auto"
                  : "opacity-0 pointer-events-none"
              }`}
              style={{
                backgroundImage: `url(${slide.bgImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,51,47,0.85)_0%,rgba(0,51,47,0.4)_40%,rgba(0,51,47,0.12)_70%,rgba(0,51,47,0)_100%)]" />

              <div className="absolute inset-0 -z-[1] pointer-events-none">
                <img
                  src="images/group-shape-1.webp"
                  alt="group-shape-1"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="absolute left-0 bottom-0 w-full pointer-events-none">
                <img
                  src="images/shape-2.webp"
                  alt="shape-2"
                  className="w-full"
                />
              </div>

              <div className="relative z-10 max-w-6xl mx-auto h-full flex items-center px-4 lg:px-0">
                <div className="max-w-[780px]">
                  <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-4">
                    <img
                      src={slide.subtitleIcon}
                      alt="icon-1"
                      className="w-7 h-7 md:w-8 md:h-8"
                    />
                    <span className="text-sm md:text-base font-medium text-white leading-6">
                      {slide.subtitle}
                    </span>
                  </div>

                  <div className="mb-4">
                    <h1 className="font-semibold text-white text-[2.4rem] leading-tight md:text-[3.4rem] lg:text-[4.4rem] lg:leading-[1.05]">
                      {slide.title}{" "}
                      <span className="text-[#FFB347]">{slide.highlight}</span>
                    </h1>
                  </div>

                  <div className="max-w-[550px] mb-8">
                    <p className="text-[15px] md:text-[17px] leading-relaxed text-white/90">
                      {slide.text}
                    </p>
                  </div>

                  <div className="flex flex-col xs:flex-row items-start xs:items-center gap-4 xs:gap-7">
                    <a
                      href="/donations"
                      className="relative inline-flex items-center gap-3 rounded-full border border-white/60 bg-white/20 backdrop-blur-md px-7 py-3 text-sm md:text-base font-semibold text-white overflow-hidden group"
                    >
                      <span className="relative z-10">{slide.ctaText}</span>
                      <span className="relative z-10 flex items-center justify-center w-9 h-9 rounded-full bg-[#FFB347] text-[#004540] text-xs group-hover:bg-white group-hover:text-[#FFB347] transition-colors duration-200">
                        <span className="flex items-center gap-[2px]">
                          <span className="block leading-none group-hover:-translate-x-[1px] transition-transform duration-200">
                            →
                          </span>
                          <span className="block leading-none group-hover:translate-x-[1px] transition-transform duration-200 delay-75">
                            →
                          </span>
                        </span>
                      </span>
                      <span className="absolute inset-0 bg-[#FFB347]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                    </a>

                    <div className="flex items-center gap-4">
                      <img
                        src="images/author-1.webp"
                        alt="author-avatars"
                        className="w-[80px] md:w-[110px]"
                      />
                      <div>
                        <h5 className="text-lg md:text-xl font-semibold text-white mb-0">
                          {slide.statValue}
                        </h5>
                        <p className="text-sm text-white/80 leading-tight">
                          {slide.statLabel}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}

        {/* Pagination bullets */}
        <div className="absolute right-[90px] bottom-[50px] z-[99] hidden md:inline-flex items-center justify-center gap-2 rounded-full bg-white/10 border border-white/40 backdrop-blur-md px-4 py-2">
          {slides.map((slide, index) => {
            const isActive = index === activeIndex;
            return (
              <button
                key={slide.id}
                type="button"
                onClick={() => setActiveIndex(index)}
                className={`relative w-5 h-5 rounded-full border transition-all duration-300 ${
                  isActive
                    ? "bg-white/60 border-[#F8F7F0]"
                    : "border-transparent bg-transparent"
                }`}
              >
                <span
                  className="absolute left-1/2 top-1/2 h-[7px] w-[7px] -translate-x-1/2 -translate-y-1/2 rounded-full"
                  style={{
                    background: isActive
                      ? "radial-gradient(92.09% 85.42% at 86.3% 87.5%, rgba(0,0,0,0.23) 0%, rgba(0,0,0,0) 86.18%), radial-gradient(65.28% 65.28% at 26.39% 20.83%, rgba(255,255,255,0.413) 0%, rgba(255,255,255,0) 69.79%, rgba(255,255,255,0) 100%), #004540"
                      : "radial-gradient(92.09% 85.42% at 86.3% 87.5%, rgba(0,0,0,0.23) 0%, rgba(0,0,0,0) 86.18%), radial-gradient(65.28% 65.28% at 26.39% 20.83%, rgba(255,255,255,0.413) 0%, rgba(255,255,255,0) 69.79%, rgba(255,255,255,0) 0%), #FFFFFF",
                  }}
                />
              </button>
            );
          })}
        </div>

        {/* Vertical social bar */}
        <div className="hidden md:flex flex-col items-center justify-center gap-5 w-10 absolute right-[90px] bottom-1/2 translate-y-1/2 z-[99]">
          <div className="flex flex-col gap-2">
            {socialLinks.map((item) => (
              <a
                key={item.href}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center w-10 h-10 rounded-full bg-white/30 border border-white/30 text-[#004540] backdrop-blur-md hover:bg-[#FFB347] hover:text-[#004540] transition-colors duration-200"
                aria-label={item.label}
              >
                <span className="text-xs font-semibold">{item.short}</span>
              </a>
            ))}
          </div>

          <div
            className="text-white text-sm tracking-[0.08em] rotate-180"
            style={{ writingMode: "vertical-rl" }}
          >
            Join Social:
          </div>
        </div>
      </div>
    </section>
  );
}
