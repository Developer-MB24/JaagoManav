"use client";

import React, { useState } from "react";

const ServiceAbout = () => {
  const [activeTab, setActiveTab] = useState("history");

  return (
    <section className="about-us-section mt-28 md:mt-24 sm:mt-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* LEFT: Image composition */}
          <div className="relative mb-36 lg:mb-40 sm:mb-64">
            {/* Main image */}
            <img
              src="/images/thumb-39.webp"
              alt="About us main"
              className="rounded-[10px] w-full max-w-lg"
            />

            {/* Experience box */}
            <div
              className="absolute top-20 right-10 flex items-center gap-3 bg-[#FF9933] px-5 py-4 rounded-xl shadow-lg z-20
                            xl:right-3
                            lg:right-[-80px]
                            md:right-[70px]
                            sm:top-[-8%] sm:right-1/2 sm:translate-x-1/2"
            >
              <h3
                className="m-0 text-[56px] md:text-[44px] sm:text-[40px] font-semibold leading-none text-transparent"
                style={{ WebkitTextStroke: "1px #004540" }}
              >
                29<span className="align-top text-2xl">+</span>
              </h3>
              <p className="m-0 max-w-[110px] text-[17px] leading-[1.4] font-semibold text-[#004540]">
                Years of experience
              </p>
            </div>

            {/* Award shape */}
            <div
              className="absolute  left-[-60px] inline-flex items-center gap-4 px-6 py-4 rounded-md bg-[#004540] z-20
                         2xl:left-[-20px] xl:left-[-40px] md:left-[-40px]
                         sm:left-[15%] sm:bottom-[-34%]"
              style={{
                backgroundImage: "url('/images/shape-18.webp')",
                backgroundPosition: "left",
                backgroundRepeat: "no-repeat",
                backgroundSize: "contain",
              }}
            >
              <img
                src="/images/icon-6.svg"
                alt="award icon"
                className="max-w-[36px]"
              />
              <p className="m-0 max-w-[160px] text-sm text-white">
                2024 - We are the best award winner
              </p>
            </div>

            {/* Box shape behind main image */}
            <div className="absolute bottom-[-32px] left-[-16px] -z-10">
              <img src="/images/shape-14.webp" alt="box shape" />
            </div>

            {/* Positioned video thumb */}
            <div
              className="absolute top-1/2 right-[70px] rounded-[150px_150px_12px_12px] sm:right-[6%] sm:w-[88%]
                            xl:right-[-20px] lg:right-[-60px] md:right-[50px]"
            >
              <div className="relative w-full xl:w-[85%] lg:w-full">
                <div className="relative w-fit">
                  <img
                    src="/images/thumb-40.webp"
                    alt="video thumb"
                    className="w-full border-4 border-white rounded-[150px_150px_12px_12px]"
                  />
                  <a
                    href="https://www.youtube.com/watch?v=fLeJJPxua3E&ab_channel=Motiversity"
                    target="_blank"
                    rel="noreferrer"
                    className="video-play-btn absolute inset-0 m-auto flex items-center justify-center w-20 h-20 rounded-full border border-white text-white text-xl
                               bg-white/5 backdrop-blur-[13px] transition hover:bg-[#FF9933] hover:text-[#004540] hover:border-[#FF9933]
                               animate-pulse"
                  >
                    <i className="fa-solid fa-play" />
                  </a>
                </div>

                {/* Vector shape under video */}
                <div className="absolute bottom-0 w-full">
                  <img
                    src="/images/shape-19.webp"
                    alt="vector shape"
                    className="w-full"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: Content + tabs */}
          <div className="about-us-content px-3 xl:px-8">
            {/* Subtitle */}
            <div className="flex items-center gap-3 mb-4">
              <img
                src="/images/icon-2.svg"
                alt="icon-2"
                className="h-7 w-7 object-contain"
              />
              <span className="text-sm font-semibold tracking-wide text-[#004540]">
                About Us
              </span>
            </div>

            {/* Title */}
            <div className="mb-6">
              <h2 className="text-3xl md:text-4xl font-semibold text-[#004540]">
                Building Greener Future Together And Protect
              </h2>
            </div>

            {/* Tabs */}
            <div className="c-tabs-wrapper mb-6">
              <div className="flex flex-wrap items-center gap-3 mb-6">
                <TabButton
                  label="Our History"
                  isActive={activeTab === "history"}
                  onClick={() => setActiveTab("history")}
                />
                <TabButton
                  label="Our Mission"
                  isActive={activeTab === "mission"}
                  onClick={() => setActiveTab("mission")}
                />
                <TabButton
                  label="Our Vision"
                  isActive={activeTab === "vision"}
                  onClick={() => setActiveTab("vision")}
                />
              </div>

              {/* Tab content */}
              <div className="tab-content space-y-4">
                {activeTab === "history" && (
                  <div>
                    <div className="text mb-4">
                      <p className="text-slate-700 leading-7">
                        The implant fixture is first placed, so that it ilikely
                        to then a dental prosthetic is added then dental
                        prosthetic.
                      </p>
                    </div>
                    <BenefitsList />
                  </div>
                )}

                {activeTab === "mission" && (
                  <div>
                    <div className="text mb-4">
                      <p className="text-slate-700 leading-7">
                        The implant fixture is first placed, so that it ilikely
                        to then a dental prosthetic is added then dental
                        prosthetic.
                      </p>
                    </div>
                    <BenefitsList />
                  </div>
                )}

                {activeTab === "vision" && (
                  <div>
                    <div className="text mb-4">
                      <p className="text-slate-700 leading-7">
                        The implant fixture is first placed, so that it ilikely
                        to then a dental prosthetic is added then dental
                        prosthetic.
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* CTA + Rating */}
            <div className="annual-donation-wrap flex items-center gap-6 sm:flex-col sm:items-start sm:gap-4 mt-4">
              <a
                href="/econest/about"
                className="inline-flex items-center gap-3 rounded-full bg-[#004540] text-[#FFFBEB] px-7 py-3 text-sm font-semibold shadow hover:bg-[#FF9933] hover:text-[#004540] transition relative overflow-hidden
                           before:content-[''] before:absolute before:inset-0 before:bg-[#FF9933] before:scale-0 before:origin-left before:transition-transform before:duration-300 hover:before:scale-100"
              >
                <span className="relative z-[1] flex items-center gap-3">
                  Explore More
                  <span className="icon-wrap relative inline-flex items-center justify-center w-8 h-8 rounded-full bg-[#FFFBEB] text-[#004540]">
                    <span className="icon flex items-center">
                      <i className="fa-regular fa-arrow-right text-[11px]" />
                      <i className="fa-regular fa-arrow-right text-[11px] -ml-0.5 opacity-70" />
                    </span>
                  </span>
                </span>
              </a>

              <div className="rating-wrap">
                <div className="star-rating flex items-center gap-3 mb-2">
                  <img
                    src="/images/logo-8.svg"
                    alt="rating logo"
                    className="h-10 w-auto"
                  />
                  <div className="stars flex items-center gap-1">
                    {[1, 2, 3, 4, 5].map((n) => (
                      <span
                        key={n}
                        className="flex items-center justify-center w-5 h-5 bg-[#004540] text-[#FF9933]"
                      >
                        <i className="fa-solid fa-star-sharp text-[11px]" />
                      </span>
                    ))}
                  </div>
                </div>
                <p className="text-sm text-slate-700 m-0">
                  Excellent 4.9 out of 5
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

/** Tab button */
const TabButton = ({ label, isActive, onClick }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`px-7 py-3 rounded-full text-sm font-semibold border transition
                  ${
                    isActive
                      ? "bg-[#F8F7F0] text-[#004540] border-[#FF9933] shadow-[0_6px_16px_-3px_rgba(0,69,64,0.11)]"
                      : "bg-white text-slate-700 border-transparent hover:bg-[#F8F7F0] hover:text-[#004540]"
                  }
                  sm:px-3 sm:py-1.5`}
    >
      {label}
    </button>
  );
};

/** Benefits bullet list (reused for History & Mission) */
const BenefitsList = () => (
  <div className="benefits mb-8">
    <ul className="flex flex-col gap-3 list-none p-0 m-0">
      {[
        "Nature ecologically, acceptable, organisms environment",
        "Ecology is the study of the relationship between living",
        "Focus on your important tasks and orders",
      ].map((item, idx) => (
        <li key={idx} className="relative pl-9 flex items-center sm:pl-8">
          {/* Outer bullet */}
          <span className="absolute left-0 top-1/2 -translate-y-1/2 w-5 h-5 rounded-full bg-white shadow-[0_6px_10px_-3px_rgba(0,69,64,0.11)]" />
          {/* Inner gradient dot */}
          <span className="absolute left-[7px] top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-[radial-gradient(circle_at_86.3%_87.5%,rgba(0,0,0,0.23)_0%,rgba(0,0,0,0)_86.18%),radial-gradient(circle_at_26.39%_20.83%,rgba(255,255,255,0.413)_0%,rgba(255,255,255,0)_69.79%),#004540]" />
          <span className="text-slate-800 leading-relaxed">{item}</span>
        </li>
      ))}
    </ul>
  </div>
);

export default ServiceAbout;
