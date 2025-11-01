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

function ServiceCard({ item, index }) {
  return (
    <motion.article
      variants={fadeUp}
      className="group relative overflow-hidden rounded-xl"
      style={{
        boxShadow: "0 0 0 1px rgba(0,0,128,0.15)",
        backgroundColor: "#00000000",
      }}
    >
      {/* Image */}
      <div className="relative h-80 w-full overflow-hidden rounded-xl">
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
            color: "#000080",
            backgroundColor: "rgba(255,255,255,0.75)",
            boxShadow: "0 0 0 1px rgba(0,0,128,0.15)",
          }}
        >
          No – {item.id}
        </div>

        <motion.div
          className="absolute inset-x-4 bottom-4 rounded-xl p-5"
          style={{
            background:
              "linear-gradient(135deg, rgba(0,0,128,0.85), rgba(0,0,128,0.55))",
            boxShadow: "0 10px 24px rgba(0,0,0,0.25)",
          }}
          initial={{ y: 20 }}
          whileHover={{ y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h3 className="text-lg font-extrabold text-white">{item.title}</h3>
          <p className="mt-1 text-sm text-white/85">{item.desc}</p>

          <motion.a
            href={item.href}
            className="mt-4 inline-flex items-center gap-3 rounded-full px-5 py-3 text-sm font-semibold"
            style={{
              background:
                "linear-gradient(90deg, #FF9933 0%, #FFFFFF 50%, #138808 100%)",
              color: "#000080",
              boxShadow: "0 0 0 2px rgba(255,153,51,0.35)",
            }}
            initial={{ opacity: 0, y: 12 }}
            whileHover={{ opacity: 1, y: 0 }}
            animate={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <span
              className="rounded-full px-3 py-1 text-xs font-bold"
              style={{ backgroundColor: "rgba(255,255,255,0.35)" }}
            >
              Read More
            </span>
            <span
              className="grid h-8 w-8 place-items-center rounded-full"
              style={{ backgroundColor: "rgba(0,0,128,0.10)" }}
            >
              <ArrowRight size={16} color="#000080" />
            </span>
          </motion.a>

          <style>{`
            .group:hover a { opacity: 1 !important; transform: translateY(0) !important; }
          `}</style>
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
    <section
      className="relative w-full py-16 font-serif"
      style={{
        background:
          "radial-gradient(1200px 800px at 10% -10%, rgba(19,136,8,0.25), transparent 60%), linear-gradient(0deg, rgba(0,0,128,0.75), rgba(0,0,128,0.75))",
      }}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        {/* Top row */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          className="grid grid-cols-1 items-start gap-10 md:grid-cols-2"
        >
          <div>
            <div className="mb-3 inline-flex items-center gap-2">
              <Leaf size={18} color="#138808" />
              <span className="text-sm" style={{ color: "#138808" }}>
                {tagline}
              </span>
            </div>
            <h2 className="text-4xl font-extrabold leading-tight text-white md:text-5xl">
              {heading}
            </h2>
          </div>

          <div className="flex flex-col items-start md:items-end">
            <p className="max-w-lg text-white/85">{quote}</p>
            <a
              href={ctaHref}
              className="mt-4 inline-flex items-center gap-2 text-sm font-semibold"
              style={{ color: "#FF9933" }}
            >
              {ctaLabel} <ArrowRight size={16} />
            </a>
          </div>
        </motion.div>

        {/* Cards */}
        <motion.div
          className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          transition={{ staggerChildren: 0.18 }}
        >
          {items.map((it, idx) => (
            <ServiceCard key={it.id} item={it} index={idx} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
