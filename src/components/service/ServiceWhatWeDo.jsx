// src/components/service/ServiceWhatWeDo.jsx
import React from "react";

const services = [
  {
    id: 1,
    number: "No – 01",
    image: "/images/thumb-14.webp",
    title: "Waste Management",
    description:
      "Energy consulting involves providing of advice and guidance on energy",
    href: "/econest/services-details",
  },
  {
    id: 2,
    number: "No – 02",
    image: "/images/thumb-15.webp",
    title: "Cleaning Ocean",
    description:
      "Energy consulting involves providing of advice and guidance on energy",
    href: "/econest/services-details",
  },
  {
    id: 3,
    number: "No – 03",
    image: "/images/thumb-16.webp",
    title: "Plastic Recycling",
    description:
      "Energy consulting involves providing of advice and guidance on energy",
    href: "/econest/services-details",
  },
];

export default function ServiceWhatWeDo() {
  return (
    <section
      className="relative overflow-hidden py-24 md:py-20 px-4"
      style={{
        backgroundImage: "url(/images/what-we-do-bg.webp)",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      {/* shapes (IMPORTANT: put files in /public/images/shapes/...) */}
      <div className="pointer-events-none absolute top-0 right-0 z-10">
        <img
          src="/images/shapes/shape-10.webp"
          alt="shape-10"
          className="max-w-full"
        />
      </div>
      <div className="pointer-events-none absolute bottom-0 left-0 z-10">
        <img
          src="/images/shapes/shape-11.webp"
          alt="shape-11"
          className="max-w-full"
        />
      </div>

      <div className="max-w-6xl mx-auto">
        {/* TOP ROW */}
        <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-12 md:mb-10">
          {/* Left: subtitle + title */}
          <div className="max-w-2xl w-full">
            <div className="flex items-center gap-3 mb-4">
              <img
                src="/images/icon-1.svg"
                alt="icon-1"
                className="w-7 h-7 md:w-8 md:h-8"
              />
              <span className="text-sm font-semibold tracking-wide text-[#FFCC40]">
                What We Do
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-[40px] font-semibold text-white leading-tight">
              We Offer Different Services
              <br className="hidden md:block" /> For Helped You
            </h2>
          </div>

          {/* Right: quote + link */}
          <div className="max-w-md w-full">
            <p className="text-white text-[15px] md:text-[18px] leading-[1.8] mb-3">
              “Advanced cameras combined with a large display fast performance,
              and highly calibrated.”
            </p>

            <a
              href="/econest/services"
              className="inline-flex items-center gap-2 text-[15px] font-semibold text-[#FFCC40] hover:text-[#FFE28A] transition-colors"
            >
              View All Service
              <span className="inline-flex items-center justify-center">
                <span className="flex items-center gap-[2px] text-xs">
                  <span>→</span>
                  <span className="-ml-0.5">→</span>
                </span>
              </span>
            </a>
          </div>
        </div>

        {/* CARDS */}
        <div className="grid gap-7 md:gap-8 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.id}
              className="relative rounded-[18px] overflow-hidden bg-[#00332f] shadow-[0_18px_60px_rgba(0,0,0,0.45)] group"
            >
              {/* image */}
              <div className="relative">
                <a href={service.href} className="block">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.06]"
                  />
                </a>

                {/* number pill */}
                <div className="absolute top-4 right-4">
                  <span className="inline-flex items-center justify-center rounded-full px-4 py-1.5 text-xs font-medium text-white bg-white/15 border border-white/30 backdrop-blur">
                    {service.number}
                  </span>
                </div>
              </div>

              {/* gradient overlay content */}
              <div className="absolute left-0 right-0 bottom-0 px-4 pb-4 pt-0 md:px-6 md:pb-6">
                <div
                  className="rounded-[18px] md:rounded-[20px] px-5 py-4 md:px-6 md:py-5 border border-white/10 shadow-[0_22px_60px_rgba(0,0,0,0.45)]"
                  style={{
                    background:
                      "linear-gradient(110deg, rgba(0,51,47,0.95) 0%, rgba(0,51,47,0.85) 40%, rgba(0,51,47,0.55) 100%)",
                    backdropFilter: "blur(14px)",
                  }}
                >
                  <h5 className="text-[20px] md:text-[22px] font-semibold text-white mb-2">
                    {service.title}
                  </h5>
                  <p className="text-[14px] md:text-[15px] leading-7 text-white/85 mb-4">
                    {service.description}
                  </p>

                  {/* Read more button – appears on hover only */}
                  <div className="flex justify-start">
                    <a
                      href={service.href}
                      className="inline-flex items-center gap-2 rounded-full bg-[#FFCC40] text-[#004540] px-5 py-2.5 text-sm font-semibold shadow-[0_10px_30px_rgba(0,0,0,0.35)] opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300"
                    >
                      Read More
                      <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-[#004540] text-[#FFCC40] text-[11px]">
                        <span className="flex items-center gap-[2px]">
                          <span>→</span>
                          <span className="-ml-0.5 opacity-80">→</span>
                        </span>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
