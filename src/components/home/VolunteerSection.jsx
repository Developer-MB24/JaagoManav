import { motion } from "framer-motion";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaPinterestP,
} from "react-icons/fa";

const volunteers = [
  {
    name: "Jessica Brown",
    role: "Volunteer",
    img: "/images/1 - Expert Volunteer.jpg",
    accent: "bg-[#FF9933]", // India Saffron
    border: "ring-[#FF9933]",
  },
  {
    name: "James Fuller",
    role: "Founder",
    img: "/images/2 - Expert Volunteer.jpg",
    accent: "bg-[#000080]", // White
    border: "ring-[#000080]", // Navy ring for visibility
  },
  {
    name: "Jasmet Mangat",
    role: "Manager",
    img: "/images/3 - Expert Volunteer.jpg",
    accent: "bg-[#138808]", // India Green
    border: "ring-[#138808]",
  },
  {
    name: "Tim Southe",
    role: "Founder",
    img: "/images/2 - Expert Volunteer.jpg",
    accent: "bg-[#000080]", // Navy Blue
    border: "ring-[#000080]",
  },
];

const container = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { staggerChildren: 0.12, duration: 0.5, ease: "easeOut" },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

// 🔹 NEW: directional image slide variants (left for first 2, right for last 2)
const imgVariants = {
  hidden: (dir) => ({
    opacity: 0,
    x: dir === "left" ? -40 : 40,
    scale: 0.98,
  }),
  show: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { duration: 0.55, ease: "easeOut" },
  },
};

function VolunteerCard({ v, index }) {
  const dir = index < 2 ? "left" : "right"; // first 2 from left, last 2 from right

  return (
    <motion.article
      variants={item}
      className="group relative rounded-[22px] shadow-lg bg-white overflow-hidden"
    >
      {/* Image region (directional slide-in) */}
      <motion.div
        className="relative h-64"
        variants={imgVariants}
        custom={dir}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.4 }}
      >
        <img
          src={v.img}
          alt={v.name}
          className="absolute inset-0 w-full h-full object-cover transition duration-500 group-hover:scale-[1.04] group-hover:blur-[1.5px]"
        />

        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition duration-500" />

        <div
          className={`pointer-events-none absolute inset-0 rounded-[22px] ring-2 ring-transparent group-hover:${v.border} transition duration-300`}
        />

        {/* Social icons */}
        <div className="absolute inset-x-0 bottom-5 flex items-center justify-center gap-4 opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
          {[FaFacebookF, FaTwitter, FaInstagram, FaPinterestP].map(
            (Icon, i) => (
              <a
                key={i}
                href="#"
                className="grid place-items-center w-11 h-11 rounded-full bg-white/15 backdrop-blur border border-white/50 text-white hover:bg-white hover:text-gray-900 transition"
                style={{ transitionDelay: `${i * 60}ms` }}
                aria-label="social"
              >
                <Icon className="text-[16px]" />
              </a>
            )
          )}
        </div>
      </motion.div>

      <div className="h-[10px]">
        <svg
          viewBox="0 0 100 10"
          preserveAspectRatio="none"
          className="w-full h-full"
        >
          <defs>
            <linearGradient
              id={`grad-${v.name.replace(/\s/g, "")}`}
              x1="0"
              x2="1"
              y1="0"
              y2="0"
            >
              <stop offset="0" stopColor="currentColor" />
              <stop offset="1" stopColor="currentColor" />
            </linearGradient>
          </defs>
          <path
            d="M0,10 C15,2 35,8 50,3 C65,8 85,2 100,10 L100,10 L0,10 Z"
            className={`text-transparent bg-gradient-to-r ${v.accent}`}
            style={{ fill: "url(#grad-fallback)" }}
          />
        </svg>

        <div className={`-mt-[10px] h-[10px] bg-gradient-to-r ${v.accent}`} />
      </div>

      <div className="px-6 py-5 text-center">
        <h3 className="text-lg font-extrabold text-gray-900">{v.name}</h3>
        <p className="mt-1 text-gray-500">{v.role}</p>
      </div>
    </motion.article>
  );
}

export default function VolunteerSection() {
  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-10">
          {/* 🔸 italic orange label + gliding underline */}
          <div className="uppercase tracking-widest text-[#FF9933] font-semibold text-sm italic inline-block">
            <span className="relative inline-block">
              Expert Volunteer
              <div className="relative mx-auto mt-1 h-[3px] w-48 overflow-hidden">
                {/* faint baseline */}
                <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-[2px] bg-[#FF9933]/30" />
                {/* moving bar */}
                <motion.div
                  className="absolute top-1/2 -translate-y-1/2 h-[3px] w-20 rounded bg-[#FF9933]"
                  animate={{ x: [0, 112, 0] }} // 112px ≈ (w-48 - w-20)
                  transition={{
                    duration: 1.6,
                    repeat: Infinity,
                    repeatType: "mirror",
                    ease: "easeInOut",
                  }}
                />
              </div>
            </span>
          </div>

          {/* 🔸 Split H2 into two bottom→up blocks */}
          <h2 className="mt-3 text-4xl font-extrabold text-[#138808]">
            <motion.span
              className="block"
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.55, ease: "easeOut" }}
            >
              Meet Our <span className="text-[#FF9933]">Volunteer</span>
            </motion.span>
          </h2>
        </div>

        {/* Cards */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {volunteers.map((v, i) => (
            // 🔹 pass index so first two can come from left, last two from right
            <VolunteerCard key={v.name} v={v} index={i} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
