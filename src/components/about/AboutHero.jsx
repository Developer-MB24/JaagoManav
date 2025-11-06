// Home.jsx
import React from "react";

const AboutHero = () => {
  return (
    <section className="relative w-full min-h-screen flex items-center bg-white overflow-hidden py-12">
      {/* Left Side Content */}
      <div className="lg:w-1/2 w-full pl-10 lg:pl-32 z-10">
        <div
          className="flex items-center gap-3 mb-4 animate-fadeInDown"
          style={{ animationDelay: "0.2s" }}
        >
          <span className="w-16 h-0.5 bg-[#FF9933] rounded animate-wiggle" />
          <span className="text-[#138808] text-lg italic font-semibold drop-shadow-md animate-pulse">
            Give Hope For Homeless
          </span>
        </div>
        <h1
          className="font-bold text-5xl sm:text-6xl md:text-7xl leading-tight mb-4 animate-fadeInLeft"
          style={{ animationDelay: "0.4s" }}
        >
          Donate For A<br />
          Better <span className="text-[#FF9933] animate-pop">World</span>
        </h1>
        <p
          className="text-lg text-gray-700 mb-8 animate-fadeInUp"
          style={{ animationDelay: "0.6s" }}
        >
          Explore the variety of volunteer opportunities available. From event
          planning and fundraising to fieldwork and administrative support
        </p>
        <div className="flex items-center gap-6">
          <a
            href="#"
            className="bg-[#138808] hover:bg-[#0F743C] text-white py-4 px-10 rounded-full font-semibold text-lg transition-all shadow-lg animate-bounce"
            style={{ animationDelay: "0.8s" }}
          >
            Discover Now <span className="ml-2">↗</span>
          </a>
          <button
            className="relative group animate-spin-slow"
            style={{ animationDelay: "1s" }}
          >
            <span className="w-20 h-20 bg-[#FF9933] bg-opacity-20 rounded-full flex justify-center items-center text-[#FF9933] text-3xl shadow-lg border-4 border-[#FF9933] group-hover:scale-110 transition-transform animate-pulse">
              &#9658;
            </span>
          </button>
        </div>
      </div>
      {/* Right Side*/}
      <div className="hidden lg:block absolute right-0 top-0 h-full w-1/2 overflow-hidden">
        <div className="absolute left-[-140px] top-0 w-[900px] h-full bg-white rounded-l-[50%] animate-slideInRight" />
        <img
          src="/images/process-1-1.jpg"
          alt="Children"
          className="relative z-10 h-full object-cover w-full rounded-bl-[40%] shadow-2xl animate-zoomIn"
          style={{ animationDelay: "1.2s" }}
        />

        <div className="absolute left-[-80px] top-20 z-20 animate-bounce">
          <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
            <path
              d="M25 20 C40 0, 80 30, 35 72 Q8 55, 25 20 Z"
              fill="#138808"
            />
            <circle cx="45" cy="40" r="12" fill="#FF9933" />
          </svg>
        </div>
      </div>
      {/* Mobile*/}
      <img
        src="/images/process-one-shape-1.png"
        alt="Children"
        className="block lg:hidden absolute top-0 left-0 w-full h-full object-cover opacity-30 pointer-events-none z-0 animate-fadeIn"
      />

      {/* Gradient Overlays for flag feel */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-[#FF9933] to-transparent opacity-30 animate-slideDown" />
        <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-[#138808] to-transparent opacity-30 animate-slideUp" />
      </div>

      <style>
        {`
          @keyframes fadeInDown { 0%{opacity:0;transform:translateY(-30px);} 100%{opacity:1;transform:translateY(0);} }
          .animate-fadeInDown { animation: fadeInDown 1000ms ease forwards; }
          @keyframes fadeInLeft { 0%{opacity:0;transform:translateX(-50px);} 100%{opacity:1;transform:translateX(0);} }
          .animate-fadeInLeft { animation: fadeInLeft 1.2s cubic-bezier(.34,1.56,.64,1) forwards; }
          @keyframes fadeInUp { 0%{opacity:0;transform:translateY(60px);} 100%{opacity:1;transform:translateY(0);} }
          .animate-fadeInUp { animation: fadeInUp 1000ms  cubic-bezier(.28,.84,.42,1) forwards;}
          @keyframes bounce { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-10px); } }
          .animate-bounce { animation: bounce 1.5s infinite; }
          @keyframes spin-slow {100%{transform:rotate(360deg);}}
          .animate-spin-slow { animation: spin-slow 4s linear infinite;}
          @keyframes zoomIn { 0%{opacity:0;transform:scale(0.8);} 100%{opacity:1;transform:scale(1);} }
          .animate-zoomIn { animation: zoomIn 1.3s cubic-bezier(.45,1.1,.53,1.12) forwards; }
          @keyframes slideInRight { 0%{opacity:0;transform:translateX(100px);}100%{opacity:1;transform:translateX(0);} }
          .animate-slideInRight { animation: slideInRight 850ms ease-out forwards; }
          @keyframes fadeIn { 0%{opacity:0;} 100%{opacity:1;} }
          .animate-fadeIn { animation: fadeIn 1200ms ease-in-out forwards;}
          @keyframes wiggle { 0%, 100% { transform: rotate(-8deg); } 50% { transform: rotate(8deg); } }
          .animate-wiggle { animation: wiggle 1.4s ease-in-out infinite; }
          @keyframes slideDown {0%{transform: translateY(-60px); opacity:0;} 100%{transform: translateY(0); opacity:1;}}
          .animate-slideDown {animation: slideDown 1.3s 750ms cubic-bezier(.44, .52, .57, 1) forwards;}
          @keyframes slideUp {0%{transform: translateY(60px); opacity:0;} 100%{transform: translateY(0); opacity:1;}}
          .animate-slideUp {animation: slideUp 1.3s 850ms cubic-bezier(.44, .52, .57, 1) forwards;}
          @keyframes pop {0%{transform:scale(.7);opacity:0.2;} 70%{transform:scale(1.2);} 100%{transform:scale(1);opacity:1;}}
          .animate-pop {animation: pop 1.4s cubic-bezier(.47,1.64,.41,.8) 450ms both;}
        `}
      </style>
    </section>
  );
};

export default AboutHero;
