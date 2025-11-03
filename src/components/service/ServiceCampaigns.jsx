import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  Leaf,
  Calendar,
  ArrowRight,
  Heart,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const DATA = [
  {
    tag: "Plantation",
    daysLeft: 29,
    title: "Reforestation & Tree Planting 2025",
    desc: "Excepteur occaecat cupidatat officia the implant fixture is first placed.",
    raised: 6650,
    goal: 10560,
    image: "/images/about-two-img-1.jpg",
    likes: 259,
  },
  {
    tag: "Animal",
    daysLeft: 29,
    title: "Sustainable Energy for All",
    desc: "Aliquip ex ea commodo consequat per nature care and protection.",
    raised: 9650,
    goal: 16560,
    image: "/images/about-two-img-2.jpg",
    likes: 259,
  },
  {
    tag: "Plantation",
    daysLeft: 29,
    title: "Mangrove Revival Drive",
    desc: "Ut enim ad minim veniam quis nostrud exercitation ullamco laboris.",
    raised: 4800,
    goal: 12000,
    image: "/images/about-two-img-3.jpg",
    likes: 312,
  },
  {
    tag: "Animal",
    daysLeft: 29,
    title: "Protect Endangered Species",
    desc: "Consectetur adipiscing elit sed do eiusmod tempor incididunt.",
    raised: 13300,
    goal: 20000,
    image: "/images/about-two-img-2.jpg",
    likes: 201,
  },
  {
    tag: "Plantation",
    daysLeft: 29,
    title: "Urban Mini-Forest Program",
    desc: "Velit esse cillum dolore eu fugiat nulla pariatur excepteur.",
    raised: 7250,
    goal: 15000,
    image: "/images/about-two-img-1.jpg",
    likes: 145,
  },
  {
    tag: "Animal",
    daysLeft: 29,
    title: "Community Vet Camps 2025",
    desc: "Mollit anim id est laborum proident sunt in culpa officia.",
    raised: 9100,
    goal: 17000,
    image: "/images/about-two-img-3.jpg",
    likes: 188,
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 80 },
  show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: "easeOut" } },
};

const easeSmooth = [0.22, 1, 0.36, 1];

/* Responsive */
function usePerPage() {
  const [perPage, setPerPage] = useState(
    typeof window !== "undefined" && window.innerWidth < 768 ? 1 : 3
  );
  useEffect(() => {
    function onResize() {
      setPerPage(window.innerWidth < 768 ? 1 : 3);
    }
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);
  return perPage;
}

/* Progress bar */
function Progress({ value }) {
  return (
    <div className="mt-2 h-1.5 w-full rounded-full bg-white/30">
      <motion.div
        className="h-1.5 rounded-full"
        style={{ backgroundColor: "#FF9933" }}
        initial={{ width: 0 }}
        animate={{ width: `${value}%` }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      />
    </div>
  );
}

function Card({ item, active, onHover, onLeave }) {
  const percent = Math.min(100, Math.round((item.raised / item.goal) * 100));
  return (
    <motion.article
      variants={fadeUp}
      className="group relative flex h-full flex-col overflow-hidden rounded-2xl bg-white"
      style={{ boxShadow: "0 12px 30px rgba(0,0,0,0.06)" }}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
    >
      {/* Image */}
      <div className="relative h-60 w-full overflow-hidden rounded-2xl">
        <motion.img
          src={item.image}
          alt={item.title}
          className="h-full w-full object-cover"
          initial={{ scale: 1.05 }}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        />
        <span
          className="absolute left-4 top-4 rounded-full px-3 py-1 text-xs font-semibold text-white/95"
          style={{ backgroundColor: "rgba(0,0,0,0.45)" }}
        >
          {item.tag}
        </span>
      </div>
      <div className="p-5 text-[#000080]">
        <div
          className="mb-3 inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs"
          style={{ backgroundColor: "rgba(0,0,128,0.06)" }}
        >
          <Calendar size={14} /> <span>{item.daysLeft} Days Left</span>
        </div>
        <h3 className="mb-2 text-lg font-extrabold">{item.title}</h3>
        <p className="mb-4 text-sm opacity-80">{item.desc}</p>
      </div>
      <div className="relative mx-4 mb-4 mt-auto">
        <div className="h-[180px]" />

        <motion.div
          className="absolute inset-0 rounded-xl p-4"
          style={{
            backgroundColor: "rgba(0,0,128,0.04)",
            boxShadow: "inset 0 0 0 1px rgba(0,0,128,0.08)",
            color: "#000080",
          }}
          animate={{ opacity: active ? 0 : 1, y: active ? 10 : 0 }}
          transition={{ duration: 0.3, ease: easeSmooth }}
        >
          <div className="flex items-center justify-between text-sm">
            <span className="font-semibold">Donation Complete</span>
            <span className="font-semibold">{Math.max(percent, 1)}%</span>
          </div>
          <div className="mt-2 h-1.5 w-full rounded-full bg-[rgba(0,0,128,0.15)]">
            <div
              className="h-1.5 rounded-full"
              style={{ width: `${percent}%`, backgroundColor: "#138808" }}
            />
          </div>
          <div className="mt-3 grid grid-cols-2 gap-3 text-xs opacity-95">
            <div>
              Raised:{" "}
              <span className="font-semibold">
                ${item.raised.toLocaleString()}
              </span>
            </div>
            <div className="text-right">
              Goal:{" "}
              <span className="font-semibold">
                ${item.goal.toLocaleString()}
              </span>
            </div>
          </div>
          <div className="mt-4 flex items-center justify-between">
            <button
              className="inline-flex items-center gap-3 rounded-full xl:px-5 xl:py-3 text-sm font-semibold"
              style={{
                backgroundColor: "#FF9933",
                color: "#000080",
                boxShadow: "0 10px 24px rgba(255,153,51,0.25)",
              }}
            >
              Donate Now
              <span
                className="grid h-8 w-8 place-items-center rounded-full"
                style={{ backgroundColor: "rgba(0,0,128,0.08)" }}
              >
                <ArrowRight size={16} />
              </span>
            </button>
            <button
              className="inline-flex items-center gap-2 rounded-full px-3 py-2 text-xs"
              style={{
                backgroundColor: "rgba(0,0,128,0.06)",
                boxShadow: "0 0 0 1px rgba(0,0,128,0.12)",
              }}
            >
              <Heart size={14} color="#000080" /> {item.likes}
            </button>
          </div>
        </motion.div>

        <motion.div
          className="absolute inset-0 rounded-xl p-4 text-white"
          style={{ backgroundColor: "#138808" }}
          animate={{ opacity: active ? 1 : 0, y: active ? 0 : 10 }}
          transition={{ duration: 0.3, ease: easeSmooth }}
        >
          <div className="flex items-center justify-between text-sm">
            <span className="font-semibold">Donation Complete</span>
            <span className="font-semibold">{Math.max(percent, 1)}%</span>
          </div>
          <Progress value={percent} />
          <div className="mt-3 grid grid-cols-2 gap-3 text-xs opacity-95">
            <div>
              Raised:{" "}
              <span className="font-semibold text-white">
                ${item.raised.toLocaleString()}
              </span>
            </div>
            <div className="text-right">
              Goal:{" "}
              <span className="font-semibold text-white">
                ${item.goal.toLocaleString()}
              </span>
            </div>
          </div>
          <div className="mt-4 flex items-center gap-2 justify-between">
            <button
              className="inline-flex items-center xl:gap-3 rounded-full  xl:px-5 xl:py-3 text-sm font-semibold"
              style={{
                backgroundColor: "#FF9933",
                color: "#000080",
                boxShadow: "0 10px 24px rgba(255,153,51,0.25)",
              }}
            >
              Donate Now
              <span
                className="grid h-8 w-8 place-items-center rounded-full"
                style={{ backgroundColor: "rgba(255,255,255,0.25)" }}
              >
                <ArrowRight size={16} />
              </span>
            </button>
            <button
              className="inline-flex items-center gap-2 rounded-full px-3 py-2 text-xs text-white"
              style={{
                backgroundColor: "rgba(255,255,255,0.15)",
                boxShadow: "0 0 0 1px rgba(255,255,255,0.3)",
              }}
            >
              <Heart size={14} /> {item.likes}
            </button>
          </div>
        </motion.div>
      </div>
    </motion.article>
  );
}

/* ------------------- Carousel ------------------- */
export default function ServiceCampaignsCarousel({
  items = DATA,
  title = "Your Gift For a Greener Tomorrow",
  kicker = "Our Camping",
  autoPlayMs = 6000,
}) {
  const perPage = usePerPage();

  const slides = useMemo(() => {
    const out = [];
    const len = items.length;
    if (len === 0) return [];
    const count = Math.ceil(len / perPage);
    for (let s = 0; s < count; s++) {
      const page = [];
      for (let i = 0; i < perPage; i++) {
        page.push(items[(s * perPage + i) % len]);
      }
      out.push(page);
    }
    return out;
  }, [items, perPage]);

  const [page, setPage] = useState(0);
  const [hovering, setHovering] = useState(false);

  const centerOffset = perPage === 1 ? 0 : 1;
  const [activeIndex, setActiveIndex] = useState(centerOffset);

  useEffect(() => {
    setActiveIndex(page * perPage + centerOffset);
  }, [page, perPage, centerOffset]);

  useEffect(() => {
    if (hovering) return;
    const id = setInterval(() => {
      setPage((p) => (p + 1) % slides.length);
    }, autoPlayMs);
    return () => clearInterval(id);
  }, [hovering, autoPlayMs, slides.length]);

  const goLeft = () => setPage((p) => (p - 1 + slides.length) % slides.length);
  const goRight = () => setPage((p) => (p + 1) % slides.length);

  return (
    <section
      className="relative w-full bg-[#F6F7F2] py-14 font-serif"
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.35 }}
          className="mb-8 text-center"
        >
          <div className="mb-2 inline-flex items-center gap-2">
            <Leaf size={18} color="#138808" />
            <span className="text-sm" style={{ color: "#138808" }}>
              {kicker}
            </span>
          </div>
          <h2 className="text-4xl font-extrabold text-[#000080] md:text-5xl">
            {title}
          </h2>
        </motion.div>
        {/* Arrows */}
        <button
          onClick={goLeft}
          aria-label="Previous"
          className="absolute left-4 top-1/2 z-10 -translate-y-1/2 rounded-full p-3"
          style={{
            backgroundColor: "#FFFFFF",
            boxShadow: "0 6px 20px rgba(0,0,0,0.15)",
          }}
        >
          <ChevronLeft color="#000080" />
        </button>
        <button
          onClick={goRight}
          aria-label="Next"
          className="absolute right-4 top-1/2 z-10 -translate-y-1/2 rounded-full p-3"
          style={{
            backgroundColor: "#FFFFFF",
            boxShadow: "0 6px 20px rgba(0,0,0,0.15)",
          }}
        >
          <ChevronRight color="#000080" />
        </button>
        {/* Viewport */}
        <div className="overflow-hidden">
          <motion.div
            className="flex"
            animate={{ x: `0%` }}
            transition={{ duration: 0.7, ease: easeSmooth }}
            style={{ width: `100%` }}
          >
            <div
              className={`grid w-full gap-6 px-1 ${
                perPage === 1 ? "grid-cols-1" : "md:grid-cols-3"
              }`}
            >
              {slides.length > 0 &&
                slides[page].map((item, i) => {
                  const globalIdx = page * perPage + i;
                  const isActive = globalIdx === activeIndex;
                  return (
                    <Card
                      key={`${page}-${i}-${item.title}`}
                      item={item}
                      active={isActive}
                      onHover={() => setActiveIndex(globalIdx)}
                      onLeave={() =>
                        setActiveIndex(page * perPage + centerOffset)
                      }
                    />
                  );
                })}
            </div>
          </motion.div>
        </div>
        {/* Dots */}
        <div className="mt-6 flex items-center justify-center gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setPage(i)}
              className="h-2 w-2 rounded-full"
              style={{
                backgroundColor: i === page ? "#138808" : "rgba(0,0,128,0.25)",
              }}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
