import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);
  const btnRef = useRef(null);

  useEffect(() => {
    function onClickOutside(e) {
      if (!open) return;
      if (
        menuRef.current &&
        !menuRef.current.contains(e.target) &&
        btnRef.current &&
        !btnRef.current.contains(e.target)
      ) {
        setOpen(false);
      }
    }
    function onEsc(e) {
      if (e.key === "Escape") setOpen(false);
    }
    window.addEventListener("click", onClickOutside);
    window.addEventListener("keydown", onEsc);
    return () => {
      window.removeEventListener("click", onClickOutside);
      window.removeEventListener("keydown", onEsc);
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-slate-200">
      <div className="mx-auto max-w-6xl px-4 h-16 flex items-center justify-between">
        <Link
          to="/"
          className="group flex items-center gap-3 font-bold text-xl whitespace-nowrap"
        >
          <img
            src="/favicon.svg"
            alt="Logo"
            className="w-8 h-8 transition group-hover:rotate-6"
          />
          <span>
            Jaago <span className="text-primary">Manav</span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-6 text-sm">
          <Link to="/" className="relative group">
            <span className="hover:text-primary transition-colors">Home</span>
            <span className="pointer-events-none absolute left-0 -bottom-1 h-[2px] w-0 bg-primary transition-all duration-300 group-hover:w-full" />
          </Link>

          <div className="relative">
            <button
              ref={btnRef}
              onClick={() => setOpen((v) => !v)}
              className="inline-flex items-center gap-2 rounded-full px-3 py-1.5 hover:bg-slate-100 hover:text-primary transition"
              aria-haspopup="menu"
              aria-expanded={open ? "true" : "false"}
            >
              Services
              <svg
                className={`h-4 w-4 transition-transform ${
                  open ? "rotate-180" : ""
                }`}
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5.23 7.21a.75.75 0 011.06.02L10 11.084l3.71-3.853a.75.75 0 111.08 1.04l-4.25 4.41a.75.75 0 01-1.08 0l-4.25-4.41a.75.75 0 01.02-1.06z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            <div
              ref={menuRef}
              role="menu"
              className={[
                "absolute left-0 mt-2 w-72 rounded-2xl border border-slate-200 bg-white shadow-soft p-2",
                "origin-top transition-all duration-200",
                open
                  ? "opacity-100 translate-y-0 scale-100 pointer-events-auto"
                  : "opacity-0 -translate-y-2 scale-95 pointer-events-none",
              ].join(" ")}
            >
              <ul className="grid grid-cols-1">
                {[
                  { label: "Education", href: "/education" },
                  { label: "Health", href: "/health" },
                  { label: "Agriculture", href: "/agriculture" },
                  { label: "Employment", href: "/employment" },
                  {
                    label: "Geographical Issues",
                    href: "/geographical-issues",
                  },
                  {
                    label: "Social & Political Awareness",
                    href: "/social-political-awareness",
                  },
                  { label: "Miscellaneous", href: "/misc" },
                ].map((it) => (
                  <li key={it.label}>
                    <Link
                      to={it.href}
                      className="group/item flex items-center justify-between gap-2 rounded-xl px-3 py-2 hover:bg-slate-50"
                      onClick={() => setOpen(false)}
                    >
                      <span className="group-hover/item:text-primary">
                        {it.label}
                      </span>
                      <svg
                        className="h-4 w-4 opacity-0 -translate-x-1 transition group-hover/item:opacity-100 group-hover/item:translate-x-0"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path d="M9 18l6-6-6-6" />
                      </svg>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <Link to="/blog" className="relative group">
            <span className="hover:text-primary transition-colors">Blog</span>
            <span className="pointer-events-none absolute left-0 -bottom-1 h-[2px] w-0 bg-primary transition-all duration-300 group-hover:w-full" />
          </Link>
        </nav>

        <a href="#logout" className="btn-secondary !py-2 !px-4 text-sm">
          Logout
        </a>
      </div>
    </header>
  );
}
