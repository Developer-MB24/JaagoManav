import React from "react";
import { Egg, GraduationCap, Pill, ArrowUpRight, Heart } from "lucide-react";

const SERVICE_ITEMS = [
  {
    title: "Healthy Foods",
    desc: "Share stories and experiences from current volunteers to inspire others to join. Allow user to sign up for volunteer opportunities.",
    badgeBg: "#FFF7E6",
    iconColor: "#FFB000",
    Icon: Egg,
  },
  {
    title: "Education Support",
    desc: "Share stories and experiences from current volunteers to inspire others to join. Allow user to sign up for volunteer opportunities.",
    badgeBg: "#EAF6EC",
    iconColor: "#138808",
    Icon: GraduationCap,
  },
  {
    title: "Medical Help",
    desc: "Share stories and experiences from current volunteers to inspire others to join. Allow user to sign up for volunteer opportunities.",
    badgeBg: "#FFF1E8",
    iconColor: "#FF9933",
    Icon: Pill,
  },
];

const AboutOurServices = () => {
  return (
    <section className="relative overflow-hidden bg-[#F4F4F2]">
      <div className="absolute inset-0 pointer-events-none opacity-[0.25] z-0 hidden lg:block">
        <svg className="w-full h-full" viewBox="0 0 800 400" aria-hidden="true">
          <filter id="paperNoise">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.85"
              numOctaves="2"
            />
            <feColorMatrix type="saturate" values="0" />
            <feComponentTransfer>
              <feFuncA type="table" tableValues="0 0.22" />
            </feComponentTransfer>
          </filter>
          <rect width="100%" height="100%" filter="url(#paperNoise)" />
        </svg>
      </div>

      <div className="absolute inset-0 pointer-events-none z-[1]">
        <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-[#FF9933] to-transparent opacity-30 animate-slideDown md:h-48 md:opacity-20" />
        <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-[#138808] to-transparent opacity-30 animate-slideUp md:h-48 md:opacity-20" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 md:px-6 lg:px-8 py-12 md:py-16 lg:py-24 grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-10">
        {/* LEFT mobile/tablet */}
        <div className="lg:col-span-6 relative">
          <div className="flex items-center gap-2 mb-2 md:mb-3">
            <Heart className="w-5 h-5 text-[#138808]" />
            <span className="italic text-[#FF9933] font-semibold text-base md:text-lg">
              Our Services
            </span>
          </div>

          <h2
            className="font-extrabold tracking-tight text-[#1f1f1f]
                         text-3xl md:text-4xl lg:text-[48px] leading-[1.15] mb-4 md:mb-5"
          >
            We’re Helping People
            <br className="hidden sm:block" />
            <span className="whitespace-normal lg:whitespace-nowrap">
              {" "}
              Need Around The World
            </span>
          </h2>

          <p className="text-[14px] md:text-[15px] leading-6 md:leading-7 text-[#50525a] max-w-xl">
            Discover the inspiring stories of individuals and communities
            transformed by our programs. Our success stories highlight the
            real-life impact of your donations and the resilience of those we
            help. These narratives showcase the power of compassion and
            generosity.
          </p>

          {/* Hand image /tablet */}
          <div className="mt-5 md:mt-6 relative select-none pointer-events-none flex justify-center lg:block">
            <img
              src="/images/process-one-shape-1-1.png"
              alt="Helping Hand"
              className="max-w-full w-[220px] md:w-[280px] lg:w-[360px]"
              style={{ marginLeft: "0" }}
            />
          </div>
        </div>

        {/* RIGHT ( mobile/tablet) */}
        <div className="lg:col-span-6 flex w-full flex-col gap-4 md:gap-5">
          {SERVICE_ITEMS.map(({ title, desc, badgeBg, iconColor, Icon }) => (
            <div
              key={title}
              className="group relative flex items-center gap-5 md:gap-6 rounded-[22px] bg-white
                         shadow-[0_6px_24px_rgba(0,0,0,0.07)] px-4 py-4 md:px-6 md:py-5 lg:px-8 lg:py-6"
            >
              {/* left badge */}
              <div
                className="grid place-items-center w-12 h-12 md:w-14 md:h-14 rounded-2xl ring-1 ring-black/5 flex-shrink-0"
                style={{ background: badgeBg }}
                aria-hidden="true"
              >
                <Icon
                  className="w-6 h-6 md:w-7 md:h-7"
                  style={{ color: iconColor }}
                />
              </div>

              {/* text */}
              <div className="flex-1 min-w-0">
                <div className="font-extrabold text-[#1d1f1f] text-[16px] md:text-[18px] lg:text-[19px] leading-tight">
                  {title}
                </div>
                <div className="text-[13px] md:text-[14px] text-[#6d7079] mt-1 md:whitespace-normal">
                  {desc}
                </div>
              </div>

              {/* right circular arrow */}
              <a
                href="#"
                className="shrink-0 grid place-items-center w-10 h-10 md:w-10 md:h-10 rounded-full
                           bg-[#168a5a] text-white transition-colors group-hover:bg-[#FF9933]"
                aria-label={`Open ${title}`}
              >
                <ArrowUpRight className="w-5 h-5" />
              </a>

              {/* ring */}
              <span className="pointer-events-none absolute inset-0 rounded-[22px] ring-1 ring-black/5"></span>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .reveal { opacity: 0; transform: translateY(18px); }
        .reveal.appear { opacity: 1; transform: none; transition: .6s cubic-bezier(.25,.9,.3,1.1); }

        @keyframes slideDown { 0% { transform: translateY(-25%);} 100% { transform: translateY(0%);} }
        @keyframes slideUp   { 0% { transform: translateY(25%);}  100% { transform: translateY(0%);} }
        .animate-slideDown { animation: slideDown 14s ease-in-out infinite alternate; }
        .animate-slideUp   { animation: slideUp   14s ease-in-out infinite alternate; }
      `}</style>
    </section>
  );
};

export default AboutOurServices;
