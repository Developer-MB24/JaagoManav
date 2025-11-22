import React from "react";
import {
  User,
  MessageCircle,
  Quote,
  Calendar,
  Search,
  ArrowRight,
} from "lucide-react";

export default function BlogDetailsSection() {
  return (
    <section className="blog-right-sidebar py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid lg:grid-cols-[minmax(0,2.2fr)_minmax(0,1fr)] gap-10">
          {/* LEFT: Article */}
          <div>
            <article className="space-y-8">
              {/* Main image */}
              <div className="overflow-hidden rounded-2xl">
                <img
                  src="images/blog-details-img-1.jpg"
                  alt="Blog cover"
                  className="w-full h-auto object-cover"
                />
              </div>

              {/* Content */}
              <div className="pt-5 pb-7 border-b border-slate-200">
                {/* Meta */}
                <ul className="flex flex-wrap items-center gap-5 text-sm font-semibold tracking-wide uppercase text-slate-500">
                  <li className="flex items-center gap-2">
                    <User size={16} className="text-[#FF9933]" />
                    <a href="#" className="hover:text-[#FF9933] transition">
                      By admin
                    </a>
                  </li>
                  <li className="flex items-center gap-2">
                    <MessageCircle size={16} className="text-[#FF9933]" />
                    <a href="#" className="hover:text-[#FF9933] transition">
                      Comments (05)
                    </a>
                  </li>
                </ul>

                {/* Title */}
                <h1 className="mt-5 mb-4 text-[28px] md:text-[34px] lg:text-[38px] leading-tight font-extrabold text-black">
                  Explore the world like never before travel experience
                </h1>

                {/* Body */}
                <p className="text-slate-600 leading-relaxed">
                  Web designing in a powerful way of just not an only
                  professions...
                </p>

                <p className="mt-4 mb-8 text-slate-600 leading-relaxed">
                  Web designing in a powerful way of just not an only
                  professions...
                </p>

                {/* Quote Box */}
                <div className="relative mb-7 rounded-2xl bg-[#F4F6FB] px-6 md:px-10 py-8">
                  <p className="text-slate-600 leading-relaxed">
                    Aliquam eros justo, posuere loborti viverra...
                  </p>

                  <span className="mt-6 inline-block pl-14 text-base md:text-lg font-bold text-[#111827] relative">
                    <span className="absolute left-0 top-1/2 h-[2px] w-10 -translate-y-1/2 bg-[#FF9933]" />
                    Mark wood
                  </span>

                  <div className="absolute bottom-6 right-7 text-[#FF9933]">
                    <Quote size={38} />
                  </div>
                </div>

                <p className="text-slate-600 leading-relaxed">
                  Web designing in a powerful way...
                </p>
              </div>

              {/* Keywords & Tags */}
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 py-5 border-b border-slate-200">
                {/* Keywords */}
                <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-5">
                  <span className="text-base font-extrabold text-[#111827]">
                    Keyword:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {["Relief Effort", "Kindness", "Helping"].map((item) => (
                      <a
                        key={item}
                        href="#"
                        className="inline-flex items-center rounded-xl bg-[#F4F6FB] px-4 py-2 text-sm font-medium text-slate-600 hover:bg-[#FF9933] hover:text-white transition"
                      >
                        {item}
                      </a>
                    ))}
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-5">
                  <span className="text-base font-extrabold text-[#111827]">
                    Tags:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {["Donation", "Charity"].map((item) => (
                      <a
                        key={item}
                        href="#"
                        className="text-sm font-medium text-slate-600 hover:text-[#FF9933] transition"
                      >
                        {item}
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* Comments */}
              <section className="comment-one mt-10 mb-7">
                <h3 className="mb-5 text-[22px] md:text-[25px] font-bold text-[#111827]">
                  2 comments
                </h3>

                {/* Comment 1 */}
                <div className="flex gap-6 pb-8 border-b border-slate-200">
                  <img
                    src="/images/about-two-img-1.jpg"
                    className="w-20 h-20 rounded-full object-cover"
                  />
                  <div className="flex-1 relative">
                    <h4 className="text-lg font-bold text-[#111827]">
                      Stanio lainton
                    </h4>
                    <span className="text-sm text-slate-500">
                      September 16, 2025
                    </span>
                    <p className="mt-4 mb-4 text-slate-600 leading-relaxed">
                      Ished fact that a reader will be...
                    </p>
                    <a
                      href="#"
                      className="absolute top-0 right-0 bg-[#FF9933] px-4 py-1.5 text-xs font-semibold rounded-full text-white transition hover:bg-[#e28322]"
                    >
                      Reply
                    </a>
                  </div>
                </div>

                {/* Comment 2 */}
                <div className="mt-8 flex gap-6">
                  <img
                    src="/images/about-two-img-1.jpg"
                    className="w-20 h-20 rounded-full object-cover"
                  />
                  <div className="flex-1 relative">
                    <h4 className="text-lg font-bold text-[#111827]">
                      Junal Alex
                    </h4>
                    <span className="text-sm text-slate-500">
                      September 16, 2025
                    </span>
                    <p className="mt-4 mb-4 text-slate-600 leading-relaxed">
                      Ished fact that a reader will be...
                    </p>
                    <a
                      href="#"
                      className="absolute top-0 right-0 bg-[#FF9933] px-4 py-1.5 text-xs font-semibold rounded-full text-white transition hover:bg-[#e28322]"
                    >
                      Reply
                    </a>
                  </div>
                </div>
              </section>

              {/* Comment Form */}
              <section className="comment-form rounded-2xl bg-[#F4FCFF] px-6 md:px-10 py-10">
                <h3 className="text-[26px] md:text-[32px] font-bold text-[#111827]">
                  Add a comment
                </h3>
                <p className="mt-3 mb-7 text-slate-700 text-sm md:text-base">
                  By using form u agree with the message storage, you can
                  contact us directly now
                </p>

                <form className="space-y-5">
                  {/* Top three inputs */}
                  <div className="grid gap-4 md:grid-cols-3">
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      className="w-full h-[64px] rounded-[18px] border border-transparent bg-white px-6 text-base text-slate-700 placeholder:text-slate-400 shadow-sm outline-none focus:border-[#FF9933] focus:ring-2 focus:ring-[#FF9933]/60"
                    />
                    <input
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      className="w-full h-[64px] rounded-[18px] border border-transparent bg-white px-6 text-base text-slate-700 placeholder:text-slate-400 shadow-sm outline-none focus:border-[#FF9933] focus:ring-2 focus:ring-[#FF9933]/60"
                    />
                    <input
                      type="text"
                      name="website"
                      placeholder="Your Website"
                      className="w-full h-[64px] rounded-[18px] border border-transparent bg-white px-6 text-base text-slate-700 placeholder:text-slate-400 shadow-sm outline-none focus:border-[#FF9933] focus:ring-2 focus:ring-[#FF9933]/60"
                    />
                  </div>

                  {/* Message box */}
                  <textarea
                    name="message"
                    placeholder="Write your messege"
                    className="w-full h-[180px] rounded-[18px] border border-transparent bg-white px-6 py-4 text-base text-slate-700 placeholder:text-slate-400 shadow-sm outline-none resize-none focus:border-[#FF9933] focus:ring-2 focus:ring-[#FF9933]/60"
                  />

                  {/* Checkbox + button row */}
                  <div className="mt-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                    {/* Checkbox */}
                    <label className="inline-flex cursor-pointer select-none items-center text-sm text-slate-800">
                      <input
                        type="checkbox"
                        defaultChecked
                        className="peer hidden"
                      />
                      <span className="mr-2 flex h-[18px] w-[18px] items-center justify-center rounded-[3px] border border-[#003C3A] bg-transparent">
                        <svg
                          className="h-[11px] w-[11px] text-[#003C3A] opacity-0 peer-checked:opacity-100 transition-opacity duration-150"
                          viewBox="0 0 20 20"
                          fill="none"
                        >
                          <path
                            d="M5 10.5L8 13.5L15 6.5"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                      Save my name email and website
                    </label>

                    {/* Submit button */}
                    <button
                      type="submit"
                      className="inline-flex items-center gap-2 rounded-full border border-[#FF9933] bg-[#FF9933] px-8 py-3 text-sm font-semibold uppercase tracking-wide text-white  duration-200 hover:bg-transparent hover:text-[#FF9933] hover:bg-[#138808]"
                    >
                      <span>Send Messege</span>
                      <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white text-[#FF9933]">
                        <ArrowRight className="h-4 w-4" />
                      </span>
                    </button>
                  </div>
                </form>
              </section>
            </article>
          </div>

          {/* RIGHT SIDEBAR */}
          <aside className="space-y-8">
            {/* Search */}
            <div className="rounded-2xl bg-[#F4F6FB] p-6">
              <h3 className="pb-3 mb-5 border-b text-[22px] font-bold text-[#111827]">
                Search Here
              </h3>
              <form className="relative">
                <input
                  type="search"
                  placeholder="Search.."
                  className="w-full h-[56px] rounded-xl bg-white px-4 pr-12 text-sm text-slate-700 outline-none focus:ring-2 focus:ring-[#FF9933]"
                />
                <button
                  type="submit"
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 hover:text-[#FF9933]"
                >
                  <Search size={20} />
                </button>
              </form>
            </div>

            {/* Categories */}
            <div className="rounded-2xl bg-[#F4F6FB] p-6">
              <h3 className="pb-3 mb-4 border-b text-[22px] font-bold text-[#111827]">
                Categories
              </h3>
              <ul className="space-y-2 text-sm">
                {[
                  ["Donation Drive", 59],
                  ["Community Outreach", 35],
                  ["Volunteer Assistance", 12],
                  ["Fundraising Event", 46],
                  ["Support Network", 78],
                  ["Philanthropic Initiative", 89],
                ].map(([label, count]) => (
                  <li key={label}>
                    <a
                      href="#"
                      className="flex justify-between text-slate-600 hover:text-[#FF9933]"
                    >
                      <span>{label}</span>
                      <span>{count}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Recent Post */}
            <div className="rounded-2xl bg-[#F4F6FB] p-6 pr-4">
              <h3 className="pb-3 mb-4 border-b text-[22px] font-bold text-[#111827]">
                Recent Post
              </h3>
              <ul className="space-y-4">
                {[
                  {
                    img: "/images/about-two-img-1.jpg",
                    title: "Funding Research for a Cure Charity",
                    date: "October 19, 2022",
                  },
                  {
                    img: "/images/about-two-img-1.jpg",
                    title: "Supporting Mental Health Initiatives Donations",
                    date: "October 19, 2022",
                  },
                  {
                    img: "/images/about-two-img-1.jpg",
                    title: "Caring for the Elderly and Vulnerable at a Time",
                    date: "October 19, 2022",
                  },
                ].map(({ img, title, date }) => (
                  <li key={title} className="flex items-center">
                    <div className="w-20 shrink-0">
                      <img
                        src={img}
                        alt={title}
                        className="w-full h-auto rounded-xl object-cover"
                      />
                    </div>
                    <div className="ml-4 flex-1">
                      <p className="text-xs text-slate-500 mb-1 flex items-center gap-2">
                        <Calendar size={14} className="text-[#FF9933]" />
                        {date}
                      </p>
                      <h4 className="text-sm font-semibold text-[#111827]">
                        <a href="#" className="hover:text-[#FF9933] transition">
                          {title}
                        </a>
                      </h4>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tags */}
            <div className="rounded-2xl bg-[#F4F6FB] p-6">
              <h3 className="pb-3 mb-4 border-b text-[22px] font-bold text-[#111827]">
                Popular Tags
              </h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "Giving Back",
                  "Relief Effort",
                  "Positive Impact",
                  "Kindness",
                  "Care",
                  "Helping",
                ].map((tag) => (
                  <a
                    key={tag}
                    href="#"
                    className="inline-flex items-center rounded-xl bg-white px-4 py-2 text-xs font-medium text-slate-600 hover:bg-[#FF9933] hover:text-white transition"
                  >
                    {tag}
                  </a>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
