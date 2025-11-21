// src/components/whoweare/Hero.jsx
import React, { useState } from "react";

export default function Hero({ onPlay }) {
  const [isOpen, setIsOpen] = useState(false);

  const handlePlay = (e) => {
    e.preventDefault();
    if (onPlay) onPlay();
    setIsOpen(true); // open popup instead of new tab
  };

  const handleClose = () => setIsOpen(false);

  return (
    <>
      <section className="breadcrumb-section w-full px-4 sm:px-6 lg:px-10 xl:px-[20px] py-6 sm:py-8 lg:py-10">
        <div className="w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-0">
            {/* LEFT: breadcrumb content */}
            <div className="relative">
              <div
                className="relative h-full min-h-[220px] sm:min-h-[260px] flex flex-col justify-center rounded-[12px] lg:rounded-[10px_0_0_10px] overflow-hidden z-10 bg-[#134A43] hero-left-clip"
                style={{
                  backgroundImage: "url(/images/breadcrumb-bg.webp)",
                  backgroundSize: "cover",
                  backgroundPosition: "center center",
                  backgroundRepeat: "no-repeat",
                }}
              >
                {/* vertical colored strip on right (visible on lg+) */}
                <div
                  className="hidden lg:block absolute top-0 right-0 h-full"
                  style={{
                    width: 40,
                    background: "#FF9933",
                    transform: "skewX(-5deg)",
                  }}
                />

                {/* SHAPE image */}
                <div className="pointer-events-none absolute right-0 top-0 z-[-1]">
                  <img
                    src="/images/shape-1.webp"
                    alt="shape"
                    className="max-w-full"
                  />
                </div>

                {/* Inner content */}
                <div className="relative z-10 px-5 sm:px-8 lg:px-8 xl:px-[100px] 2xl:px-[120px] py-6 sm:py-8 lg:py-10">
                  {/* breadcrumb nav */}
                  <nav className="mb-3 sm:mb-4">
                    <ul className="m-0 p-0 list-none">
                      <li className="inline-block text-sm sm:text-base md:text-[18px] leading-[26px] md:leading-[30px] text-[#F8F7F0] mr-2 sm:mr-3">
                        <a
                          href="/"
                          className="hover:text-[#FFCC40] transition-colors"
                        >
                          Home
                        </a>
                        <span className="mx-1 sm:mx-2 text-xs sm:text-sm align-middle">
                          →
                        </span>
                      </li>
                      <li className="inline-block text-sm sm:text-base md:text-[18px] leading-[26px] md:leading-[30px] text-[#F8F7F0]">
                        About Us
                      </li>
                    </ul>
                  </nav>

                  {/* title */}
                  <div className="breadcrumb-title">
                    <h2 className="text-white font-semibold text-[28px] leading-[1.2] sm:text-[32px] sm:leading-[1.2] md:text-[36px] md:leading-[1.2] lg:text-[40px] lg:leading-[1.2] xl:text-[52px] xl:leading-[1.1] 2xl:text-[62px] 2xl:leading-[60px] m-0">
                      Who We Are
                    </h2>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT: image + play button */}
            <div className="lg:block">
              {/* show on md+ stacked, hide only on very small if you want: 
                  change to `hidden md:block` if you want to hide on phones */}
              <div className="relative h-[220px] sm:h-[260px] md:h-[300px] lg:h-full overflow-hidden rounded-[12px] lg:rounded-[0_10px_10px_0] lg:-ml-[15px] 2xl:-ml-[10px] xl:-ml-[10px] hero-right-clip">
                <img
                  src="/images/thumb-1.webp"
                  alt="thumb"
                  className="w-full h-full object-cover"
                />

                {/* video play button with custom ripple */}
                <button
                  onClick={handlePlay}
                  aria-label="Play video"
                  className="absolute top-1/2 left-1/2 flex items-center justify-center w-[70px] h-[70px] sm:w-[80px] sm:h-[80px] md:w-[90px] md:h-[90px] lg:w-[100px] lg:h-[100px] -translate-x-1/2 -translate-y-1/2 text-white border border-white rounded-full font-medium text-[20px] sm:text-[22px] md:text-[24px] leading-[30px] bg-white/10 backdrop-blur-[20px] cursor-pointer transition duration-300 hover:bg-[#FF9933] hover:border-[#FF9933] hover:text-[#134A43] overflow-hidden"
                >
                  {/* ripple ring */}
                  <span className="hero-ripple" />
                  {/* inner circle + icon */}
                  <span className="relative flex items-center justify-center w-[48px] h-[48px] sm:w-[56px] sm:h-[56px] md:w-[64px] md:h-[64px] rounded-full bg-white/20">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8"
                      fill="currentColor"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VIDEO POPUP OVERLAY */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">
          {/* close on background click */}
          <button
            className="absolute inset-0 w-full h-full cursor-default"
            onClick={handleClose}
          />
          <div className="relative z-10 w-full max-w-4xl mx-4 bg-black rounded-xl overflow-hidden shadow-2xl">
            {/* close button */}
            <button
              onClick={handleClose}
              className="absolute top-3 right-3 z-20 w-9 h-9 rounded-full bg-black/60 text-white flex items-center justify-center text-xl leading-none hover:bg-black/80"
              aria-label="Close video"
            >
              ×
            </button>
            {/* 16:9 video */}
            <div className="w-full aspect-video">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/fLeJJPxua3E?autoplay=1&rel=0"
                title="Motivational Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}

      {/* Custom ripple + clip-path keyframes / styles */}
      <style>{`
        @keyframes hero-ripple {
          0% {
            transform: scale(1);
            opacity: 0.85;
          }
          100% {
            transform: scale(1.9);
            opacity: 0;
          }
        }
        .hero-ripple {
          position: absolute;
          inset: 0;
          border-radius: 9999px;
          border: 1px solid rgba(255, 255, 255, 0.6);
          animation: hero-ripple 1.6s ease-out infinite;
        }

        /* Clip shapes only on larger screens so phones/tablets look clean */
        .hero-left-clip {
          clip-path: none;
        }
        .hero-right-clip {
          clip-path: none;
        }
        @media (min-width: 1024px) {
          .hero-left-clip {
            clip-path: polygon(0 0, 100% 0, 95% 100%, 0 100%);
          }
          .hero-right-clip {
            clip-path: polygon(5% 0, 100% 0, 100% 100%, 0 100%);
          }
        }
      `}</style>
    </>
  );
}
