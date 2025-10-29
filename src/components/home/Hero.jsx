import React, { useEffect, useRef, useState } from "react";

const slides = [
  {
    id: 1,
    kicker: "WE HELP COMMUNITIES",
    titleTop: "Helping Hands",
    titleBottomAccent: "Changing Lives",
    text: "We help communities develop sustainable programs across education, health, and livelihoods.",
    photo:
      "https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?q=80&w=1600&auto=format&fit=crop",
    circle:
      "https://images.unsplash.com/photo-1519340241574-2cec6aef0c01?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 2,
    kicker: "EMPOWER EDUCATION",
    titleTop: "Every Child",
    titleBottomAccent: "Learns",
    text: "Bridge schooling, literacy camps, and digital readiness for real continuity.",
    photo:
      "https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?q=80&w=1600&auto=format&fit=crop",
    circle:
      "https://images.unsplash.com/photo-1520975922326-52b38a1d31b0?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 3,
    kicker: "HEALTH & NUTRITION",
    titleTop: "Healthy Today",
    titleBottomAccent: "Stronger Tomorrow",
    text: "Preventive camps, screenings, and awareness drives with community volunteers.",
    photo:
      "https://images.unsplash.com/photo-1542736667-069246bdbc74?q=80&w=1600&auto=format&fit=crop",
    circle:
      "https://images.unsplash.com/photo-1509099836639-18ba1795216d?q=80&w=1200&auto=format&fit=crop", // <-- added
  },
];

export default function HeroCarousel() {
  const [index, setIndex] = useState(0);
  const [enterKey, setEnterKey] = useState(0);
  const timerRef = useRef(null);
  const hoveredRef = useRef(false);

  const active = slides[index];

  useEffect(() => {
    play();
    return stop;
  }, [index]);

  const play = () => {
    stop();
    timerRef.current = setInterval(() => {
      if (!hoveredRef.current) next();
    }, 6000);
  };
  const stop = () => timerRef.current && clearInterval(timerRef.current);

  const next = () => {
    setIndex((i) => (i + 1) % slides.length);
    setEnterKey((k) => k + 1);
  };
  const prev = () => {
    setIndex((i) => (i - 1 + slides.length) % slides.length);
    setEnterKey((k) => k + 1);
  };

  return (
    <section
      className="relative isolate overflow-hidden"
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
              <img
                src={s.photo}
                alt=""
                className="h-full w-full object-cover"
                loading={i === 0 ? "eager" : "lazy"}
              />
              <div className="absolute inset-0 bg-[#0b2a24]/70" />
            </div>
          );
        })}
      </div>

      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-4 py-16 md:grid-cols-2 md:py-24">
        {/* Left: text */}
        <div key={`text-${enterKey}`}>
          <p className="text-sm uppercase tracking-[0.2em] text-white/80 animate-[fadeDown_600ms_ease-out_forwards] opacity-0">
            {active.kicker}
          </p>

          <h1 className="mt-3 text-4xl font-extrabold leading-tight text-white md:text-6xl animate-[dropIn_800ms_cubic-bezier(.2,.9,.2,1)_forwards] opacity-0">
            {active.titleTop}
            <br />
            <span className="text-primary">{active.titleBottomAccent}</span>
          </h1>

          <p className="mt-5 max-w-xl text-base leading-relaxed text-white/85 md:text-lg animate-[riseUp_700ms_200ms_cubic-bezier(.2,.9,.2,1)_forwards] opacity-0">
            {active.text}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4 animate-[riseUp_700ms_300ms_cubic-bezier(.2,.9,.2,1)_forwards] opacity-0">
            <a
              href="#donate"
              className="btn-primary bg-primary hover:bg-primary-hover"
            >
              Donate Now
              <span className="inline-grid h-5 w-5 place-items-center rounded-full bg-white/20">
                →
              </span>
            </a>
            <button
              className="group inline-flex items-center gap-3 rounded-full bg-white/10 px-5 py-3 ring-1 ring-white/30 backdrop-blur transition hover:bg-white/20 text-white"
              onClick={() => window.alert("Open your video modal here")}
            >
              <span className="grid h-10 w-10 place-items-center rounded-full bg-white text-primary transition group-hover:scale-105">
                ▶
              </span>
              <span className="font-medium">Watch Video</span>
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

        {/* Right: rotating ring */}
        <div
          className="
            relative mx-auto aspect-square w-[78%] max-w-[520px]
            animate-[popImage_900ms_cubic-bezier(.2,.9,.2,1)_forwards]
            opacity-0
          "
        >
          {/* Rotating ring assets */}
          <img
            src="/images/main-slider-two-img-shape-1.png"
            alt=""
            className="pointer-events-none absolute inset-0 m-auto h-full w-full select-none"
            style={{ animation: "ringSpin 18s linear infinite" }}
            onError={(e) => (e.currentTarget.style.display = "none")}
          />
          <img
            src="/images/ring-orange.png"
            alt=""
            className="pointer-events-none absolute inset-0 m-auto h-[86%] w-[86%] select-none"
            style={{ animation: "ringSpinReverse 26s linear infinite" }}
            onError={(e) => (e.currentTarget.style.display = "none")}
          />

          {/* Inner circle image*/}
          <div className="absolute inset-0 grid place-items-center">
            <div
              className="
                relative aspect-square w-[70%] overflow-hidden rounded-full
                bg-white/5 ring-1 ring-white/20 shadow-soft
                [animation:growIn_800ms_cubic-bezier(.2,.9,.2,1)_forwards]
                opacity-0
              "
            >
              <img
                key={`circle-${enterKey}`}
                src={active.circle || active.photo}
                alt=""
                className="
                  h-full w-full object-cover
                  [animation:zoomPulse_2200ms_200ms_ease-out_forwards]
                "
              />
            </div>
          </div>
        </div>
      </div>

      {/* Side arrows */}
      <div className="pointer-events-none absolute inset-y-0 right-4 z-10 hidden flex-col items-center justify-center gap-4 md:flex">
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
        @keyframes dropIn { 0%{opacity:0;transform:translateY(-10px)}100%{opacity:1;transform:translateY(0)} }
        @keyframes riseUp { 0%{opacity:0;transform:translateY(12px)}100%{opacity:1;transform:translateY(0)} }
        @keyframes fadeDown { 0%{opacity:0;transform:translateY(-6px)}100%{opacity:1;transform:translateY(0)} }
        @keyframes popImage { 0%{opacity:0;transform:translateY(10px) scale(.98)}100%{opacity:1;transform:translateY(0) scale(1)} }
        @keyframes growIn { 0%{transform:scale(.7);opacity:0}60%{transform:scale(1.02);opacity:1}100%{transform:scale(1)} }
        @keyframes zoomPulse { 0%{transform:scale(1.06)}50%{transform:scale(1)}100%{transform:scale(1.02)} }
      `}</style>
    </section>
  );
}
