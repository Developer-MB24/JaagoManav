import { Mail, Phone, MessageCircleMore, ArrowRight } from "lucide-react";

export default function ContactVolunteer({
  leftImage = "/images/process-1-3.jpg",
  rightImage = "/images/about-two-img-1.jpg",
}) {
  return (
    <section className="relative w-full bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 pt-8 pb-28">
        {/* Top two cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left card */}
          <div className="relative rounded-2xl overflow-hidden min-h-[520px]">
            <img
              src={leftImage}
              alt="Volunteer"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/30" />
            <div className="relative z-10 p-6 sm:p-7 md:p-8 lg:p-9 text-white">
              <p className="text-sm tracking-widest italic font-semibold text-orange-400">
                OUR CONTACT
              </p>
              <h2 className="mt-2 text-3xl lg:text-4xl font-extrabold leading-tight">
                Join With Us To As{" "}
                <span className="text-orange-400">Volunteer</span>
                <br /> Contact Now!
              </h2>
              <p className="mt-3 text-white/85 max-w-md">
                Charity address a range of simply application and infrastructure
                this of passages of available.
              </p>

              <form className="mt-5 space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="h-12 rounded-md bg-white/10 backdrop-blur-md border border-white/30 text-white placeholder-white/80 px-4 outline-none focus:border-orange-400"
                  />
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="h-12 rounded-md bg-white/10 backdrop-blur-md border border-white/30 text-white placeholder-white/80 px-4 outline-none focus:border-orange-400"
                  />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    className="h-12 rounded-md bg-white/10 backdrop-blur-md border border-white/30 text-white placeholder-white/80 px-4 outline-none focus:border-orange-400"
                  />
                  <select
                    className="h-12 rounded-md bg-white/10 backdrop-blur-md border border-white/30 text-white/95 px-4 outline-none focus:border-orange-400"
                    defaultValue=""
                  >
                    <option value="" disabled className="text-gray-300">
                      Service Type
                    </option>
                    <option>Education Help</option>
                    <option>Treatment Help</option>
                    <option>Healthy Food</option>
                  </select>
                </div>
                <textarea
                  rows={3}
                  placeholder="Message"
                  className="rounded-md bg-white/10 backdrop-blur-md border border-white/30 text-white placeholder-white/80 px-4 py-3 outline-none focus:border-orange-400"
                />
                <button
                  type="button"
                  className="inline-flex items-center gap-3 rounded-full bg-orange-500 text-white font-semibold px-5 py-3 shadow-[0_10px_30px_-10px_rgba(249,115,22,0.8)] hover:bg-orange-600 transition"
                >
                  Send A Message
                  <span className="grid place-items-center w-8 h-8 rounded-full bg-white text-orange-600">
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </button>
              </form>
            </div>
          </div>

          {/* Right image card */}
          <div className="rounded-2xl overflow-hidden min-h-[520px]">
            <img
              src={rightImage}
              alt="Children"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="pointer-events-none">
          <div className="pointer-events-auto absolute left-1/2 -translate-x-1/2 bottom-6 w-[92%] max-w-5xl">
            <div className="rounded-[28px] bg-orange-500 text-white px-6 sm:px-8 py-6 shadow-[0_20px_50px_-12px_rgba(249,115,22,0.6)]">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Call */}
                <div className="flex items-start gap-4">
                  <div className="grid place-items-center w-10 h-10 rounded-full bg-black/25 shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div className="leading-tight">
                    <p className="text-white/85 text-sm">Call Us Any Time:</p>
                    <p className="font-bold">+088 (246) 642-27-10</p>
                  </div>
                </div>
                {/* Live Chat */}
                <div className="flex items-start gap-4">
                  <div className="grid place-items-center w-10 h-10 rounded-full bg-black/25 shrink-0">
                    <MessageCircleMore className="w-5 h-5" />
                  </div>
                  <div className="leading-tight">
                    <p className="text-white/85 text-sm">Live Chat:</p>
                    <p className="font-bold">We’re online now</p>
                  </div>
                </div>
                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="grid place-items-center w-10 h-10 rounded-full bg-black/25 shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="leading-tight">
                    <p className="text-white/85 text-sm">Email Us:</p>
                    <p className="font-bold">example@mail.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
