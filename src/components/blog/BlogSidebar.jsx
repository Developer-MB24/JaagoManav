import React from "react";
import { Link } from "react-router-dom";

export default function BlogSidebar() {
  const categories = [
    { label: "Donation Drive", count: 59, href: "/blog-details" },
    { label: "Community Outreach", count: 35, href: "/blog-details" },
    { label: "Volunteer Assistance", count: 12, href: "/blog-details" },
    { label: "Fundraising Event", count: 46, href: "/blog-details" },
    { label: "Support Network", count: 78, href: "/blog-details" },
    { label: "Philanthropic Initiative", count: 89, href: "/blog-details" },
  ];

  const recentPosts = [
    {
      image: "/images/about-two-img-1.jpg",
      date: "October 19, 2022",
      title: "Funding Research for a Cure Charity",
      href: "/blog-details",
    },
    {
      image: "/images/about-two-img-1.jpg",
      date: "October 19, 2022",
      title: "Supporting Mental Health Initiatives Donations",
      href: "/blog-details",
    },
    {
      image: "/images/about-two-img-1.jpg",
      date: "October 19, 2022",
      title: "Caring for the Elderly and Vulnerable at a Time",
      href: "/blog-details",
    },
  ];

  const tags = [
    "Giving Back",
    "Relief Effort",
    "Positive Impact",
    "Kindness",
    "Care",
    "Helping",
  ];

  return (
    <aside className="w-full">
      <div className="space-y-7">
        <div className="bg-[#f5f6f8] rounded-2xl p-6">
          <div className="mb-6">
            <h3 className="text-[22px] font-bold leading-[34px] border-b border-black/10 pb-[11px]">
              Search Here
            </h3>
          </div>
          <form className="relative">
            <input
              type="search"
              placeholder="Search.."
              className="w-full h-[60px] rounded-[10px] border-none outline-none bg-white px-5 pr-12 text-[16px] text-slate-600"
            />
            <button
              type="submit"
              className="absolute top-1/2 right-[15px] -translate-y-1/2 w-10 h-10 flex items-center justify-center text-[20px] text-slate-500 hover:text-[#138808] transition"
            >
              {/* search icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <circle cx="11" cy="11" r="6" />
                <path d="M16 16l4 4" />
              </svg>
            </button>
          </form>
        </div>

        {/* Categories */}
        <div className="bg-[#f5f6f8] rounded-2xl p-6">
          <div className="mb-5">
            <h3 className="text-[22px] font-bold leading-[34px] border-b border-black/10 pb-[11px]">
              Categories
            </h3>
          </div>
          <ul className="space-y-[11px]">
            {categories.map((cat, idx) => (
              <li key={idx}>
                <Link
                  to={cat.href}
                  className="flex items-center justify-between text-[15px] text-slate-600 bg-[linear-gradient(to_right,currentColor_0%,currentColor_100%)] bg-[length:0_1px] bg-no-repeat bg-[position:0_95%] transition-[background-size,color] duration-500 hover:text-[#138808] hover:bg-[length:100%_1px]"
                >
                  <span>{cat.label}</span>
                  <span>{cat.count}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-[#f5f6f8] rounded-2xl p-6 pr-5">
          <div className="mb-4">
            <h3 className="text-[22px] font-bold leading-[34px] border-b border-black/10 pb-[11px]">
              Recent Post
            </h3>
          </div>
          <ul className="space-y-[17px]">
            {recentPosts.map((post, idx) => (
              <li key={idx} className="flex items-center">
                <div className="w-20 max-w-[80px]">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full rounded-[10px] object-cover"
                  />
                </div>
                <div className="ml-[15px] flex-1">
                  <p className="text-sm text-slate-500 mt-1 flex items-center gap-2">
                    <span className="font-bold text-[#138808]">
                      {/* calendar icon */}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-4 h-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <rect
                          x="3"
                          y="4"
                          width="18"
                          height="18"
                          rx="2"
                          ry="2"
                        />
                        <path d="M16 2v4M8 2v4M3 10h18" />
                      </svg>
                    </span>
                    {post.date}
                  </p>
                  <h4 className="text-[18px] leading-[28px] font-bold mt-1">
                    <Link
                      to={post.href}
                      className="text-slate-900 hover:text-[#138808] transition-colors"
                    >
                      {post.title}
                    </Link>
                  </h4>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-[#f5f6f8] rounded-2xl p-6">
          <div className="mb-5">
            <h3 className="text-[22px] font-bold leading-[34px] border-b border-black/10 pb-[11px]">
              Popular Tags
            </h3>
          </div>
          <div className="flex flex-wrap gap-2 -ml-[10px]">
            {tags.map((tag, idx) => (
              <Link
                key={idx}
                to="/blog-details"
                className="ml-[10px] mt-[10px] inline-block rounded-[10px] bg-white px-[14px] py-[9px] text-[16px] font-medium leading-[26px] text-slate-600 hover:bg-[#138808] hover:text-white transition"
              >
                {tag}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </aside>
  );
}
