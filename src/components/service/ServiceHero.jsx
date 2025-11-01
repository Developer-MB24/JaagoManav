import { useRef, useEffect, useState } from "react";
import {
  motion,
  useAnimation,
  useMotionValue,
  useTransform,
} from "framer-motion";
import {
  ArrowRight,
  Leaf,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
} from "lucide-react";

const defaultSlides = [
  "/images/about-two-img-1.jpg",
  "/images/about-two-img-2.jpg",
  "/images/about-two-img-3.jpg",
];

const defaultAvatars = [
  { src: "/images/about-two-img-1.jpg", alt: "Member 1" },
  { src: "/images/about-two-img-2.jpg", alt: "Member 2" },
  { src: "/images/about-two-img-3.jpg", alt: "Member 3" },
];

const defaultSocials = [
  { icon: <Facebook size={18} />, href: "#", label: "Facebook" },
  { icon: <Twitter size={18} />, href: "#", label: "X/Twitter" },
  { icon: <Instagram size={18} />, href: "#", label: "Instagram" },
  { icon: <Linkedin size={18} />, href: "#", label: "LinkedIn" },
];

export default function ServiceHero({
  slides = defaultSlides,
  title = "Build This Earth with",
  highlight = "Heart’s True Vision",
  titleAfter = "",
  subtitle = "A seed is gently first planted, so it slowly starts to grow a tree, then blossoms and bears fruit with nature’s help.",
  ctaLabel = "Become One Today",
  onCTAClick = () => {},
  helpersCount = "122.6k+",
  helpersCaption = "Earth Helpers",
  avatars = defaultAvatars,
  socials = defaultSocials,
  autoPlayMs = 6000,
}) {
  const controls = useAnimation();
  const containerRef = useRef(null);
  const [index, setIndex] = useState(0);

  // Carousel
  useEffect(() => {
    if (!slides?.length) return;
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, autoPlayMs);
    return () => clearInterval(id);
  }, [slides, autoPlayMs]);

  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rotateX = useTransform(my, [-200, 200], [6, -6]);
  const rotateY = useTransform(mx, [-200, 200], [-6, 6]);

  function handleMouseMove(e) {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    const x = e.clientX - (rect.left + rect.width / 2);
    const y = e.clientY - (rect.top + rect.height / 2);
    mx.set(x);
    my.set(y);
  }

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative w-full min-h-[92vh] overflow-hidden bg-[#000080] text-white font-serif"
      aria-label="Hero"
    >
      {/* Background slides */}
      <div className="absolute inset-0">
        {slides.map((src, i) => (
          <motion.div
            key={i}
            className="absolute inset-0"
            initial={false}
            animate={{ opacity: index === i ? 1 : 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            style={{
              backgroundImage: `url(${src})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              scale: index === i ? 1.05 : 1.1,
            }}
          />
        ))}
      </div>

      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,128,0.7),rgba(0,0,128,0.55),rgba(0,0,128,0.2))]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_left,rgba(19,136,8,0.28),transparent_60%)]" />

      {[0, 1, 2, 3, 4, 5].map((i) => (
        <motion.div
          key={i}
          className="absolute"
          initial={{ y: 40 + i * 10, opacity: 0 }}
          animate={{ y: [-10, 0, -10], opacity: 1 }}
          transition={{
            duration: 6 + i,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          style={{
            left: `${10 + i * 14}%`,
            top: `${20 + (i % 3) * 18}%`,
            rotate: i * 12,
            color: "#138808",
          }}
        >
          <Leaf
            className="drop-shadow-[0_0_12px_rgba(19,136,8,0.35)]"
            size={22}
          />
        </motion.div>
      ))}

      {/* Content */}
      <div className="relative z-10 mx-auto flex max-w-7xl flex-col px-6 pb-16 pt-28 md:px-10 lg:px-12">
        {/* Pill */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          className="mb-6 inline-flex items-center gap-2 rounded-full px-4 py-2 backdrop-blur-sm ring-1 w-fit"
          style={{
            backgroundColor: "rgba(0,0,128,0.3)",
            borderColor: "rgba(255,255,255,0.25)",
          }}
        >
          <Leaf size={18} style={{ color: "#138808" }} />
          <span className="text-sm md:text-base text-white/90">
            Let’s Act for Nature’s Future
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
          className="text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl max-w-5xl"
        >
          <span className="block">{title}</span>
          <span
            className="mt-2 inline-block bg-clip-text text-transparent"
            style={{
              backgroundImage:
                "linear-gradient(90deg, #FF9933 0%, #FFFFFF 45%, #138808 100%)",
            }}
          >
            {highlight}
          </span>
          {titleAfter ? (
            <>
              <br />
              <span className="text-white"> {titleAfter}</span>
            </>
          ) : null}
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.35 }}
          className="mt-6 max-w-3xl text-base md:text-lg text-white/85"
        >
          {subtitle}
        </motion.p>

        {/* CTA  */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.45 }}
          className="mt-8 flex flex-col items-start gap-6 sm:flex-row sm:items-center"
        >
          {/* CTA button */}
          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.98 }}
            style={{
              rotateX,
              rotateY,
              transformStyle: "preserve-3d",
              backgroundColor: "#FF9933",
              color: "#000080",
            }}
            onClick={onCTAClick}
            className="relative inline-flex items-center gap-3 rounded-full px-6 py-3 font-semibold shadow-xl ring-1 focus:outline-none"
          >
            <span>{ctaLabel}</span>
            <span
              className="grid h-9 w-9 place-items-center rounded-full"
              style={{ backgroundColor: "rgba(0,0,128,0.1)" }}
            >
              <ArrowRight size={18} />
            </span>

            <span
              className="pointer-events-none absolute -inset-1 rounded-full blur-xl"
              style={{ backgroundColor: "rgba(255,153,51,0.25)" }}
            />
          </motion.button>

          {/* Avatars + stat */}
          <div className="flex items-center gap-4">
            <div className="-space-x-3">
              {avatars.slice(0, 3).map((a, i) => (
                <img
                  key={i}
                  src={a.src}
                  alt={a.alt}
                  className="inline-block h-10 w-10 rounded-full object-cover"
                  style={{ boxShadow: "0 0 0 2px rgba(255,255,255,0.7)" }}
                />
              ))}
              {avatars.length > 3 && (
                <div
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full text-xs backdrop-blur"
                  style={{
                    backgroundColor: "rgba(255,255,255,0.2)",
                    boxShadow: "0 0 0 2px rgba(255,255,255,0.7)",
                  }}
                >
                  +{avatars.length - 3}
                </div>
              )}
            </div>
            <div className="leading-tight">
              <div className="text-xl font-bold">{helpersCount}</div>
              <div className="text-sm text-white/80">{helpersCaption}</div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* social*/}
      <div className="absolute right-4 top-1/2 hidden -translate-y-1/2 flex-col items-center gap-3 md:flex">
        <div className="rotate-90 text-xs tracking-widest text-white/70">
          Join Social.
        </div>
        {socials.map((s, i) => (
          <motion.a
            key={i}
            href={s.href}
            aria-label={s.label}
            whileHover={{ scale: 1.1, y: -2 }}
            className="grid h-10 w-10 place-items-center rounded-full ring-1 hover:opacity-90"
            style={{
              backgroundColor: "rgba(0,0,128,0.35)",
              borderColor: "rgba(255,255,255,0.15)",
            }}
          >
            {s.icon}
          </motion.a>
        ))}
      </div>

      {/* Pager */}
      <div className="absolute bottom-6 right-6 hidden items-center gap-3 md:flex">
        {slides.map((_, d) => (
          <button
            key={d}
            onClick={() => setIndex(d)}
            className="h-3 w-3 rounded-full"
            style={{
              backgroundColor:
                d === index ? "#FFFFFF" : "rgba(255,255,255,0.4)",
            }}
            aria-label={`Slide ${d + 1}`}
          />
        ))}
        <div
          className="grid h-8 w-8 place-items-center rounded-full ring-1"
          style={{
            backgroundColor: "rgba(255,255,255,0.2)",
            borderColor: "rgba(255,255,255,0.2)",
          }}
        >
          <ArrowRight size={16} />
        </div>
      </div>

      <motion.div
        initial={{ x: "-30%", opacity: 0 }}
        animate={{ x: "120%", opacity: [0, 0.15, 0] }}
        transition={{ duration: 5, repeat: Infinity, repeatDelay: 6 }}
        className="pointer-events-none absolute inset-y-0 left-0 w-1/3"
        style={{
          background:
            "linear-gradient(90deg, rgba(255,255,255,0.12), transparent)",
        }}
      />
    </section>
  );
}
