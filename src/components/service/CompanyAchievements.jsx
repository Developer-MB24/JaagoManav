// src/components/whoweare/CompanyAchievements.jsx
import React, { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { TrendingUp, Lightbulb, ThumbsUp, Users } from "lucide-react";

/* ---------- COUNT-UP HOOK (same logic as WhoWeAreSection) ---------- */

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

/* ---------- STAT BOX (icon + animated number + label) ---------- */

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
      {/* Icon circle */}
      <div className="flex items-center justify-center mx-auto mb-4 w-[70px] h-[70px] md:w-[60px] md:h-[60px] sm:w-[50px] sm:h-[50px] rounded-full border-2 border-[#FF9933] bg-[#F8F7F0]">
        <Icon size={26} className="text-[#FF9933]" />
      </div>

      {/* Animated number with suffix */}
      <div className="mb-1 font-bold text-[34px] lg:text-[30px] md:text-[26px] sm:text-[24px] leading-none text-[#004540]">
        {rolled}
        <span className="align-top">{suffix}</span>
      </div>

      {/* Label */}
      <p className="text-[16px] md:text-[14px] leading-[24px] text-[#004540]">
        {label}
      </p>
    </motion.div>
  );
}

/* ---------- DATA ---------- */

const achievements = [
  { icon: TrendingUp, value: "98%", label: "Company Success" },
  { icon: Lightbulb, value: "565+", label: "Company Strategies" },
  { icon: ThumbsUp, value: "36k", label: "Complete Projects" },
  { icon: Users, value: "100+", label: "Experienced Members" },
];

/* ---------- MAIN COMPONENT ---------- */

export default function CompanyAchievements() {
  return (
    <section className="mt-16 md:mt-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 w-full">
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
    </section>
  );
}
