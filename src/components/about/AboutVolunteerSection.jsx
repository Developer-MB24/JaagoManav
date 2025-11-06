import React from "react";

const AboutVolunteerSection = () => (
  <section className="relative overflow-hidden bg-white px-4 py-14 md:py-20">
    <div className="pointer-events-none absolute inset-0 z-0">
      <div className="animate-slideDown absolute left-0 top-0 h-40 w-full opacity-30 md:h-64 bg-gradient-to-b from-[#FF9933] to-transparent" />
      <div className="animate-slideUp absolute bottom-0 left-0 h-40 w-full opacity-30 md:h-64 bg-gradient-to-t from-[#138808] to-transparent" />
    </div>

    <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center justify-between md:flex-row md:items-start">
      {/* Left: Images*/}
      <div className="relative flex w-full max-w-[480px] flex-col items-center gap-5 md:items-start">
        {/* Top small image  */}
        <div className="animate-upDown relative z-10 h-32 w-64 overflow-hidden rounded-3xl shadow-md xs:h-36 xs:w-72 sm:h-40 sm:w-80 md:ml-12 md:h-40 md:w-80 lg:ml-48">
          <img
            src="/images/about-two-img-3.jpg"
            alt="Children smiling"
            className="h-full w-full object-cover"
          />
        </div>

        {/* Bottom large image */}
        <div className="relative z-0 mt-[-20px] h-72 w-64 overflow-hidden rounded-3xl shadow-xl xs:mt-[-28px] xs:h-80 xs:w-72 sm:mt-[-36px] sm:h-96 sm:w-80 md:ml-2 md:mt-[-50px] md:h-96 md:w-80">
          <img
            src="/images/about-two-img-2.jpg"
            alt="Children learning"
            className="h-full w-full object-cover"
          />
        </div>

        <div
          className="
          absolute left-1/2 bottom-[-18px] translate-x-[-50%]
          xs:bottom-[-22px]
          sm:static sm:translate-x-0 sm:self-center sm:mt-3
          md:absolute md:left-[18rem] md:bottom-8
          lg:left-80
        "
        >
          <div className="animate-leftRight w-[220px] rounded-[1.8rem] bg-[#138808] mb-[-60px] px-6 py-2 text-white shadow-xl md:mb-[-180px] md:ml-[-180px] xl:w-[280px] xl:mb-[-120px] mxl:px-8 xl:py-7">
            <div className="mb-2 text-2xl font-bold leading-tight sm:text-3xl">
              266300+
            </div>
            <div className="mb-2 text-sm font-semibold leading-snug sm:text-base">
              Children in Africa Need School
            </div>
            <a
              href="#"
              className="text-xs font-semibold text-yellow-300 underline transition-colors hover:text-yellow-400 sm:text-sm"
            >
              Become A Volunteer
            </a>
          </div>
        </div>

        <div className="pointer-events-none absolute -top-6 -left-4 -z-10 hidden sm:block md:-top-10 md:-left-8">
          <svg width="200" height="200" viewBox="0 0 200 200" fill="none">
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
