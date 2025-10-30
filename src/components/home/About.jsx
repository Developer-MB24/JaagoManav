import React from "react";

export default function AboutUs() {
  return (
    <section className="relative mx-auto max-w-7xl px-4 py-14 md:py-20 overflow-x-hidden">
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

        {/* RIGHT */}
        <div className="relative pb-16 sm:pb-20 md:pb-24 overflow-hidden">
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
                "repeating-conic-gradient(#FF671F 0 8deg, transparent 8deg 22deg)",
              WebkitMask:
                "radial-gradient(circle at center, transparent 60%, black 61%)",
              mask: "radial-gradient(circle at center, transparent 60%, black 61%)",
              opacity: 0.85,
              filter: "drop-shadow(0 10px 30px rgba(0,0,0,.15))",
            }}
            aria-hidden="true"
          />

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

          {/*  card on left */}
          <div className="absolute -left-2 top-3 w-[30%] sm:w-[22%] md:top-6 z-30">
            <div className="overflow-hidden rounded-[20px] border-4 border-white bg-white shadow-[0_18px_40px_rgba(2,6,23,.15)]">
              <img
                src="/images/about-two-img-1.jpg"
                alt="Child portrait"
                className="h-[160px] w-full object-cover sm:h-[190px] md:h-[210px]"
              />
            </div>
          </div>

          {/* card on right */}
          <div className="absolute right-2 bottom-36 sm:bottom-1 z-30 w-[70%] sm:w-[28%] md:w-[25%]">
            <div className="overflow-hidden rounded-[18px] border-4 border-white bg-white shadow-[0_18px_40px_rgba(2,6,23,.15)]">
              <img
                src="/images/about-two-img-2.jpg"
                alt="Community"
                className="h-[140px] w-full object-cover sm:h-[170px] md:h-[200px]"
              />
            </div>
          </div>

          {/* Middle  */}
          <div className="absolute left-1/2 top-[56%] block w-[72%] -translate-x-1/2 sm:hidden z-20">
            <div className="relative overflow-hidden rounded-[18px] border-4 border-white bg-white shadow-[0_18px_40px_rgba(2,6,23,.15)]">
              <img
                src="/images/about-two-img-3.jpg"
                alt="Middle"
                className="h-[220px] w-full object-cover"
              />
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

          <div
            className="absolute hidden sm:block z-20"
            style={{ left: "12%", top: "32%", width: "min(88vw, 420px)" }}
          >
            {/*  dotted ring */}
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
                src="/images/about-two-img-3.jpg"
                alt="Middle"
                className="h-[290px] w-full object-cover md:h-[320px]"
              />
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
        </div>
      </div>

      {/* animations */}
      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
    </section>
  );
}

function StatHex({ color, label, number, icon }) {
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
        <p className="text-sm font-semibold text-[#0E3B2E]">{label}</p>
        <p className="text-[15px] font-semibold" style={{ color }}>
          {number}
        </p>
      </div>
    </div>
  );
}
