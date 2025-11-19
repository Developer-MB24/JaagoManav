import React from "react";

const AboutVolunteerSection = () => (
  <section className="relative overflow-hidden bg-white px-4 py-14 md:py-20">
    <div className="pointer-events-none absolute inset-0 z-0">
      <div className="animate-slideDown absolute left-0 top-0 h-40 w-full opacity-30 md:h-64 bg-gradient-to-b from-[#FF9933] to-transparent" />
      <div className="animate-slideUp absolute bottom-0 left-0 h-40 w-full opacity-30 md:h-64 bg-gradient-to-t from-[#138808] to-transparent" />
    </div>

    <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center justify-between md:flex-row t">
      {/* Left Section (Images + Stats Box) */}
      <div className="relative flex w-full max-w-[520px] flex-col md:flex-row md:items-start">
        {/* Big Bottom Image */}
        <div className="relative h-80 w-64 rounded-[3rem] overflow-hidden shadow-xl xs:h-96 xs:w-72 sm:h-[420px] sm:w-80 md:h-[430px] md:w-80">
          <img
            src="/images/about-two-img-2.jpg"
            alt="Children"
            className="h-full w-full object-cover"
          />
        </div>

        {/* Top-Right Small Image */}
        <div className="absolute right-4 top-[-30px] h-32 w-56 rounded-[3rem] overflow-hidden shadow-md border-8 border-white xs:h-36 xs:w-64 sm:h-64 sm:w-72 md:right-[60px] md:top-[-120px]">
          <img
            src="/images/about-two-img-3.jpg"
            alt="Kids"
            className="h-full w-full object-cover"
          />
        </div>

        {/* Green Stats Box */}
        <div className="absolute bottom-[-30px] border-8 border-white flex flex-col right-4 justify-center items-center sm:right-8 md:right-[-40px] md:bottom-[40px] w-[240px] sm:w-[270px] bg-[#138808] rounded-[3rem] h-52 px-6 py-4 shadow-xl">
          <div className="text-3xl font-bold text-white leading-tight">
            266300+
          </div>
          <p className="text-white font-medium text-sm mt-1">
            Children in Africa Need School
          </p>
          <a
            href="#"
            className="text-yellow-300 underline text-sm font-semibold hover:text-yellow-400 mt-2 inline-block"
          >
            Become A Volunteer
          </a>
        </div>

        {/* Decorative Shape */}
        <div className="absolute -left-6 -top-6 -z-10 hidden sm:block">
          <svg width="240" height="240" viewBox="0 0 200 200" fill="none">
            <path
              d="M150 10C170 30 190 60 180 100C170 140 130 180 90 190C50 200 10 180 5 130C0 80 30 40 70 20C110 0 130 -10 150 10Z"
              fill="#FFB347"
              opacity="0.25"
            />
          </svg>
        </div>
      </div>

      {/* Right: Text */}
      <div className="relative z-10 mt-20 w-full max-w-xl md:ml-10 md:mt-0 lg:ml-24">
        <div className="mb-3 flex items-center gap-2 sm:mb-4">
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#138808"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-5 w-5 sm:h-5 sm:w-5"
          >
            <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8z" />
          </svg>
          <span className="text-base italic font-semibold text-[#FF9933] sm:text-lg">
            About Us
          </span>
        </div>

        <h2 className="mb-4 text-2xl font-bold leading-snug text-[#181818] sm:mb-5 sm:text-4xl">
          Give Time, Change Lives
          <br /> Volunteer Opportunities
        </h2>

        <p className="mb-4 leading-relaxed text-gray-600 sm:mb-6">
          Our secure online donation platform allows you to make contribution
          quickly and safely. Choose from various payment methods and set up
          one-time or recurring donations with ease. Your support helps us
          continue our mission.
        </p>

        <p className="mb-6 leading-relaxed text-gray-600">
          Discover the inspiring stories of individuals and communities
          transformed by our programs. Our success stories highlight the
          real-life impact of your donations and the resilience of those we
          help. These narratives showcase the power of compassion & generosity.
        </p>

        {/* Experience */}
        <div className="mb-7 mt-3 flex items-center gap-3 sm:mb-8 sm:mt-4">
          <div className="flex h-11 w-11 items-center justify-center rounded-full border border-[#FF9933] bg-[#fff3e0] sm:h-12 sm:w-12">
            <svg
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
              className="h-5 w-5 sm:h-6 sm:w-6"
            >
              <path
                d="M12 2C8 2 5 5 5 9c0 4 7 13 7 13s7-9 7-13c0-4-3-7-7-7z"
                stroke="#FF9933"
                strokeWidth="2"
                fill="#FF9933"
                fillOpacity="0.15"
              />
              <circle cx="12" cy="9" r="2" fill="#FF9933" />
            </svg>
          </div>
          <div>
            <div className="text-base font-bold text-[#181818] sm:text-lg">
              32 Years of Experiences
            </div>
            <div className="text-xs leading-snug text-gray-600 sm:text-sm">
              Join our monthly giving program to provide consistent support to
              our initiatives. Regular contributions,
            </div>
          </div>
        </div>

        {/* CTA */}
        <a
          href="#"
          className="inline-block rounded-full bg-[#FF9933] px-6 py-3 text-base font-semibold text-white shadow-lg transition-all hover:bg-[#f7aa46] sm:px-8 sm:py-3.5 sm:text-lg"
        >
          About More <span className="ml-1">↗</span>
        </a>
      </div>
    </div>

    {/* Animations */}
    <style>{`
      @keyframes leftRight { 0%,100%{transform:translateX(0)} 25%{transform:translateX(18px)} 50%{transform:translateX(0)} 75%{transform:translateX(-18px)} }
      .animate-leftRight{ animation:leftRight 2.5s ease-in-out infinite; }

      @keyframes upDown { 0%,100%{transform:translateY(0)} 25%{transform:translateY(-18px)} 50%{transform:translateY(0)} 75%{transform:translateY(18px)} }
      .animate-upDown{ animation:upDown 2.5s ease-in-out infinite; }

      @keyframes slideDown { 0%{transform:translateY(-25%)} 100%{transform:translateY(0%)} }
      @keyframes slideUp   { 0%{transform:translateY(25%)}  100%{transform:translateY(0%)} }
      .animate-slideDown{ animation:slideDown 14s ease-in-out infinite alternate; }
      .animate-slideUp{   animation:slideUp   14s ease-in-out infinite alternate; }
    `}</style>
  </section>
);

export default AboutVolunteerSection;
