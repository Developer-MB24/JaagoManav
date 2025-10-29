import { CalendarDays, User2, MessageCircle, ArrowRight } from "lucide-react";

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
      {/* Image */}
      <div className="relative h-64">
        <img
          src={p.img}
          alt={p.title}
          className="absolute inset-0 w-full h-full object-cover transition duration-500 group-hover:scale-[1.04]"
        />
        {/* date */}
        <div className="absolute top-4 left-4 inline-flex items-center gap-2 rounded-full bg-white/90 px-3 py-1 text-[12px] font-medium">
          <CalendarDays className="w-4 h-4 text-orange-500" />
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
        {/* meta */}
        <div className="mb-3 flex items-center gap-6 text-[13px]">
          <span className="inline-flex items-center gap-2 text-emerald-600">
            <User2 className="w-4 h-4" /> {p.author}
          </span>
          <span className="inline-flex items-center gap-2 text-orange-500">
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

        <button className="mt-4 inline-flex items-center gap-2 text-emerald-700 font-semibold hover:text-orange-600 transition">
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
        {/* Heading */}
        <div className="text-center mb-10">
          <p className="uppercase tracking-widest text-orange-500 font-semibold text-sm">
            News and Blogs
          </p>
          <h2 className="text-4xl font-extrabold text-[#0c3b33]">
            We Articles From Blog
            <br />
            <span className="text-orange-500">News and Story</span>
          </h2>
        </div>

        {/* Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {POSTS.map((p, i) => (
            <PostCard key={p.title} p={p} idx={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
