"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

// Swiper core styles
import "swiper/css";
import "swiper/css/pagination";

const projects = [
  {
    id: "No - 02",
    title: "Forest Cleaning",
    description:
      "Energy consulting involves providing of advice and guidance on energy",
    image: "/images/thumb-11.webp",
    href: "/econest/project",
  },
  {
    id: "No - 03",
    title: "Waste Management",
    description:
      "Energy consulting involves providing of advice and guidance on energy",
    image: "/images/thumb-12.webp",
    href: "/econest/project",
  },
  {
    id: "No - 04",
    title: "Cleaning & Recycling",
    description:
      "Energy consulting involves providing of advice and guidance on energy",
    image: "/images/thumb-13.webp",
    href: "/econest/project",
  },
];

const CompletedProjects = () => {
  return (
    <section className="relative">
      {/* Top background section */}
      <div
        className="relative bg-cover bg-center bg-no-repeat z-[1] pb-[360px] pt-28 md:pt-24 sm:pt-20"
        style={{ backgroundImage: "url('/images/completed-project-bg.webp')" }}
      >
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-end gap-6 mb-16 sm:mb-10">
            {/* Left text */}
            <div className="w-full md:w-2/3 space-y-4">
              <div className="inline-flex items-center gap-3 rounded-full bg-white/10 border border-white/30 px-4 py-2 backdrop-blur">
                <img
                  src="/images/icon-1.svg"
                  alt="icon-1"
                  className="h-6 w-6 object-contain"
                />
                <span className="text-sm font-semibold tracking-wide text-white">
                  Completed Project
                </span>
              </div>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight text-white">
                Explore Our Successful Camping Project
                <span className="inline-block">😍</span>
              </h2>
            </div>

            {/* Right CTA */}
            <div className="w-full md:w-1/3 flex md:justify-end">
              <a
                href="/econest/project"
                className="inline-flex items-center gap-3 rounded-full bg-[#138808] text-white px-7 py-3 text-sm font-semibold shadow-lg hover:bg-white hover:text-[#144A52] transition-colors duration-300 group"
              >
                View All Projects
                <span className="relative inline-flex items-center justify-center w-9 h-9 rounded-full border border-white/40 bg-white/10 group-hover:bg-[#138808] group-hover:border-[#138808] transition">
                  <span className="relative flex items-center">
                    <i className="fa-regular fa-arrow-right text-xs" />
                    <i className="fa-regular fa-arrow-right text-xs -ml-1 opacity-70" />
                  </span>
                </span>
              </a>
            </div>
          </div>
        </div>

        {/* Shapes */}
        <div className="pointer-events-none absolute bottom-0 left-0 -z-10">
          <img
            src="/images/shape-8.webp"
            alt="shape-8"
            className="max-w-xs md:max-w-sm"
          />
        </div>
        <div className="pointer-events-none absolute top-0 right-0 -z-10">
          <img
            src="/images/shape-9.webp"
            alt="shape-9"
            className="max-w-xs md:max-w-sm"
          />
        </div>
      </div>

      {/* Slider section (bottom) */}
      <div className="relative -mt-[360px] sm:-mt-[300px] z-10">
        <div className="max-w-6xl mx-auto px-4">
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={30}
            loop
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
              el: ".completed-project-pagination",
            }}
            slidesPerView={1}
            breakpoints={{
              1024: {
                slidesPerView: 2,
              },
            }}
            className="completed-project-slider"
          >
            {projects.map((project) => (
              <SwiperSlide key={project.id}>
                <ProjectCard project={project} />
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom pagination bar (like original design) */}
          <div className="mt-10 sm:mt-8">
            <div className="completed-project-pagination h-[5px] rounded-full bg-[#00695C]/50 flex overflow-hidden" />
          </div>
        </div>
      </div>
    </section>
  );
};

const ProjectCard = ({ project }) => {
  return (
    <div className="group overflow-hidden rounded-[10px]">
      <div className="relative overflow-hidden rounded-[10px]">
        {/* Image link */}
        <a
          href={project.href}
          className="block w-full h-[500px] sm:h-[400px] overflow-hidden rounded-[10px]"
        >
          <div className="relative w-full h-full">
            {/* Gradient overlay */}
            <div className="absolute inset-0 z-[2] bg-gradient-to-b from-black/0 via-black/60 to-black" />
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover rounded-[10px] transform transition-transform duration-500 group-hover:scale-110"
            />
          </div>
        </a>

        {/* Number pill */}
        <div className="absolute top-5 right-5 z-10">
          <a
            href={project.href}
            className="inline-block px-4 py-2 rounded-full border border-white/30 bg-white/5 text-white text-sm shadow-[inset_0_4px_11px_rgba(255,255,255,0.4),inset_-1px_-4px_23px_rgba(0,24,25,0.28)] backdrop-blur"
          >
            {project.id}
          </a>
        </div>

        {/* Content glass card */}
        <div className="absolute left-1/2 bottom-5 z-10 w-[90%] -translate-x-1/2">
          <div className="relative overflow-hidden rounded-md border border-white/10 bg-white/10 p-4 sm:p-3 backdrop-blur-md transition-all duration-300 group-hover:pb-10">
            <h5 className="mb-2 text-xl md:text-lg sm:text-lg font-semibold leading-snug text-[#F9FAFB] group-hover:text-[#FF9933] transition-colors">
              {project.title}
            </h5>
            <p className="mb-0 text-sm text-[#F9FAFB]">{project.description}</p>

            {/* Hidden details button (slides up on hover) */}
            <div className="absolute left-0 right-0 -bottom-20 flex justify-start transition-all duration-300 group-hover:bottom-4">
              <a
                href={project.href}
                className="e-primary-btn is-hover-white has-icon inline-flex items-center gap-2 rounded-full bg-[#138808] text-white px-4 py-2 text-xs font-semibold shadow hover:bg-white hover:text-[#144A52] transition"
              >
                View All Projects
                <span className="relative inline-flex items-center justify-center w-7 h-7 rounded-full border border-white/40 bg-white/10">
                  <span className="relative flex items-center">
                    <i className="fa-regular fa-arrow-right text-[10px]" />
                    <i className="fa-regular fa-arrow-right text-[10px] -ml-0.5 opacity-70" />
                  </span>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompletedProjects;
