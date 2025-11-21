// src/components/whoweare/EconestUpcomingEvents.jsx
import React from "react";

const events = [
  {
    id: 1,
    image: "/images/thumb-36.webp",
    dateRange: "12 Jan–20 Jan, 2025",
    title: "The forest is our life, it is our job to keep the forest clean",
    time: "8:30am - 4:00pm",
    location: "Jones Street, New York",
    joined: 236,
  },
  {
    id: 2,
    image: "/images/thumb-37.webp",
    dateRange: "12 Jan–20 Jan, 2025",
    title: "The forest is our life, it is our job to keep the forest clean",
    time: "9:00am - 6:00pm",
    location: "85 Great Portland Street, London",
    joined: 162,
  },
];

export default function EconestUpcomingEvents() {
  return (
    <section className="our-events-section-2 relative bg-[#F8F7F0] pt-24 pb-24 md:pt-20 md:pb-20 mb-24">
      <div className="mx-auto max-w-6xl px-4">
        {/* Top row */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
          <div className="md:w-2/3">
            <div className="flex items-center gap-3 mb-3">
              <img src="/images/icon-2.svg" alt="icon-2" className="w-9 h-9" />
              <span className="text-sm font-semibold text-[#134A43]">
                Our Arrange
              </span>
            </div>
            <h2 className="text-[2.1rem] md:text-[2.4rem] font-bold leading-tight text-black">
              Econest Upcoming Events
            </h2>
          </div>

          <div className="md:w-1/3 flex md:justify-end">
            <a
              href="/camping"
              className="inline-flex items-center gap-3 rounded-full bg-[#138808] text-white px-7 py-3 text-sm md:text-base font-semibold relative overflow-hidden group shadow-md"
            >
              <span className="relative z-10">View All Events</span>
              <span className="relative z-10 flex items-center justify-center w-8 h-8 rounded-full bg-[#FF9933] text-[#fff] transition-colors duration-300 group-hover:bg-white group-hover:text-[#FF9933]">
                <span className="flex items-center gap-[2px]">
                  <span className="block text-xs leading-none group-hover:-translate-x-[1px] transition-transform duration-200">
                    →
                  </span>
                  <span className="block text-xs leading-none group-hover:translate-x-[1px] transition-transform duration-200 delay-75">
                    →
                  </span>
                </span>
              </span>
              <span className="absolute inset-0 bg-[#FF9933]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
            </a>
          </div>
        </div>

        {/* Event cards */}
        <div className="space-y-6">
          {events.map((event) => (
            <div
              key={event.id}
              className="event-card-2 flex flex-col md:flex-row bg-white rounded-[10px] p-2 md:p-2 relative z-[2]"
            >
              {/* Thumb */}
              <div className="relative md:w-[48%] w-full flex-none z-[1] group">
                <a className="block rounded-[10px] overflow-hidden">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full rounded-[10px] transition-transform duration-300 group-hover:scale-105"
                  />
                </a>
              </div>

              {/* Content */}
              <div className="md:w-[52%] w-full md:pt-10 md:pb-4 md:px-10 px-5 py-6">
                {/* Date ABOVE title */}
                <div className="inline-flex mb-5 px-5 py-3 bg-[#F8F7F0] border border-[#FF9933] rounded-full shadow-[0_6px_16px_-3px_rgba(0,69,64,0.11)]">
                  <h5 className="m-0 text-[14px] md:text-[16px] font-semibold text-black whitespace-nowrap">
                    {event.dateRange}
                  </h5>
                </div>

                {/* Title */}
                <div className="mb-3">
                  <h2 className="text-[1.6rem] md:text-[2rem] leading-snug font-medium text-black">
                    <a href="/camping-details">{event.title}</a>
                  </h2>
                </div>

                {/* Address row */}
                <div className="address flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6 mb-5">
                  <div className="time flex items-center gap-2 text-sm text-[#4B5563]">
                    <i className="fa-regular fa-clock text-[#134A43]" />
                    <span>{event.time}</span>
                  </div>
                  <div className="location flex items-center gap-2 text-sm text-[#4B5563]">
                    <i className="fa-regular fa-location-dot text-[#134A43]" />
                    <span>{event.location}</span>
                  </div>
                </div>

                {/* Bottom row */}
                <div className="join-event flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 pt-1">
                  <div>
                    <a
                      href="/camping-details"
                      className="inline-flex items-center gap-3 rounded-full bg-[#138808] text-[#fff] px-7 py-2.5 text-sm md:text-base font-semibold relative overflow-hidden group shadow-md"
                    >
                      <span className="relative z-10">Join Event</span>
                      <span className="relative z-10 flex items-center justify-center w-8 h-8 rounded-full bg-[#FF9933] text-[#fff] transition-colors duration-300 group-hover:bg-white group-hover:text-[#FF9933]">
                        <span className="flex items-center gap-[2px]">
                          <span className="block text-xs leading-none group-hover:-translate-x-[1px] transition-transform duration-200">
                            →
                          </span>
                          <span className="block text-xs leading-none group-hover:translate-x-[1px] transition-transform duration-200 delay-75">
                            →
                          </span>
                        </span>
                      </span>
                      <span className="absolute inset-0 bg-[#FF9933]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                    </a>
                  </div>

                  {/* Joined people */}
                  <div className="flex items-center gap-3">
                    <img
                      src="/images/author-1.webp"
                      className="max-w-[90px] w-full"
                    />
                    <div className="text-left">
                      <h5 className="text-[18px] font-semibold text-[#134A43] leading-tight mb-0">
                        {event.joined}
                      </h5>
                      <span className="text-sm text-[#4B5563]">
                        Joined People
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
