import { motion } from "framer-motion";
import { ArrowRight, Leaf } from "lucide-react";

const DEFAULT_ITEMS = [
  {
    id: "01",
    title: "Waste Management",
    desc: "Energy consulting involves providing of advice and guidance on energy",
    image: "/images/about-two-img-1.jpg",
    href: "#",
  },
  {
    id: "02",
    title: "Cleaning Ocean",
    desc: "Energy consulting involves providing of advice and guidance on energy",
    image: "/images/about-two-img-2.jpg",
    href: "#",
  },
  {
    id: "03",
    title: "Plastic Recycling",
    desc: "Energy consulting involves providing of advice and guidance on energy",
    image: "/images/about-two-img-3.jpg",
    href: "#",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 80 },
  show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: "easeOut" } },
};

function ServiceCard({ item }) {
  return (
    <motion.article
      variants={fadeUp}
      className="group relative overflow-hidden rounded-2xl"
      style={{
        boxShadow: "0 0 0 1px rgba(19,136,8,0.14)",
        backgroundColor: "transparent",
      }}
    >
      {/* Image */}
      <div className="relative h-80 w-full overflow-hidden rounded-2xl">
        <motion.img
          src={item.image}
          alt={item.title}
          className="h-full w-full object-cover"
          initial={{ scale: 1.05 }}
          whileHover={{ scale: 1.12 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        />

        <div
          className="absolute right-4 top-4 rounded-full px-3 py-1 text-sm backdrop-blur"
          style={{
            color: "#134A43",
            backgroundColor: "rgba(255,255,255,0.78)",
            boxShadow: "0 0 0 1px rgba(19,136,8,0.18)",
            fontWeight: 700,
          }}
        >
          No – {item.id}
        </div>

        <motion.div
          className="absolute inset-x-4 bottom-4 rounded-xl p-5"
          style={{
            background:
              "linear-gradient(135deg, rgba(19,136,8,0.88), rgba(19,136,8,0.58))",
            boxShadow: "0 10px 24px rgba(0,0,0,0.25)",
            backdropFilter: "blur(6px)",
          }}
          initial={{ y: 20 }}
          whileHover={{ y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h3 className="text-lg font-extrabold text-white">{item.title}</h3>
          <p className="mt-1 text-sm text-white/90">{item.desc}</p>

          <a
            href={item.href}
            className="mt-4 inline-flex items-center gap-3 rounded-full px-5 py-3 text-sm font-semibold opacity-0 translate-y-3 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0"
            style={{
              background:
                "linear-gradient(90deg, #FF9933 0%, #FFFFFF 50%, #138808 100%)",
              color: "#134A43",
              boxShadow: "0 0 0 2px rgba(255,153,51,0.35)",
            }}
          >
            <span
              className="rounded-full px-3 py-1 text-xs font-bold"
              style={{ backgroundColor: "rgba(255,255,255,0.35)" }}
            >
              Read More
            </span>
            <span
              className="grid h-8 w-8 place-items-center rounded-full"
              style={{ backgroundColor: "rgba(19,136,8,0.12)" }}
            >
              <ArrowRight size={16} color="#134A43" />
            </span>
          </a>
        </motion.div>
      </div>
    </motion.article>
  );
}

export default function ServiceWhatWeDo({
  items = DEFAULT_ITEMS,
  tagline = "What We Do",
  heading = (
    <>
      We Offer Different Services
      <br /> For Helped You
    </>
  ),
  quote = `“Advanced cameras combined with a large display
  fast performance, and highly calibrated.”`,
  ctaLabel = "View All Service",
  ctaHref = "#",
}) {
  return (
    <section className="relative w-full py-16 font-serif overflow-hidden ">
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-0 left-0 w-full h-56 bg-gradient-to-b from-[#FF9933] to-transparent opacity-25 animate-slideDown" />
        <div className="absolute bottom-0 left-0 w-full h-56 bg-gradient-to-t from-[#138808] to-transparent opacity-25 animate-slideUp" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-12">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          className="grid grid-cols-1 items-start gap-10 md:grid-cols-2"
        >
          <div>
            <div className="mb-3 inline-flex items-center gap-2">
              <Leaf size={18} color="#FF9933" />
              <span
                className="text-sm font-semibold"
                style={{ color: "#FF9933" }}
              >
                {tagline}
              </span>
            </div>
            <h2 className="text-4xl font-extrabold leading-tight text-black md:text-5xl">
              {heading}
            </h2>
          </div>

          <div className="flex flex-col items-start md:items-end">
            <p className="max-w-lg text-black/85">{quote}</p>
            <a
              href={ctaHref}
              className="mt-4 inline-flex items-center gap-2 text-sm font-semibold"
              style={{ color: "#FF9933" }}
            >
              {ctaLabel} <ArrowRight size={16} />
            </a>
          </div>
        </motion.div>

        <motion.div
          className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          transition={{ staggerChildren: 0.18 }}
        >
          {items.map((it) => (
            <ServiceCard key={it.id} item={it} />
          ))}
        </motion.div>
      </div>

      <style>{`
        @keyframes slideDown {
          0%   { transform: translateY(-25%); }
          100% { transform: translateY(0%); }
        }
        @keyframes slideUp {
          0%   { transform: translateY(25%); }
          100% { transform: translateY(0%); }
        }
        .animate-slideDown { animation: slideDown 14s ease-in-out infinite alternate; }
        .animate-slideUp   { animation: slideUp   14s ease-in-out infinite alternate; }
      `}</style>
    </section>
  );
}
