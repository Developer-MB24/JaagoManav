import React from "react";
import {
  GraduationCap,
  Droplets,
  Stethoscope,
  UtensilsCrossed,
} from "lucide-react";

const MASK_DATA = null;

const ITEMS = [
  {
    icon: UtensilsCrossed,
    text: "CHARITY FOR FOODS",
    color: "text-[#FFFFFF]",
  },
  {
    icon: GraduationCap,
    text: "CHARITY FOR EDUCATION",
    color: "text-[#138808]",
  },
  { icon: Droplets, text: "CHARITY FOR WATER", color: "text-[#FF9933]" },
  { icon: Stethoscope, text: "CHARITY FOR MEDICAL", color: "text-[#000080]" },
];

function Row({ items }) {
  return (
    <div className="flex items-center px-10">
      {items.map((it, i) => (
        <div
          key={i}
          className="flex items-center gap-5 shrink-0 ml-5 first:ml-0"
        >
          <it.icon className={`h-[35px] w-[35px] ${it.color}`} />
          <span
            className={`text-[12px] leading-[30px] font-extrabold tracking-wide uppercase ${it.color}`}
          >
            {it.text}
          </span>
        </div>
      ))}
    </div>
  );
}

export default function CharityStrip({
  bgImage = "/images/process-1-1.jpg",
  speedSec = 30,
  maskImage = MASK_DATA,
}) {
  return (
    <section className="relative w-full pt-[120px]">
      <div
        className="relative z-[3] bg-black py-[35px] overflow-hidden"
        style={
          maskImage
            ? {
                WebkitMaskImage: maskImage,
                maskImage: maskImage,
                WebkitMaskRepeat: "no-repeat",
                maskRepeat: "no-repeat",
                WebkitMaskPosition: "center center",
                maskPosition: "center center",
                WebkitMaskSize: "cover",
                maskSize: "cover",
              }
            : undefined
        }
      >
        <div
          className="absolute inset-0 -z-[1]"
          style={{
            backgroundImage: `url(${bgImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.15,
            mixBlendMode: "luminosity",
          }}
        />

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
