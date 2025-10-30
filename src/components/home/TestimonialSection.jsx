import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";

const items = [
  {
    name: "Adam Smith",
    role: "Manager",
    avatar: "/images/about-two-img-3.jpg",
    quote:
      "Lorem ipsum dolor sit amet,elit, sed do eiusmod tempor incididunt ut labore et dolore aliqua.",
  },
  {
    name: "Karom Boros",
    role: "Founder",
    avatar: "/images/about-two-img-1.jpg",
    quote:
      "Lorem ipsum dolor sit amet,elit, sed do eiusmod tempor incididunt ut labore et dolore aliqua.",
  },
  {
    name: "Haruy Giyan",
    role: "Customer",
    avatar: "/images/about-two-img-2.jpg",
    quote:
      "Lorem ipsum dolor sit amet,elit, sed do eiusmod tempor incididunt ut labore et dolore aliqua.",
  },
  {
    name: "Adam Smith",
    role: "Manager",
    avatar: "/images/about-two-img-3.jpg",
    quote:
      "Lorem ipsum dolor sit amet,elit, sed do eiusmod tempor incididunt ut labore et dolore aliqua.",
  },
  {
    name: "Karom Boros",
    role: "Founder",
    avatar: "/images/about-two-img-1.jpg",
    quote:
      "Lorem ipsum dolor sit amet,elit, sed do eiusmod tempor incididunt ut labore et dolore aliqua.",
  },
  {
    name: "Haruy Giyan",
    role: "Customer",
    avatar: "/images/about-two-img-2.jpg",
    quote:
      "Lorem ipsum dolor sit amet,elit, sed do eiusmod tempor incididunt ut labore et dolore aliqua.",
  },
];

const Stars = () => (
  <div className="flex items-center justify-center gap-1 text-amber-400">
    {Array.from({ length: 5 }).map((_, i) => (
      <Star key={i} className="w-4 h-4 fill-current" />
    ))}
  </div>
);

function Card({ it }) {
  return (
    <div className="shrink-0 basis-full md:basis-1/2 xl:basis-1/3 px-3">
      <motion.article
        initial={{ opacity: 0, y: 30, scale: 0.98 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="relative rounded-2xl bg-white shadow-[0_20px_60px_-20px_rgba(0,0,0,0.25)]"
      >
        <div className="px-10 pt-12 pb-10 text-center">
          <div className="relative mx-auto mb-5 w-16 h-16">
            <img
              src={it.avatar}
              alt={it.name}
              className="w-16 h-16 rounded-full object-cover ring-4 ring-white shadow"
            />
            <div className="absolute -right-2 -bottom-2 grid place-items-center w-8 h-8 rounded-full bg-teal-500 text-white shadow">
              <Quote className="w-4 h-4" />
            </div>
          </div>

          <p className="text-[15px] leading-relaxed text-gray-600">
            {it.quote}
          </p>

          <div className="mt-5">
            <Stars />
          </div>

          <h4 className="mt-6 text-lg font-extrabold text-gray-900">
            {it.name}
          </h4>
          <div className="text-gray-500 text-sm">{it.role}</div>
        </div>

        <div className="absolute inset-y-0 left-0 w-2 rounded-l-2xl bg-gradient-to-b from-orange-400 to-transparent" />
      </motion.article>
    </div>
  );
}

export default function TestimonialSection({
  bgImage = "/images/charity-bg-wide.jpg",
}) {
  const [emblaRef, embla] = useEmblaCarousel({ align: "center", loop: true });
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);

  const onSelect = useCallback(() => {
    if (!embla) return;
    setCanPrev(embla.canScrollPrev());
    setCanNext(embla.canScrollNext());
  }, [embla]);

  useEffect(() => {
    if (!embla) return;
    onSelect();
    embla.on("select", onSelect);
  }, [embla, onSelect]);

  return (
    <section className="relative py-20">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-[52%]"
        style={{
          backgroundImage: `linear-gradient(rgba(249,115,22,.86), rgba(249,115,22,.86)), url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          WebkitMaskImage:
            "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 300' preserveAspectRatio='none'><path d='M0,40 C250,110 540,150 720,150 C900,150 1190,110 1440,40 L1440,0 L0,0 Z' fill='black'/></svg>\")",
          WebkitMaskRepeat: "no-repeat",
          WebkitMaskSize: "100% 100%",
          maskImage:
            "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 300' preserveAspectRatio='none'><path d='M0,40 C250,110 540,150 720,150 C900,150 1190,110 1440,40 L1440,0 L0,0 Z' fill='black'/></svg>\")",
          maskRepeat: "no-repeat",
          maskSize: "100% 100%",
        }}
      />
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-[52%] rotate-180"
        style={{
          backgroundImage: `linear-gradient(rgba(249,115,22,.86), rgba(249,115,22,.86)), url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          WebkitMaskImage:
            "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 300' preserveAspectRatio='none'><path d='M0,40 C250,110 540,150 720,150 C900,150 1190,110 1440,40 L1440,0 L0,0 Z' fill='black'/></svg>\")",
          WebkitMaskRepeat: "no-repeat",
          WebkitMaskSize: "100% 100%",
          maskImage:
            "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 300' preserveAspectRatio='none'><path d='M0,40 C250,110 540,150 720,150 C900,150 1190,110 1440,40 L1440,0 L0,0 Z' fill='black'/></svg>\")",
          maskRepeat: "no-repeat",
          maskSize: "100% 100%",
        }}
      />

      <div className="relative max-w-6xl mx-auto px-4">
        {/* Heading */}
        <div className="text-center  mb-10">
          <p className="uppercase tracking-widest text-white font-semibold text-sm">
            Our Testimonials
          </p>
          <h2 className=" mb-36 sm:text-4xl font-extrabold text-gray-900">
            Our Impact in <span className="text-gray-900">Their Words</span>
          </h2>
        </div>

        <div className="relative">
          {/* Arrows */}
          <button
            onClick={() => embla && embla.scrollPrev()}
            disabled={!canPrev}
            className="absolute -left-4 md:-left-10 top-1/2 -translate-y-1/2 z-10 grid place-items-center w-10 h-10 rounded-full bg-orange-500 text-white shadow disabled:opacity-40"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={() => embla && embla.scrollNext()}
            disabled={!canNext}
            className="absolute -right-4 md:-right-10 top-1/2 -translate-y-1/2 z-10 grid place-items-center w-10 h-10 rounded-full bg-orange-500 text-white shadow disabled:opacity-40"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex -mx-3">
              {items.map((it, i) => (
                <Card key={i} it={it} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
