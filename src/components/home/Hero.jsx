import React, { useEffect, useRef, useState } from "react";

const slides = [
  {
    id: 1,
    kicker: "WE HELP COMMUNITIES",
    titleTop: "Helping Hands",
    titleBottomAccent: "Changing Lives",
    text: "We help communities develop sustainable programs across education, health, and livelihoods.",
    photo: "/images/homehero1.png",
    circle: "/images/homehero1.png",
  },
  {
    id: 2,
    kicker: "EMPOWER EDUCATION",
    titleTop: "Every Child",
    titleBottomAccent: "Learns",
    text: "Bridge schooling, literacy camps, and digital readiness for real continuity.",
    photo: "/images/homehero2.png",
    circle: "/images/homehero2.png",
  },
  {
    id: 3,
    kicker: "HEALTH & NUTRITION",
    titleTop: "Healthy Today",
    titleBottomAccent: "Stronger Tomorrow",
    text: "Preventive camps, screenings, and awareness drives with community volunteers.",
    photo: "/images/homehero3.png",
    circle: "/images/homehero3.png",
  },
];

export default function HeroCarousel() {
  const [index, setIndex] = useState(0);
  const [enterKey, setEnterKey] = useState(0);

  const [circleSrc, setCircleSrc] = useState(
    slides[0].circle || slides[0].photo
  );
  const [nextCircleSrc, setNextCircleSrc] = useState(null);

  const timerRef = useRef(null);
  const hoveredRef = useRef(false);

  const active = slides[index];

  // Preload images
  useEffect(() => {
    slides.forEach((s) => {
      const a = new Image();
      a.src = s.photo;
      const b = new Image();
      b.src = s.circle || s.photo;
    });
  }, []);

  useEffect(() => {
    const target = active.circle || active.photo;
    if (target !== circleSrc) setNextCircleSrc(target);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index]);

  // Autoplay
  useEffect(() => {
    play();
    return stop;
  }, [index]); // eslint-disable-line react-hooks/exhaustive-deps

  const play = () => {
    stop();
    timerRef.current = setInterval(() => {
      if (!hoveredRef.current) next();
    }, 6000);
  };
  const stop = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  };
  const next = () => {
    setIndex((i) => (i + 1) % slides.length);
    setEnterKey((k) => k + 1);
  };
  const prev = () => {
    setIndex((i) => (i - 1 + slides.length) % slides.length);
    setEnterKey((k) => k + 1);
  };

  // 👇 Set this to your sticky header height (in px)
  const HEADER_H = 88;

  return (
    <section
      className="relative isolate overflow-hidden"
      onMouseEnter={() => (hoveredRef.current = true)}
      onMouseLeave={() => (hoveredRef.current = false)}
      style={{
        minHeight: `calc(100dvh - ${HEADER_H}px)`,
        height: `calc(100vh - ${HEADER_H}px)`,
      }}
    >
      {/* Background slides */}
      <div className="absolute inset-0 -z-10">
        {slides.map((s, i) => {
          const isActive = i === index;
          return (
            <div
              key={s.id}
              className={[
                "absolute inset-0 transition-opacity duration-700 ease-out",
                isActive ? "opacity-100" : "opacity-0 pointer-events-none",
              ].join(" ")}
              aria-hidden={!isActive}
            >
              <img
                src={s.photo}
                alt=""
                className="h-full w-full object-cover"
                loading={i === 0 ? "eager" : "lazy"}
                decoding="async"
              />
              <div className="absolute inset-0 bg-[#138808]/20" />
            </div>
          );
        })}
      </div>

      <div className="mx-auto grid min-h-[inherit] max-w-6xl grid-cols-1 items-center gap-10 px-4 py-16 md:grid-cols-2 md:py-24">
        {/* Left */}
        <div key={`text-${enterKey}`} className="relative z-30">
          <p className="text-sm uppercase tracking-[0.2em] text-white/80">
            {active.kicker}
          </p>

          <h1 className="mt-3 text-4xl font-extrabold leading-tight text-white md:text-6xl">
            {active.titleTop}
            <br />
            <span className="text-[#FF9933]">{active.titleBottomAccent}</span>
          </h1>

          <p className="mt-5 max-w-xl text-base leading-relaxed text-white/85 md:text-lg">
            {active.text}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#donate"
              className="inline-flex items-center gap-3 rounded-full bg-[#FF9933] px-6 py-3 text-white shadow-md transition hover:bg-[#FF9933] focus:outline-none focus:ring-2 focus:ring-white/40"
            >
              <span className="font-semibold">Donate Now</span>
              <span
                className="inline-grid h-7 w-7 place-items-center rounded-full bg-white/20 ring-1 ring-white/40"
                aria-hidden="true"
              >
                <span className="-mt-px text-lg">→</span>
              </span>
            </a>

            <button
              className="relative group inline-flex items-center gap-3 rounded-full px-5 py-3 text-white ring-1 ring-white/30 backdrop-blur overflow-hidden animate-[playShadow_1800ms_ease-in-out_infinite]"
              onClick={() => window.alert("Open your video modal here")}
            >
              <span className="absolute inset-0 rounded-full bg-white/10 transition-colors duration-300 group-hover:bg-white/20" />
              <span
                aria-hidden
                className="pointer-events-none absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 [animation:glowExpand_700ms_ease-out]"
              />
              <span className="relative grid h-10 w-10 place-items-center rounded-full bg-white text-[#FF9933] transition-transform duration-300 group-hover:scale-105">
                ▶
              </span>
            </button>
          </div>

          {/* Dots */}
          <div className="mt-10 flex gap-2">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  setIndex(i);
                  setEnterKey((k) => k + 1);
                }}
                aria-label={`Go to slide ${i + 1}`}
                className={[
                  "h-2.5 rounded-full transition-all",
                  i === index
                    ? "w-8 bg-white"
                    : "w-2.5 bg-white/60 hover:bg-white/80",
                ].join(" ")}
              />
            ))}
          </div>
        </div>

        {/* Right: rotating rings  */}
        <div className="relative mx-auto aspect-square w-[78%] max-w-[520px] z-10 md:justify-self-end">
          <img
            src="/images/main-slider-two-img-shape-1.png"
            alt=""
            className="pointer-events-none absolute inset-0 m-auto h-full w-full select-none z-10"
            style={{ animation: "ringSpin 18s linear infinite" }}
            onError={(e) => (e.currentTarget.style.display = "none")}
          />
          <img
            src="/images/ring-orange.png"
            alt=""
            className="pointer-events-none absolute inset-0 m-auto h-[86%] w-[86%] select-none z-20"
            style={{ animation: "ringSpinReverse 26s linear infinite" }}
            onError={(e) => (e.currentTarget.style.display = "none")}
          />

          <div className="absolute inset-0 grid place-items-center z-30">
            <div className="relative aspect-square w-[62%] rounded-full overflow-hidden bg-white/5 ring-1 ring-white/20 shadow-soft">
              <img
                src={circleSrc}
                alt=""
                className="h-full w-full object-cover"
                decoding="async"
                loading="eager"
              />

              {nextCircleSrc && (
                <img
                  src={nextCircleSrc}
                  alt=""
                  className="hidden"
                  onLoad={() => {
                    setCircleSrc(nextCircleSrc);
                    setNextCircleSrc(null);
                  }}
                />
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Side arrows */}
      <div className="pointer-events-none absolute inset-y-0 right-4 z-40 hidden flex-col items-center justify-center gap-4 md:flex">
        <button
          onClick={prev}
          className="pointer-events-auto grid h-10 w-10 place-items-center rounded-full bg-white/15 text-white ring-1 ring-white/30 backdrop-blur transition hover:bg-white/30"
          aria-label="Previous"
        >
          ‹
        </button>
        <button
          onClick={next}
          className="pointer-events-auto grid h-10 w-10 place-items-center rounded-full bg-white/15 text-white ring-1 ring-white/30 backdrop-blur transition hover:bg-white/30"
          aria-label="Next"
        >
          ›
        </button>
      </div>

      {/* Keyframes */}
      <style>{`
        @keyframes ringSpin { to { transform: rotate(360deg); } }
        @keyframes ringSpinReverse { to { transform: rotate(-360deg); } }
        @keyframes glowExpand {
          0% { box-shadow: 0 0 0 0 rgba(255,255,255,0.18), 0 0 0 0 rgba(242,123,33,0); transform: scale(0.96); }
          60% { box-shadow: 0 0 0 12px rgba(255,255,255,0.08), 0 16px 40px 8px rgba(242,123,33,0.25); transform: scale(1.02); }
          100% { box-shadow: 0 0 0 0 rgba(255,255,255,0), 0 0 0 0 rgba(242,123,33,0); transform: scale(1); }
        }
        @keyframes playShadow {
          0%   { box-shadow: 0 0 0 0 rgba(255,255,255,0.10), 0 10px 24px 0 rgba(242,123,33,0.10); }
          50%  { box-shadow: 0 0 0 8px rgba(255,255,255,0.05), 0 18px 48px 6px rgba(242,123,33,0.28); }
          100% { box-shadow: 0 0 0 0 rgba(255,255,255,0.10), 0 10px 24px 0 rgba(242,123,33,0.10); }
        }
      `}</style>
    </section>
  );
}
