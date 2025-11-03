import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import {
  ArrowRight,
  Leaf,
  Play,
  Star,
  Award,
  ThumbsUp,
  Users,
  Lightbulb,
  BarChart3,
  Check,
} from "lucide-react";

function useCountUp(target = 0, start = false, { duration = 1500 } = {}) {
  const [value, setValue] = useState(0);
  const rafRef = useRef(null);

  useEffect(() => {
    if (!start) return;
    const startTs = performance.now();
    const from = 0;
    const to = Number(target) || 0;
    const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);

    function tick(now) {
      const p = Math.min(1, (now - startTs) / duration);
      const eased = easeOutCubic(p);
      setValue(Math.round(from + (to - from) * eased));
      if (p < 1) rafRef.current = requestAnimationFrame(tick);
    }
    rafRef.current = requestAnimationFrame(tick);
    return () => rafRef.current && cancelAnimationFrame(rafRef.current);
  }, [start, target, duration]);

  return value;
}

function splitNumberAndSuffix(v) {
  const s = String(v);
  let i = 0;
  while (i < s.length && s[i] >= "0" && s[i] <= "9") i++;
  const num = Number(s.slice(0, i) || "0");
  const suffix = s.slice(i);
  return [num, suffix];
}

function Stat({ icon: Icon, value = "0", label = "" }) {
  const [num, suffix] = splitNumberAndSuffix(value);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-20% 0px -20% 0px" });
  const rolled = useCountUp(num, inView, { duration: 1500 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="flex flex-col items-center"
    >
      <div
        className="h-14 w-14 rounded-full flex items-center justify-center shadow"
        style={{
          background: "#fff",
          boxShadow: "0 0 0 2px rgba(255,153,51,0.28)",
        }}
      >
        <Icon size={22} color="#000080" />
      </div>
      <div className="text-2xl md:text-3xl font-bold text-[#003366] mt-2">
        {rolled}
        <span>{suffix}</span>
      </div>
      <div className="text-sm md:text-base text-[#000080] mt-1 font-medium">
        {label}
      </div>
    </motion.div>
  );
}

export default function ServiceAboutExact({
  primaryImage = "/images/about-two-img-1.jpg",
  secondaryImage = "/images/about-two-img-2.jpg",
  badgeYear = "29+",
  title = "Building Greener Future Together And Protect",
  tabs = ["Our History", "Our Mission", "Our Vision"],
  activeTabIndex = 0,
  bullets = [
    "Nature ecologically, acceptable, organisms environment",
    "Ecology is the study of the relationship between living",
    "Focus on your important tasks and orders",
  ],
  stats = [
    { icon: BarChart3, value: "98%", label: "Company Success" },
    { icon: Lightbulb, value: "565+", label: "Company Strategies" },
    { icon: ThumbsUp, value: "36k", label: "Complete Projects" },
    { icon: Users, value: "100+", label: "Experienced Members" },
  ],
}) {
  return (
    <section className="relative w-full bg-white font-serif pt-4">
      <div
        className="mx-auto max-w-screen-2xl grid grid-cols-1 md:grid-cols-[520px_1fr] gap-6 md:gap-0 px-4 sm:px-6 lg:px-20 items-center"
        style={{ minHeight: 520 }}
      >
        {/* LEFT COLUMN */}
        <div
          className="relative flex-shrink-0 flex justify-center md:justify-start items-start  md:pb-0"
          style={{ minHeight: 430 }}
        >
          {/* Primary image card */}
          <div className="rounded-[24px] md:rounded-[32px] overflow-hidden w-[88vw] max-w-[360px] h-[60vw] max-h-[400px] md:w-[355px] md:h-[400px] bg-gray-200 shadow-lg relative z-[1]">
            <img
              src={primaryImage}
              alt="Primary"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Badge (Years of experience) */}
          <div
            className="absolute right-2 top-2 md:right-[-18px] md:top-[36px] z-20 px-5 md:px-7 py-2.5 md:py-3 rounded-xl bg-[#FFE184] text-[#003366] text-center shadow font-extrabold flex flex-col items-center"
            style={{ fontSize: 22, minWidth: 112 }}
          >
            <span className="text-xl md:text-2xl font-extrabold">
              {badgeYear}
            </span>
            <span className="text-xs md:text-sm font-medium mt-1">
              Years of experience
            </span>
          </div>

          {/* Award label */}
          <div
            className="absolute left-2 top-[65%] md:left-[-45px] md:top-[218px] flex items-center gap-2 bg-[#075343] text-white px-4 md:px-5 py-2.5 md:py-3 rounded-lg shadow-lg z-20"
            style={{ fontSize: 13 }}
          >
            <Award size={18} color="#FFBF4B" />
            <div className="flex flex-col text-xs md:text-sm">
              <span className="font-semibold">2024–We are the</span>
              <span className="opacity-90">best award winner</span>
            </div>
          </div>

          {/* Secondary overlay image card */}
          <div
            className="
              relative z-30 mt-24 mx-auto w-[260px] h-[300px]
              md:absolute md:mt-0 md:mx-0 md:w-[245px] md:h-[360px]
              md:left-[298px] md:top-[160px] overflow-hidden
            "
            style={{
              borderRadius: "150px 150px 12px 12px",
              borderTopLeftRadius: "150px",
              borderTopRightRadius: "150px",
              borderBottomRightRadius: "12px",
              borderBottomLeftRadius: "12px",
              border: "4px solid #fff",
              borderTopWidth: "4px",
              borderRightWidth: "4px",
              borderBottomWidth: "4px",
              borderLeftWidth: "4px",
              borderTopStyle: "solid",
              borderRightStyle: "solid",
              borderBottomStyle: "solid",
              borderLeftStyle: "solid",
              borderTopColor: "#fff",
              borderRightColor: "#fff",
              borderBottomColor: "#fff",
              borderLeftColor: "#fff",
              boxShadow: "0 10px 60px rgba(0,0,0,0.16)",
              background: "#fff",
            }}
          >
            <img
              src={secondaryImage}
              alt="Overlay"
              className="w-full h-full object-cover"
            />

            {/* Play button */}
            <motion.button
              className="absolute flex items-center justify-center rounded-full border border-[var(--light-color)]"
              style={{
                width: 72,
                height: 72,
                textAlign: "center",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                color: "var(--light-color)",
                fontWeight: 500,
                fontSize: 18,
                lineHeight: "28px",
                backdropFilter: "blur(13px)",
                padding: "20px 18px",
                borderRadius: "100%",
                background: "rgba(255, 255, 255, 0.016)",
                transition: "0.3s linear",
                boxShadow:
                  "rgba(0, 0, 0, 0) 0px 0px 0px 3.39167px, rgba(0, 0, 0, 0) 0px 0px 0px 30px",
              }}
              aria-label="Play video"
            >
              {/* Pulsing ring (keeps shadow fixed) */}
              <motion.span
                className="pointer-events-none absolute inset-0 rounded-full"
                animate={{
                  boxShadow: [
                    "0 0 0 0 rgba(0,64,131,0.35)",
                    "0 0 0 15px rgba(0,64,131,0.0)",
                    "0 0 0 30px rgba(0,64,131,0.0)",
                  ],
                  opacity: [1, 0.8, 1],
                }}
                transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
              />
              <motion.span
                animate={{ scale: [1, 1.18, 1], opacity: [1, 0.85, 1] }}
                transition={{ repeat: Infinity, duration: 2, ease: "easeOut" }}
              >
                <Play size={26} color="#004083" />
              </motion.span>
            </motion.button>
          </div>

          {/* dotted accent */}
          <div
            className="absolute left-2 md:left-[8px] bottom-[-10px] md:bottom-[-14px] z-[1]"
            style={{
              width: 95,
              height: 23,
              background: "radial-gradient(#003366 1.1px, transparent 1.1px)",
              backgroundSize: "7px 7px",
              opacity: 0.1,
            }}
          />
        </div>

        {/* RIGHT COLUMN */}
        <div className="flex flex-col md:pl-9 md:pr-3 justify-center items-start md:ml-14 pl-1 pr-1 sm:pl-3 sm:pr-3 ml-0">
          {/* Kicker */}
          <div className="flex items-center gap-2 mb-2 mt-2">
            <Leaf size={20} color="#138808" />
            <span className="text-[#138808] text-base md:text-lg font-semibold">
              About Us
            </span>
          </div>

          {/* Title */}
          <h2
            className="text-[1.85rem] md:text-[2.98rem] leading-tight font-extrabold text-[#003366] mb-4 md:mb-6 mt-2 md:mt-3"
            style={{ letterSpacing: "-0.5px", lineHeight: "1.12" }}
          >
            {title}
          </h2>

          {/* Tabs */}
          <div className="flex flex-wrap gap-3 md:gap-6 mb-4 md:mb-6 mt-1 md:mt-2">
            {tabs.map((t, i) => (
              <button
                key={t}
                className="px-5 md:px-7 py-2 rounded-full font-bold text-[#004083] text-[0.98rem] md:text-[1.05rem] border transition"
                style={
                  i === activeTabIndex
                    ? {
                        background: "#fff",
                        borderColor: "#FFBF4B",
                        borderWidth: 2,
                      }
                    : {
                        background: "#fff",
                        borderColor: "#fff",
                        borderWidth: 2,
                        opacity: 0.82,
                      }
                }
              >
                {t}
              </button>
            ))}
          </div>

          {/* Body */}
          <div className="mb-4 md:mb-5 max-w-xl text-[#555] text-[1rem] md:text-[1.10rem] leading-relaxed">
            The implant fixture is first placed, so that it likely to then a
            dental prosthetic is added then dental prosthetic.
          </div>

          <ul className="space-y-4 md:space-y-5 pb-1 md:pb-2">
            {bullets.map((b) => (
              <li
                key={b}
                className="flex items-center gap-3 md:gap-4 text-[#003366] font-bold text-[1rem] md:text-[1.04rem]"
              >
                <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-[rgba(19,136,8,0.10)] border border-green-200">
                  <Check size={17} color="#138808" />
                </span>
                <span>{b}</span>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <div className="flex gap-4 md:gap-6 items-center flex-wrap mt-4 md:mt-5">
            <button
              className="inline-flex items-center gap-2 rounded-full px-8 md:px-10 py-3.5 md:py-4 font-extrabold text-[1.05rem] md:text-[1.25rem] shadow-lg transition"
              style={{ background: "#FFBF4B", color: "#003366" }}
            >
              Explore More
              <span className="grid h-8 w-8 md:h-9 md:w-9 place-items-center rounded-full bg-[rgba(0,0,128,0.09)]">
                <ArrowRight size={20} />
              </span>
            </button>
            <div className="flex items-center gap-3">
              <span className="inline-flex items-center gap-1">
                <span className="grid h-8 w-8 place-items-center rounded-full bg-white border border-[#FFD975]">
                  <Star size={18} color="#138808" />
                </span>
                <span className="text-sm md:text-md font-bold text-[#003366] ml-1">
                  Trustpilot
                </span>
              </span>
              <div className="flex items-center">
                {Array(5)
                  .fill(0)
                  .map((_, i) => (
                    <Star
                      key={i}
                      size={18}
                      className="md:size-[19px]"
                      color="#FFBF4B"
                      fill="#FFBF4B"
                    />
                  ))}
              </div>
              <span className="text-sm md:text-md text-gray-500 ml-2 md:ml-3 font-medium">
                Excellent 4.9 out of 5
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Row */}
      <div className="mx-auto max-w-7xl grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 pt-8 md:pt-12 pb-6 md:pb-7 px-4 sm:px-6 lg:px-14">
        {stats.map((s) => (
          <Stat key={s.label} icon={s.icon} value={s.value} label={s.label} />
        ))}
      </div>
    </section>
  );
}
