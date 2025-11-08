import React, { useEffect, useRef, useState } from "react";

const slides = [
  {
    id: 1,
    kicker: "WE HELP COMMUNITIES",
    titleTop: "Helping Hands",
    titleBottomAccent: "Changing Lives",
    text: "We help communities develop sustainable programs across education, health, and livelihoods.",
    photo: "/images/homehero1.png",
    circle: "/images/Round Circular Image - 1(600x600px).jpg",
  },
  {
    id: 2,
    kicker: "EMPOWER EDUCATION",
    titleTop: "Every Child",
    titleBottomAccent: "Learns",
    text: "Bridge schooling, literacy camps, and digital readiness for real continuity.",
    photo: "/images/homehero2.png",
    circle: "/images/Round Circular 2 - 600x600px.jpg",
  },
  {
    id: 3,
    kicker: "HEALTH & NUTRITION",
    titleTop: "Healthy Today",
    titleBottomAccent: "Stronger Tomorrow",
    text: "Preventive camps, screenings, and awareness drives with community volunteers.",
    photo: "/images/homehero3.png",
    circle: "/images/Round Circular 3 - 600x600px.jpg",
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

  // Autoplay with hover pause
  useEffect(() => {
    play();
    return stop;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index]);

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

  // Optional: keyboard support
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <section
      className="relative isolate overflow-hidden bg-[#0b0b0c]"
      onMouseEnter={() => (hoveredRef.current = true)}
      onMouseLeave={() => (hoveredRef.current = false)}
      style={{ minHeight: "70vh" }}
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
              <div
                className={[
                  "absolute inset-0 bg-center bg-cover mix-blend-luminosity",
                  "transition-transform duration-[10000ms]",
                  isActive ? "scale-110" : "scale-100",
                ].join(" ")}
                style={{ backgroundImage: `url(${s.photo})` }}
              />
              {/* Dark overlay */}
              <div className="absolute inset-0 bg-black/70" />
            </div>
          );
        })}
      </div>

      <div className="mx-auto grid max-w-[1290px] grid-cols-1 items-center gap-10 px-4 py-16 md:grid-cols-2 md:py-24">
        {/* Left content */}
        <div key={`text-${enterKey}`} className="relative z-30">
          {/* Kicker with entrance */}
          <div className="flex items-center gap-[10px] opacity-0 -translate-y-5 animate-[fadeDown_1500ms_ease_forwards] [animation-delay:1200ms]">
            <span className="h-px w-10 bg-[#f27b21]" />
            <p className="text-sm uppercase tracking-[0.2em] text-white/80">
              {active.kicker}
            </p>
          </div>

          {/* Title with entrance */}
          <h1 className="mt-[31px] mb-[13px] text-[42px] leading-tight font-extrabold capitalize text-white md:text-[90px] md:leading-[1.1] opacity-0 -translate-y-5 animate-[fadeDown_1500ms_ease_forwards] [animation-delay:900ms]">
            {active.titleTop}
            <br />
            <span className="text-[#f27b21]">{active.titleBottomAccent}</span>
          </h1>

          {/* Text */}
          <p className="mt-5 max-w-xl text-base leading-relaxed text-white/85 md:text-lg opacity-0 translate-y-5 animate-[fadeUp_1500ms_ease_forwards] [animation-delay:1200ms]">
            {active.text}
          </p>

          {/* Buttons */}
          <div className="mt-[43px] flex flex-wrap items-center gap-[30px] opacity-0 translate-y-5 animate-[fadeUp_1500ms_ease_forwards] [animation-delay:1400ms]">
            {/* UPDATED: Donate button with center-grow hover fill (#FF9933) */}
            <a
              href="#donate"
              className="btn-donate group relative inline-flex items-center gap-3 rounded-full px-6 py-3 text-white ring-2 ring-white/30 overflow-hidden"
            >
              <span className="relative z-10 font-medium">Donate Now</span>
              <span
                className="relative z-10 inline-grid h-7 w-7 place-items-center rounded-full bg-white/20 ring-1 ring-white/40 transition-transform duration-300 group-hover:scale-105"
                aria-hidden="true"
              >
                <span className="-mt-px text-lg">→</span>
              </span>
            </a>

            {/* Play button with ripple */}
            <button
              className="relative inline-flex items-center gap-3 rounded-full px-5 py-3 text-white overflow-hidden isolate"
              onClick={() => window.alert("Open your video modal here")}
              aria-label="Play video"
            >
              {/* ripple rings (behind) */}
              <span
                className="ripple ripple-1 pointer-events-none"
                aria-hidden
              />
              <span
                className="ripple ripple-2 pointer-events-none"
                aria-hidden
              />
              <span
                className="ripple ripple-3 pointer-events-none"
                aria-hidden
              />

              {/* play icon (above) */}
              <span className="relative z-10 grid h-10 w-10 place-items-center rounded-full bg-white text-[#f27b21] transition-transform duration-300 hover:scale-105">
                ▶
              </span>
            </button>
          </div>

          {/* Dots (left-aligned) */}
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
                  "h-[15px] w-[15px] rounded-full border-2 transition-all",
                  i === index
                    ? "bg-transparent border-white"
                    : "bg-white/30 border-transparent hover:bg-white/50",
                ].join(" ")}
              />
            ))}
          </div>
        </div>

        {/* Right: rotating rings & circle image */}
        <div className="relative mx-auto aspect-square w-full max-w-[680px] z-10 md:justify-self-center">
          {/* Outer decorative ring */}
          <img
            src="/images/main-slider-two-img-shape-1.png"
            alt=""
            className="pointer-events-none absolute inset-0 m-auto h-full w-full select-none z-10"
            style={{ animation: "ringSpin 18s linear infinite" }}
            onError={(e) => (e.currentTarget.style.display = "none")}
          />
          {/* Inner ring */}
          <img
            src="/images/ring-orange.png"
            alt=""
            className="pointer-events-none absolute inset-0 m-auto h-[86%] w-[86%] select-none z-20"
            style={{ animation: "ringSpinReverse 26s linear infinite" }}
            onError={(e) => (e.currentTarget.style.display = "none")}
          />

          {/* Circle image with POP-IN animation then float */}
          <div className="absolute inset-0 grid place-items-center z-30">
            <div className="relative aspect-square w-[62%] rounded-full overflow-hidden bg-white/5 ring-1 ring-white/20 shadow-[0_10px_30px_rgba(0,0,0,0.35)]">
              <div
                key={`pop-${enterKey}`}
                className="opacity-0 scale-75 animate-[circlePopIn_1600ms_cubic-bezier(0.22,1,0.36,1)_forwards] [animation-delay:300ms]"
              >
                <img
                  src={circleSrc}
                  alt=""
                  className="h-full w-full object-cover animate-[floatBobY_5s_ease-in-out_infinite]"
                  decoding="async"
                  loading="eager"
                />
              </div>

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

      {/* Side arrows (vertical on right) */}
      <div className="pointer-events-none absolute inset-y-0 right-8 z-40 hidden flex-col items-center justify-center md:flex">
        <button
          onClick={prev}
          className="pointer-events-auto grid h-[60px] w-[60px] place-items-center rounded-full bg-transparent text-white opacity-80 border-2 border-white/30 transition hover:opacity-100 hover:border-white rotate-180 mb-2"
          aria-label="Previous"
        >
          <span className="text-xl">›</span>
        </button>
        <button
          onClick={next}
          className="pointer-events-auto grid h-[60px] w-[60px] place-items-center rounded-full bg-transparent text-white opacity-80 border-2 border-white/30 transition hover:opacity-100 hover:border-white"
          aria-label="Next"
        >
          <span className="text-xl">›</span>
        </button>
      </div>

      {/* Keyframes & extra CSS */}
      <style>{`
        @keyframes ringSpin { to { transform: rotate(360deg); } }
        @keyframes ringSpinReverse { to { transform: rotate(-360deg); } }
        @keyframes floatBobY {
          0%,100% { transform: translateY(0); }
          50% { transform: translateY(-12px); }
        }
        @keyframes fadeDown {
          0% { opacity: 0; transform: translateY(-20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeUp {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        /* POP IN for circle image */
        @keyframes circlePopIn {
          0%   { opacity: 0; transform: scale(0.75); filter: blur(6px); }
          60%  { opacity: 1; transform: scale(1.04); filter: blur(0); }
          100% { opacity: 1; transform: scale(1); filter: blur(0); }
        }

        /* =======================
           DONATE button center-grow fill
           ======================= */
        .btn-donate{
          --fill:#FF9933;
          isolation:isolate; /* keep the fill behind content */
          transition: transform .25s ease, box-shadow .25s ease;
          will-change: transform;
        }
        .btn-donate:hover{
          transform: translateY(-1px);
          box-shadow: 0 10px 26px rgba(0,0,0,.18);
        }
        .btn-donate::before{
          content:"";
          position:absolute;
          inset:0;
          margin:auto;
          width:12px; height:12px;       /* seed circle */
          background: var(--fill);
          border-radius:9999px;
          transform: scale(0);
          opacity:1;
          z-index:0;                      /* stays behind text + arrow */
          transition: transform .55s cubic-bezier(.2,.9,.22,1);
          will-change: transform;
        }
        .btn-donate:hover::before{
          transform: scale(90);           /* large enough to cover pill */
        }

        /* =======================
           PLAY BUTTON RIPPLE
           ======================= */
        .ripple{
          position:absolute;
          top:50%; left:50%;
          width:60px; height:60px;
          border-radius:9999px;
          transform:translate(-50%, -50%);
          border:2px solid rgba(255,255,255,0.55);
          z-index:0;
          opacity:0;
          animation: ripplePulse 2.2s ease-out infinite;
        }
        .ripple-2{ animation-delay: .5s; }
        .ripple-3{ animation-delay: 1s; }

        @keyframes ripplePulse{
          0%   { transform: translate(-50%, -50%) scale(0.85); opacity: .8; }
          70%  { transform: translate(-50%, -50%) scale(1.8);  opacity: .2; }
          100% { transform: translate(-50%, -50%) scale(2.0);  opacity: 0; }
        }

        /* Reduce motion preference */
        @media (prefers-reduced-motion: reduce) {
          .ripple{ animation: none !important; opacity: 0 !important; }
          .btn-donate::before{ transition:none; transform: scale(90); }
        }
      `}</style>
    </section>
  );
}
