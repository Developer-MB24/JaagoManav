"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const campaigns = [
  {
    id: 1,
    category: "Animal",
    image: "/images/thumb-4.webp",
    href: "/econest/camping-donation",
    daysLeft: "29 Days Left",
    title: "Protecting Endangered Species and Their Habitats",
    description:
      "Excepteur occaecat cupidatat officia the implant fixture is first placed.",
    progress: 89,
    raised: "$13,650",
    goal: "$16,560",
    wishlist: 259,
  },
  {
    id: 2,
    category: "Plantation",
    image: "/images/thumb-3.webp",
    href: "/econest/camping-donation",
    daysLeft: "29 Days Left",
    title: "Reforestation and Tree Planting Campaign 2025",
    description:
      "Excepteur occaecat cupidatat officia the implant fixture is first placed.",
    progress: 64,
    raised: "$6,650",
    goal: "$10,560",
    wishlist: 259,
  },
  {
    id: 3,
    category: "Animal",
    image: "/images/thumb-2.webp",
    href: "/econest/camping-donation",
    daysLeft: "29 Days Left",
    title: "Sustainable Energy for All: Why Your Donation Matters",
    description:
      "Excepteur occaecat cupidatat officia the implant fixture is first placed.",
    progress: 72,
    raised: "$9,650",
    goal: "$16,560",
    wishlist: 259,
  },
  {
    id: 4,
    category: "Plantation",
    image: "/images/thumb-3.webp",
    href: "/econest/camping-donation",
    daysLeft: "29 Days Left",
    title: "Reforestation and Tree Planting Campaign 2025",
    description:
      "Excepteur occaecat cupidatat officia the implant fixture is first placed.",
    progress: 64,
    raised: "$6,650",
    goal: "$10,560",
    wishlist: 259,
  },
];

const ServiceCampaigns = () => {
  return (
    <section
      className="relative overflow-x-clip py-24 sm:py-20"
      style={{
        backgroundImage: "url('/images/our-camping-bg.webp')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundColor: "#f8f7f0",
      }}
    >
      <div className="max-w-6xl mx-auto px-4">
        {/* Section heading */}
        <div className="mb-12 sm:mb-10 text-center">
          <div className="inline-flex items-center gap-3 mb-4">
            <img
              src="/images/icon-2.svg"
              alt="icon-2"
              className="h-7 w-7 object-contain"
            />
            <span className="text-sm font-semibold tracking-wide text-[#004540]">
              Our Camping
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-semibold text-[#004540]">
            Your Gift For a Greener Tomorrow
          </h2>
        </div>

        {/* Slider */}
        <div className="relative">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            loop
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 1.5 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            navigation={{
              prevEl: ".camping-button-prev",
              nextEl: ".camping-button-next",
            }}
            pagination={{
              clickable: true,
              el: ".camping-pagination",
            }}
            className="camping-slider-active"
          >
            {campaigns.map((campaign) => (
              <SwiperSlide key={campaign.id}>
                <CampaignCard campaign={campaign} />
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Prev / Next buttons (same layout idea as original) */}
          <button
            className="camping-button-prev absolute left-[-82px] top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white text-[#868681] flex items-center justify-center shadow-sm transition hover:bg-[#004540] hover:text-[#FFFBEB] -mt-20
                       2xl:left-[-25px] xl:left-[-25px] lg:left-[-25px]
                       lg:left-0 lg:bottom-0 lg:top-auto lg:mt-0 lg:translate-y-0
                       md:left-0 md:bottom-0 md:top-auto md:mt-0 md:translate-y-0
                       sm:left-0 sm:bottom-0 sm:top-auto sm:mt-0 sm:translate-y-0"
            type="button"
          >
            <i className="fa-regular fa-arrow-left" />
          </button>

          <button
            className="camping-button-next absolute right-[-82px] top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white text-[#868681] flex items-center justify-center shadow-sm transition hover:bg-[#004540] hover:text-[#FFFBEB] -mt-20
                       2xl:right-[-25px] xl:right-[-25px] lg:right-[-25px]
                       lg:right-0 lg:bottom-0 lg:top-auto lg:mt-0 lg:translate-y-0
                       md:right-0 md:bottom-0 md:top-auto md:mt-0 md:translate-y-0
                       sm:right-0 sm:bottom-0 sm:top-auto sm:mt-0 sm:translate-y-0"
            type="button"
          >
            <i className="fa-regular fa-arrow-right" />
          </button>

          {/* Pagination bullets in glass pill */}
          <div className="camping-pagination-wrap flex justify-center">
            <div className="camping-pagination inline-flex items-center justify-center gap-2 bg-white/90 border border-white/30 backdrop-blur rounded-full px-4 py-2 mt-12" />
          </div>
        </div>
      </div>
    </section>
  );
};

const CampaignCard = ({ campaign }) => {
  return (
    <div className="camping-card group bg-white rounded-[10px] shadow-[0_4px_56.5px_rgba(0,0,0,0.06)] p-2 transition-transform duration-300 hover:-translate-y-1">
      {/* Thumb */}
      <div className="relative overflow-hidden rounded-[10px]">
        <a
          href={campaign.href}
          className="block rounded-[10px] overflow-hidden"
        >
          <img
            src={campaign.image}
            alt={campaign.title}
            className="w-full rounded-[10px] transform transition-transform duration-500 group-hover:scale-110"
          />
        </a>
        <div className="absolute top-5 left-5">
          <a
            href={campaign.href}
            className="inline-block px-4 py-2 rounded-full border border-white/30 bg-white/5 text-white text-sm shadow-[inset_0_4px_11px_rgba(255,255,255,0.4),inset_-1px_-4px_23.1px_rgba(0,24,25,0.28)] backdrop-blur"
          >
            {campaign.category}
          </a>
        </div>
      </div>

      {/* Content */}
      <div className="content">
        <div className="content-top px-5 py-5">
          {/* Date pill */}
          <div className="inline-flex items-center gap-2 bg-[#f8f7f0] border-2 border-white shadow-[0_6px_30px_rgba(0,69,64,0.09)] rounded-[10px] px-3 py-1.5 text-[#868681] text-sm font-medium mb-3">
            <img
              src="/images/calendar.svg"
              alt="calendar-icon"
              className="w-4 h-4"
            />
            <span>{campaign.daysLeft}</span>
          </div>

          {/* Title */}
          <div className="title">
            <h3 className="text-[23px] leading-9 font-semibold text-[#004540] mb-1 md:text-[20px] md:leading-snug">
              <a href={campaign.href} className="text-[#004540]">
                {campaign.title}
              </a>
            </h3>
          </div>

          {/* Text */}
          <div className="text">
            <p className="text-[17px] leading-7 text-[#444]">
              {campaign.description}
            </p>
          </div>
        </div>

        {/* Donation block */}
        <div className="donation-wrap bg-[#f8f7f0] rounded-md px-5 pt-4 pb-6 transition-colors duration-300 group-hover:bg-[#004540]">
          {/* Top row */}
          <div className="d-top flex items-center justify-between gap-3 mb-3">
            <p className="text-[18px] leading-7 font-medium text-[#004540] mb-0 group-hover:text-[#FFFBEB]">
              Donation Complete
            </p>
            <p className="text-[18px] leading-7 font-medium text-[#004540] mb-0 group-hover:text-[#FFFBEB]">
              {campaign.progress}%
            </p>
          </div>

          {/* Progress bar */}
          <div
            className="progress w-full h-2 rounded-full bg-[#0045401a] overflow-hidden mb-3"
            role="progressbar"
            aria-valuemin={0}
            aria-valuemax={100}
            aria-valuenow={campaign.progress}
          >
            <div
              className="progress-bar h-full rounded-full bg-[#004540] group-hover:bg-[#FF9933] transition-all duration-500"
              style={{ width: `${campaign.progress}%` }}
            />
          </div>

          {/* Fund info */}
          <div className="fund flex items-center justify-between gap-5 mt-2 mb-6">
            <p className="text-[15px] leading-none text-[#868681] mb-0 group-hover:text-white">
              Raised:{" "}
              <span className="font-semibold text-[#004540] group-hover:text-[#FFFBEB]">
                {campaign.raised}
              </span>
            </p>
            <p className="text-[15px] leading-none text-[#868681] mb-0 group-hover:text-white">
              Goal:{" "}
              <span className="font-semibold text-[#004540] group-hover:text-[#FFFBEB]">
                {campaign.goal}
              </span>
            </p>
          </div>

          {/* Bottom buttons */}
          <div className="d-bottom flex items-center justify-between gap-4">
            <a
              href={campaign.href}
              className="d-btn relative inline-flex items-center gap-2 px-5 py-2.5 rounded-[999px] text-sm font-semibold overflow-hidden
                         bg-[#004540] text-[#FFFBEB]
                         before:content-[''] before:absolute before:inset-0 before:bg-[#004540] before:scale-0 before:origin-left before:rounded-full before:transition-transform before:duration-300
                         hover:before:scale-100
                         hover:text-[#004540]"
            >
              <span className="relative z-[1] flex items-center gap-2">
                Donate Now
                <span className="icon-wrap relative inline-flex items-center justify-center w-8 h-8 rounded-full bg-[#FFFBEB] text-[#004540] transition-colors">
                  <span className="icon relative flex items-center">
                    <i className="fa-regular fa-arrow-right text-[10px]" />
                    <i className="fa-regular fa-arrow-right text-[10px] -ml-0.5 opacity-70" />
                  </span>
                </span>
              </span>
            </a>

            <button
              type="button"
              className="d-wishlist inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-[10px] border border-[rgba(0,24,25,0.1)] bg-transparent text-[#004540] text-sm font-semibold transition"
            >
              <i className="fa-regular fa-heart" />
              <span>{campaign.wishlist}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCampaigns;
