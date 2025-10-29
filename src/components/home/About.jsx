import React from "react";

export default function AboutUs() {
  return (
    <section className="relative mx-auto max-w-7xl px-4 py-16 md:py-24">
      <div className="grid items-center gap-10 md:grid-cols-2">
        {/* LEFT */}
        <div>
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#FF671F] underline underline-offset-4">
            About Us
          </p>

          <h2 className="text-3xl font-extrabold leading-tight text-[#0E3B2E] md:text-5xl">
            We Believe This Give For
            <br />
            Poor People <span className="text-[#FF671F]">Changing Lives</span>
          </h2>

          <p className="mt-4 max-w-xl text-slate-600">
            Dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
            aspernatur aut odit aut fugit, sed quia consequuntur. Dicta sunt
            explicabo. Nemo enim ipsam voluptatem quia voluptas.
          </p>

          {/* stats row */}
          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            <StatHex
              color="#FF671F"
              label="Donate Now"
              number="6272+"
              icon="/images/icons/donate.svg"
            />
            <StatHex
              color="#F6C445"
              label="Total Fund Raised"
              number="509953+"
              icon="/images/icons/fund.svg"
            />
            <StatHex
              color="#21C197"
              label="Our Team Member"
              number="4442471"
              icon="/images/icons/team.svg"
            />
          </div>

          {/* CTA row */}
          <div className="mt-8 flex flex-wrap items-center gap-5">
            <a
              href="#donate"
              className="group inline-flex items-center gap-3 rounded-full border border-slate-200 bg-white px-6 py-3 text-[#0E3B2E] shadow-sm transition hover:shadow-md"
            >
              Donate Now
              <span className="grid h-8 w-8 place-items-center rounded-full bg-[#FF671F] text-white transition group-hover:translate-x-0.5">
                →
              </span>
            </a>

            {/* Founder  */}
            <div className="inline-flex items-center gap-3 rounded-full border border-slate-200 bg-white px-3 py-2 shadow-sm">
              <img
                src="/images/about-two-img-1.jpg"
                alt="Founder"
                className="h-10 w-10 rounded-full object-cover ring-2 ring-white"
              />
              <div className="leading-tight">
                <p className="font-semibold text-[#0E3B2E]">Dianne Russell</p>
                <p className="text-xs text-slate-500">Founder</p>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT: collage */}
        <div className="relative">
          <div className="relative ml-6 w-[88%]">
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
                className="h-[380px] w-full object-cover md:h-[420px]"
              />
            </div>
          </div>

          {/* small  card on left */}
          <div className="absolute -left-2 top-6 w-[20%]">
            <div className="overflow-hidden rounded-[20px] border-4 border-white bg-white shadow-[0_18px_40px_rgba(2,6,23,.15)]">
              <img
                src="/images/about-two-img-1.jpg"
                alt="Child portrait"
                className="h-[210px] w-full object-cover"
              />
            </div>
          </div>

          {/* small square card on right */}
          <div className="absolute bottom-1 right-2 z-50 w-[25%]">
            <div className="overflow-hidden rounded-[18px] border-4 border-white bg-white shadow-[0_18px_40px_rgba(2,6,23,.15)]">
              <img
                src="/images/about-two-img-2.jpg"
                alt="Community"
                className="h-[200px] w-full object-cover"
              />
            </div>
          </div>

          {/* ===== middle tall card (3rd image)*/}
          <div
            className="absolute hidden md:block"
            style={{
              left: "15%",
              top: "30%",
              width: "420px",
            }}
          >
            {/* ROTATING dotted ring */}
            <div
              className="pointer-events-none absolute left-1/2 top-1/2 -z-10 -translate-x-1/2 -translate-y-1/2 animate-[spin_14s_linear_infinite]"
              style={{
                width: 240,
                height: 240,
                borderRadius: "9999px",
                background:
                  "repeating-conic-gradient(#F6C445 0 8deg, transparent 8deg 22deg)",
                WebkitMask:
                  "radial-gradient(circle at center, transparent 72%, black 73%)",
                mask: "radial-gradient(circle at center, transparent 72%, black 73%)",
                opacity: 0.9,
              }}
            />

            <div className="relative overflow-hidden rounded-[18px] border-4 border-white bg-white shadow-[0_18px_40px_rgba(2,6,23,.15)]">
              <img
                src="/images/about-two-img-3.jpg"
                alt="Middle"
                className="h-[320px] w-full object-cover"
              />

              {/*  play button */}
              <button
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white p-2 shadow-lg transition hover:scale-105"
                aria-label="Play video"
                onClick={() => window.alert("Open video modal")}
              >
                <span className="grid h-12 w-12 place-items-center rounded-full bg-[#FF671F] text-white">
                  ▶
                </span>
              </button>
            </div>
          </div>

          <div className="pointer-events-none absolute left-[30%] top-[38%] hidden md:block">
            <svg
              className="h-44 w-[420px] animate-[arcSpin_12s_linear_infinite]"
              viewBox="0 0 260 70"
              fill="none"
            >
              <path
                d="M2 62 C80 20, 180 20, 258 62"
                stroke="#FF671F"
                strokeWidth="2.5"
                strokeDasharray="5 7"
                opacity="0.6"
              />
            </svg>
          </div>

          <span className="absolute -bottom-2 left-[55%] hidden rotate-3 text-[20px] font-semibold text-[#22C55E] md:block">
            24 hour support
          </span>
        </div>
      </div>

      {/* animations */}
      <style>{`
        @keyframes spin { to { transform: rotate(360deg); } }
        /* slow, subtle rotation for the dashed arc */
        @keyframes arcSpin { 
          0% { transform: rotate(0deg); transform-origin: 50% 50%; }
          100% { transform: rotate(360deg); transform-origin: 50% 50%; }
        }
      `}</style>
    </section>
  );
}

function StatHex({ color, label, number, icon }) {
  return (
    <div className="flex items-center gap-3">
      {/* hex */}
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
        <p className="text-sm font-semibold text-[#0E3B2E]">{label}</p>
        <p className="text-[15px] font-semibold" style={{ color }}>
          {number}
        </p>
      </div>
    </div>
  );
}
