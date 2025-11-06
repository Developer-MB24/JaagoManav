import React from "react";

const CallToActionSection = () => (
  <section className="w-full flex flex-col lg:flex-row">
    {/* Left */}
    <div className="relative flex-1 flex flex-col justify-center px-6 py-10 md:px-10 md:py-12 lg:px-12 lg:py-12 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-0 left-0 w-full h-56 md:h-64 bg-gradient-to-b from-[#FF9933] to-transparent opacity-30 animate-slideDown" />
        <div className="absolute bottom-0 left-0 w-full h-56 md:h-64 bg-gradient-to-t from-[#138808] to-transparent opacity-30 animate-slideUp" />
      </div>

      <div className="relative z-10">
        <div className="mb-2 italic text-2xl font-semibold text-[#FF9933]">
          Call To Action
        </div>
        <h2 className="text-[#202021] font-extrabold text-4xl md:text-5xl lg:text-6xl mb-6 leading-tight">
          Give Your Big Hand <br /> Forever
        </h2>

        <form className="w-full mt-5">
          <div className="flex flex-col lg:flex-row gap-5 mb-5">
            <input
              className="flex-1 rounded-full px-8 py-5 bg-white text-[#202021] placeholder-gray-500 shadow-xl outline-none border border-transparent focus:ring-2 focus:ring-[#FF9933] transition"
              type="text"
              placeholder="Your name"
            />
            <input
              className="flex-1 rounded-full px-8 py-5 bg-white text-[#202021] placeholder-gray-500 shadow-xl outline-none border border-transparent focus:ring-2 focus:ring-[#FF9933] transition"
              type="email"
              placeholder="Your Email Address..."
            />
          </div>

          <div className="flex flex-col lg:flex-row gap-5 mb-7">
            <input
              className="flex-1 rounded-full px-8 py-5 bg-white text-[#202021] placeholder-gray-500 shadow-xl outline-none border border-transparent focus:ring-2 focus:ring-[#FF9933] transition"
              type="text"
              placeholder="Phone Number..."
            />
            <input
              className="flex-1 rounded-full px-8 py-5 bg-white text-[#202021] placeholder-gray-500 shadow-xl outline-none border border-transparent focus:ring-2 focus:ring-[#FF9933] transition"
              type="text"
              placeholder="Zip Code..."
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-full bg-[#FF9933] hover:bg-orange-500 text-white font-bold text-xl py-6 mt-2 shadow-xl transition-all duration-200 scale-100 hover:scale-105"
          >
            Get Involved Today
          </button>
        </form>
      </div>
    </div>

    {/* Right: Map  */}
    <div className="flex-1">
      <div className="w-full h-[420px] md:h-[520px] lg:h-[700px] lg:min-h-[700px]">
        <iframe
          className="block w-full h-full"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14009.621295446973!2d77.20902125!3d28.613939699999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd3537265e09%3A0x7f36c6b76aecd4ad!2sDelhi!5e0!3m2!1sen!2sin!4v1709721623001!5m2!1sen!2sin"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Delhi Map"
        ></iframe>
      </div>
    </div>

    {/* Animations */}
    <style>{`
      @keyframes slideDown { 0% { transform: translateY(-25%);} 100% { transform: translateY(0%);} }
      @keyframes slideUp   { 0% { transform: translateY(25%);}  100% { transform: translateY(0%);} }
      .animate-slideDown { animation: slideDown 14s ease-in-out infinite alternate; }
      .animate-slideUp   { animation: slideUp   14s ease-in-out infinite alternate; }
    `}</style>
  </section>
);

export default CallToActionSection;
