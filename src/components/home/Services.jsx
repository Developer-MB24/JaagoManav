import React, { useCallback, useEffect, useRef, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { motion } from "framer-motion";
import {
  GraduationCap,
  Stethoscope,
  Droplets,
  HeartHandshake,
} from "lucide-react";

const services = [
  {
    title: "Child Education Help",
    desc: "With schools closed in Nsw and Victoria, and childcare.",
    cta: "Read More",
    image: "/images/1 - 300x250px.jpg",
    badge: { from: "#FF9933", to: "#FF9933", Icon: GraduationCap },
    arrowColor: "#FF9933",
  },
  {
    title: "Medicine For Africans",
    desc: "With schools closed in Nsw and Victoria, and childcare.",
    cta: "Read More",
    image: "/images/2 - 300x250px.jpg",
    badge: { from: " #000080", to: " #000080", Icon: Stethoscope },
    arrowColor: "text-violet-500",
  },
  {
    title: "Water & Health Food",
    desc: "With schools closed in Nsw and Victoria, and childcare.",
    cta: "Read More",
    image: "/images/3 - 300x250px.png",
    badge: { from: "#138808", to: "#138808", Icon: Droplets },
    arrowColor: "text-rose-500",
  },
  {
    title: "Cancer Help Fund",
    desc: "With schools closed in Nsw and Victoria, and childcare.",
    cta: "Read More",
    image: "/images/4 - 300x250px.jpg",
    badge: { from: "#ffdf6e", to: "#f59e0b", Icon: HeartHandshake },
    arrowColor: "text-amber-500",
  },
  {
    title: "Child Education Help",
    desc: "With schools closed in Nsw and Victoria, and childcare.",
    cta: "Read More",
    image: "/images/1 - 300x250px.jpg",
    badge: { from: "#FF9933", to: "#FF9933", Icon: GraduationCap },
    arrowColor: "#FF9933",
  },
  {
    title: "Medicine For Africans",
    desc: "With schools closed in Nsw and Victoria, and childcare.",
    cta: "Read More",
    image: "/images/2 - 300x250px.jpg",
    badge: { from: " #000080", to: " #000080", Icon: Stethoscope },
    arrowColor: "text-violet-500",
  },
  {
    title: "Water & Health Food",
    desc: "With schools closed in Nsw and Victoria, and childcare.",
    cta: "Read More",
    image: "/images/3 - 300x250px.png",
    badge: { from: "#138808", to: "#138808", Icon: Droplets },
    arrowColor: "text-rose-500",
  },
  {
    title: "Cancer Help Fund",
    desc: "With schools closed in Nsw and Victoria, and childcare.",
    cta: "Read More",
    image: "/images/4 - 300x250px.jpg",
    badge: { from: "#ffdf6e", to: "#f59e0b", Icon: HeartHandshake },
    arrowColor: "text-amber-500",
  },
  {
    title: "Child Education Help",
    desc: "With schools closed in Nsw and Victoria, and childcare.",
    cta: "Read More",
    image: "/images/1 - 300x250px.jpg",
    badge: { from: "#FF9933", to: "#FF9933", Icon: GraduationCap },
    arrowColor: "#FF9933",
  },
  {
    title: "Medicine For Africans",
    desc: "With schools closed in Nsw and Victoria, and childcare.",
    cta: "Read More",
    image: "/images/2 - 300x250px.jpg",
    badge: { from: " #000080", to: " #000080", Icon: Stethoscope },
    arrowColor: "text-violet-500",
  },
  {
    title: "Water & Health Food",
    desc: "With schools closed in Nsw and Victoria, and childcare.",
    cta: "Read More",
    image: "/images/3 - 300x250px.png",
    badge: { from: "#138808", to: "#138808", Icon: Droplets },
    arrowColor: "text-rose-500",
  },
  {
    title: "Cancer Help Fund",
    desc: "With schools closed in Nsw and Victoria, and childcare.",
    cta: "Read More",
    image: "/images/4 - 300x250px.jpg",
    badge: { from: "#ffdf6e", to: "#f59e0b", Icon: HeartHandshake },
    arrowColor: "text-amber-500",
  },
];

function Badge({ from, to, Icon }) {
  return (
    <div
      className="
        relative grid place-items-center w-12 h-12 drop-shadow
        transition-transform duration-300 group-hover:scale-110
      "
      style={{
        clipPath: "polygon(25% 4%, 75% 4%, 100% 50%, 75% 96%, 25% 96%, 0% 50%)",
        backgroundImage: `linear-gradient(135deg, ${from}, ${to})`,
      }}
    >
      <div
        className="
          grid place-items-center w-8 h-8 rounded-xl 
          bg-white/95 transition-colors duration-300
          group-hover:bg-[radial-gradient(circle_at_center,var(--hoverFrom),var(--hoverTo))]
        "
        style={{
          "--hoverFrom": from,
          "--hoverTo": to,
        }}
      >
        <Icon className="w-5 h-5 text-gray-800 transition-colors duration-300 group-hover:text-white" />
      </div>
    </div>
  );
}

/** ---------- ServiceCard ---------- */
function ServiceCard({ item }) {
  const { title, desc, cta, image, badge, arrowColor } = item;
  return (
    <article className="group bg-white rounded-2xl shadow-[0_20px_40px_-16px_rgba(0,0,0,0.18)] overflow-hidden h-full flex flex-col transition-transform duration-300 hover:-translate-y-2">
      {/* Image */}
      <div className="relative">
        <img
          src={image}
          alt={title}
          className="w-full object-cover h-48 sm:h-52 md:h-56"
        />
        <div className="absolute -bottom-6 right-6">
          <Badge from={badge.from} to={badge.to} Icon={badge.Icon} />
        </div>
      </div>

      {/* Content */}
      <div className="px-6 pt-8 pb-6 flex-1 flex flex-col">
        <h3 className="text-xl font-extrabold text-gray-800">{title}</h3>
        <p className="mt-3 text-gray-500 leading-relaxed">{desc}</p>

        <button className="mt-auto inline-flex items-center gap-2 text-gray-700 hover:gap-3 transition-all">
          <span className="font-medium">{cta}</span>
          <svg
            className={`w-4 h-4 ${
              typeof arrowColor === "string" && arrowColor.startsWith("#")
                ? ""
                : arrowColor
            }`}
            viewBox="0 0 24 24"
            fill="none"
            stroke={
              typeof arrowColor === "string" && arrowColor.startsWith("#")
                ? arrowColor
                : "currentColor"
            }
            strokeWidth="2"
          >
            <path d="M5 12h14M13 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </article>
  );
}

/** ---------- Services Section ---------- */
export default function Services() {
  // Autoplay plugin with sensible defaults
  const autoplay = useRef(
    Autoplay({
      delay: 4000,
      stopOnInteraction: false, // keep rolling after drags/clicks
      stopOnMouseEnter: true, // pause while hovered
    })
  );

  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "start", skipSnaps: false },
    [autoplay.current]
  );

  const [selected, setSelected] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelected(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
  }, [emblaApi, onSelect]);

  // Start autoplay immediately and resume after user releases drag
  useEffect(() => {
    if (!emblaApi) return;
    const plugins = (emblaApi.plugins && emblaApi.plugins()) || {};
    const ap = plugins.autoplay;

    ap && ap.play(); // kick off autoplay on mount

    const onPointerUp = () => ap && ap.play();
    const onInit = () => ap && ap.play();

    emblaApi.on("pointerUp", onPointerUp);
    emblaApi.on("init", onInit);

    return () => {
      emblaApi.off("pointerUp", onPointerUp);
      emblaApi.off("init", onInit);
      ap && ap.stop();
    };
  }, [emblaApi]);

  const scrollTo = (idx) => emblaApi && emblaApi.scrollTo(idx);

  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-10">
          {/* OUR SERVICE + moving underline */}
          <div className="text-sm tracking-widest uppercase font-semibold italic text-[#FF9933]">
            <span className="relative inline-block">
              OUR SERVICE
              {/* animated underline that goes left <-> right */}
              <div className="relative mx-auto mt-1 h-[3px] w-40 overflow-hidden">
                <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-[2px] bg-[#FF9933]/30" />
                <motion.div
                  className="absolute top-1/2 -translate-y-1/2 h-[3px] w-16 rounded bg-[#FF9933]"
                  animate={{ x: [0, 96, 0] }} // 96px ≈ (w-40 - w-16)
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

          {/* Main title with opposite slide animations */}
          <h2 className="mt-3 text-4xl md:text-5xl font-extrabold leading-tight">
            <motion.span
              className="block text-[#138808]"
              initial={{ y: -40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              We Do it for all <span className="text-[#FF9933]">charity</span>
            </motion.span>

            <motion.span
              className="block text-[#138808]"
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
            >
              Service Now
            </motion.span>
          </h2>
        </div>

        {/* Carousel */}
        <div className="overflow-hidden touch-pan-y" ref={emblaRef}>
          <div className="flex -ml-4 items-stretch">
            {services.map((s) => (
              <div
                key={s.title}
                className="
                  pl-4
                  flex-[0_0_100%]       
                  sm:flex-[0_0_50%]      
                  lg:flex-[0_0_33.333%]  
                  xl:flex-[0_0_25%]      
                "
              >
                <ServiceCard item={s} />
              </div>
            ))}
          </div>
        </div>

        {/* Dots
        <div className="mt-8 flex items-center justify-center gap-3">
          {services.map((_, i) => (
            <button
              key={i}
              onClick={() => scrollTo(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`size-3 rounded-full transition-all ${
                selected === i
                  ? "bg-[#FF9933] scale-110"
                  : "bg-orange-200 hover:bg-orange-300"
              }`}
            />
          ))}
        </div> */}
      </div>
    </section>
  );
}
