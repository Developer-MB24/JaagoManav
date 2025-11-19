import React, { useState } from "react";

export default function VideoSection() {
  const [isOpen, setIsOpen] = useState(false);

  const openVideo = () => setIsOpen(true);
  const closeVideo = () => setIsOpen(false);

  return (
    <>
      {/* Video thumbnail section */}
      <section className="w-full flex justify-center  py-10">
        <div className="relative w-full  overflow-hidden rounded-md shadow-xl">
          {/* Background image */}
          <div className="relative h-[220px] sm:h-[300px] md:h-[380px] lg:h-[480px]">
            <img
              src="/images/about-two-img-2.jpg"
              alt="Video thumbnail"
              className="h-full w-full object-cover"
            />

            {/* Teal overlay */}
            <div className="absolute inset-0 bg-emerald-900/80" />

            {/* Center play button with ripple */}
            <button
              type="button"
              onClick={openVideo}
              className="group absolute inset-0 m-auto flex h-20 w-20 items-center justify-center rounded-full outline-none"
            >
              {/* Ripple (uses Tailwind animate-ping) */}
              <span className="absolute inline-flex h-full w-full rounded-full bg-yellow-400/70 opacity-75 group-hover:opacity-100 animate-ping" />

              {/* Solid circle */}
              <span className="relative flex h-16 w-16 items-center justify-center rounded-full bg-yellow-400 shadow-lg">
                {/* Play icon */}
                <span className="ml-1 border-l-[18px] border-t-[11px] border-b-[11px] border-l-white border-t-transparent border-b-transparent" />
              </span>
            </button>
          </div>
        </div>
      </section>

      {/* Popup modal with YouTube iframe */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80">
          {/* Close area (click outside to close) */}
          <div className="absolute inset-0" onClick={closeVideo} />

          {/* Modal content */}
          <div className="relative z-50 w-full max-w-5xl px-4">
            {/* Close button */}
            <button
              type="button"
              onClick={closeVideo}
              className="absolute -top-10 right-4 text-white text-3xl leading-none"
            >
              &times;
            </button>

            {/* Responsive iframe wrapper */}
            <div className="relative w-full pt-[56.25%] overflow-hidden rounded-md shadow-xl">
              <iframe
                className="absolute inset-0 h-full w-full"
                src="https://www.youtube.com/embed/WWJ7H4YRQNs?autoplay=1" // replace with your video/channel trailer
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
