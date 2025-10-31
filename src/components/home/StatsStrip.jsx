import { HeartHandshake, HandCoins, Users2, HandHeart } from "lucide-react";
import { motion } from "framer-motion";

function StatCard({ value, label, colorFrom, colorTo, Icon, delay = 0 }) {
  return (
    <div className="flex items-center gap-4">
      <div
        className="relative grid place-items-center w-16 h-16 shrink-0 shadow-lg"
        style={{
          clipPath:
            "polygon(25% 4%, 75% 4%, 100% 50%, 75% 96%, 25% 96%, 0% 50%)",
          backgroundImage: `linear-gradient(135deg, ${colorFrom}, ${colorTo})`,
        }}
      >
        <div className="grid place-items-center w-10 h-10 rounded-xl bg-white/90 shadow-sm">
          <Icon className="w-6 h-6 text-gray-800" />
        </div>
      </div>

      <div>
        <motion.div
          className="text-3xl font-extrabold tracking-tight text-gray-800 inline-block"
          initial={{ rotate: 0 }}
          whileInView={{ rotate: 360 }}
          transition={{ duration: 0.8, ease: "easeOut", delay }}
          viewport={{ once: true, amount: 0.6 }}
        >
          {value}
        </motion.div>
        <div className="text-sm text-gray-500">{label}</div>
      </div>
    </div>
  );
}

export default function Statsstrip() {
  return (
    <section className="w-full">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col sm:flex-row items-stretch justify-between gap-8 sm:gap-0 bg-white/60 backdrop-blur rounded-2xl px-6 sm:px-8 py-8">
          <StatCard
            value="220K"
            label="Poor Educate"
            colorFrom="#FF9933"
            colorTo="#FF9933"
            Icon={HeartHandshake}
            delay={0.0}
          />

          <div className="hidden sm:block w-px self-stretch bg-gray-200 mx-8" />

          <StatCard
            value="95M+"
            label="Fund Raised"
            colorFrom="#000080"
            colorTo="#000080"
            Icon={HandCoins}
            delay={0.1}
          />

          <div className="hidden sm:block w-px self-stretch bg-gray-200 mx-8" />

          <StatCard
            value="150K"
            label="Team Member"
            colorFrom="#000080"
            colorTo="#138808"
            Icon={Users2}
            delay={0.2}
          />

          <div className="hidden sm:block w-px self-stretch bg-gray-200 mx-8" />

          <StatCard
            value="32M+"
            label="Donate now"
            colorFrom="#138808"
            colorTo="#138808"
            Icon={HandHeart}
            delay={0.3}
          />
        </div>
      </div>
    </section>
  );
}
