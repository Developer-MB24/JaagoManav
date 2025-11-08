import React from "react";

/** ---------- Scroll In-View Hook ---------- */
function useInView(threshold = 0.2) {
  const ref = React.useRef(null);
  const [inView, setInView] = React.useState(false);
  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => e.isIntersecting && setInView(true),
      { threshold }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [threshold]);
  return [ref, inView];
}

/** ---------- CountUp (number rolling) ---------- */
function useCountUp(targetNumber, start) {
  const [val, setVal] = React.useState(0);

  React.useEffect(() => {
    if (!start) return;
    const duration = 1900;
    const startTimeRef = { t: 0 };
    let raf;

    const easeOutCubic = (p) => 1 - Math.pow(1 - p, 3);

    const step = (ts) => {
      if (!startTimeRef.t) startTimeRef.t = ts;
      const progress = Math.min((ts - startTimeRef.t) / duration, 1);
      const eased = easeOutCubic(progress);
      const next = Math.floor(targetNumber * eased);
      setVal(next);
      if (progress < 1) raf = requestAnimationFrame(step);
    };

    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [targetNumber, start]);

  return val;
}

function StatHex({ color, label, number, icon, animate = false }) {
  const match = String(number).match(/(\d+)(.*)?/);
  const target = match ? parseInt(match[1], 10) : 0;
  const suffix = match && match[2] ? match[2] : "";
  const animatedVal = useCountUp(target, animate);
  const toShow = animate ? animatedVal : target;

  return (
    <div className="flex items-center gap-3">
      <div className="relative h-12 w-12 shrink-0">
        <div
          className="absolute inset-0"
          style={{
            clipPath:
              "polygon(25% 6%, 75% 6%, 100% 50%, 75% 94%, 25% 94%, 0% 50%)",
            background: `${color}22`,
          }}
        />
        <div
          className="absolute inset-1 grid place-items-center"
          style={{
            clipPath:
              "polygon(25% 6%, 75% 6%, 100% 50%, 75% 94%, 25% 94%, 0% 50%)",
            background: color,
          }}
        >
          {icon ? (
            <img src={icon} alt="" className="h-5 w-5 invert brightness-0" />
          ) : (
            <span className="text-sm text-white">★</span>
          )}
        </div>
      </div>

      <div className="leading-tight">
        <p className="text-sm font-semibold text-[#138808]">{label}</p>
        <p className="text-[15px] font-semibold" style={{ color }}>
          {toShow.toLocaleString()}
          {suffix}
        </p>
      </div>
    </div>
  );
}

export default function AboutUs() {
  const [ref, inView] = useInView(0.15);
  const [videoOpen, setVideoOpen] = React.useState(false);

  // Allow Esc to close modal
  React.useEffect(() => {
    if (!videoOpen) return;
    const onKey = (e) => {
      if (e.key === "Escape") setVideoOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [videoOpen]);

  return (
    <section
      ref={ref}
      className="relative mx-auto max-w-7xl px-4 py-14 md:py-20 overflow-x-hidden"
    >
      <div className="grid items-center gap-10 md:grid-cols-2">
        {/* LEFT */}
        <div
          className={["wp-enter from-left", inView ? "a-play" : ""].join(" ")}
          style={{ animationDelay: "0.05s" }}
        >
          {/* LABEL with oscillating underline */}
          <p className="label-osc mb-2 text-xs font-semibold uppercase tracking-[0.25em] italic text-[#FF9933]">
            <span>About Us</span>
          </p>

          {/* H2 split into two animated blocks */}
          <h2 className="heading-duo text-3xl font-extrabold leading-tight md:text-5xl">
            <span className="reveal-down text-[#138808] block">
              We Believe This Give For
            </span>
            <span className="reveal-up block">
              Poor People <span className="text-[#FF9933]">Changing Lives</span>
            </span>
          </h2>

          <p className="mt-4 max-w-xl text-slate-600">
            Dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
            aspernatur aut odit aut fugit, sed quia consequuntur. Dicta sunt
            explicabo. Nemo enim ipsam voluptatem quia voluptas.
          </p>

          {/* stats row */}
          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            <StatHex
              color="#FF9933"
              label="Donate Now"
              number="6272+"
              icon="/images/icons/donate.svg"
              animate={inView}
            />
            <StatHex
              color="#F6C445"
              label="Total Fund Raised"
              number="509953+"
              icon="/images/icons/fund.svg"
              animate={inView}
            />
            <StatHex
              color="#21C197"
              label="Our Team Member"
              number="4442471"
              icon="/images/icons/team.svg"
              animate={inView}
            />
          </div>

          {/* CTA row */}
          <div className="mt-8 flex flex-wrap items-center gap-5">
            <a
              href="#donate"
              className="group inline-flex items-center gap-3 rounded-full border border-slate-200 bg-white px-6 py-3 text-[#138808] shadow-sm transition hover:shadow-md"
            >
              Donate Now
              <span className="grid h-8 w-8 place-items-center rounded-full bg-[#FF9933] text-white transition group-hover:translate-x-0.5">
                →
              </span>
            </a>

            {/* Founder */}
            <div className="inline-flex items-center gap-3 rounded-full border border-slate-200 bg-white px-3 py-2 shadow-sm">
              <img
                src="/images/about-two-img-1.jpg"
                alt="Founder"
                className="h-10 w-10 rounded-full object-cover ring-2 ring-white"
              />
              <div className="leading-tight">
                <p className="font-semibold text-[#138808]">Dianne Russell</p>
                <p className="text-xs text-slate-500">Founder</p>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT */}
        <div
          className={[
            "relative pb-16 sm:pb-20 md:pb-24 overflow-hidden",
            "wp-enter from-right",
            inView ? "a-play" : "",
          ].join(" ")}
          style={{ animationDelay: "0.2s" }}
        >
          {/* outer spinning ring */}
          <div
            className="
      pointer-events-none absolute left-1/2 top-1/2 -z-10
      -translate-x-1/2 -translate-y-1/2
      animate-[spin_22s_linear_infinite]
      aspect-square w-[92%] sm:w-[86%] md:w-[90%] max-w-[520px]
    "
            style={{
              borderRadius: "9999px",
              background:
                "repeating-conic-gradient(#FF9933 0 8deg, transparent 8deg 22deg)",
              WebkitMask:
                "radial-gradient(circle at center, transparent 60%, black 61%)",
              mask: "radial-gradient(circle at center, transparent 60%, black 61%)",
              opacity: 0.85,
              filter: "drop-shadow(0 10px 30px rgba(0,0,0,.15))",
            }}
            aria-hidden="true"
          />

          {/* main background image */}
          <div className="relative ml-4 w-[92%] sm:ml-6 sm:w-[88%]">
            <div
              className="relative overflow-hidden rounded-[20px] shadow-[0_24px_50px_rgba(2,6,23,.12)]"
              style={{
                WebkitMaskImage: "url('/images/shapes/torn-mask.png')",
                maskImage: "url('/images/shapes/torn-mask.png')",
                WebkitMaskSize: "cover",
                maskSize: "cover",
                WebkitMaskRepeat: "no-repeat",
                maskRepeat: "no-repeat",
              }}
            >
              <img
                src="/images/about/main.jpg"
                alt="Field work"
                className="h-[280px] w-full object-cover sm:h-[340px] md:h-[420px]"
              />
            </div>
          </div>

          {/* card on left */}
          <div className="absolute -left-2 top-3 w-[30%] sm:w-[35%] md:top-56 z-30">
            <div className="overflow-hidden rounded-[20px] border-4 border-white bg-white shadow-[0_18px_40px_rgba(2,6,23,.15)]">
              <img
                src="/images/About Us Section -Left - 140x215px.jpg"
                alt="Child portrait"
                className="h-[160px] w-full object-cover sm:h-[190px] md:h-[210px]"
              />
            </div>
          </div>

          {/* card on right */}
          <div className="absolute right-2 bottom-36 sm:bottom-1 z-30 w-[70%] sm:w-[28%] md:w-[45%]">
            <div className="overflow-hidden rounded-[18px] border-4 border-white bg-white shadow-[0_18px_40px_rgba(2,6,23,.15)]">
              <img
                src="/images/About Us Section - Right      (250x250px).jpg"
                alt="Community"
                className="h-[140px] w-full object-cover sm:h-[170px] md:h-[200px]"
              />
            </div>
          </div>

          {/* dotted ring + middle card (desktop) — no play button here */}
          <div
            className="absolute hidden sm:block z-20 pointer-events-none"
            style={{ left: "12%", top: "32%", width: "min(88vw, 420px)" }}
          >
            <div
              className="pointer-events-none absolute left-1/2 top-1/2 -z-10 -translate-x-1/2 -translate-y-1/2 animate-[spin_14s_linear_infinite]"
              style={{
                width: 230,
                height: 230,
                borderRadius: "9999px",
                background:
                  "repeating-conic-gradient(#F6C445 0 10deg, transparent 10deg 24deg)",
                WebkitMask:
                  "radial-gradient(circle at center, transparent 68%, black 69%)",
                mask: "radial-gradient(circle at center, transparent 68%, black 69%)",
                opacity: 0.9,
              }}
              aria-hidden="true"
            />
            <div className="relative overflow-hidden rounded-[18px] border-4 border-white bg-white shadow-[0_18px_40px_rgba(2,6,23,.15)]">
              <img
                src="/images/About Us Section - Middle.jpg"
                alt="Middle"
                className="h-[290px] w-full object-cover md:h-[320px]"
              />
            </div>
          </div>

          {/* middle card (mobile) — no play button here */}
          <div className="absolute left-1/2 top-[56%] block w-[72%] -translate-x-1/2 sm:hidden z-20 pointer-events-none">
            <div className="relative overflow-hidden rounded-[18px] border-4 border-white bg-white shadow-[0_18px_40px_rgba(2,6,23,.15)]">
              <img
                src="/images/About Us Section - Middle.jpg"
                alt="Middle"
                className="h-[220px] w-full object-cover"
              />
            </div>
          </div>

          {/* ONE centered overlay button for the whole stack */}
          <div className="absolute inset-0 z-40 grid place-items-center pointer-events-none">
            <button
              className="play-btn pointer-events-auto rounded-full bg-white p-2"
              aria-label="Play video"
              onClick={() => setVideoOpen(true)}
            >
              <span className="grid h-12 w-12 place-items-center rounded-full bg-[#FF9933] text-white shadow-[0_12px_30px_rgba(2,6,23,.35)]">
                ▶
              </span>
              {/* ripple rings */}
              <span className="ripple ripple-1" />
              <span className="ripple ripple-2" />
            </button>
          </div>
        </div>
      </div>

      {/* Modal */}
      {videoOpen && (
        <div
          className="video-overlay"
          role="dialog"
          aria-modal="true"
          aria-label="Video modal"
          onClick={(e) => {
            if (e.target === e.currentTarget) setVideoOpen(false);
          }}
        >
          <div className="video-dialog">
            {/* Replace this block with your real video/embed */}
            <div className="relative w-[86vw] max-w-[860px] overflow-hidden rounded-2xl bg-white">
              <div className="relative pt-[56.25%] bg-black/80">
                {/* <iframe ... /> */}
                <div className="absolute inset-0 grid place-items-center text-white">
                  <p className="opacity-90"> video </p>
                </div>
              </div>

              <button
                className="absolute right-3 top-3 rounded-full bg-white/90 px-3 py-1 text-sm font-semibold text-slate-700 shadow hover:bg-white"
                onClick={() => setVideoOpen(false)}
              >
                Close ✕
              </button>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes spin { to { transform: rotate(360deg); } }

        /* --------- Slow entrance animations that stay --------- */
        .wp-enter { 
          opacity: 0; 
          filter: blur(10px);
          transform: translateZ(0);
          will-change: transform, opacity, filter;
        }
        @keyframes enterLeft {
          0%   { transform: translateX(-140px) scale(.96); opacity:0; filter:blur(12px); }
          60%  { transform: translateX(14px)   scale(1.02); opacity:1; filter:blur(0); }
          85%  { transform: translateX(-6px)   scale(1.0); }
          100% { transform: translateX(0)      scale(1); opacity:1; filter:blur(0); }
        }
        @keyframes enterRight {
          0%   { transform: translateX(140px) scale(.96); opacity:0; filter:blur(12px); }
          60%  { transform: translateX(-14px) scale(1.02); opacity:1; filter:blur(0); }
          85%  { transform: translateX(6px)   scale(1.0); }
          100% { transform: translateX(0)     scale(1); opacity:1; filter:blur(0); }
        }
        .a-play.from-left  { animation: enterLeft 1.9s cubic-bezier(.18,.8,.24,1.06) forwards; }
        .a-play.from-right { animation: enterRight 1.9s cubic-bezier(.18,.8,.24,1.06) forwards; }

        /* --------- Oscillating underline label --------- */
        .label-osc{
          position: relative;
          display: inline-block;
          padding-bottom: 10px; /* space for underline */
        }
        .label-osc::after{
          /* faint full baseline */
          content:"";
          position:absolute;
          left:0; right:0; bottom:4px;
          height:1px;
          background: rgba(255,153,51,0.25);
        }
        .label-osc::before{
          /* gliding underline segment */
          content:"";
          position:absolute;
          bottom:4px;
          height:2px;
          width:42%;
          background:#FF9933;
          border-radius:9999px;
          animation: glide-x 2.6s ease-in-out infinite;
        }
        @keyframes glide-x{
          0%   { left:0%;  transform:translateX(0); }
          50%  { left:58%; transform:translateX(0); }
          100% { left:0%;  transform:translateX(0); }
        }

        /* --------- Split H2 reveals --------- */
        .heading-duo{ overflow: hidden; }
        .reveal-down, .reveal-up{
          position: relative;
          display: block;
          opacity: 0;
          transform: translateY(0);
          will-change: clip-path, transform, opacity;
        }

        /* When the section is in view, trigger the line wipes */
        .a-play .reveal-down{
          animation: wipeDown 0.9s cubic-bezier(.2,.9,.22,1) forwards;
          animation-delay: .12s;
        }
        .a-play .reveal-up{
          animation: wipeUp 0.9s cubic-bezier(.2,.9,.22,1) forwards;
          animation-delay: .32s;
        }

        /* top→down wipe */
        @keyframes wipeDown{
          0%   { opacity:0; transform: translateY(-18px); clip-path: inset(0 0 100% 0); }
          60%  { opacity:1; transform: translateY(4px);  clip-path: inset(0 0 0 0); }
          100% { opacity:1; transform: translateY(0);    clip-path: inset(0 0 0 0); }
        }
        /* bottom→up wipe */
        @keyframes wipeUp{
          0%   { opacity:0; transform: translateY(18px);  clip-path: inset(100% 0 0 0); }
          60%  { opacity:1; transform: translateY(-3px);  clip-path: inset(0 0 0 0); }
          100% { opacity:1; transform: translateY(0);     clip-path: inset(0 0 0 0); }
        }

        /* --------- Play Button Ripple + Shadow --------- */
        .play-btn{
          position: relative;
          display: inline-grid;
          place-items: center;
          isolation: isolate;
        }
        .play-btn .ripple{
          position: absolute;
          inset: 0;
          margin: auto;
          width: 56px;
          height: 56px;
          border-radius: 9999px;
          border: 2px solid rgba(255, 153, 51, 0.45);
          pointer-events: none;
          animation: ripple 2.2s ease-out infinite;
          z-index: -1;
        }
        .play-btn .ripple-1{ animation-delay: 0s; }
        .play-btn .ripple-2{ animation-delay: 1.1s; }
        @keyframes ripple {
          0%   { transform: scale(0.9); opacity: .8; }
          70%  { transform: scale(1.6); opacity: .25; }
          100% { transform: scale(1.9); opacity: 0; }
        }

        /* --------- Modal (scale in/out) --------- */
        .video-overlay{
          position: fixed;
          inset: 0;
          background: rgba(2, 6, 23, 0.65);
          display: grid;
          place-items: center;
          z-index: 1000;
          animation: fadeIn .18s ease-out forwards;
        }
        .video-dialog{
          transform-origin: center;
          animation: popIn .22s cubic-bezier(.2,.9,.22,1) forwards;
        }
        @keyframes fadeIn{
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        @keyframes popIn{
          0%   { transform: scale(.78); opacity: 0; filter: blur(2px); }
          70%  { transform: scale(1.03); opacity: 1; filter: blur(0); }
          100% { transform: scale(1); opacity: 1; }
        }

        /* Motion safety */
        @media (prefers-reduced-motion: reduce) {
          .play-btn .ripple { animation: none !important; }
          .video-overlay, .video-dialog { animation: none !important; }
          .a-play.from-left, .a-play.from-right { animation: none !important; opacity: 1 !important; filter: none !important; transform: none !important; }
          .a-play .reveal-down, .a-play .reveal-up { animation: none !important; opacity: 1 !important; transform: none !important; clip-path: none !important; }
          .label-osc::before { animation: none !important; }
        }
      `}</style>
    </section>
  );
}
