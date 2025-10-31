import React from "react";
import { motion } from "framer-motion";

export default function ContactSection() {
  return (
    <section className="relative overflow-hidden min-h-[800px] md:min-h-[300px]">
      <div className=" inset-0 bg-white -z-30" />

      <div
        className="absolute inset-0 -z-20"
        style={{
          backgroundImage:
            "linear-gradient(rgba(11,42,36,0.92), rgba(11,42,36,0.92)), url('/images/about-two-img-2.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          WebkitMaskImage: "url('/images/contact-curve.png')",
          maskImage: "url('/images/contact-curve.png')",
          WebkitMaskSize: "cover",
          maskSize: "cover",
          WebkitMaskRepeat: "no-repeat",
          maskRepeat: "no-repeat",
          WebkitMaskPosition: "center",
          maskPosition: "center",
        }}
      />

      {/* CONTENT */}
      <div className="relative z-10 mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-10 px-4 md:px-8 py-24 md:py-6 items-start">
        <div className="text-white">
          <p className="uppercase text-sm tracking-[0.2em] text-[#f27b21] mb-3">
            Our Contact
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">
            Join With Us To As <span className="text-[#f27b21]">Volenteer</span>{" "}
            Contact Now!
          </h2>
          <p className="text-white/85 mb-8">
            Charity address a range of simply application and infrastructure
            this of passages of available.
          </p>

          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <input
                type="text"
                placeholder="Your Name"
                className="h-[55px] w-full bg-transparent border border-white/15 rounded-md px-4 text-white/80 placeholder-white/60 focus:outline-none"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="h-[55px] w-full bg-transparent border border-white/15 rounded-md px-4 text-white/80 placeholder-white/60 focus:outline-none"
              />
              <input
                type="text"
                placeholder="Phone Number"
                className="h-[55px] w-full bg-transparent border border-white/15 rounded-md px-4 text-white/80 placeholder-white/60 focus:outline-none"
              />
              <div className="relative">
                <select
                  defaultValue=""
                  className="h-[55px] w-full appearance-none bg-transparent border border-white/15 rounded-md px-4 pr-10 text-white/80 focus:outline-none"
                >
                  <option value="" className="text-black">
                    Service Type
                  </option>
                  <option className="text-black">Type Of Service 01</option>
                  <option className="text-black">Type Of Service 02</option>
                  <option className="text-black">Type Of Service 03</option>
                  <option className="text-black">Type Of Service 04</option>
                </select>
                <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-white/70">
                  ▾
                </span>
              </div>
            </div>

            <textarea
              placeholder="Message"
              className="w-full h-[150px] bg-transparent border border-white/15 rounded-md px-4 py-3 text-white/80 placeholder-white/60 focus:outline-none"
            />

            <button
              type="submit"
              className="inline-flex items-center gap-3 rounded-full border border-[#f27b21] px-6 py-3 text-white uppercase tracking-wide transition hover:bg-[#f27b21]"
            >
              <span>Send A Message</span>
              <span className="grid h-8 w-8 place-items-center rounded-full bg-white/15 ring-1 ring-white/30">
                →
              </span>
            </button>
          </form>
        </div>

        {/* RIGHT column */}
        <div className="relative flex flex-col justify-between h-full">
          <div className="flex-1 flex items-start justify-center md:justify-end">
            <motion.img
              src="/images/about-two-img-1.jpg"
              alt="Volunteers"
              className="w-[420px] md:w-[480px] lg:w-[380px] h-auto md:h-[520px] object-cover mt-16 rounded-md"
              initial={{ opacity: 0, x: 120 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            />
          </div>
        </div>
      </div>

      {/* orange base strip */}
      <div className="absolute bottom-0 right-0 h-[95px] w-1/2 bg-[#f27b21] -z-40">
        <div className="relative bg-[#f27b21] text-white rounded-tl-[28px] px-6 md:pl-24 py-5 flex flex-col sm:flex-row gap-6 sm:gap-10 items-center shadow-[0_10px_35px_rgba(242,123,33,0.35)] mt-8 md:mt-0">
          <div className="flex items-center gap-3">
            <div className="grid h-10 w-10 place-items-center rounded-full border border-white/40">
              <span>📞</span>
            </div>
            <div>
              <p className="text-white/90 text-sm">Call Us Any Time:</p>
              <h4 className="font-semibold leading-tight">
                <a href="tel:+0882466422710">+088 (246) 642-27-10</a>
              </h4>
            </div>
          </div>

          <div className="hidden sm:block h-10 w-px bg-white/35" />

          <div className="flex items-center gap-3">
            <div className="grid h-10 w-10 place-items-center rounded-full border border-white/40">
              <span>✉️</span>
            </div>
            <div>
              <p className="text-white/90 text-sm">Email Us:</p>
              <h4 className="font-semibold leading-tight">
                <a href="mailto:example@mail.com">example@mail.com</a>
              </h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
