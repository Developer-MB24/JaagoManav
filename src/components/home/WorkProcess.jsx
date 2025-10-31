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
    photo: "/images/process-1-1.jpg",
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
    photo: "/images/about-two-img-1.jpg",
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
    photo: "/images/process-1-3.jpg",
    iconClass: "icon-kindness",
    circleColor: "#138808", // green
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
  const [rootRef, inView] = useInView(0.12);

  return (
    <section
      ref={rootRef}
      className="process-one relative z-[1] py-28 md:py-28"
    >
      <div className="container mx-auto px-4">
        <div className="text-center">
          <span className="uppercase tracking-[0.25em] text-[#138808]">
            Work Process
          </span>
          <h2 className="mt-2 text-3xl md:text-4xl font-extrabold text-slate-900">
            Our Donating Work <span className="text-[#FF9933]">Process</span>
          </h2>
        </div>

        {/* Cards */}
        <ul className="row mt-12 grid list-unstyled gap-10 md:grid-cols-3">
          {ITEMS.map((item, idx) => {
            const Icon = ICON_MAP[item.iconClass] || UserRound;
            return (
              <li
                key={item.id}
                className={[
                  idx === 0 ? "a-inRight" : idx === 1 ? "a-inUp" : "a-inLeft",
                  inView ? "a-play" : "",
                ].join(" ")}
                style={{ animationDelay: `${idx * 0.12}s` }}
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
        .process-one__img{max-width:300px;margin:0 auto;position:relative;}
        .process-one__icon{
          position:absolute;left:50%;transform:translateX(-50%);
          bottom:20px;z-index:3;width:80px;height:80px;
          display:flex;align-items:center;justify-content:center;
          border-radius:9999px;box-shadow:0 12px 24px rgba(0,0,0,.15);
        }
        .process-one__shape-1,.process-one__shape-2{
          position:absolute;bottom:-30px;opacity:.20;
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
      `}</style>
    </section>
  );
}
