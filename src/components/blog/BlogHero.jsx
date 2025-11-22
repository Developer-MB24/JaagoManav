// src/components/blogdetails/HeroBlogDetails.jsx
import React from "react";

export default function HeroBlogDetails() {
  return (
    <section
      className="relative z-[1] overflow-hidden bg-[#0e2c27] pt-[210px] pb-[140px] md:pt-[260px] md:pb-[180px] lg:pt-[332px] lg:pb-[210px]"
      style={{
        // Optional mask curve – point this to your mask image if you have one
        WebkitMaskImage: "url('images/page-header-mask.png')",
        maskImage: "url('images/page-header-mask.png')",
        WebkitMaskRepeat: "no-repeat",
        maskRepeat: "no-repeat",
        WebkitMaskPosition: "center center",
        maskPosition: "center center",
        WebkitMaskSize: "cover",
        maskSize: "cover",
      }}
    >
      {/* Background image with luminosity blend */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20 -z-[1]"
        style={{
          backgroundImage: "url('images/page-header-bg.jpg')",
          mixBlendMode: "luminosity",
        }}
      />

      {/* Shape background overlay */}
      <div
        className="absolute inset-0 bg-top bg-cover bg-no-repeat opacity-10 mix-blend-multiply -z-[1]"
        style={{
          backgroundImage: "url('images/page-header-shape-bg.png')",
        }}
      />

      {/* Shape 1 (right) */}
      <div className="absolute bottom-0 right-[-30px] -z-[1]">
        <img
          src="images/page-header-shape-1.png"
          alt="decorative shape"
          className="w-auto max-w-none"
        />
      </div>

      {/* Shape 2 (left) */}
      <div className="absolute bottom-[-20px] left-0 opacity-20 mix-blend-multiply -z-[1]">
        <img
          src="images/page-header-shape-2.png"
          alt="decorative shape"
          className="w-auto max-w-none"
        />
      </div>

      <div className="relative max-w-6xl mx-auto px-4">
        <div className="relative">
          <h2 className="text-[32px] md:text-[40px] lg:text-[50px] leading-[1.3] font-extrabold text-white mb-4">
            Blog
          </h2>

          <div className="inline-block relative">
            <ul className="flex items-center gap-2 text-sm md:text-base text-white">
              <li>
                <a
                  href="/"
                  className="transition-colors duration-300 hover:text-[#FF9933]"
                >
                  Home
                </a>
              </li>
              <li className="flex items-center text-[#FF9933] mx-1">
                <span className="fas fa-angle-right" />
              </li>
              <li className="capitalize">Blog </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
