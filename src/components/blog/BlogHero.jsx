import React from "react";
import { Link } from "react-router-dom";

export default function BlogHero({
  title = "Blog Right Sidebar",
  bg = "/images/about-two-img-1.jpg",
  crumbs = [{ label: "Home", to: "/" }, { label: "Blog Right Sidebar" }],

  heightClass = "h-[380px] sm:h-[460px] md:h-[440px] lg:h-[490px]",
}) {
  return (
    <section
      className={`relative isolate text-white overflow-hidden ${heightClass}`}
    >
      <img
        src={bg}
        alt="Blog banner"
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-[#138808]/20" />

      <div className="relative z-10 mx-auto max-w-6xl px-4 h-full flex items-end">
        <div className="pb-16 md:pb-20">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight drop-shadow">
            {title}
          </h1>

          <nav className="mt-5 text-sm" aria-label="Breadcrumb">
            <ol className="flex flex-wrap items-center gap-2 text-white/90">
              {crumbs.map((c, i) => {
                const last = i === crumbs.length - 1;
                return (
                  <li key={i} className="flex items-center gap-2">
                    {c.to ? (
                      <Link
                        to={c.to}
                        className="hover:text-white underline-offset-4 hover:underline"
                      >
                        {c.label}
                      </Link>
                    ) : (
                      <span className="font-medium">{c.label}</span>
                    )}
                    {!last && (
                      <svg
                        className="h-4 w-4 opacity-80"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707A1 1 0 118.707 5.293l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    )}
                  </li>
                );
              })}
            </ol>
          </nav>
        </div>
      </div>

      <svg
        className="absolute bottom-0 left-0 w-full h-10 text-white"
        viewBox="0 0 1440 80"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          d="M0,40 C180,70 360,10 540,40 C720,70 900,10 1080,40 C1260,70 1440,10 1440,40 L1440,80 L0,80 Z"
          fill="currentColor"
        />
      </svg>

      <svg
        className="absolute bottom-0 right-8 h-10 w-10 md:h-14 md:w-14 rotate-6"
        viewBox="0 0 100 100"
        aria-hidden="true"
      >
        <path
          d="M72 78c8-2 17-7 18-13 1-6-8-5-11-8-4-4 2-10-2-14-4-4-10 1-14-2-3-2-2-9-8-10-6-1-8 6-12 8-4 2-11-1-14 3-3 4 2 9 1 13-1 5-8 7-7 12 1 6 11 5 16 7 6 2 10 8 16 8 6 0 10-3 17-4Z"
          fill="#f27b21"
          opacity="0.95"
        />
      </svg>
    </section>
  );
}
