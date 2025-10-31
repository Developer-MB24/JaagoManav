import React from "react";

export default function CallToAction({
  title = (
    <>
      We Are{" "}
      <span className="text-[#FF9933] font-bold">Non profit charity</span>{" "}
      <span className="text-[#138808] font-bold">world</span> Organization
    </>
  ),
  subtitle = (
    <>
      Denouncing pleasure and praising pain was born and will give you a
      complete great explorer of the truth the master-builder.
    </>
  ),
  buttonText = "Donate Now",
  photo = "/images/about-two-img-1.jpg",
  handImage = "/images/left-right-hand-image.png",
}) {
  return (
    <section className="relative bg-[#0e3b37] py-16 sm:py-20">
      <div className="mx-auto max-w-5xl px-4">
        <div className="relative isolate rounded-[22px] bg-[#eef7f6] px-6 py-14 sm:px-10 text-center shadow-md overflow-hidden">
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
            {handImage ? (
              <img
                src={handImage}
                alt=""
                className="w-[620px] sm:w-[720px] md:w-[820px] lg:w-[900px] object-contain opacity-10"
              />
            ) : (
              <HandsWatermark className="absolute inset-0 text-emerald-900/5 scale-110" />
            )}
          </div>

          <h2 className="relative z-10 text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-800">
            {title}
          </h2>

          <p className="relative z-10 mt-3 max-w-3xl mx-auto text-sm sm:text-base text-slate-600">
            {subtitle}
          </p>

          <div className="relative z-10 mt-6">
            <button className="inline-flex items-center gap-3 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-slate-800 border border-slate-200 shadow hover:shadow-md transition">
              {buttonText}
              <span className="inline-grid place-items-center h-7 w-7 rounded-full bg-[#FF9933] text-white text-base leading-none">
                •
              </span>
            </button>
          </div>

          <div className="absolute -bottom-10 left-1/2 -translate-x-1/2">
            <div className="h-20 w-20 sm:h-24 sm:w-24 rounded-full ring-4 ring-[#eef7f6] overflow-hidden shadow-md">
              <img
                src={photo}
                alt="Beneficiary"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function HandsWatermark({ className = "" }) {
  return (
    <svg viewBox="0 0 800 400" className={className} aria-hidden="true">
      <g fill="currentColor">
        <path d="M150 250c-30-40-26-82 8-90 19-5 34 7 42 26 3-23 16-39 36-37 19 1 28 17 27 39 8-19 24-29 41-21 18 8 18 30 10 52-10 27-36 57-64 72-41 22-76 2-100-41z" />
        <path d="M650 250c30-40 26-82-8-90-19-5-34 7-42 26-3-23-16-39-36-37-19 1-28 17-27 39-8-19-24-29-41-21-18 8-18 30-10 52 10 27 36 57 64 72 41 22 76 2 100-41z" />
      </g>
    </svg>
  );
}
