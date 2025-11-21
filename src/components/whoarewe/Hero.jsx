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
      <section className="breadcrumb-section w-full px-[85px] 2xl:px-4 xl:px-0 lg:px-0 md:px-0 sm:px-0 py-10">
        <div className="w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            {/* LEFT: breadcrumb content */}
            <div className="relative">
              <div
                className="relative h-full min-h-[260px] flex flex-col justify-center rounded-[10px_0_0_10px] overflow-hidden z-10 bg-[#134A43]"
                style={{
                  backgroundImage: "url(/images/breadcrumb-bg.webp)",
                  backgroundSize: "cover",
                  backgroundPosition: "center center",
                  backgroundRepeat: "no-repeat",
                  clipPath: "polygon(0 0, 100% 0, 95% 100%, 0 100%)",
                }}
              >
                {/* vertical colored strip on right */}
                <div
                  className="absolute top-0 right-0 h-full"
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
                <div className="relative z-10 px-[180px] pr-[100px] 2xl:px-10 xl:px-10 lg:px-5 md:px-5 sm:px-5 py-10">
                  {/* breadcrumb nav */}
                  <nav className="mb-5">
                    <ul className="m-0 p-0 list-none">
                      <li className="inline-block text-[18px] leading-[30px] text-[#F8F7F0] mr-3">
                        <a
                          href="/"
                          className="hover:text-[#FFCC40] transition-colors"
                        >
                          Home
                        </a>
                        <span className="mx-2 text-sm align-middle">→</span>
                      </li>
                      <li className="inline-block text-[18px] leading-[30px] text-[#F8F7F0]">
                        About Us
                      </li>
                    </ul>
                  </nav>

                  {/* title */}
                  <div className="breadcrumb-title">
                    <h2 className="text-white font-semibold text-[62px] leading-[60px] lg:text-[40px] lg:leading-[1.2] md:text-[32px] md:leading-[1.2] sm:text-[32px] sm:leading-[1.2] m-0">
                      Who We Are
                    </h2>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT: image + play button */}
            <div className="hidden lg:block">
              <div
                className="relative h-full overflow-hidden rounded-[0_10px_10px_0] -ml-[15px] 2xl:-ml-[10px] xl:-ml-[10px] lg:-ml-2"
                style={{
                  clipPath: "polygon(5% 0, 100% 0, 100% 100%, 0 100%)",
                }}
              >
                <img
                  src="/images/thumb-1.webp"
                  alt="thumb"
                  className="w-full h-full object-cover"
                />

                {/* video play button with custom ripple */}
                <button
                  onClick={handlePlay}
                  aria-label="Play video"
                  className="absolute top-1/2 left-1/2 flex items-center justify-center w-[100px] h-[100px] -translate-x-1/2 -translate-y-1/2 text-white border border-white rounded-full font-medium text-[25px] leading-[30px] bg-white/5 backdrop-blur-[28px] cursor-pointer transition duration-300 hover:bg-[#FF9933] hover:border-[#FF9933] hover:text-[#134A43] overflow-hidden"
                >
                  {/* ripple ring */}
                  <span className="hero-ripple" />
                  {/* inner circle + icon */}
                  <span className="relative flex items-center justify-center w-[70px] h-[70px] rounded-full bg-white/20">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      className="w-8 h-8"
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

      {/* Custom ripple keyframes */}
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
      `}</style>
    </>
  );
}
