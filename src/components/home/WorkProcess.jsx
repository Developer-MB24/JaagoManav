import React, { useEffect, useRef, useState } from "react";

const ITEMS = [
  {
    id: 1,
    title: "Awareness & Engagement",
    subtitle: "Support Charity Today",
    photo: "/images/process-1-1.jpg",
    color: "#FF671F",
    step: "01",
    leftHand: "/images/process-one-shape-1-1.png",
    rightHand: "/images/process-one-shape-1.png",
  },
  {
    id: 2,
    title: "Donation Collection",
    subtitle: "Support Charity Today",
    photo: "/images/process-1-3.jpg",
    color: "#F6C445",
    step: "02",
    leftHand: "/images/process-two-shape-left.png",
    rightHand: "/images/process-two-shape-right.png",
  },
  {
    id: 3,
    title: "Impact And Accountability",
    subtitle: "Support Charity Today",
    photo: "/images/process-1-1.jpg",
    color: "#046A38",
    step: "03",
    leftHand: "/images/process-three-shape-left.png",
    rightHand: "/images/process-three-shape-right.png",
  },
];

function useInView(threshold = 0.2) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
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

function HeartPhoto({ src }) {
  const clipId = React.useId();
  return (
    <svg
      viewBox="0 0 500 450"
      className="block w-full h-auto"
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <clipPath id={clipId} clipPathUnits="objectBoundingBox">
          <path
            d="
            M0.502,0.929
            c-0.010,0-0.020-0.003-0.029-0.009
            C0.307,0.794,0.205,0.707,0.149,0.635
            C0.092,0.562,0.062,0.500,0.052,0.441
            C0.037,0.352,0.052,0.257,0.103,0.191
            C0.144,0.138,0.203,0.105,0.268,0.105
            c0.082,0,0.151,0.038,0.202,0.105
            c0.051-0.068,0.120-0.105,0.202-0.105
            c0.065,0,0.124,0.033,0.165,0.086
            c0.051,0.066,0.066,0.161,0.051,0.250
            c-0.011,0.060-0.040,0.121-0.097,0.194
            c-0.056,0.072-0.159,0.159-0.324,0.285
            C0.522,0.926,0.512,0.929,0.502,0.929z
          "
          />
        </clipPath>
      </defs>
      <image
        href={src}
        width="100%"
        height="100%"
        clipPath={`url(#${clipId})`}
      />
    </svg>
  );
}

export default function WorkProcess() {
  const [rootRef, inView] = useInView(0.1);

  return (
    <section ref={rootRef} className="mx-auto max-w-6xl px-4 py-16 md:py-24">
      <div className="text-center">
        <p className="text-xs tracking-[0.25em] uppercase text-primary underline underline-offset-4 decoration-primary/60">
          Work Process
        </p>
        <h2 className="mt-2 text-3xl md:text-4xl font-extrabold text-slate-900">
          Our Donating Work <span className="text-primary">Process</span>
        </h2>
      </div>

      <div className="mt-12 grid gap-10 md:grid-cols-3">
        {ITEMS.map((item, idx) => (
          <Card key={item.id} item={item} index={idx} inView={inView} />
        ))}
      </div>

      {/* keyframes */}
      <style>{`
        @keyframes inLeft   { 0%{opacity:0;transform:translateX(-28px)} 100%{opacity:1;transform:translateX(0)} }
        @keyframes inRight  { 0%{opacity:0;transform:translateX( 28px)} 100%{opacity:1;transform:translateX(0)} }
        @keyframes inUp     { 0%{opacity:0;transform:translateY( 28px)} 100%{opacity:1;transform:translateY(0)} }
        @keyframes floatY   { 0%{transform:translateY(0)} 50%{transform:translateY(-6px)} 100%{transform:translateY(0)} }
      `}</style>
    </section>
  );
}

function Card({ item, index, inView }) {
  const [hovered, setHovered] = useState(false);

  const anim = index === 0 ? "inLeft" : index === 1 ? "inUp" : "inRight";

  return (
    <article
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={[
        "group relative flex flex-col items-center text-center rounded-3xl p-6",
        "transition-transform duration-300 will-change-transform hover:-translate-y-1",
      ].join(" ")}
      style={{
        animation: inView
          ? `${anim} 720ms cubic-bezier(.2,.9,.2,1) forwards`
          : "none",
        opacity: 0,
        animationDelay: inView ? `${140 + index * 120}ms` : "0ms",
      }}
    >
      {/* stack area */}
      <div className="relative w-[86%] max-w-[420px]">
        <div className="pointer-events-none absolute -bottom-1 left-1/2 z-0 -translate-x-1/2">
          <img
            src={item.leftHand}
            alt=""
            className="absolute bottom-0"
            style={{
              width: "68%",
              left: "-74%",
              transform: `translateY(${hovered ? -4 : -2}px)`,
              transition: "transform 450ms ease",
              opacity: 0.95,
            }}
          />
          <img
            src={item.rightHand}
            alt=""
            className="absolute bottom-0"
            style={{
              width: "68%",
              left: "70%",
              transform: `translateY(${hovered ? -4 : -2}px)`,
              transition: "transform 450ms ease",
              opacity: 0.95,
            }}
          />
        </div>

        <div className="relative z-10 mx-auto aspect-[1.05/1] w-full overflow-hidden shadow-soft rounded-[28px]">
          <HeartPhoto src={item.photo} />
        </div>

        <div
          className="absolute -bottom-6 left-1/2 z-20 -translate-x-1/2"
          style={{
            animation: inView ? "floatY 3s ease-in-out infinite" : "none",
          }}
        >
          <Hex color={item.color} text={item.step} />
        </div>
      </div>

      <h3 className="mt-12 text-xl font-semibold text-slate-900">
        {item.title}
      </h3>
      <p className="mt-2 text-slate-600">{item.subtitle}</p>
    </article>
  );
}

function Hex({ color, text }) {
  return (
    <div
      className="relative grid h-16 w-28 place-items-center"
      aria-hidden="true"
    >
      <div
        className="absolute inset-0"
        style={{
          clipPath:
            "polygon(25% 6%, 75% 6%, 100% 50%, 75% 94%, 25% 94%, 0% 50%)",
          background: `${color}22`,
          filter: "blur(0.6px)",
        }}
      />
      <div
        className="absolute inset-1 grid place-items-center text-white font-semibold"
        style={{
          clipPath:
            "polygon(25% 6%, 75% 6%, 100% 50%, 75% 94%, 25% 94%, 0% 50%)",
          background: color,
          boxShadow: "0 12px 24px rgba(0,0,0,.15)",
        }}
      >
        <span className="text-lg leading-none">{text}</span>
      </div>
    </div>
  );
}
