import { motion } from "framer-motion";
import { CalendarDays, MapPin, ArrowRight } from "lucide-react";

const events = [
  {
    title: "Provides Them Poor",
    date: "03 Sep 2025",
    city: "African city",
    img: "/images/about-two-img-1.jpg",
    gradient: { from: "#ff7a6a", to: "#ff9f6a" },
  },
  {
    title: "Donation Drive",
    date: "03 Sep 2025",
    city: "African city",
    img: "/images/about-two-img-2.jpg",
    gradient: { from: "#ffd95e", to: "#f4b500" },
  },
  {
    title: "Event Of Shares",
    date: "03 Sep 2025",
    city: "African city",
    img: "/images/about-two-img-3.jpg",
    gradient: { from: "#58e0c0", to: "#12b886" },
  },
];

const jaggedMask = encodeURIComponent(`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 28" preserveAspectRatio="none">
  <defs>
    <linearGradient id="g" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="white"/>
      <stop offset="1" stop-color="white"/>
    </linearGradient>
  </defs>
  <!-- white below, jagged on top -->
  <path d="M0,28 L0,14 
           C5,17 7,10 11,12 
           C14,14 16,8 20,10 
           C23,12 25,6 28,9 
           C32,13 35,5 38,8 
           C41,11 44,5 47,9
           C50,13 54,6 57,12
           C60,18 64,9 67,13
           C70,17 73,10 76,14
           C80,19 83,11 86,13
           C90,16 93,12 96,14
           L100,16 L100,28 Z" fill="url(#g)"/>
</svg>
`);

const container = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { staggerChildren: 0.15, duration: 0.6, ease: "easeOut" },
  },
};

const item = {
  hidden: { opacity: 0, y: 35 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

function EventCard({ ev }) {
  return (
    <motion.article
      variants={item}
      className="group relative rounded-[22px] overflow-hidden shadow-lg bg-white"
    >
      <div className="relative h-[420px]">
        <img
          src={ev.img}
          alt={ev.title}
          className="absolute inset-0 w-full h-full object-cover transition duration-500 group-hover:scale-[1.03] group-hover:blur-[1.2px]"
        />

        <div className="absolute inset-0 bg-black/0 transition duration-500 group-hover:bg-black/35" />

        <button
          aria-label="Open event"
          className="absolute top-4 right-4 grid place-items-center w-11 h-11 rounded-full bg-amber-400 text-white shadow-md opacity-0 -translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0"
        >
          <ArrowRight className="w-5 h-5" />
        </button>

        <div
          className="absolute left-0 right-0 bottom-0 h-36 px-5 pb-5 pt-6 text-white"
          style={{
            background: `linear-gradient(0deg, ${ev.gradient.to} 0%, ${ev.gradient.from} 100%)`,
            WebkitMaskImage: `url("data:image/svg+xml,${jaggedMask}")`,
            maskImage: `url("data:image/svg+xml,${jaggedMask}")`,
            WebkitMaskSize: "100% 100%",
            maskSize: "100% 100%",
            WebkitMaskRepeat: "no-repeat",
            maskRepeat: "no-repeat",
          }}
        >
          <div className="flex items-center gap-5 text-[13px] mt-14 opacity-95">
            <span className="inline-flex items-center gap-1.5">
              <CalendarDays className="w-4 h-4" />
              {ev.date}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <MapPin className="w-4 h-4" />
              {ev.city}
            </span>
          </div>
          <h3 className="text-xl font-extrabold mt-3 drop-shadow-sm">
            {ev.title}
          </h3>
        </div>
      </div>
    </motion.article>
  );
}

export default function EventsSection() {
  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-10">
          <p className="uppercase tracking-widest text-orange-500 font-semibold text-sm">
            Our Events
          </p>
          <h2 className="text-4xl font-extrabold text-gray-900">
            Our Best Popular <span className="text-orange-500">Upcoming</span>
            <br /> Events.
          </h2>
        </div>

        {/* Cards */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="grid gap-7 md:grid-cols-2 lg:grid-cols-3"
        >
          {events.map((ev) => (
            <EventCard key={ev.title} ev={ev} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
