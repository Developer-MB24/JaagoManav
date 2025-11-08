import React, { useRef } from "react";
import { motion } from "framer-motion";

const TESTIMONIALS = [
  {
    id: 1,
    name: "Karom boros",
    role: "Founder",
    img: "/images/about-two-img-3.jpg",
    text: "Lorem ipsum dolor sit amet, elit, sed do eiusmod tempor incididunt ut labore et dolore aliqua.",
    color: "from-orange-400 to-orange-600",
    bar: "bg-orange-500",
  },
  {
    id: 2,
    name: "Haruy Giyan",
    role: "Customer",
    img: "/images/about-two-img-1.jpg",
    text: "Lorem ipsum dolor sit amet, elit, sed do eiusmod tempor incididunt ut labore et dolore aliqua.",
    color: "bg-[#138808]",
    bar: "bg-[#138808]",
  },
  {
    id: 3,
    name: "Saima Byuk",
    role: "Founder",
    img: "/images/about-two-img-2.jpg",
    text: "Lorem ipsum dolor sit amet, elit, sed do eiusmod tempor incididunt ut labore et dolore aliqua.",
    color: "from-fuchsia-600 to-fuchsia-500",
    bar: "bg-fuchsia-600",
  },
  {
    id: 4,
    name: "Susan Paul",
    role: "Volunter",
    img: "/images/about-two-img-3.jpg",
    text: "Lorem ipsum dolor sit amet, elit, sed do eiusmod tempor incididunt ut labore et dolore aliqua.",
    color: "from-violet-600 to-violet-500",
    bar: "bg-violet-600",
  },
  {
    id: 5,
    name: "Adam Smith",
    role: "Manager",
    img: "/images/about-two-img-2.jpg",
    text: "Lorem ipsum dolor sit amet, elit, sed do eiusmod tempor incididunt ut labore et dolore aliqua.",
    color: "from-teal-500 to-teal-400",
    bar: "bg-teal-500",
  },
];

const Star = () => (
  <svg aria-hidden="true" viewBox="0 0 20 20" className="h-4 w-4 fill-current">
    <path d="M10 .8l2.6 5.3 5.8.8-4.2 4.1 1 5.8L10 14.9l-5.2 2.9 1-5.8L1.6 6.9l5.8-.8L10 .8z" />
  </svg>
);

const QuoteIcon = () => (
  <svg viewBox="0 0 24 24" className="h-4 w-4 fill-white" aria-hidden="true">
    <path d="M7.2 11.2c1.1 0 2 .9 2 2 0 1.8-1.5 3.3-3.3 3.3-2 0-3.5-1.5-3.5-3.3 0-3.7 2.4-6.9 6-8.1l.6 1.8c-2 .7-3.3 2.2-3.6 4.1.6-.4 1.2-.6 1.8-.6zm10 0c1.1 0 2 .9 2 2 0 1.8-1.5 3.3-3.3 3.3-2 0-3.5-1.5-3.5-3.3 0-3.7 2.4-6.9 6-8.1l.6 1.8c-2 .7-3.3 2.2-3.6 4.1.6-.4 1.2-.6 1.8-.6z" />
  </svg>
);

export default function TestimonialSection() {
  const trackRef = useRef(null);

  const scrollByCard = (dir = 1) => {
    const el = trackRef.current;
    if (!el) return;
    const card = el.querySelector(".ts-card");
    const gap =
      parseInt(getComputedStyle(el).columnGap || "0", 10) ||
      parseInt(getComputedStyle(el).gap || "0", 10) ||
      16;
    const amount = card ? card.getBoundingClientRect().width + gap : 360;
    el.scrollBy({ left: dir * amount, behavior: "smooth" });
  };

  return (
    <>
      {/* Title - outside above the curve */}
      <div
        className="relative z-[999] text-center pt-20 mb-8 md:mb-12 bg-transparent"
        style={{ fontFamily: "Georgia, serif" }}
      >
        {/* italic orange label with oscillating underline */}
        <p className="label-osc mx-auto inline-block italic text-[#f27b21] text-sm tracking-wide">
          <span>Our testimonials</span>
        </p>

        {/* Split h2 with top→down and bottom→up reveals */}
        <motion.h2
          className="mt-3 text-4xl font-extrabold text-[#138808] leading-tight"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          style={{ fontFamily: "Georgia, serif" }}
        >
          <motion.span
            className="block"
            initial={{ y: -40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            Our Impact in Their <span className="text-[#FF9933]">Words</span>
          </motion.span>
          <motion.span
            className="block"
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.14 }}
          >
            Events.
          </motion.span>
        </motion.h2>
      </div>

      <section
        className="relative overflow-hidden isolate pt-0 md:pt-0 pb-28 md:pb-32"
        style={{ fontFamily: "Georgia, serif" }}
      >
        <div
          className="absolute inset-0 -z-30 bg-center bg-cover"
          style={{ backgroundImage: "url('/images/about-two-img-2.jpg')" }}
        />
        <div className="absolute inset-0 -z-20 bg-[#f27b21] opacity-50" />

        {/* Top and bottom white curve masks */}
        <svg
          className="absolute top-0 left-0 w-full h-[30px] -z-10"
          viewBox="0 0 1440 220"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path
            d="M0,0 L1440,0 L1440,120
               C1200,160 900,190 720,190
               C520,190 280,160 0,120 Z"
            fill="url(#topGrad)"
            opacity="0.95"
          />
          <defs>
            <linearGradient id="topGrad" x1="0" x2="1" y1="0" y2="1">
              <stop offset="0%" stopColor="#fff" />
              <stop offset="100%" stopColor="#fff" />
            </linearGradient>
          </defs>
        </svg>
        <svg
          className="absolute bottom-0 left-0 w-full h-[220px] -z-10 rotate-180"
          viewBox="0 0 1440 220"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path
            d="M0,0 L1440,0 L1440,120
               C1200,160 900,190 720,190
               C520,190 280,160 0,120 Z"
            fill="url(#botGrad)"
            opacity="0.95"
          />
          <defs>
            <linearGradient id="botGrad" x1="0" x2="1" y1="0" y2="1">
              <stop offset="0%" stopColor="#fff" />
              <stop offset="100%" stopColor="#fff" />
            </linearGradient>
          </defs>
        </svg>

        <div className="container mx-auto px-4">
          <div className="relative z-10">
            <div
              ref={trackRef}
              className="
                flex gap-6 overflow-x-auto snap-x snap-mandatory pb-2
                [scrollbar-width:none] [-ms-overflow-style:none]
                max-w-[1200px] mx-auto
              "
              style={{ scrollBehavior: "smooth" }}
            >
              <style>{`.ts-card::-webkit-scrollbar{display:none}`}</style>
              {TESTIMONIALS.map((t) => (
                <article
                  key={t.id}
                  className="
                    ts-card group relative shrink-0 snap-start
                    w-[88%] sm:w-[70%] md:w-[48%]
                    lg:basis-1/3 lg:w-1/3
                    rounded-2xl bg-white text-center shadow
                    px-8 py-12
                  "
                >
                  <div
                    className={`pointer-events-none absolute inset-x-0 bottom-0 h-1 origin-center scale-x-0 transform transition-transform duration-300 group-hover:scale-x-100 ${t.bar}`}
                  />
                  <div className="relative inline-block">
                    <img
                      src={t.img}
                      alt={t.name}
                      className="h-24 w-24 rounded-full object-cover"
                    />
                    <span
                      className={`absolute right-[-10px] top-1/2 -translate-y-1/2 inline-flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br ${t.color} text-white shadow`}
                    >
                      <QuoteIcon />
                    </span>
                  </div>
                  <p className="mt-6 text-[16px] italic leading-relaxed text-gray-700">
                    {t.text}
                  </p>
                  <div className="mt-3 mb-6 flex items-center justify-center gap-1 text-orange-500">
                    <Star />
                    <Star />
                    <Star />
                    <Star />
                    <Star />
                  </div>
                  <div>
                    <h4 className="text-[22px] font-extrabold leading-7 capitalize text-[#0e3a2b]">
                      <a
                        href="/testimonials.html"
                        className="transition-colors hover:text-orange-600"
                      >
                        {t.name}
                      </a>
                    </h4>
                    <span className="text-sm text-gray-500">{t.role}</span>
                  </div>
                </article>
              ))}
            </div>

            {/* Prev/Next arrows */}
            <div className="pointer-events-none absolute inset-y-0 left-0 right-0 flex items-center justify-between z-20">
              <button
                type="button"
                aria-label="Previous"
                onClick={() => scrollByCard(-1)}
                className="pointer-events-auto -ml-3 md:-ml-6 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-[#f27b21] to-[#f27b21] text-white shadow transition hover:from-black hover:to-black"
              >
                <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current">
                  <path d="M15.41 7.41 14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
                </svg>
              </button>
              <button
                type="button"
                aria-label="Next"
                onClick={() => scrollByCard(1)}
                className="pointer-events-auto -mr-3 md:-mr-6 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-[#f27b21] to-[#f27b21] text-white shadow transition hover:from-black hover:to-black"
              >
                <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current">
                  <path d="m10 6-1.41 1.41L13.17 12l-4.58 4.59L10 18l6-6z" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* CSS for label underline animation */}
        <style>{`
          .label-osc{
            position: relative;
            padding-bottom: 10px; /* space for underline */
          }
          .label-osc::after{
            /* faint full baseline */
            content:"";
            position:absolute;
            left:0; right:0; bottom:3px;
            height:1px;
            background: rgba(242, 123, 33, 0.25); /* #f27b21 with alpha */
          }
          .label-osc::before{
            /* gliding underline segment */
            content:"";
            position:absolute;
            bottom:3px;
            height:2px;
            width:42%;
            background:#f27b21;
            border-radius:9999px;
            animation: glide-x 2.6s ease-in-out infinite;
          }
          @keyframes glide-x{
            0%   { left:0%; }
            50%  { left:58%; }
            100% { left:0%; }
          }

          /* Motion safety */
          @media (prefers-reduced-motion: reduce) {
            .label-osc::before { animation: none !important; }
          }
        `}</style>
      </section>
    </>
  );
}
