import React from "react";
import { ArrowRight } from "lucide-react";

const events = [
  {
    img: "/images/about-two-img-1.jpg",
    date: "12 Jan-20 Jan, 2025",
    title: "The forest is our life, it is our job to keep the forest clean",
    time: "8:30am - 4:00pm",
    location: "Jones Street, New York",
    joined: 236,
    avatars: [
      "/images/about-two-img-1.jpg",
      "/images/about-two-img-2.jpg",
      "/images/about-two-img-3.jpg",
      "/images/about-two-img-2.jpg",
    ],
  },
  {
    img: "/images/about-two-img-2.jpg",
    date: "12 Jan-20 Jan, 2025",
    title: "The forest is our life, it is our job to keep the forest clean",
    time: "9:00am - 6:00pm",
    location: "85 Great Portland Street, London",
    joined: 162,
    avatars: [
      "/images/about-two-img-1.jpg",
      "/images/about-two-img-2.jpg",
      "/images/about-two-img-3.jpg",
      "/images/about-two-img-2.jpg",
    ],
  },
];

const EconestUpcomingEvents = () => (
  <section className="relative px-6 md:px-16 py-14 bg-[#FAFBEF] overflow-hidden">
    {/* Gradient bg consistent with brand */}
    <div className="absolute inset-0 pointer-events-none z-0">
      <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-[#FF9933] to-transparent opacity-20" />
      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-[#138808] to-transparent opacity-20" />
    </div>
    <div className="relative z-10 max-w-5xl mx-auto">
      <div className="flex items-center justify-between mb-2">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="text-[#138808]">
              <svg width="18" height="18" viewBox="0 0 22 22" fill="none">
                <circle
                  cx="11"
                  cy="11"
                  r="10"
                  stroke="#138808"
                  strokeWidth="2"
                />
                <path
                  d="M11 8v4l2 2"
                  stroke="#138808"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </span>
            <span className="font-medium text-[#FF9933] text-lg">
              Our Arrange
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#138808]">
            Econest Upcoming Events
          </h2>
        </div>
        {/* Top-right button */}
        <button className="bg-[#FF9933] text-white hover:bg-[#138808] hover:text-white transition px-7 py-3 rounded-full font-bold shadow-lg flex items-center gap-2 text-base">
          View All Events
          <span className="bg-[#138808] text-white rounded-full p-1 ml-2">
            <ArrowRight size={20} />
          </span>
        </button>
      </div>
      <div className="grid grid-cols-1 gap-8 mt-6">
        {events.map((event, idx) => (
          <div
            key={idx}
            className="bg-white rounded-2xl shadow p-4 flex flex-col md:flex-row items-start gap-6 transition group hover:shadow-xl"
          >
            <img
              src={event.img}
              alt={event.title}
              className="rounded-2xl object-cover w-full md:w-72 h-52"
            />
            <div className="flex-1 flex flex-col py-2 justify-between">
              <div>
                <span className="inline-block mb-3 px-4 py-1 font-medium bg-[#FF9933] text-white rounded-full text-sm">
                  {event.date}
                </span>
                <h3 className="font-extrabold text-xl md:text-2xl text-[#138808] mb-1">
                  {event.title}
                </h3>
                <div className="flex flex-wrap items-center gap-5 mb-3 mt-2 text-gray-600 text-sm">
                  <span>🕒 {event.time}</span>
                  <span>📍 {event.location}</span>
                </div>
              </div>
              {/* Button and avatars */}
              <div className="flex items-end justify-between mt-auto">
                <button className="bg-[#FF9933] text-white hover:bg-[#138808] hover:text-white transition px-5 py-2 rounded-full font-bold shadow flex items-center gap-2 text-base mt-3">
                  Join Event
                  <span className="bg-[#138808] text-white rounded-full p-1 ml-1">
                    <ArrowRight size={17} />
                  </span>
                </button>
                <div className="flex items-center gap-2">
                  <div className="flex -space-x-3">
                    {event.avatars.map((a, i) => (
                      <img
                        src={a}
                        key={i}
                        alt="joined"
                        className="w-8 h-8 rounded-full border-2 border-white shadow"
                      />
                    ))}
                  </div>
                  <span className="ml-2 text-[#138808] font-bold">
                    {event.joined}
                  </span>
                  <span className="text-gray-400 text-sm">Joined People</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    <style>
      {`
        @keyframes slideDown {0%{transform: translateY(-60px); opacity:0;} 100%{transform: translateY(0); opacity:1;}}
        @keyframes slideUp {0%{transform: translateY(60px); opacity:0;} 100%{transform: translateY(0); opacity:1;}}
        .animate-slideDown {animation: slideDown 1.3s 750ms cubic-bezier(.44,.52,.57,1) forwards;}
        .animate-slideUp {animation: slideUp 1.3s 850ms cubic-bezier(.44,.52,.57,1) forwards;}
      `}
    </style>
  </section>
);

export default EconestUpcomingEvents;
