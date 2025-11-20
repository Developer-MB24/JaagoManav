import React from "react";
import { CheckCircle, ArrowRightCircle, DollarSign } from "lucide-react";

export default function WhoWeAreSection() {
  return (
    <section className="relative flex flex-col md:flex-row items-center justify-between px-4 md:px-16 py-16 bg-[#FAFBF5] overflow-hidden">
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-[#FF9933] to-transparent opacity-30 animate-slideDown" />
        <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-[#138808] to-transparent opacity-30 animate-slideUp" />
      </div>

      {/* IMAGE CLUSTER */}
      <div className="relative w-[370px] h-[360px] md:w-[420px] md:h-[400px]">
        <img
          src="/images/about-two-img-1.jpg"
          alt="Volunteers main"
          className="absolute top-0 left-64 md:left-96 -translate-x-1/2 w-[230px] h-[270px] md:w-[260px] md:h-[300px] rounded-2xl object-cover shadow-lg ring-1 ring-black/5 bg-neutral-200 z-10"
        />
        <img
          src="/images/about-two-img-2.jpg"
          alt="Volunteers"
          className="absolute top-[140px] left-1 w-[150px] h-[190px] md:w-[230px] md:h-[350px] rounded-2xl object-cover shadow-lg ring-1 ring-black/5 bg-neutral-200 z-20"
        />
        <img
          src="/images/about-two-img-3.jpg"
          alt="Tree planting"
          className="absolute bottom-0 top-[22rem] md:left-80 md:top-80 w-[370px] h-[150px] md:w-[200px] md:h-[160px] rounded-2xl object-cover shadow-lg ring-1 ring-black/5 bg-neutral-200 z-20"
        />

        <div className="absolute left-64 md:left-80 -translate-x-1/2 top-[275px] md:top-[255px] flex items-center gap-4 rounded-2xl border-4 border-white bg-[#FFE08A] px-5 py-3 md:px-6 md:py-3.5 shadow-xl z-30">
          <span className="text-emerald-900 text-4xl md:text-5xl font-extrabold leading-none">
            29+
          </span>
          <span className="text-emerald-900 text-base md:text-lg font-semibold leading-tight">
            Years of
            <br />
            experience
          </span>
        </div>
      </div>

      {/* TEXT SIDE */}
      <div className="md:w-1/2 mt-60 md:mt-0 pl-0 md:pl-24 pb-8 md:pb-0 z-10">
        <div className="mb-4 flex items-center gap-3">
          <span className="text-[#138808]">
            <svg width="28" height="28" fill="none">
              <path
                d="M14 27C20.6274 27 26 21.6274 26 15C26 8.37258 20.6274 3 14 3C7.37258 3 2 8.37258 2 15C2 21.6274 7.37258 27 14 27Z"
                stroke="#138808"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M14 9V21M9 14H19"
                stroke="#138808"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
          <span className="uppercase font-semibold text-white text-lg tracking-widest">
            Who We Are
          </span>
        </div>

        <h2 className="text-4xl md:text-5xl font-extrabold text-[#138808] mb-5">
          Some Reasons to Choose <br />
          (Econest Organization)
        </h2>

        <p className="text-gray-500 mb-6 max-w-2xl leading-relaxed">
          The implant fixture is first placed, so that it ilikely to then a
          dental prosthetic is added then dental prosthetic occaecat laborum.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div className="flex items-center gap-3">
            <CheckCircle className="text-[#138808]" size={28} />
            <span className="text-[#2d4947]">Specialized Company</span>
          </div>
          <div className="flex items-center gap-3">
            <CheckCircle className="text-[#138808]" size={28} />
            <span className="text-[#2d4947]">Dependable Services</span>
          </div>
          <div className="flex items-center gap-3">
            <CheckCircle className="text-[#138808]" size={28} />
            <span className="text-[#2d4947]">Licensed & Insured</span>
          </div>
          <div className="flex items-center gap-3">
            <CheckCircle className="text-[#138808]" size={28} />
            <span className="text-[#2d4947]">Day Scheduling</span>
          </div>
        </div>

        <div className="flex items-center gap-8 mt-7 flex-wrap">
          <button className="flex items-center gap-2 px-9 py-5 rounded-full bg-[#FF9933] text-white text-xl font-semibold shadow hover:bg-[#ffd344] transition">
            Explore More
            <ArrowRightCircle className="ml-1 text-[#138808]" size={34} />
          </button>
          <div className="flex items-center gap-2">
            <span className="p-3 rounded-full border border-[#dbe7e6] bg-white shadow">
              <DollarSign className="text-[#138808]" size={28} />
            </span>
            <div>
              <span className="block text-gray-500 text-md">
                Annual Donation
              </span>
              <span className="block font-bold text-2xl text-[#138808]">
                $2,056.00
              </span>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes slideDown {0%{transform: translateY(-60px); opacity:0;} 100%{transform: translateY(0); opacity:1;}}
        .animate-slideDown {animation: slideDown 1.3s 750ms cubic-bezier(.44,.52,.57,1) forwards;}
        @keyframes slideUp {0%{transform: translateY(60px); opacity:0;} 100%{transform: translateY(0); opacity:1;}}
        .animate-slideUp {animation: slideUp 1.3s 850ms cubic-bezier(.44,.52,.57,1) forwards;}
      `}</style>
    </section>
  );
}
