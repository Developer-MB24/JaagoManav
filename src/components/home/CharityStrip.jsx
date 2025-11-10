import React from "react";
import {
  GraduationCap,
  Droplets,
  Stethoscope,
  UtensilsCrossed,
} from "lucide-react";

const ITEMS = [
  { icon: UtensilsCrossed, text: "CHARITY FOR FOODS", color: "text-white" },
  {
    icon: GraduationCap,
    text: "CHARITY FOR EDUCATION",
    color: "text-[#138808]",
  },
  { icon: Droplets, text: "CHARITY FOR WATER", color: "text-[#FF9933]" },
  // { icon: Stethoscope, text: "CHARITY FOR MEDICAL", color: "text-[#7A3DF0]" }, // a bit brighter than #000080
];

function Row({ items }) {
  return (
    <div className="flex items-center px-10">
      {items.map((it, i) => (
        <div
          key={i}
          className="flex items-center gap-1 shrink-0 ml-8 first:ml-0"
        >
          {/* Bigger icons */}
          <it.icon className={`h-[42px] w-[42px] ${it.color}`} />
          {/* Bigger text */}
          <span
            className={`text-[18px] md:text-[18px] leading-[34px] md:leading-[40px] font-extrabold tracking-wide uppercase ${it.color}`}
          >
            {it.text}
          </span>
        </div>
      ))}
    </div>
  );
}

export default function CharityStrip({
  // background image with torn edges
  paperBg = "/images/charity-bg.png",
  // subtle inner photo if you want (set to null/"" to disable)
  innerPhoto = "/images/process-1-1.jpg",
  speedSec = 30,
}) {
  return (
    <section className="relative w-full">
      {/* Paper edge background (torn look) */}
      <div
        className="relative z-[3] overflow-hidden py-6 md:py-8"
        style={{
          backgroundImage: `url('${paperBg}')`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover", // ensures edges fill the strip
        }}
      >
        {/* Optional inner image underlay for texture; comment out if not needed */}
        {innerPhoto ? (
          <div
            className="absolute inset-0 -z-[1]"
            style={{
              backgroundImage: `url('${innerPhoto}')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              opacity: 0.18,
              mixBlendMode: "luminosity",
            }}
          />
        ) : null}

        {/* Marquee content */}
        <div className="relative overflow-hidden">
          <div
            className="flex min-w-[300%] animate-[marquee_var(--speed)_linear_infinite]"
            style={{ ["--speed"]: `${speedSec}s` }}
          >
            <Row items={ITEMS} />
            <Row items={ITEMS} />
            <Row items={ITEMS} />
            <Row items={ITEMS} />
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
}
