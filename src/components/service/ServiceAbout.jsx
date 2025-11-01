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
      <div className="text-3xl font-bold text-[#003366] mt-2">
        {rolled}
        <span>{suffix}</span>
      </div>
      <div className="text-base text-[#000080] mt-1 font-medium">{label}</div>
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
        className="mx-auto max-w-screen-2xl grid grid-cols-1 md:grid-cols-[520px_1fr] gap-0 px-2 lg:px-20 items-center"
        style={{ minHeight: 520 }}
      >
        <div
          className="relative flex-shrink-0 flex justify-start items-start"
          style={{ minHeight: 430 }}
        >
          <div className="rounded-[32px] overflow-hidden w-[355px] h-[400px] bg-gray-200 shadow-lg relative z-[1]">
            <img
              src={primaryImage}
              alt="Primary"
              className="w-full h-full object-cover"
            />
          </div>

          <div
            className="absolute right-[-18px] top-[36px] z-20 px-7 py-3 rounded-xl bg-[#FFE184] text-[#003366] text-center shadow font-extrabold flex flex-col items-center"
            style={{ fontSize: 27, minWidth: 120 }}
          >
            <span className="text-2xl font-extrabold">{badgeYear}</span>
            <span className="text-sm font-medium mt-1">
              Years of experience
            </span>
          </div>

          <div
            className="absolute left-[-45px] top-[218px] flex items-center gap-2 bg-[#075343] text-white px-5 py-3 rounded-lg shadow-lg z-20"
            style={{ fontSize: 14 }}
          >
            <Award size={19} color="#FFBF4B" />
            <div className="flex flex-col text-sm">
              <span className="font-semibold">2024–We are the</span>
              <span className="opacity-90">best award winner</span>
            </div>
          </div>

          <div
            className="absolute left-[98px] top-[218px] z-30"
            style={{
              width: 245,
              height: 220,
              overflow: "hidden",
              borderRadius: "70px 70px 130px 130px/75px 75px 160px 160px",
              boxShadow: "0 10px 60px rgba(0,0,0,0.16)",
              background: "#fff",
              border: "none",
            }}
          >
            <img
              src={secondaryImage}
              alt="Overlay"
              className="w-full h-full object-cover"
            />
            {/* Play button  */}
            <motion.button
              className="absolute left-1/2 top-3/4 flex items-center justify-center rounded-full shadow-lg border-4 border-white"
              style={{
                width: "62px",
                height: "62px",
                backgroundColor: "rgba(255,255,255,0.85)",
                transform: "translate(-50%, -50%)",
              }}
              aria-label="Play video"
              animate={{ scale: [1, 1.18, 1], opacity: [1, 0.85, 1] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeOut" }}
            >
              <Play size={30} color="#004083" />
            </motion.button>
          </div>

          <div
            className="absolute left-[8px] bottom-[-14px] z-[1]"
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
        <div className="flex flex-col pl-9 pr-3 justify-center items-start ml-14">
          {/* Kicker */}
          <div className="flex items-center gap-2 mb-3 mt-2">
            <Leaf size={22} color="#138808" />
            <span className="text-[#138808] text-lg font-semibold">
              About Us
            </span>
          </div>
          {/* Title */}
          <h2
            className="text-[2.98rem] leading-tight font-extrabold text-[#003366] mb-6 mt-3"
            style={{ letterSpacing: "-1px", lineHeight: "1.05" }}
          >
            {title}
          </h2>
          {/* Tabs */}
          <div className="flex gap-6 mb-6 mt-2">
            {tabs.map((t, i) => (
              <button
                key={t}
                className={`px-7 py-2 rounded-full font-bold text-[#004083] text-[1.05rem] border transition`}
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
          <div className="mb-5 max-w-xl text-[#555] text-[1.10rem] leading-relaxed">
            The implant fixture is first placed, so that it likely to then a
            dental prosthetic is added then dental prosthetic.
          </div>

          <ul className="space-y-5 pb-2">
            {bullets.map((b) => (
              <li
                key={b}
                className="flex items-center gap-4 text-[#003366] font-bold text-[1.04rem]"
              >
                <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-[rgba(19,136,8,0.10)] border border-green-200">
                  <Check size={17} color="#138808" />
                </span>
                <span>{b}</span>
              </li>
            ))}
          </ul>
          {/* CTA  */}
          <div className="flex gap-6 items-center flex-wrap mt-5">
            <button
              className="inline-flex items-center gap-2 rounded-full px-10 py-4 font-extrabold text-[1.25rem] shadow-lg transition"
              style={{ background: "#FFBF4B", color: "#003366" }}
            >
              Explore More
              <span className="grid h-9 w-9 place-items-center rounded-full bg-[rgba(0,0,128,0.09)]">
                <ArrowRight size={20} />
              </span>
            </button>
            <div className="flex items-center gap-3">
              <span className="inline-flex items-center gap-1">
                <span className="grid h-8 w-8 place-items-center rounded-full bg-white border border-[#FFD975]">
                  <Star size={19} color="#138808" />
                </span>
                <span className="text-md font-bold text-[#003366] ml-1">
                  Trustpilot
                </span>
              </span>
              <div className="flex items-center">
                {Array(5)
                  .fill(0)
                  .map((_, i) => (
                    <Star key={i} size={19} color="#FFBF4B" fill="#FFBF4B" />
                  ))}
              </div>
              <span className="text-md text-gray-500 ml-3 font-medium">
                Excellent 4.9 out of 5
              </span>
            </div>
          </div>
        </div>
      </div>
      {/* Stats Row  */}
      <div className="mx-auto max-w-7xl grid grid-cols-2 md:grid-cols-4 gap-8 pt-12 pb-7 px-6 lg:px-14">
        {stats.map((s, idx) => (
          <Stat key={s.label} icon={s.icon} value={s.value} label={s.label} />
        ))}
      </div>
    </section>
  );
}
