import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function BlogSidebar({
  categories = [],
  recent = [],
  tags = [],
  onSearch,
}) {
  const [q, setQ] = useState("");

  return (
    <div className="space-y-6">
      <div className="bg-slate-50 rounded-2xl p-6">
        <h3 className="text-slate-800 font-semibold mb-4">Search Here</h3>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            onSearch?.(q);
          }}
          className="relative"
        >
          <input
            type="text"
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search.."
            className="w-full border border-slate-200 rounded-full py-2.5 px-4 pr-11 text-sm outline-none focus:border-orange-500"
          />
          <button
            type="submit"
            className="absolute right-2.5 top-1/2 -translate-y-1/2 rounded-full p-1.5 hover:bg-white/70 text-slate-500"
            aria-label="Search"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              strokeWidth="2"
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 104.5 4.5a7.5 7.5 0 0012.15 12.15z"
              />
            </svg>
          </button>
        </form>
      </div>

      {/* Categories */}
      <div className="bg-slate-50 rounded-2xl p-6">
        <h3 className="text-slate-800 font-semibold mb-4">Categories</h3>
        <ul className="divide-y divide-slate-200 text-sm">
          {categories.map(([label, count]) => (
            <li
              key={label}
              className="flex items-center justify-between py-2 text-slate-600 hover:text-orange-500 transition"
            >
              <span>{label}</span>
              <span className="text-slate-400">{count}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="bg-slate-50 rounded-2xl p-6">
        <h3 className="text-slate-800 font-semibold mb-4">Recent Post</h3>
        <ul className="space-y-4">
          {recent.map((r) => (
            <li key={r.title} className="flex gap-3">
              <img
                src={r.image}
                alt={r.title}
                className="h-14 w-14 rounded-lg object-cover flex-none"
              />
              <div className="min-w-0">
                <p className="text-xs text-slate-400">{r.date}</p>
                <Link
                  to={r.link}
                  className="text-sm font-medium text-slate-800 hover:text-orange-500 line-clamp-2"
                >
                  {r.title}
                </Link>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className="bg-slate-50 rounded-2xl p-6">
        <h3 className="text-slate-800 font-semibold mb-4">Popular Tags</h3>
        <div className="flex flex-wrap gap-2">
          {tags.map((t) => (
            <Link
              key={t}
              to={`/tag/${encodeURIComponent(
                t.toLowerCase().replace(/\s+/g, "-")
              )}`}
              className="text-xs rounded-full border border-slate-200 px-3 py-1.5 text-slate-600 hover:border-orange-500 hover:text-orange-500 transition"
            >
              {t}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
