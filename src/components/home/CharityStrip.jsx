import {
  GraduationCap,
  Droplets,
  Stethoscope,
  UtensilsCrossed,
} from "lucide-react";

const ITEMS = [
  {
    icon: GraduationCap,
    text: "CHARITY FOR EDUCATION",
    color: "text-amber-400",
    iconColor: "text-amber-400",
  },
  {
    icon: Droplets,
    text: "CHARITY FOR WATER",
    color: "text-emerald-400",
    iconColor: "text-emerald-400",
  },
  {
    icon: Stethoscope,
    text: "CHARITY FOR MEDICAL",
    color: "text-fuchsia-400",
    iconColor: "text-fuchsia-400",
  },
  {
    icon: UtensilsCrossed,
    text: "CHARITY FOR FOODS",
    color: "text-orange-400",
    iconColor: "text-orange-400",
  },
];

function Row({ items }) {
  return (
    <div className="flex items-center gap-16 px-10">
      {items.map((it, i) => (
        <div key={i} className="flex items-center gap-3 shrink-0">
          <it.icon className={`w-6 h-6 ${it.iconColor}`} />
          <span className={`font-extrabold tracking-wide ${it.color}`}>
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
}) {
  return (
    <section
      className="relative w-full"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#0e3b35]/85" />

      {/* Marquee */}
      <div className="relative overflow-hidden py-3">
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

      <style>{`
        @keyframes marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}
