import React from "react";

function Hero({ onPlay }) {
  const handlePlay = onPlay || (() => {});

  return (
    <section className="relative w-full overflow-hidden">
      {/* Tricolor base (India flag) */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[#FF9933]/40 via-white to-[#138808]/40" />

      {/* Animated soft glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-[#FF9933] to-transparent opacity-30 animate-slideDown" />
        <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-[#138808] to-transparent opacity-30 animate-slideUp" />
      </div>

      {/* Content */}
      <div className="mx-auto max-w-7xl px-6 py-20 lg:py-24 grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
        {/* Left */}
        <div className="text-black lg:pr-10">
          <nav className="text-sm mb-4 flex items-center gap-2 text-black/85">
            <a href="/" className="hover:underline">
              Home
            </a>
            <span>→</span>
            <span>About Us</span>
          </nav>

          <h1 className="text-5xl md:text-6xl font-bold mb-6 drop-shadow">
            Who We Are
          </h1>
          <p className="text-lg max-w-xl text-black/90 leading-relaxed">
            We’re a community driving sustainable change—bringing people
            together to learn, plant, protect, and celebrate the environment.
          </p>
        </div>

        {/* Right */}
        <div className="relative">
          <img
            src="/images/about-two-img-1.jpg"
            alt="Community"
            className="w-full aspect-[16/10] object-cover rounded-2xl shadow-2xl"
          />

          {/* Diagonal accent (tricolor) */}
          <div className="absolute -left-8 top-0 bottom-0 w-2 rotate-6 bg-gradient-to-b from-[#FF9933] via-white to-[#138808]" />

          {/* Play button */}
          <button
            aria-label="Play video"
            onClick={handlePlay}
            className="absolute inset-0 m-auto w-20 h-20 rounded-full bg-white/85 backdrop-blur flex items-center justify-center shadow-xl transition-transform hover:scale-110"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="w-10 h-10"
              fill="#138808"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
