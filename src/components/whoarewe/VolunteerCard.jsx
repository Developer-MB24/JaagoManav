import React from "react";
import { Facebook, X, Instagram, Share2 } from "lucide-react";

// Reuseable Card
const VolunteerCard = ({ name, role, img }) => {
  const [hovered, setHovered] = React.useState(false);
  return (
    <div
      className="relative rounded-2xl shadow-lg bg-white overflow-hidden group transition-all duration-300 max-w-[210px] w-full"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{ width: 200 }}
    >
      {/* Image */}
      <div className="relative w-full h-48 overflow-hidden">
        <img src={img} alt={name} className="object-cover w-full h-full" />
        {/* Social Icons */}
        <div
          className={`absolute top-2 right-2 flex flex-col gap-2 transition-all duration-300 ${
            hovered ? "opacity-100 translate-x-0" : "opacity-0 translate-x-7"
          } z-10`}
        >
          <button className="bg-[#FF9933] hover:bg-[#d27d19] transition w-8 h-8 rounded-full flex items-center justify-center shadow-lg">
            <Share2 size={18} className="text-white" />
          </button>
          <button className="bg-white hover:bg-[#FF9933] transition w-8 h-8 rounded-full flex items-center justify-center shadow-lg border border-[#FF9933]">
            <Facebook
              size={18}
              className={`transition ${
                hovered ? "text-[#FF9933]" : "text-[#138808]"
              }`}
            />
          </button>
          <button className="bg-white hover:bg-[#FF9933] transition w-8 h-8 rounded-full flex items-center justify-center shadow-lg border border-[#FF9933]">
            <X
              size={18}
              className={`transition ${
                hovered ? "text-[#FF9933]" : "text-[#138808]"
              }`}
            />
          </button>
          <button className="bg-white hover:bg-[#FF9933] transition w-8 h-8 rounded-full flex items-center justify-center shadow-lg border border-[#FF9933]">
            <Instagram
              size={18}
              className={`transition ${
                hovered ? "text-[#FF9933]" : "text-[#138808]"
              }`}
            />
          </button>
        </div>
      </div>
      {/* Bottom panel */}
      <div
        className={`transition-all duration-300 px-3 py-3 rounded-b-2xl text-center ${
          hovered ? "bg-[#138808]" : "bg-white"
        }`}
      >
        <div
          className={`text-lg font-bold transition-all duration-300 ${
            hovered ? "text-[#FF9933]" : "text-[#138808]"
          }`}
        >
          {name}
        </div>
        <div
          className={`text-sm transition-all duration-300 ${
            hovered ? "text-white" : "text-[#138808] opacity-90"
          }`}
        >
          {role}
        </div>
      </div>
    </div>
  );
};

const volunteers = [
  {
    name: "Joshua Sendu",
    role: "CEO-Founder",
    img: "/images/about-two-img-2.jpg",
  },
  {
    name: "John Maxwell",
    role: "Team Leader",
    img: "/images/about-two-img-1.jpg",
  },
  {
    name: "Bm Ashik (Moni)",
    role: "Sr. Volunteer",
    img: "/images/about-two-img-3.jpg",
  },
  {
    name: "Denial Pasha",
    role: "Volunteer",
    img: "/images/about-two-img-1.jpg",
  },
  {
    name: "New Volunteer",
    role: "Intern",
    img: "/images/about-two-img-2.jpg",
  },
];

const VolunteersSection = () => (
  <section className="relative px-6 md:px-16 py-14 bg-gradient-to-b from-[#FF9933] via-white to-[#138808] overflow-hidden min-h-screen">
    {/* Animated color background */}
    <div className="absolute inset-0 pointer-events-none z-0" />
    <div className="relative z-10 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
        <div>
          <div className="flex items-center gap-3">
            <span className="text-[#138808]">
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
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
            <span className="font-bold text-[#FF9933] text-xl">
              We Are Volunteer
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#138808] mt-3">
            Together For The Planet
          </h2>
        </div>
        {/* Button + note on top right */}
        <div className="flex flex-col md:items-end items-start gap-2 mt-5 md:mt-0">
          <button className="bg-[#FF9933] hover:bg-[#138808] text-[#138808] hover:text-[#FF9933] transition px-8 py-4 rounded-full font-bold shadow-lg flex items-center gap-2 text-xl">
            View All Volunteer
            <span className="bg-[#138808] text-white rounded-full p-2 ml-2">
              <svg width="20" height="20" viewBox="0 0 18 18" fill="none">
                <path
                  d="M4 9h10m-5-5l5 5-5 5"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </button>
          <span className="text-[#138808] font-medium text-lg">
            If you want <br />
            can join us
          </span>
        </div>
      </div>
      {/* The card grid */}
      <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-7 mb-7">
        {volunteers.map((vol) => (
          <VolunteerCard key={vol.name} {...vol} />
        ))}
      </div>
    </div>
  </section>
);

export default VolunteersSection;
