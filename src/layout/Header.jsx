import React, { useState, useRef, useEffect, useLayoutEffect } from "react";
import { createPortal } from "react-dom";
import { Link } from "react-router-dom";

/* --- icons unchanged --- */
const ChevronDown = (props) => (
  <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" {...props}>
    <path d="M5.23 7.21a.75.75 0 011.06.02L10 10.06l3.71-2.83a.75.75 0 11.92 1.18l-4.2 3.2a.75.75 0 01-.92 0l-4.2-3.2a.75.75 0 01-.02-1.2z" />
  </svg>
);
const SearchIcon = (p) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    {...p}
  >
    <circle cx="11" cy="11" r="7" />
    <line x1="21" y1="21" x2="16.65" y2="16.65" />
  </svg>
);
const CartIcon = (p) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    {...p}
  >
    <circle cx="9" cy="21" r="1" />
    <circle cx="17" cy="21" r="1" />
    <path d="M1 1h4l2.68 12.39a2 2 0 002 1.61h7.72a2 2 0 002-1.61L21 6H6" />
  </svg>
);
const UserIcon = (p) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    {...p}
  >
    <path d="M20 21a8 8 0 10-16 0" />
    <circle cx="12" cy="7" r="4" />
  </svg>
);
const ArrowRight = (p) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    {...p}
  >
    <path d="M5 12h14" />
    <path d="M13 5l7 7-7 7" />
  </svg>
);

/* --- utils & dropdown unchanged --- */
function useOnClickOutside(refs, handler) {
  useEffect(() => {
    function onClick(e) {
      const arr = Array.isArray(refs) ? refs : [refs];
      if (arr.some((r) => r.current && r.current.contains(e.target))) return;
      handler(e);
    }
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, [refs, handler]);
}

function ServicesPortalDropdown({ anchorRef, onClose }) {
  const menuRef = useRef(null);
  const [pos, setPos] = useState({ top: 0, left: 0, width: 288 });

  const updatePosition = () => {
    const btn = anchorRef.current;
    if (!btn) return;
    const rect = btn.getBoundingClientRect();
    setPos({
      top: rect.bottom + 8,
      left: rect.left,
      width: rect.width < 288 ? 288 : rect.width,
    });
  };

  useLayoutEffect(() => {
    updatePosition();
  }, []);
  useEffect(() => {
    const handler = () => updatePosition();
    window.addEventListener("scroll", handler, true);
    window.addEventListener("resize", handler);
    return () => {
      window.removeEventListener("scroll", handler, true);
      window.removeEventListener("resize", handler);
    };
  }, []);
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  const items = [
    "Service",
    "Education",
    "Health",
    "Agriculture",
    "Employment",
    "Geographical Issues",
    "Social & Political Awareness",
    "Miscellaneous",
  ];

  const menu = (
    <div
      ref={menuRef}
      role="menu"
      aria-label="Services Menu"
      style={{
        top: pos.top,
        left: pos.left,
        width: pos.width,
        position: "fixed",
      }}
      className="z-[1000] origin-top-left rounded-xl border border-slate-200 bg-white text-slate-900 shadow-xl ring-1 ring-black/5"
    >
      <div
        className="h-1 w-full"
        style={{
          background:
            "linear-gradient(90deg,#FF9933 0%,#FFFFFF 50%,#138808 100%)",
        }}
      />
      <ul className="py-2">
        {items.map((label) => {
          const slug = label.toLowerCase().replace(/\s+/g, "-");
          return (
            <li key={label}>
              <Link
                to={`/service/${slug}`}
                className="block px-5 py-2.5 text-[17px] font-semibold tracking-wide hover:bg-slate-50 focus:bg-slate-50 focus:outline-none"
                role="menuitem"
                onClick={onClose}
              >
                {label}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );

  return createPortal(menu, document.body);
}

/* ------------------ HEADER (updated bg) ------------------ */
export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const servicesButtonRef = useRef(null);
  useOnClickOutside([servicesButtonRef], () => setServicesOpen(false));

  useEffect(() => {
    const mql = window.matchMedia("(min-width: 1024px)");
    const onChange = () => mql.matches && setMobileOpen(false);
    mql.addEventListener("change", onChange);
    return () => mql.removeEventListener("change", onChange);
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full relative overflow-hidden">
      {/* tricolor gradient overlays (top orange, bottom green) */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-[#FF9933] to-transparent opacity-30 animate-slideDown" />
        <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-[#138808] to-transparent opacity-30 animate-slideUp" />
      </div>

      {/* optional subtle base to improve contrast on transparent pages */}
      <div className="absolute inset-0 -z-20 bg-black/10 backdrop-blur-[2px]" />

      <nav className="mx-auto flex max-w-screen-2xl items-center justify-between gap-6 px-4 py-3 md:px-6 lg:px-8 text-white">
        <div className="flex w-full items-center justify-between gap-6 rounded-2xl bg-black/25 px-3 py-2 ring-1 ring-white/20">
          {/* Logo */}
          <Link
            to="/"
            className="shrink-0 rounded-xl bg-white/10 p-2 ring-1 ring-white/30"
          >
            <img
              src="/images/jaago-manav-logo.webp"
              alt="Jaago Manav Logo"
              className="h-10 w-auto md:h-12"
              loading="eager"
            />
          </Link>

          {/* Hamburger (mobile/tablet) */}
          <button
            className="inline-flex items-center justify-center rounded-lg bg-white/10 p-2 ring-1 ring-white/30 focus:outline-none focus:ring-2 focus:ring-white/60 lg:hidden"
            aria-label="Toggle menu"
            onClick={() => setMobileOpen((s) => !s)}
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="h-6 w-6"
            >
              <path d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

          {/* Desktop nav */}
          <div className="hidden lg:flex flex-1 items-center justify-center gap-5 ml-6 text-lg font-semibold tracking-wide">
            <Link to="/" className="hover:text-[#FFE9CC]">
              Home
            </Link>
            <Link to="/about" className="hover:text-[#FFE9CC]">
              About
            </Link>

            <div className="relative">
              <button
                ref={servicesButtonRef}
                className="flex items-center gap-2 hover:text-[#FFE9CC] focus:outline-none"
                aria-haspopup="true"
                aria-expanded={servicesOpen}
                onClick={(e) => {
                  e.stopPropagation();
                  setServicesOpen((v) => !v);
                }}
              >
                <span>Services</span>
                <ChevronDown
                  className={`h-5 w-5 transition-transform ${
                    servicesOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              {servicesOpen && (
                <ServicesPortalDropdown
                  anchorRef={servicesButtonRef}
                  onClose={() => setServicesOpen(false)}
                />
              )}
            </div>

            <Link to="/whoweare" className="hover:text-[#FFE9CC]">
              WhoWeAre
            </Link>
            <Link to="/shop" className="hover:text-[#FFE9CC]">
              Shop
            </Link>
            <Link to="/blog" className="hover:text-[#FFE9CC]">
              Blog
            </Link>
            <Link to="/contact" className="hover:text-[#FFE9CC]">
              Contact
            </Link>
          </div>

          {/* Donate button */}
          <div className="ml-6 hidden lg:flex shrink-0">
            <Link
              to="/donate"
              className="group relative inline-flex items-center gap-5 rounded-full border-[3px] border-orange-300/90 px-6 py-3 text-lg font-extrabold tracking-wide text-white shadow-sm transition hover:bg-white/10"
            >
              <span>Donate Now</span>
              <span className="grid h-11 w-11 place-items-center rounded-full bg-orange-500 text-white transition group-hover:translate-x-0.5">
                <ArrowRight className="h-6 w-6" />
              </span>
            </Link>
          </div>
        </div>
      </nav>

      {/* Mobile / Tablet  */}
      {mobileOpen && (
        <div className="lg:hidden">
          <div className="space-y-2 border-t border-white/30 px-4 py-4 text-white/95 bg-black/25 backdrop-blur-sm">
            <Link
              to="/"
              className="block py-2 text-lg font-semibold hover:text-[#FFE9CC]"
              onClick={() => setMobileOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/about"
              className="block py-2 text-lg font-semibold hover:text-[#FFE9CC]"
              onClick={() => setMobileOpen(false)}
            >
              About
            </Link>

            <details className="group rounded-lg bg-white/10 p-2 ring-1 ring-white/20 open:bg-white/15">
              <summary className="flex cursor-pointer list-none items-center justify-between text-lg font-semibold">
                <span>Services</span>
                <ChevronDown className="h-5 w-5 transition group-open:rotate-180" />
              </summary>
              <ul className="mt-2 space-y-1">
                {[
                  "Service",
                  "Education",
                  "Health",
                  "Agriculture",
                  "Employment",
                  "Geographical Issues",
                  "Social & Political Awareness",
                  "Miscellaneous",
                ].map((label) => {
                  const slug = label.toLowerCase().replace(/\s+/g, "-");
                  return (
                    <li key={label}>
                      <Link
                        to={`/service/${slug}`}
                        className="block rounded-md px-3 py-2 text-base hover:bg-white/10"
                        onClick={() => setMobileOpen(false)}
                      >
                        {label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </details>

            <Link
              to="/donations"
              className="block py-2 text-lg font-semibold hover:text-[#FFE9CC]"
              onClick={() => setMobileOpen(false)}
            >
              Donations
            </Link>
            <Link
              to="/shop"
              className="block py-2 text-lg font-semibold hover:text-[#FFE9CC]"
              onClick={() => setMobileOpen(false)}
            >
              Shop
            </Link>
            <Link
              to="/blog"
              className="block py-2 text-lg font-semibold hover:text-[#FFE9CC]"
              onClick={() => setMobileOpen(false)}
            >
              Blog
            </Link>
            <Link
              to="/contact"
              className="block py-2 text-lg font-semibold hover:text-[#FFE9CC]"
              onClick={() => setMobileOpen(false)}
            >
              Contact
            </Link>

            <div className="flex items-center gap-4 pt-3">
              <button
                className="grid h-10 w-10 place-items-center rounded-full ring-1 ring-white/30 hover:bg-white/10"
                aria-label="Search"
              >
                <SearchIcon className="h-5 w-5" />
              </button>
              <button
                className="relative grid h-10 w-10 place-items-center rounded-full ring-1 ring-white/30 hover:bg-white/10"
                aria-label="Cart"
              >
                <CartIcon className="h-5 w-5" />
                <span className="absolute -right-1 -top-1 grid h-5 w-5 place-items-center rounded-full bg-orange-500 text-[10px] font-black text-white ring-2 ring-black/40">
                  02
                </span>
              </button>
              <button
                className="grid h-10 w-10 place-items-center rounded-full ring-1 ring-white/30 hover:bg-white/10"
                aria-label="Account"
              >
                <UserIcon className="h-5 w-5" />
              </button>
              <Link
                to="/donate"
                className="ml-auto inline-flex items-center gap-3 rounded-full border-2 border-orange-300/90 px-4 py-2 font-extrabold text-white hover:bg-white/10"
                onClick={() => setMobileOpen(false)}
              >
                Donate Now
                <span className="grid h-8 w-8 place-items-center rounded-full bg-orange-500">
                  <ArrowRight className="h-5 w-5 text-white" />
                </span>
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* local keyframes for header overlays */}
      <style>{`
        @keyframes slideDown {
          0% { transform: translateY(-24px); opacity: .45; }
          100% { transform: translateY(0); opacity: .30; }
        }
        @keyframes slideUp {
          0% { transform: translateY(24px); opacity: .45; }
          100% { transform: translateY(0); opacity: .30; }
        }
        .animate-slideDown { animation: slideDown 7s ease-in-out infinite alternate; }
        .animate-slideUp   { animation: slideUp   7s ease-in-out infinite alternate; }
      `}</style>
    </header>
  );
}
