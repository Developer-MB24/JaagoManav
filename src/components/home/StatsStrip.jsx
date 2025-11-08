import React from "react";
import { HeartHandshake, HandCoins, Users2, HandHeart } from "lucide-react";

/* ------------ Count-up (roll number, then stop) ------------ */
function useCountUpString(targetStr, start) {
  const [out, setOut] = React.useState(targetStr);

  React.useEffect(() => {
    if (!start) {
      setOut(targetStr);
      return;
    }
    const m = String(targetStr)
      .trim()
      .match(/^(\d+(?:\.\d+)?)(.*)$/);
    if (!m) {
      setOut(targetStr);
      return;
    }
    const target = parseFloat(m[1]);
    const suffix = m[2] ?? "";
    const isFloat = m[1].includes(".");
    const duration = 1600;
    let raf = 0;
    let t0 = 0;

    const easeOutCubic = (p) => 1 - Math.pow(1 - p, 3);

    const step = (ts) => {
      if (!t0) t0 = ts;
      const p = Math.min((ts - t0) / duration, 1);
      const eased = easeOutCubic(p);
      const val = target * eased;
      const shown = isFloat ? val.toFixed(1) : Math.floor(val).toString();
      setOut(`${shown}${suffix}`);
      if (p < 1) raf = requestAnimationFrame(step);
    };

    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [targetStr, start]);

  return out;
}

/* ------------ One stat card ------------ */
function StatCard({
  value,
  label,
  colorFrom,
  colorTo,
  Icon,
  withLeftDivider = false,
}) {
  const ref = React.useRef(null);
  const [inView, setInView] = React.useState(false);
  const rolled = useCountUpString(value, inView);

  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          io.disconnect();
        }
      },
      { threshold: 0.55 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="relative flex flex-col items-center justify-center py-4"
    >
      {/* vertical divider (left) */}
      {withLeftDivider && (
        <span className="pointer-events-none absolute left-0 top-0 hidden h-full w-px bg-gray-200 sm:block" />
      )}

      {/* Hex badge with icon */}
      <div className="relative h-16 w-16">
        {/* Outer hex (gradient) */}
        <div
          className="absolute inset-0 rounded-none shadow-lg transition-transform duration-300 group-hover:-translate-y-0.5"
          style={{
            clipPath:
              "polygon(25% 4%, 75% 4%, 100% 50%, 75% 96%, 25% 96%, 0% 50%)",
            backgroundImage: `linear-gradient(135deg, ${colorFrom}, ${colorTo})`,
          }}
        />

        {/* Inner hex – turns white on hover */}
        <div
          className="absolute inset-[6px] bg-white/85 transition-colors duration-300 group-hover:bg-white"
          style={{
            clipPath:
              "polygon(25% 4%, 75% 4%, 100% 50%, 75% 96%, 25% 96%, 0% 50%)",
          }}
        />

        {/* Icon layer (keep above everything so it never disappears) */}
        <div className="absolute inset-0 grid place-items-center z-10">
          <div className="grid h-10 w-10 place-items-center rounded-xl bg-white/92 shadow-sm transition-all duration-300 group-hover:bg-white group-hover:shadow-md">
            <Icon className="h-6 w-6 text-slate-900" strokeWidth={2.2} />
          </div>
        </div>
      </div>

      {/* Number + label */}
      <div className="mt-5 text-center">
        <div className="text-3xl font-extrabold tracking-tight text-slate-900">
          {rolled}
        </div>
        <div className="mt-2 text-sm text-slate-500">{label}</div>
      </div>
    </div>
  );
}

/* ------------ Stats strip ------------ */
export default function Statsstrip() {
  const stats = [
    {
      value: "220K",
      label: "Poor Educate",
      from: "#FF9933",
      to: "#FF9933",
      Icon: HeartHandshake,
    },
    {
      value: "95M+",
      label: "Fund Raised",
      from: "#F6C445",
      to: "#E4B018",
      Icon: HandCoins,
    },
    {
      value: "150K",
      label: "Team Member",
      from: "#21C197",
      to: "#10B981",
      Icon: Users2,
    },
    {
      value: "32M+",
      label: "Donate now",
      from: "#7C3AED",
      to: "#8B5CF6",
      Icon: HandHeart,
    },
  ];

  return (
    <section className="w-full">
      <div className="mx-auto max-w-6xl px-4">
        {/* card background */}
        <div className="rounded-3xl bg-white/60 p-6 sm:p-10 backdrop-blur">
          {/* 4 equal columns; centered perfectly */}
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-4 sm:gap-0">
            {stats.map((s, i) => (
              <div className="group" key={s.label}>
                <StatCard
                  value={s.value}
                  label={s.label}
                  colorFrom={s.from}
                  colorTo={s.to}
                  Icon={s.Icon}
                  withLeftDivider={i !== 0} // divider for cols 2-4
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
