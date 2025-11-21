// src/components/whoweare/Testimonial.jsx
import React, { useEffect, useState } from "react";

const testimonials = [
  {
    id: 1,
    image: "/images/about-two-img-2.jpg",
    rating: "5.0",
    review:
      "I was very impressed 😍 — it involves providing advice and guidance on energy-related matters. Understand the advantages of hiring professionals to design and maintain your garden. 🙋",
    name: "Penelope Miller",
    nick: "(Arjun)",
    role: "Sr. Volunteer",
    videoUrl:
      "https://www.youtube.com/watch?v=fLeJJPxua3E&ab_channel=Motiversity",
  },
  {
    id: 2,
    image: "/images/about-two-img-3.jpg",
    rating: "5.0",
    review:
      "Their dedication to sustainable energy solutions truly stands out. The team is supportive, knowledgeable, and always ready to help communities go greener. 🌿",
    name: "John Maxwell",
    nick: "(Rahul)",
    role: "Team Leader",
    videoUrl:
      "https://www.youtube.com/watch?v=fLeJJPxua3E&ab_channel=Motiversity",
  },
  {
    id: 3,
    image: "/images/about-two-img-1.jpg",
    rating: "5.0",
    review:
      "From planning to execution, everything feels smooth and professional. I love how they blend technology with nature to create real impact. 🌍",
    name: "Denial Pasha",
    nick: "(Sahil)",
    role: "Volunteer",
    videoUrl:
      "https://www.youtube.com/watch?v=fLeJJPxua3E&ab_channel=Motiversity",
  },
];

const AUTOPLAY_MS = 5500;

export default function Testimonial() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePlay = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  // --- simple autoplay ---
  useEffect(() => {
    const id = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, AUTOPLAY_MS);
    return () => clearInterval(id);
  }, []);

  // helper to know “position” of each slide relative to active
  const getOffset = (index) => {
    const n = testimonials.length;
    return (index - activeIndex + n) % n; // 0,1,2,...
  };

  return (
    <section className="pt-24 pb-16 md:pt-20 md:pb-20 bg-white">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex flex-col lg:flex-row items-start justify-between gap-10 lg:gap-16">
          {/* LEFT: Text content */}
          <div className="w-full lg:w-[42%]">
            <div className="space-y-6">
              {/* Subtitle */}
              <div className="flex items-center gap-3">
                <img
                  src="/images/icon-2.svg"
                  alt="icon-2"
                  className="w-9 h-9"
                />
                <span className="text-sm font-semibold text-[#138808]">
                  Testimonials
                </span>
              </div>

              {/* Title */}
              <div>
                <h2 className="text-[2.3rem] md:text-[2.7rem] font-bold leading-tight text-black">
                  Why They Believe{" "}
                  <span className="inline-flex items-center gap-3">
                    <span className="inline-flex items-center justify-center rounded-full bg-black text-[#FFCC40] px-3 py-1">
                      <i className="fa-solid fa-quote-right text-base" />
                    </span>
                    In Us
                  </span>
                </h2>
              </div>

              {/* Text */}
              <p className="text-[#4B5563] text-[15px] md:text-base max-w-md">
                Likely to then a dental prosthetic is added, creating a stronger
                foundation for long-lasting and sustainable smiles.
              </p>

              {/* Reviews summary */}
              <div className="flex items-center gap-4">
                <h3
                  className="text-[40px] md:text-[46px] font-semibold leading-none"
                  style={{
                    color: "transparent",
                    WebkitTextStroke: "1px #4B5563",
                  }}
                >
                  99%
                </h3>
                <img
                  src="/images/favicon.webp"
                  alt="favicon"
                  className="w-10 h-10 md:w-11 md:h-11"
                />
                <h5 className="text-[20px] md:text-[22px] font-semibold text-black/40">
                  Positive Reviews
                </h5>
              </div>

              {/* Review button */}
              <a
                href="/contact"
                className="inline-flex items-center gap-3 max-w-[260px] w-full border-2 border-[rgba(0,69,64,0.1)] rounded-2xl px-4 py-3 hover:border-[#134A43] transition-colors duration-200 bg-white"
              >
                <img
                  src="/images/icon-3.svg"
                  alt="review-icon"
                  className="w-11 h-11 md:w-10 md:h-10"
                />
                <span className="text-sm md:text-[15px] font-medium text-[#134A43] leading-snug">
                  <span className="inline-flex items-center gap-2">
                    Write your honest review
                    <i className="fa-solid fa-arrow-right-long text-xs" />
                  </span>
                </span>
              </a>
            </div>
          </div>

          {/* RIGHT: stacked auto slider */}
          <div className="w-full lg:w-[48%]">
            <div className="relative h-[360px] md:h-[400px] lg:h-[430px] flex items-center justify-end overflow-visible">
              {testimonials.map((item, index) => {
                const offset = getOffset(index); // 0 = active, 1/2 = behind, others hidden
                let translateX = 0;
                let scale = 1;
                let opacity = 1;
                let zIndex = 30;
                let bgOpacity = 1;

                if (offset === 1) {
                  // 1st card behind
                  translateX = -70;
                  scale = 0.96;
                  opacity = 0.7;
                  zIndex = 20;
                  bgOpacity = 0.75;
                } else if (offset === 2) {
                  // 2nd card behind
                  translateX = -140;
                  scale = 0.9;
                  opacity = 0.5;
                  zIndex = 10;
                  bgOpacity = 0.55;
                } else if (offset !== 0) {
                  // hide others
                  opacity = 0;
                  zIndex = 0;
                  scale = 0.9;
                  translateX = -140;
                }

                return (
                  <div
                    key={item.id}
                    className="absolute inset-y-0 right-0 flex items-center justify-end transition-all duration-700 ease-[cubic-bezier(0.22,0.61,0.36,1)]"
                    style={{
                      transform: `translateX(${translateX}px) scale(${scale})`,
                      opacity,
                      zIndex,
                    }}
                  >
                    <div
                      className="rounded-[26px] md:rounded-[30px] bg-[#138808] flex flex-col md:flex-row items-center gap-6 md:gap-8 shadow-xl overflow-hidden w-full max-w-[720px]"
                      style={{
                        backgroundColor:
                          offset === 0
                            ? "#138808"
                            : `rgba(19, 136, 8, ${bgOpacity})`,
                      }}
                    >
                      {/* Thumb with play button + ripple */}
                      <div className="relative w-full md:w-[280px] lg:w-[200px] h-[260px] md:h-[280px] pl-5 rounded-xl flex-shrink-0 overflow-hidden">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-cover"
                        />

                        {/* outer frosted circle */}
                        <button
                          type="button"
                          onClick={() => handlePlay(item.videoUrl)}
                          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center rounded-full border-[3px] border-white/80 w-[120px] h-[120px] md:w-[132px] md:h-[132px] bg-white/10 backdrop-blur-[9px] text-white text-lg font-medium relative overflow-hidden"
                        >
                          {/* ripple ring */}
                          <span
                            className="absolute inset-0 rounded-full"
                            style={{
                              boxShadow:
                                "0 0 0 0 rgba(255,255,255,0.7), 0 0 0 24px rgba(255,255,255,0.0)",
                              animation: "testimonial-ripple 2.4s infinite",
                            }}
                          />
                          <span className="relative">Play</span>
                        </button>
                      </div>

                      {/* Content */}
                      <div className="flex-1 px-6 py-5 md:py-8 md:pr-5">
                        {/* Rating pill */}
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/35 bg-white/10 shadow-inner mb-5">
                          <p className="text-xs md:text-sm font-medium text-white m-0">
                            Rating
                          </p>
                          <i className="fa-solid fa-star-sharp text-[#FFCC40] text-xs md:text-sm" />
                          <span className="text-xs md:text-sm font-medium text-[#FFCC40]">
                            {item.rating}
                          </span>
                        </div>

                        {/* Review text */}
                        <p className="text-[15px] md:text-base text-white leading-relaxed mb-8">
                          {item.review}
                        </p>

                        {/* Author */}
                        <div className="space-y-1">
                          <h5 className="text-white text-[18px] md:text-[20px] font-semibold">
                            {item.name}
                            <span className="text-sm font-normal ml-1">
                              {item.nick}
                            </span>
                          </h5>
                          <h6 className="text-white/80 text-sm font-light">
                            {item.role}
                          </h6>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Ripple keyframes */}
      <style>{`
        @keyframes testimonial-ripple {
          0% {
            box-shadow:
              0 0 0 0 rgba(255,255,255,0.75),
              0 0 0 0 rgba(255,255,255,0.0);
          }
          60% {
            box-shadow:
              0 0 0 18px rgba(255,255,255,0.05),
              0 0 0 40px rgba(255,255,255,0.0);
          }
          100% {
            box-shadow:
              0 0 0 26px rgba(255,255,255,0.0),
              0 0 0 65px rgba(255,255,255,0.0);
          }
        }
      `}</style>
    </section>
  );
}
