import React, {
  useEffect,
  useMemo,
  useRef,
  useState,
  useCallback,
} from "react";

const COLORS = {
  orange: "#FF9933",
  white: "#FFFFFF",
  india: "#138808",
  navy: "#000080",
};

const TESTIMONIALS = [
  {
    name: "Penelope Miller",
    role: "Sr. Volunteer",
    rating: 5.0,
    text: "I was very impressed 🐝 involves providing of advice and guidance on energy–related matters. Understand the advantages hiring professionals to design and maintain your garden. 🐝",
    imageUrl:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1200&auto=format&fit=crop",
  },
  {
    name: "Amara Patel",
    role: "Coordinator",
    rating: 4.9,
    text: "Clear communication and reliable support. The team delivered beyond expectations and kept us informed at every step.",
    imageUrl:
      "https://images.unsplash.com/photo-1524253482453-3fed8d2fe12b?q=80&w=1200&auto=format&fit=crop",
  },
  {
    name: "Jonas Erik",
    role: "Project Lead",
    rating: 5.0,
    text: "Quality-first approach with practical guidance that actually works in the field. Highly recommended.",
    imageUrl:
      "https://images.unsplash.com/photo-1544006659-f0b21884ce1d?q=80&w=1200&auto=format&fit=crop",
  },
];

const PARTNERS = [
  { name: "Kudi", logoUrl: "" },
  { name: "DISRUPT", logoUrl: "" },
  { name: "Air Peace", logoUrl: "" },
  { name: "Arik", logoUrl: "" },
  { name: "H TRANSIT", logoUrl: "" },
  { name: "Spectranet 4G", logoUrl: "" },
];

export default function ServiceTestimonial({
  testimonials = TESTIMONIALS,
  partners = PARTNERS,
  onWriteReview = () => {},
  onBecomePartner = () => {},
  slideEveryMs = 4500,
}) {
  const [idx, setIdx] = useState(0);
  const [paused, setPaused] = useState(false);
  const len = testimonials.length;

  const go = useCallback(
    (dir = 1) => setIdx((i) => (i + dir + len) % len),
    [len]
  );

  useEffect(() => {
    if (paused || len <= 1) return;
    const id = setInterval(() => go(1), Math.max(1800, slideEveryMs));
    return () => clearInterval(id);
  }, [paused, len, slideEveryMs, go]);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "ArrowLeft") go(-1);
      if (e.key === "ArrowRight") go(1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [go]);

  const prev = (idx - 1 + len) % len;
  const next = (idx + 1) % len;

  const trackRef = useRef(null);
  const rafRef = useRef(null);
  const marqueePaused = useRef(false);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let last = performance.now();
    const speed = prefersReduced ? 0 : 0.4;

    const step = (now) => {
      if (!marqueePaused.current && speed > 0) {
        const dt = now - last;
        last = now;
        el.scrollLeft += speed * (dt / 16.6);
        if (el.scrollLeft >= el.scrollWidth / 2) el.scrollLeft = 0;
      }
      rafRef.current = requestAnimationFrame(step);
    };

    rafRef.current = requestAnimationFrame(step);
    return () => rafRef.current && cancelAnimationFrame(rafRef.current);
  }, []);

  const looped = useMemo(() => [...partners, ...partners], [partners]);

  return (
    <section
      className="relative w-full overflow-hidden bg-white"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-0 left-0 w-full h-56 bg-gradient-to-b from-[#FF9933] to-transparent opacity-25 animate-slideDown" />
        <div className="absolute bottom-0 left-0 w-full h-56 bg-gradient-to-t from-[#138808] to-transparent opacity-25 animate-slideUp" />
      </div>

      <style>{`
        :root{ --orange:${COLORS.orange}; --white:${COLORS.white}; --india:${COLORS.india}; --navy:${COLORS.navy}; }
        .shadow-soft{ box-shadow: 0 10px 25px rgba(0,0,0,.08); }
        .card-glow{ box-shadow: 0 20px 45px rgba(0,0,0,.12); }
        .no-scrollbar::-webkit-scrollbar{display:none;}
        .no-scrollbar{ -ms-overflow-style:none; scrollbar-width:none;}
        .fade-mask{
          -webkit-mask-image: linear-gradient(90deg, transparent 0, #000 6%, #000 94%, transparent 100%);
                  mask-image: linear-gradient(90deg, transparent 0, #000 6%, #000 94%, transparent 100%);
        }
        @media (max-width: 480px){
          .fade-mask{ -webkit-mask-image:none; mask-image:none; }
        }
        @media (min-width:768px) and (max-width:1023px){
          .tablet-h-card{ height: 440px; }
          .tablet-partner{ height: 88px; width: 190px; border-radius: 1rem; }
        }
        @keyframes slideDown { 0%{transform:translateY(-25%)} 100%{transform:translateY(0)} }
        @keyframes slideUp   { 0%{transform:translateY( 25%)} 100%{transform:translateY(0)} }
        .animate-slideDown { animation: slideDown 16s ease-in-out infinite alternate; }
        .animate-slideUp   { animation: slideUp   16s ease-in-out infinite alternate; }
      `}</style>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-8 sm:pt-10 pb-12 sm:pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-10 md:gap-12 items-center">
          {/* Left */}
          <div className="space-y-4 sm:space-y-6 order-1 lg:order-none">
            <div className="flex items-center gap-2">
              <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-[var(--india)] text-[var(--white)]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 2a10 10 0 1010 10A10.011 10.011 0 0012 2zm-1 15l-4-4 1.414-1.414L11 13.172l5.586-5.586L18 9z" />
                </svg>
              </span>
              <p className="text-xs sm:text-sm font-semibold tracking-wide text-[var(--navy)]">
                Testimonials
              </p>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight text-[var(--navy)]">
              Why They Believe
              <br className="hidden sm:block" />
              <span className="sm:ml-0">In Us</span>
            </h2>

            <p className="max-w-xl text-sm sm:text-base leading-7 text-slate-600">
              Likely to then a dental prosthetic is added then dental prosthetic
              occaecat laborum.
            </p>

            <div className="flex flex-wrap items-center gap-4 sm:gap-6 pt-1 sm:pt-2">
              <div className="flex items-center gap-3">
                <span className="text-3xl sm:text-4xl font-extrabold text-[var(--orange)]">
                  99%
                </span>
                <div className="flex items-center gap-2">
                  <span className="inline-flex h-6 w-6 sm:h-7 sm:w-7 items-center justify-center rounded-full bg-[var(--india)] text-[var(--white)]">
                    ✓
                  </span>
                  <span className="text-xs sm:text-base font-semibold text-[var(--navy)]">
                    Positive Reviews
                  </span>
                </div>
              </div>

              <button
                onClick={onWriteReview}
                className="group flex items-center gap-2 rounded-full bg-[var(--white)] px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm font-semibold text-[var(--navy)] ring-1 ring-slate-200 hover:ring-[var(--orange)] transition"
              >
                <span className="inline-flex h-6 w-6 sm:h-7 sm:w-7 items-center justify-center rounded-full bg-[var(--orange)] text-[var(--white)]">
                  💬
                </span>
                Write your honest review
                <span className="translate-x-0 group-hover:translate-x-0.5 transition">
                  ➜
                </span>
              </button>
            </div>
          </div>

          {/* Right  */}
          <div
            className="relative h-auto sm:h-[380px] md:h-[440px] flex items-center order-2 tablet-h-card"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            onTouchStart={() => setPaused(true)}
            onTouchEnd={() => setPaused(false)}
          >
            <GhostCard
              t={testimonials[prev]}
              side="left"
              className="hidden lg:block"
            />
            <GhostCard
              t={testimonials[next]}
              side="right"
              className="hidden lg:block"
            />

            <ActiveCard t={testimonials[idx]} />

            {/* Controls */}
            {len > 1 && (
              <>
                <button
                  aria-label="Previous testimonial"
                  onClick={() => go(-1)}
                  className="absolute left-2 sm:left-3 top-1/2 -translate-y-1/2 rounded-full bg-white/90 text-[var(--navy)] p-2 shadow-soft ring-1 ring-black/10 hover:bg-white"
                >
                  ←
                </button>
                <button
                  aria-label="Next testimonial"
                  onClick={() => go(1)}
                  className="absolute right-2 sm:right-3 top-1/2 -translate-y-1/2 rounded-full bg-white/90 text-[var(--navy)] p-2 shadow-soft ring-1 ring-black/10 hover:bg-white"
                >
                  →
                </button>

                {/* Dots */}
                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2">
                  {testimonials.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setIdx(i)}
                      aria-label={`Go to testimonial ${i + 1}`}
                      className="h-2.5 w-2.5 rounded-full"
                      style={{
                        backgroundColor:
                          i === idx ? COLORS.india : "rgba(0,0,128,0.25)",
                      }}
                    />
                  ))}
                </div>
              </>
            )}
          </div>
        </div>

        <div className="mt-10 sm:mt-14 border-t border-slate-200" />

        <div className="mt-6 sm:mt-8">
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-[var(--navy)]">
            Major Partners
          </h3>

          <div
            className="relative mt-4 sm:mt-6 fade-mask"
            onMouseEnter={() => (marqueePaused.current = true)}
            onMouseLeave={() => (marqueePaused.current = false)}
            onTouchStart={() => (marqueePaused.current = true)}
            onTouchEnd={() => (marqueePaused.current = false)}
          >
            <div
              ref={trackRef}
              className="no-scrollbar overflow-x-auto marquee-track"
              style={{ scrollBehavior: "auto" }}
              role="group"
              aria-label="Partner logos"
            >
              <div className="flex gap-4 sm:gap-6 md:gap-8 min-w-full">
                <div className="flex gap-4 sm:gap-6 md:gap-8 w-[200%]">
                  {looped.map((p, i) => (
                    <PartnerCard
                      key={`${p.name}-${i}`}
                      name={p.name}
                      logoUrl={p.logoUrl}
                    />
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-6 sm:mt-8 flex justify-center">
              <button
                onClick={onBecomePartner}
                className="group inline-flex items-center gap-2 sm:gap-3 rounded-full bg-[var(--india)] px-4 py-2 sm:px-6 sm:py-3 text-[var(--white)] text-sm sm:text-base font-semibold hover:opacity-90 transition"
              >
                Become a Partner
                <span className="inline-flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-full bg-[var(--orange)] group-hover:translate-x-0.5 transition">
                  ➜
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ActiveCard({ t }) {
  return (
    <article className="relative z-10 mx-auto w-full max-w-[720px] md:max-w-[820px] rounded-2xl sm:rounded-3xl bg-[var(--india)] text-[var(--white)] card-glow overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="relative h-60 sm:h-80 md:h-full p-3 sm:p-4">
          <div className="h-full w-full overflow-hidden rounded-xl sm:rounded-2xl">
            <img
              src={t.imageUrl}
              alt={t.name}
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>

          <button
            aria-label="Play"
            className="absolute inset-0 m-auto h-12 w-12 sm:h-16 sm:w-16 rounded-full bg-[var(--white)]/90 backdrop-blur flex items-center justify-center text-[var(--navy)] font-semibold ring-4 ring-[var(--white)] shadow-soft"
          >
            Play
          </button>
        </div>

        <div className="relative p-5 sm:p-6 md:p-8">
          <div className="mb-3 sm:mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-2.5 py-1 text-[10px] sm:text-xs font-semibold ring-1 ring-white/30">
            Rating <span className="text-yellow-300">★</span>
            {t.rating.toFixed(1)}
          </div>

          <p className="text-white/90 text-sm sm:text-base leading-6 sm:leading-7">
            {t.text}
          </p>

          <div className="mt-4 sm:mt-6">
            <p className="text-sm sm:text-base font-bold">
              {t.name}
              <span className="ml-1 align-middle text-[10px] sm:text-xs text-white/70">
                (Arjun)
              </span>
            </p>
            <p className="text-[11px] sm:text-xs text-white/70">{t.role}</p>
          </div>
        </div>
      </div>
    </article>
  );
}

function GhostCard({ t, side, className = "" }) {
  const base =
    "absolute inset-y-0 my-auto h-[86%] w-[88%] rounded-3xl bg-slate-300/70 blur-[0.2px]";
  const pos = side === "left" ? "-left-6 sm:-left-10" : "-right-6 sm:-right-10";
  return (
    <div className={`${base} ${pos} ${className}`} aria-hidden="true"></div>
  );
}

function PartnerCard({ name, logoUrl }) {
  const hasLogo = Boolean(logoUrl);
  return (
    <div className="flex h-16 sm:h-20 md:h-24 w-[140px] sm:w-[180px] md:w-[200px] shrink-0 items-center justify-center rounded-xl sm:rounded-2xl bg-[var(--navy)] text-[var(--white)] shadow-soft tablet-partner transition hover:scale-[1.02]">
      {hasLogo ? (
        <img
          src={logoUrl}
          alt={name}
          loading="lazy"
          className="max-h-10 sm:max-h-12 max-w-[120px] sm:max-w-[160px] object-contain"
        />
      ) : (
        <span className="px-3 sm:px-4 text-base sm:text-lg font-bold tracking-wide">
          {name}
        </span>
      )}
    </div>
  );
}
