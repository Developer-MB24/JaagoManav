// src/components/whoweare/WhoWeAreSection.jsx
import React, { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Check, TrendingUp, Lightbulb, ThumbsUp, Users } from "lucide-react";

/* ---------- COUNT-UP + STAT (same idea as your working code) ---------- */

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
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
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
      className="flex flex-col items-center text-center"
    >
      {/* icon circle – white bg as you asked */}
      <div
        className="h-[70px] w-[70px] md:h-[60px] md:w-[60px] rounded-full flex items-center justify-center shadow-md"
        style={{
          background: "#FFFFFF",
          boxShadow: "0 0 0 2px rgba(19,136,8,0.18)",
        }}
      >
        <Icon size={24} color="#138808" />
      </div>
      {/* animated number */}
      <div className="mt-2 text-4xl md:text-3xl font-bold text-[#138808] leading-none">
        {rolled}
        <span>{suffix}</span>
      </div>
      <div className="mt-1 text-sm md:text-base font-medium text-[#138808]">
        {label}
      </div>
    </motion.div>
  );
}

/* ---------- MAIN SECTION ---------- */

const services = [
  "Specialized Company",
  "Licensed & Insured",
  "Dependable Services",
  "Day Scheduling",
];

const achievements = [
  { icon: TrendingUp, value: "98%", label: "Company Success" },
  { icon: Lightbulb, value: "565+", label: "Company Strategies" },
  { icon: ThumbsUp, value: "36k", label: "Complete Projects" },
  { icon: Users, value: "100+", label: "Experienced Members" },
];

export default function WhoWeAreSection() {
  return (
    <section
      className="relative py-10 md:py-20 px-4"
      style={{
        backgroundImage:
          "url(/images/why-us-bg.webp), url(/images/who-we-are-bg.webp)",
        backgroundPosition: "right, left",
        backgroundRepeat: "no-repeat, no-repeat",
        backgroundSize: "contain, contain",
      }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Top content row */}
        <div className="flex flex-col xl:flex-row items-center gap-36 sm:gap-14 pb-16 md:pb-10">
          {/* LEFT: stacked thumbs (same as before) */}
          <div className="w-full xl:w-1/2">
            <div className="relative h-[420px] md:h-[480px] lg:h-[520px]">
              {/* thumb-1 */}
              <div className="absolute right-0 top-0 z-10 text-right">
                <img
                  src="/images/thumb-24.webp"
                  alt="thumb-1"
                  className="rounded-xl w-[360px] md:w-[320px] lg:w-[360px] shadow-xl"
                />
                <div className="absolute -z-10 left-1/3 top-10">
                  <img
                    src="/images/shape-14.webp"
                    alt="shape"
                    className="w-40 md:w-48"
                  />
                </div>
              </div>

              {/* thumb-2 */}
              <div className="absolute z-20 top-[48%] -left-4 md:top-[20%] md:left-12 lg:left-10 w-[180px] md:w-[420px] lg:w-[240px]">
                <img
                  src="/images/thumb-25.webp"
                  alt="thumb-2"
                  className="rounded-xl border-[5px] border-white shadow-xl"
                />
              </div>

              {/* thumb-3 + experience badge */}
              <div className="absolute z-20 -bottom-32 right-1  md:-bottom-24 md:right-5 w-[210px] md:w-[250px] lg:w-[270px]">
                <div className="relative">
                  <img
                    src="/images/thumb-26.webp"
                    alt="thumb-3"
                    className="rounded-xl shadow-xl "
                  />

                  {/* Experience badge */}
                  <div className="absolute -top-16 -left-32 md:-left-44 bg-[#138808] text-[#138808] border-4 border-white rounded-xl px-6 py-4 flex items-center gap-4 shadow-2xl">
                    <h3 className="text-4xl md:text-5xl font-extrabold leading-none text-white">
                      29<span className="align-top text-2xl">+</span>
                    </h3>
                    <p className="max-w-[110px] text-sm md:text-base font-semibold leading-snug text-white">
                      Years of experience
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: content */}
          <div className="w-full xl:w-1/2">
            {/* subtitle */}
            <div className="flex items-center gap-3 mb-4">
              <img
                src="/images/icon-2.svg"
                alt="icon-2"
                className="w-10 h-10"
              />
              <span className="uppercase tracking-wide text-sm font-semibold text-black">
                Who We Are
              </span>
            </div>

            {/* title */}
            <div className="mb-4">
              <h2 className="text-3xl md:text-4xl font-bold text-black leading-tight">
                Some Reasons to Choose Econest Organization
              </h2>
            </div>

            {/* description */}
            <p className="text-gray-500 mb-6 max-w-xl text-base leading-relaxed">
              The implant fixture is first placed, so that it is likely to then
              a dental prosthetic is added, creating a strong, lasting solution
              for better smiles and healthier lives.
            </p>

            {/* services list */}
            <div className="flex flex-col sm:flex-row gap-8 mb-8">
              <div className="flex flex-col gap-3">
                {services.slice(0, 2).map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <span className="flex items-center justify-center w-7 h-7 rounded-full bg-[#138808] text-[#fff]">
                      <Check size={16} />
                    </span>
                    <p className="text-black font-medium text-sm md:text-base">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
              <div className="flex flex-col gap-3">
                {services.slice(2).map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <span className="flex items-center justify-center w-7 h-7 rounded-full bg-[#138808] text-[#fff]">
                      <Check size={16} />
                    </span>
                    <p className="text-black font-medium text-sm md:text-base">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA + Annual donation */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5">
              {/* EXPLORE BUTTON – gradient + hover color change */}
              <motion.a
                href="/project"
                className="group inline-flex items-center gap-3 rounded-full px-7 py-3 text-sm md:text-base font-semibold text-[#fff] overflow-hidden"
                initial={{ backgroundPosition: "0% 0%" }}
                whileHover={{ backgroundPosition: "100% 0%" }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                style={{
                  backgroundImage:
                    "linear-gradient(120deg,#138808 0%,#138808 50%,#0f5950 100%)",
                  backgroundSize: "200% 100%",
                  backgroundPosition: "0% 0%",
                }}
              >
                <span>Explore More</span>
                <span className="relative flex items-center justify-center w-8 h-8 rounded-full bg-[#FF9933] text-[#138808] transition-colors duration-300 group-hover:bg-white group-hover:text-[#FF9933]">
                  <span className="flex items-center gap-[2px]">
                    <span className="block text-xs leading-none group-hover:-translate-x-[1px] transition-transform duration-200">
                      →
                    </span>
                    <span className="block text-xs leading-none group-hover:translate-x-[1px] transition-transform duration-200 delay-75">
                      →
                    </span>
                  </span>
                </span>
              </motion.a>

              {/* Annual donation */}
              <div className="flex items-center gap-4">
                <img
                  src="/images/icon-4.svg"
                  alt="icon-4"
                  className="w-14 h-14 md:w-12 md:h-12 p-3 rounded-full border border-[#0045401A]"
                />
                <div>
                  <p className="text-sm text-black mb-1">Annual Donation</p>
                  <h5 className="text-lg md:text-xl font-semibold text-black">
                    $2,056,00
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* COMPANY ACHIEVEMENTS using the same Stat logic */}
        <div className="mt-10 md:mt-28 mb-10 md:mb-0">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {achievements.map((item) => (
              <Stat
                key={item.label}
                icon={item.icon}
                value={item.value}
                label={item.label}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
