import { motion } from "framer-motion";
import {
  CalendarDays,
  User2,
  MessageCircle,
  ArrowRight,
  Plus,
} from "lucide-react";

const POSTS = [
  {
    title: "Education For Poor Children Is A Must",
    date: "03 Aug 2025",
    author: "Admin",
    comments: 0,
    img: "/images/about-two-img-3.jpg",
  },
  {
    title: "Help This People in Needleo Blog.",
    date: "03 Aug 2025",
    author: "Admin",
    comments: 2,
    img: "/images/about-two-img-1.jpg",
  },
  {
    title: "Caring for the Elderly and Vulnerable Strategy",
    date: "03 Aug 2025",
    author: "Admin",
    comments: 4,
    img: "/images/about-two-img-2.jpg",
  },
];

const JAGGED_MASK = encodeURIComponent(`
<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 18' preserveAspectRatio='none'>
  <path d='M0,18 L0,8 C4,12 8,9 12,12 C16,15 19,9 23,12
           C27,15 31,9 35,12 C39,15 43,9 47,12
           C51,15 55,9 59,12 C63,15 67,9 71,12
           C75,15 79,9 83,12 C87,15 92,11 96,12 L100,13 L100,18 Z' fill='white'/>
</svg>
`);

function PostCard({ p, idx }) {
  const accent =
    idx === 0
      ? "from-emerald-600 to-emerald-500"
      : idx === 1
      ? "from-amber-500 to-orange-500"
      : "from-teal-500 to-emerald-500";

  return (
    <article className="group rounded-2xl bg-white shadow-[0_18px_50px_-18px_rgba(0,0,0,0.18)] overflow-hidden transition">
      <div className="relative h-64">
        <img
          src={p.img}
          alt={p.title}
          className="absolute inset-0 w-full h-full object-cover transition duration-500 group-hover:scale-[1.03] group-hover:blur-sm"
        />

        <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <button
            type="button"
            className="pointer-events-auto inline-flex h-12 w-12 items-center justify-center rounded-full bg-white/90 text-[#138808] shadow-md hover:bg-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500"
            aria-label="Open"
          >
            <Plus className="h-6 w-6" />
          </button>
        </div>

        <div className="absolute top-4 left-4 inline-flex items-center gap-2 rounded-full bg-white/90 px-3 py-1 text-[12px] font-medium">
          <CalendarDays className="w-4 h-4 text-[#FF9933]" />
          <span className="text-gray-700">{p.date}</span>
        </div>

        <div
          className={`absolute inset-x-0 bottom-0 h-10 bg-gradient-to-r ${accent}`}
          style={{
            WebkitMaskImage: `url("data:image/svg+xml,${JAGGED_MASK}")`,
            maskImage: `url("data:image/svg+xml,${JAGGED_MASK}")`,
            WebkitMaskSize: "100% 100%",
            maskSize: "100% 100%",
            WebkitMaskRepeat: "no-repeat",
            maskRepeat: "no-repeat",
          }}
        />
      </div>

      {/* Content */}
      <div className="px-6 pt-5 pb-6">
        <div className="mb-3 flex items-center gap-6 text-[13px]">
          <span className="inline-flex items-center gap-2 text-[#138808]">
            <User2 className="w-4 h-4" /> {p.author}
          </span>
          <span className="inline-flex items-center gap-2 text-[#FF9933]">
            <MessageCircle className="w-4 h-4" /> Comment
          </span>
        </div>

        <h3 className="text-lg font-extrabold text-gray-900 leading-snug">
          {p.title}
        </h3>

        <p className="mt-2 text-[14px] leading-relaxed text-gray-500">
          We poor standard chunk nibh velit majority suffered alteration in some
          form aliquet sollicitudin.
        </p>

        <button className="mt-4 inline-flex items-center gap-2 text-[#138808] font-semibold hover:text-orange-600 transition">
          Read More <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </article>
  );
}

export default function BlogNewsSection() {
  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-10">
          {/* italic orange label + gliding underline */}
          <div className="uppercase tracking-widest text-[#FF9933] font-semibold text-sm font-caveat inline-block">
            <span className="relative inline-block font-caveat">
              News and Blogs
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

          {/* Split H2 into two animated blocks: top→down then bottom→up */}
          <h2 className="mt-3 text-4xl font-nunito font-extrabold text-[#138808] leading-tight">
            <motion.span
              className="block"
              initial={{ y: -40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              We Articles From Blog
            </motion.span>
            <motion.span
              className="block"
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.12 }}
            >
              <span className="text-[#FF9933]">News and Story</span>
            </motion.span>
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {POSTS.map((p, i) => (
            <PostCard key={p.title} p={p} idx={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
