import React, { useRef, useState, useEffect } from "react";

/* --- data (keep yours) --- */
const projects = [
  {
    id: "No – 03",
    title: "Waste Management",
    blurb:
      "Energy consulting involves providing of advice and guidance on energy",
    image: "/images/about-two-img-1.jpg",
  },
  {
    id: "No – 02",
    title: "Forest Cleaning",
    blurb:
      "Energy consulting involves providing of advice and guidance on energy",
    image: "/images/about-two-img-2.jpg",
  },
  {
    id: "No – 01",
    title: "Waste Management",
    blurb:
      "Energy consulting involves providing of advice and guidance on energy",
    image: "/images/about-two-img-3.jpg",
  },
  {
    id: "No – 04",
    title: "Community Cleaning",
    blurb:
      "Energy consulting involves providing of advice and guidance on energy",
    image: "/images/about-two-img-1.jpg",
  },
  {
    id: "No – 05",
    title: "Trail Restoration",
    blurb:
      "Energy consulting involves providing of advice and guidance on energy",
    image: "/images/about-two-img-2.jpg",
  },
];

const ArrowRight = ({ className = "w-5 h-5" }) => (
  <svg
    viewBox="0 0 24 24"
    aria-hidden="true"
    className={className}
    fill="currentColor"
  >
    <path d="M13.172 12 8.222 7.05a1 1 0 1 1 1.415-1.415l6.364 6.364a1 1 0 0 1 0 1.414l-6.364 6.364a1 1 0 1 1-1.415-1.414L13.172 12Z" />
  </svg>
);

/* --- CARD: tuned to match the reference exactly --- */
const ProjectCard = ({ item }) => {
  return (
    <div className="relative overflow-hidden  rounded-[36px] shadow-[0_20px_40px_rgba(0,0,0,0.35)] ring-1 ring-black/20 bg-neutral-900/30">
      {/* Image */}
      <div
        className="w-full h-[300px] bg-cover bg-center sm:h-[340px] md:h-[380px] lg:h-[600px] rounded-t-[36px]"
        style={{ backgroundImage: `url('${item.image}')` }}
      />

      {/* Top-right badge */}
      <div className="absolute right-4 top-4">
        <span className="rounded-full bg-black/60 px-3 py-1 text-xs font-semibold tracking-wide text-white backdrop-blur-sm ring-1 ring-white/20">
          {item.id}
        </span>
      </div>

      {/* Bottom glass panel */}
      <div className="absolute inset-x-3 sm:inset-x-5 bottom-3 sm:bottom-5">
        <div
          className="
            rounded-[28px] px-6 py-6 sm:px-8 sm:py-8 text-white
            backdrop-blur-[10px] ring-1 ring-white/20
            shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_20px_40px_rgba(0,0,0,0.35)]
            bg-[radial-gradient(120%_120%_at_30%_10%,rgba(255,255,255,0.12)_0%,rgba(0,0,0,0.65)_55%,rgba(0,0,0,0.78)_100%)]
          "
        >
          <h3 className="text-[26px] sm:text-[32px] font-extrabold leading-tight tracking-tight">
            {item.title}
          </h3>
          <p className="mt-3 text-[15.5px] leading-7 text-white/90">
            {item.blurb}
          </p>

          {/* Gold pill CTA with inner round arrow chip */}
          <button
            type="button"
            className="
              mt-6 inline-flex items-center rounded-full
              bg-gradient-to-b from-[#f6c544] to-[#d6a323]
              px-6 py-3 text-sm font-extrabold text-black
              ring-1 ring-black/10 shadow-[0_10px_20px_rgba(0,0,0,0.25)]
            "
          >
            View All Projects
            <span
              className="
                ml-3 inline-flex h-10 w-10 items-center justify-center rounded-full
                bg-black/10 ring-1 ring-black/10
              "
            >
              <ArrowRight className="w-4 h-4" />
            </span>
          </button>
        </div>
      </div>

      {/* Vignettes to match the soft edge glow */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(80%_140%_at_50%_82%,rgba(0,0,0,0.55)_0%,transparent_60%)]" />
    </div>
  );
};

/* --- Section with carousel behavior (keeps your previous layout) --- */
const CompletedProjects = () => {
  const trackRef = useRef(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    const onScroll = () => {
      const max = el.scrollWidth - el.clientWidth;
      setProgress(max > 0 ? (el.scrollLeft / max) * 100 : 0);
    };
    el.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => el.removeEventListener("scroll", onScroll);
  }, []);

  const scrollByViewport = (dir = 1) => {
    const el = trackRef.current;
    if (!el) return;
    el.scrollBy({ left: el.clientWidth * 0.9 * dir, behavior: "smooth" });
  };

  return (
    <section className="relative overflow-hidden bg-[#000080] text-white">
      {/* paint/wave */}
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute -top-6 left-1/2 z-0 h-24 w-[140%] -translate-x-1/2 opacity-25"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
      >
        <path
          fill="currentColor"
          d="M0,256L48,266.7C96,277,192,299,288,282.7C384,267,480,213,576,197.3C672,181,768,203,864,197.3C960,192,1056,160,1152,170.7C1248,181,1344,235,1392,261.3L1440,288L1440,0L0,0Z"
        />
      </svg>

      <div className="relative z-10 mx-auto max-w-[1300px] px-6 lg:px-10 py-12 lg:py-16">
        {/* header */}
        <div className="flex flex-col gap-7 md:flex-row md:items-center md:justify-between">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-5 py-2 text-sm font-extrabold tracking-wide ring-1 ring-white/20">
              <span className="inline-block h-2 w-2 -translate-y-[1px] rounded-full bg-[#f6c544]" />
              Completed Project
            </span>

            <h2 className="mt-5 text-4xl sm:text-5xl lg:text-4xl font-extrabold leading-[1.05]">
              Explore Our Successful
              <br />
              Camping Project{" "}
              <span role="img" aria-label="celebration">
                😍
              </span>
            </h2>
          </div>

          <div className="md:self-start">
            <button
              type="button"
              className="inline-flex items-center gap-3 rounded-full bg-white/15 px-6 py-3 text-sm font-extrabold text-white ring-1 ring-white/20 transition hover:bg-white/20"
            >
              View All Projects
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#f6c544] text-black">
                <ArrowRight className="w-4 h-4" />
              </span>
            </button>
          </div>
        </div>

        {/* carousel */}
        <div className="relative mt-10 sm:mt-12">
          <div
            ref={trackRef}
            className="flex gap-6 lg:gap-8 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-2 [-ms-overflow-style:none] [scrollbar-width:none]"
          >
            <style>{`.hide-scrollbar::-webkit-scrollbar{display:none}`}</style>
            {projects.map((p, idx) => (
              <div
                key={idx}
                className="hide-scrollbar snap-start shrink-0 w-[88%] sm:w-[70%] md:w-[55%] lg:w-[32%]"
              >
                <ProjectCard item={p} />
              </div>
            ))}
          </div>

          {/* progress */}
          <div className="mx-auto mt-8 h-1 w-64 rounded-full bg-white/25">
            <div
              className="h-1 rounded-full bg-white/90 transition-[width]"
              style={{ width: `${Math.max(10, progress)}%` }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompletedProjects;
