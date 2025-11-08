import React, { useEffect, useRef, useState } from "react";
import { UserRound, HandCoins, Handshake } from "lucide-react";

const ICON_MAP = {
  "icon-user-1": UserRound,
  "icon-financing": HandCoins,
  "icon-kindness": Handshake,
};

const ITEMS = [
  {
    id: 1,
    title: "Awareness & Engagement",
    subtitle: "Support Charity Today",
    photo: "/images/Heart Section - 1 ( 300x300px).jpg",
    iconClass: "icon-user-1",
    circleColor: "#FF9933",
    hexColor: "#FF9933",
    leftHand: "/images/process-one-shape-1.png",
    rightHand: "/images/process-one-shape-1-1.png",
  },
  {
    id: 2,
    title: "Donation Collection",
    subtitle: "Support Charity Today",
    photo: "/images/Heart Section 2 - 300x300px.jpg",
    iconClass: "icon-financing",
    circleColor: "#000080",
    hexColor: "#000080",
    leftHand: "/images/process-one-shape-1.png",
    rightHand: "/images/process-one-shape-1-1.png",
  },
  {
    id: 3,
    title: "Impact And Accountability",
    subtitle: "Support Charity Today",
    photo: "/images/Heart Section 3 - 300x300px.jpg",
    iconClass: "icon-kindness",
    circleColor: "#138808",
    hexColor: "#138808",
    leftHand: "/images/process-one-shape-1.png",
    rightHand: "/images/process-one-shape-1-1.png",
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
      aria-hidden="true"
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
        className="photo-zoom"
      />
    </svg>
  );
}

export default function WorkProcess() {
  const [rootRef, inView] = useInView(0.12);

  return (
    <section
      ref={rootRef}
      className="process-one relative z-[1] py-28 md:py-28"
    >
      <div className="container mx-auto px-4">
        {/* Heading block with in-view trigger */}
        <div
          className={["text-center wp-head", inView ? "a-play" : ""].join(" ")}
        >
          {/* italic orange label with oscillating underline */}
          <p className="label-osc mx-auto inline-block text-xs font-semibold uppercase tracking-[0.25em] italic text-[#FF9933]">
            <span>Work Process</span>
          </p>

          {/* h2 split into two animated lines */}
          <h2 className="heading-duo mt-2 text-3xl md:text-4xl font-extrabold text-slate-900">
            <span className="reveal-down block">
              Our Donating Work <span className="text-[#FF9933]">Process</span>
            </span>
          </h2>
        </div>

        {/* Cards */}
        <ul className="row mt-12 grid list-unstyled gap-10 md:grid-cols-3">
          {ITEMS.map((item, idx) => {
            const Icon = ICON_MAP[item.iconClass] || UserRound;
            const dirClass =
              idx === 0 ? "from-left" : idx === 1 ? "from-top" : "from-right";

            return (
              <li
                key={item.id}
                className={["wp-card", dirClass, inView ? "a-play" : ""].join(
                  " "
                )}
                style={{ animationDelay: `${idx * 0.22}s` }}
                onAnimationEnd={(e) => {
                  if (
                    e.animationName === "enterLeft" ||
                    e.animationName === "enterTop" ||
                    e.animationName === "enterRight"
                  ) {
                    e.currentTarget.classList.add("wp-card-done");
                  }
                }}
              >
                <div className="process-one__single-inner relative">
                  <div className="process-one__single relative">
                    <div className="process-one__img relative mx-auto z-[1]">
                      <HeartPhoto src={item.photo} />

                      <div
                        className="process-one__icon"
                        style={{
                          backgroundColor: item.circleColor,
                          border: "3px solid white",
                        }}
                        aria-hidden="true"
                      >
                        <Icon
                          size={38}
                          strokeWidth={2.3}
                          color={
                            item.circleColor === "#FFFFFF"
                              ? "#138808"
                              : "#FFFFFF"
                          }
                        />
                      </div>
                    </div>

                    <div className="process-one__shape-1">
                      <img src={item.leftHand} alt="" />
                    </div>
                    <div className="process-one__shape-2">
                      <img src={item.rightHand} alt="" />
                    </div>
                  </div>

                  <div
                    className="process-one__count-inner"
                    style={{ backgroundColor: `${item.hexColor}33` }}
                  >
                    <div
                      className="process-one__count"
                      style={{ backgroundColor: item.hexColor }}
                    >
                      <span className="count-text text-white text-[30px] leading-[30px] font-bold">
                        {String(idx + 1).padStart(2, "0")}
                      </span>
                    </div>
                  </div>

                  {/* Text */}
                  <div className="process-one__content text-center mt-6">
                    <h3 className="text-[24px] leading-[34px] font-bold capitalize text-slate-900">
                      {item.title}
                    </h3>
                    <p className="text-slate-600">{item.subtitle}</p>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>

      <style>{`
        /* --------- Heading: label + split h2 animations --------- */
        .label-osc{
          position: relative;
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
          0%   { left:0%; }
          50%  { left:58%; }
          100% { left:0%; }
        }

        .heading-duo{ overflow:hidden; }
        .reveal-down, .reveal-up{
          position:relative;
          opacity:0;
          will-change: clip-path, transform, opacity;
        }
        /* Trigger the wipes when the head block is in view */
        .a-play.wp-head .reveal-down{
          animation: wipeDown 0.9s cubic-bezier(.2,.9,.22,1) forwards;
          animation-delay: .08s;
        }
        .a-play.wp-head .reveal-up{
          animation: wipeUp 0.9s cubic-bezier(.2,.9,.22,1) forwards;
          animation-delay: .26s;
        }
        @keyframes wipeDown{
          0%   { opacity:0; transform: translateY(-16px); clip-path: inset(0 0 100% 0); }
          60%  { opacity:1; transform: translateY(4px);    clip-path: inset(0 0 0 0); }
          100% { opacity:1; transform: translateY(0);       clip-path: inset(0 0 0 0); }
        }
        @keyframes wipeUp{
          0%   { opacity:0; transform: translateY(16px);   clip-path: inset(100% 0 0 0); }
          60%  { opacity:1; transform: translateY(-3px);   clip-path: inset(0 0 0 0); }
          100% { opacity:1; transform: translateY(0);      clip-path: inset(0 0 0 0); }
        }

        /* --------- Base layout for cards --------- */
        .process-one__img{max-width:300px;margin:0 auto;position:relative;}
        .process-one__icon{
          position:absolute;left:50%;transform:translateX(-50%);
          bottom:20px;z-index:3;width:80px;height:80px;
          display:flex;align-items:center;justify-content:center;
          border-radius:9999px;box-shadow:0 12px 24px rgba(0,0,0,.18);
        }
        .process-one__shape-1,.process-one__shape-2{
          position:absolute;bottom:-30px;opacity:.25;filter:drop-shadow(0 4px 8px rgba(0,0,0,.12));
        }
        .process-one__shape-1{left:67px;}
        .process-one__shape-2{right:67px;}
        .process-one__count-inner{
          position:relative;z-index:2;display:flex;align-items:center;justify-content:center;
          width:90px;height:70px;margin:-20px auto 0;padding:5px;
          clip-path:polygon(25% 0%,75% 0%,100% 50%,75% 100%,25% 100%,0% 50%);
        }
        .process-one__count{
          display:flex;align-items:center;justify-content:center;
          width:80px;height:60px;
          clip-path:polygon(25% 0%,75% 0%,100% 50%,75% 100%,25% 100%,0% 50%);
        }

        /* =========================
           SLOW + STAY ANIMATIONS
           ========================= */
        .wp-card{
          opacity:0;
          transform:translateZ(0);
          filter:blur(8px);
          will-change: transform, opacity, filter;
        }

        @keyframes enterLeft {
          0%   { transform:translateX(-160px) rotate(-3deg) scale(.94); opacity:0; filter:blur(10px); }
          60%  { transform:translateX(14px)   rotate(1deg)  scale(1.03); opacity:1; filter:blur(0); }
          85%  { transform:translateX(-6px)   rotate(-.4deg) scale(1.0); }
          100% { transform:translateX(0)      rotate(0)     scale(1); opacity:1; filter:blur(0); }
        }
        @keyframes enterTop {
          0%   { transform:translateY(-180px) rotate(-2deg) scale(.9);  opacity:0; filter:blur(12px); }
          55%  { transform:translateY(12px)   rotate(1deg)  scale(1.04); opacity:1; filter:blur(0); }
          85%  { transform:translateY(-5px)   rotate(-.3deg) scale(1.0); }
          100% { transform:translateY(0)      rotate(0)     scale(1); opacity:1; filter:blur(0); }
        }
        @keyframes enterRight {
          0%   { transform:translateX(180px) rotate(3deg)  scale(.94); opacity:0; filter:blur(10px); }
          60%  { transform:translateX(-14px) rotate(-1deg) scale(1.03); opacity:1; filter:blur(0); }
          85%  { transform:translateX(6px)   rotate(.3deg) scale(1.0); }
          100% { transform:translateX(0)     rotate(0)     scale(1); opacity:1; filter:blur(0); }
        }

        .a-play.from-left  { animation: enterLeft 1.85s cubic-bezier(.18,.8,.24,1.06) forwards 1; }
        .a-play.from-top   { animation: enterTop  1.95s cubic-bezier(.18,.8,.24,1.06) forwards 1; }
        .a-play.from-right { animation: enterRight 1.85s cubic-bezier(.18,.8,.24,1.06) forwards 1; }

        .a-play.wp-card-done,
        .a-play.from-left.wp-card-done,
        .a-play.from-top.wp-card-done,
        .a-play.from-right.wp-card-done{
          opacity:1 !important;
          transform:none !important;
          filter:none !important;
          animation:none !important;
        }

        .a-play .photo-zoom{
          animation: photoIn 1.6s ease-out both 1;
          transform-origin:center;
        }
        @keyframes photoIn{
          0%   { transform:scale(1.1); }
          100% { transform:scale(1.0); }
        }

        .a-play .process-one__icon{
          animation: popIn 0.95s .25s cubic-bezier(.18,.89,.32,1.28) both 1,
                     iconFloat 6s 1.4s ease-in-out infinite;
          transform-origin:50% 100%;
        }
        @keyframes popIn{
          0%   { transform:translateX(-50%) translateY(30px) scale(.6); opacity:0; }
          70%  { transform:translateX(-50%) translateY(-8px) scale(1.08); opacity:1; }
          100% { transform:translateX(-50%) translateY(0)    scale(1); }
        }
        @keyframes iconFloat{
          0%   { transform:translateX(-50%) translateY(0); }
          50%  { transform:translateX(-50%) translateY(-6px); }
          100% { transform:translateX(-50%) translateY(0); }
        }

        .a-play .process-one__count{
          animation:pulseGlow 2s .45s ease-in-out 2 both;
          box-shadow:0 0 0 rgba(0,0,0,0);
        }
        @keyframes pulseGlow{
          0%   { transform:scale(1);   box-shadow:0 0 0 0 rgba(0,0,0,.0); }
          50%  { transform:scale(1.06);box-shadow:0 10px 26px rgba(0,0,0,.18); }
          100% { transform:scale(1);   box-shadow:0 0 0 0 rgba(0,0,0,.0); }
        }

        .a-play .process-one__shape-1{
          animation:handFloatLeft 7s ease-in-out .8s infinite;
          transform-origin:bottom left;
        }
        .a-play .process-one__shape-2{
          animation:handFloatRight 7s ease-in-out 1.1s infinite;
          transform-origin:bottom right;
        }
        @keyframes handFloatLeft{
          0%   { transform:translateY(0) rotate(0deg) }
          50%  { transform:translateY(-6px) rotate(-1.5deg) }
          100% { transform:translateY(0) rotate(0deg) }
        }
        @keyframes handFloatRight{
          0%   { transform:translateY(0) rotate(0deg) }
          50%  { transform:translateY(-7px) rotate(1.5deg) }
          100% { transform:translateY(0) rotate(0deg) }
        }

        .wp-card:hover .process-one__single-inner{
          transform:translateY(-6px);
          transition:transform .35s ease;
        }

        /* Motion safety */
        @media (prefers-reduced-motion: reduce) {
          .label-osc::before { animation: none !important; }
          .wp-head .reveal-down, .wp-head .reveal-up { animation: none !important; opacity: 1 !important; transform: none !important; clip-path: none !important; }
          .wp-card,
          .a-play.from-left,
          .a-play.from-top,
          .a-play.from-right,
          .a-play .photo-zoom,
          .a-play .process-one__icon,
          .a-play .process-one__count,
          .a-play .process-one__shape-1,
          .a-play .process-one__shape-2 {
            animation:none !important;
            transition:none !important;
            filter:none !important;
            opacity:1 !important;
            transform:none !important;
          }
        }
      `}</style>
    </section>
  );
}
