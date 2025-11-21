// src/components/home/UpcomingEvent.jsx
import React from "react";

const events = [
  {
    id: 1,
    day: "20",
    dateText: "March\nin 2025",
    title: "Tree Plantation Challenge",
    location: "Jones Street, New York",
    time: "8:30am - 4:00pm",
    joined: 236,
    category: "Tree Plantation",
    thumb: "images/thumb-8.webp",
  },
  {
    id: 2,
    day: "28",
    dateText: "February\nin 2025",
    title: "Forest Cleaning Challenge",
    location: "Los Angeles",
    time: "10:30am - 4:00pm",
    joined: 49,
    category: "Forest",
    thumb: "images/thumb-9.webp",
  },
];

export default function UpcomingEvent() {
  return (
    <section className="our-events-section pt-24 pb-24 md:pt-20 md:pb-20">
      <div className="max-w-6xl mx-auto px-4 text-center">
        {/* Section heading */}
        <div className="mb-12 md:mb-10">
          <div className="flex items-center justify-center gap-3 mb-3">
            <img src="images/icon-2.svg" alt="icon-2" className="w-9 h-9" />
            <span className="text-sm font-semibold text-[#138808]">
              Upcoming Event
            </span>
          </div>
          <div>
            <h2 className="text-[2rem] md:text-[2.4rem] font-bold leading-tight text-[#134A43]">
              Our Events, Let&apos;s{" "}
              <span className="inline-flex items-center gap-2">
                <img
                  src="images/icon-2.svg"
                  alt="icon-2"
                  className="w-7 h-7 md:w-8 md:h-8"
                />
                All Participate
              </span>
            </h2>
          </div>
        </div>

        {/* Events grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {events.map((event) => (
            <div
              key={event.id}
              className="event-card relative bg-[#F8F7F0] rounded-[18px] p-5 md:p-6 overflow-hidden shadow-[0_18px_40px_rgba(0,0,0,0.03)] group"
            >
              {/* Top content */}
              <div className="card-content pb-5 border-b border-black/10">
                {/* Top row: date + joined people */}
                <div className="event-card-top flex items-center justify-between gap-4">
                  {/* Left: calendar + date */}
                  <div className="top-left flex items-start gap-4 md:gap-5">
                    <img
                      src="images/calendar-2.svg"
                      alt="calendar-icon"
                      className="w-10 h-10 md:w-11 md:h-11"
                    />
                    <div className="event-date text-left">
                      <h3 className="text-[#134A43] font-medium text-[32px] md:text-[40px] leading-[1] mb-0">
                        {event.day}
                        <span className="block text-[16px] md:text-[18px] text-[#4B5563] leading-[1.3] whitespace-pre-line">
                          {event.dateText}
                        </span>
                      </h3>
                    </div>
                  </div>

                  {/* Right: joined people */}
                  <div className="top-right flex items-center gap-3 md:gap-4">
                    <img
                      src="images/author-1.webp"
                      alt="authors"
                      className="max-w-[90px] md:max-w-[118px] w-full"
                    />
                    <div className="people-joined text-left">
                      <h5 className="text-[18px] md:text-[20px] font-semibold text-[#134A43] leading-tight mb-0">
                        {event.joined}
                      </h5>
                      <span className="text-sm text-[#4B5563]">
                        Joined People
                      </span>
                    </div>
                  </div>
                </div>

                {/* Title */}
                <div className="event-card-middle text-left">
                  <h2 className="text-[1.6rem] md:text-[2rem] font-medium text-[#134A43] mt-5 mb-3">
                    <a href="/camping-details">{event.title}</a>
                  </h2>

                  {/* Address row */}
                  <div className="address flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-5 mb-5">
                    <div className="location flex items-center gap-2 text-sm text-[#4B5563]">
                      <i className="fa-regular fa-location-dot text-[#134A43]" />
                      <span>{event.location}</span>
                    </div>
                    <div className="time flex items-center gap-2 text-sm text-[#4B5563]">
                      <i className="fa-regular fa-clock text-[#134A43]" />
                      <span>{event.time}</span>
                    </div>
                  </div>

                  {/* Join Event button */}
                  <div className="event-btn">
                    <a
                      href="/camping-details"
                      className="inline-flex items-center gap-3 rounded-full bg-[#134A43] text-[#FF9933] px-7 py-2.5 text-sm md:text-base font-semibold relative overflow-hidden group/button"
                    >
                      <span className="relative z-10">Join Event</span>
                      <span className="relative z-10 flex items-center justify-center w-8 h-8 rounded-full bg-[#FF9933] text-[#134A43] text-xs transition-colors duration-200 group-hover/button:bg-white group-hover/button:text-[#FF9933]">
                        <span className="flex items-center gap-[2px]">
                          <span className="block leading-none group-hover/button:-translate-x-[1px] transition-transform duration-200">
                            →
                          </span>
                          <span className="block leading-none group-hover/button:translate-x-[1px] transition-transform duration-200 delay-75">
                            →
                          </span>
                        </span>
                      </span>
                      <span className="absolute inset-0 bg-[#FF9933]/10 opacity-0 group-hover/button:opacity-100 transition-opacity duration-200" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Bottom thumbnail */}
              <div className="thumb relative mt-4 rounded-[16px] overflow-hidden">
                <a
                  href="/camping-details"
                  className="block rounded-[16px] overflow-hidden"
                >
                  <img
                    src={event.thumb}
                    alt={event.title}
                    className="w-full h-full object-cover rounded-[16px] transition-transform duration-500 group-hover:scale-110"
                  />
                </a>

                {/* Category pill */}
                <div className="category absolute bottom-4 right-4">
                  <a
                    href="/camping-details"
                    className="inline-block px-4 py-2 rounded-full text-white text-sm border border-white/30 bg-white/5 shadow-[inset_0_4px_11px_rgba(255,255,255,0.4),inset_-1px_-4px_23.1px_rgba(0,24,25,0.28)] backdrop-blur-[24px] hover:bg-white hover:text-[#134A43] transition-colors duration-200"
                  >
                    {event.category}
                  </a>
                </div>

                {/* Shape image (restored) */}
                <div className="shape-3 absolute top-0 right-0 z-[2]">
                  <img
                    src="images/shape-3.webp"
                    alt="shape-3"
                    className="w-full"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
