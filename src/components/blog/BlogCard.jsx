import React from "react";
import { Link } from "react-router-dom";
import { CalendarDays, User, MessageSquare } from "lucide-react";

export default function BlogCard({ image, date, title, excerpt, link }) {
  return (
    <div className="group bg-white rounded-2xl shadow-sm overflow-hidden hover:shadow-md transition-all duration-300">
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-64 object-cover transition duration-500 group-hover:blur-sm"
        />

        <div className="absolute top-3 left-3 bg-white text-slate-800 text-xs font-medium px-3 py-1.5 rounded-full flex items-center gap-2 shadow">
          <CalendarDays size={14} className="text-orange-500" />
          <span>{date}</span>
        </div>

        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
          <div className="w-12 h-12 flex items-center justify-center rounded-full bg-orange-500 text-white text-2xl font-semibold transform scale-75 group-hover:scale-100 transition">
            +
          </div>
        </div>
      </div>

      <div className="p-6">
        <div className="flex items-center gap-5 text-sm text-slate-500 mb-3">
          <div className="flex items-center gap-1.5">
            <User size={14} className="text-orange-500" />
            Admin
          </div>
          <div className="flex items-center gap-1.5">
            <MessageSquare size={14} className="text-orange-500" />
            Comment
          </div>
        </div>

        <h3 className="text-lg font-bold text-slate-900 group-hover:text-orange-500 transition-colors mb-2">
          {title}
        </h3>

        <p className="text-sm text-slate-600 mb-4">{excerpt}</p>

        <Link
          to={link}
          className="text-orange-500 text-sm font-medium inline-flex items-center gap-2 hover:gap-3 transition-all"
        >
          Read More
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-4 h-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13 7l5 5m0 0l-5 5m5-5H6"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
}
