import React, { useState } from "react";

export default function SubscribeSection() {
  const [email, setEmail] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <section className="w-full bg-[#FF9933] text-white px-16">
      <div className="max-w-7xl mx-auto px-4 py-10 md:py-14">
        <form
          onSubmit={onSubmit}
          className="grid items-center gap-6 md:gap-8 lg:grid-cols-12"
          aria-label="Subscribe to our newsletter"
        >
          {/* Title */}
          <h2 className="lg:col-span-5 text-3xl md:text-3xl font-extrabold tracking-tight font-title">
            Subscribe Our Newsletters
          </h2>

          {/* Email input with underline */}
          <div className="lg:col-span-5">
            <label htmlFor="newsletter-email" className="sr-only">
              Email
            </label>
            <div className="relative">
              <input
                id="newsletter-email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter Your Email"
                className="w-full bg-transparent placeholder-white/90 text-white font-paragraph outline-none
                           pb-2 border-b border-white/40 focus:border-white transition"
              />

              <span className="pointer-events-none absolute left-0 right-0 -bottom-[1px] h-[2px] bg-white/20"></span>
            </div>
          </div>

          <div className="lg:col-span-2">
            <button
              type="submit"
              className="group w-full md:w-auto inline-flex items-center justify-between gap-4
                         rounded-full bg-white px-6 pl-7 pr-2 h-14 shadow-soft
                         text-[#FF9933] font-semibold hover:opacity-95 transition"
            >
              <span className="font-paragraph text-lg">Subscribe</span>

              <span
                className="grid place-items-center size-10 rounded-full bg-[#FF9933] text-white
                               group-hover:translate-x-[2px] transition-transform"
              >
                {/* Arrow icon */}
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M5 12h12M13 6l6 6-6 6"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
