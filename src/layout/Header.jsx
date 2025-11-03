import React, { useState, useRef, useEffect, useLayoutEffect } from "react";
import { createPortal } from "react-dom";

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
      className="z-[1000] origin-top-left rounded-xl border border-white/30 bg-[#18871f] text-white shadow-lg ring-1 ring-black/5"
    >
      <ul className="py-2">
        {items.map((label) => (
          <li key={label}>
            <a
              href="#"
              className="block px-5 py-2.5 text-lg font-semibold tracking-wide hover:bg-white/10 focus:bg-white/10 focus:outline-none"
              role="menuitem"
              onClick={onClose}
            >
              {label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );

  return createPortal(menu, document.body);
}

/* ---------- Header ---------- */
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
    <header className="sticky top-0 z-50 w-full overflow-visible border-b border-black/5 bg-[#63ad5b] text-white shadow-sm">
      <nav className="mx-auto flex max-w-screen-2xl items-center justify-between gap-6 px-4 py-3 md:px-6 lg:px-8">
        {/* Logo */}
        <a href="#" className="shrink-0 rounded-2xl border border-white/50 p-2">
          <img
            src="/images/jaago-manav-logo.webp"
            alt="Jaago Manav Logo"
            className="h-10 w-auto md:h-12"
            loading="eager"
          />
        </a>

        {/* Hamburger */}
        <button
          className="inline-flex items-center justify-center rounded-lg border border-white/30 p-2 focus:outline-none focus:ring-2 focus:ring-white/60 lg:hidden"
          aria-label="Toggle menu"
          onClick={() => setMobileOpen((s) => !s)}
        >
          <span className="sr-only">Open menu</span>
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

        {/* Desktop nav: only from lg and up */}
        <div className="hidden min-w-0 flex-1 items-center justify-center gap-4 ml-10 text-xl font-semibold tracking-wide lg:flex">
          <a href="#" className="hover:opacity-90">
            Home
          </a>
          <a href="#" className="hover:opacity-90">
            About
          </a>

          <div className="relative">
            <button
              ref={servicesButtonRef}
              className="flex items-center gap-2 hover:opacity-90 focus:outline-none"
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

          <button className="inline-flex items-center gap-2 hover:opacity-90">
            <span>Donations</span>
            <ChevronDown className="h-5 w-5" />
          </button>
          <button className="inline-flex items-center gap-2 hover:opacity-90">
            <span>Shop</span>
            <ChevronDown className="h-5 w-5" />
          </button>
          <button className="inline-flex items-center gap-2 hover:opacity-90">
            <span>Blog</span>
            <ChevronDown className="h-5 w-5" />
          </button>
          <a href="#" className="hover:opacity-90">
            Contact
          </a>
        </div>

        {/* Donate button  */}
        <div className="ml-10 hidden items-center lg:flex shrink-0">
          <a
            href="#"
            className="group relative inline-flex shrink-0 items-center gap-5 rounded-full border-[3px] border-orange-400 px-6 py-3 text-xl font-extrabold tracking-wide text-white shadow-sm transition hover:bg-orange-500/15"
          >
            <span>Donate Now</span>
            <span className="grid h-11 w-11 place-items-center rounded-full bg-orange-500 text-white transition group-hover:translate-x-0.5">
              <ArrowRight className="h-6 w-6" />
            </span>
          </a>
        </div>
      </nav>

      {/* Mobile/Tablet  */}
      {mobileOpen && (
        <div className="lg:hidden">
          <div className="space-y-2 border-t border-white/20 px-4 py-4 text-white/95">
            <a href="#" className="block py-2 text-lg font-semibold">
              Home
            </a>
            <a href="#" className="block py-2 text-lg font-semibold">
              About
            </a>

            {/* Services collapsible */}
            <details className="group rounded-lg bg-[#2e9630] p-2 open:bg-[#18871f]/90">
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
                ].map((label) => (
                  <li key={label}>
                    <a
                      href="#"
                      className="block rounded-md px-3 py-2 text-base hover:bg-white/10"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </details>

            <a href="#" className="block py-2 text-lg font-semibold">
              Donations
            </a>
            <a href="#" className="block py-2 text-lg font-semibold">
              Shop
            </a>
            <a href="#" className="block py-2 text-lg font-semibold">
              Blog
            </a>
            <a href="#" className="block py-2 text-lg font-semibold">
              Contact
            </a>

            <div className="flex items-center gap-4 pt-3">
              <button
                aria-label="Search"
                className="grid h-10 w-10 place-items-center rounded-full ring-1 ring-white/30"
              >
                <SearchIcon className="h-5 w-5" />
              </button>
              <button
                aria-label="Cart"
                className="relative grid h-10 w-10 place-items-center rounded-full ring-1 ring-white/30"
              >
                <CartIcon className="h-5 w-5" />
                <span className="absolute -right-1 -top-1 grid h-5 w-5 place-items-center rounded-full bg-orange-500 text-[10px] font-black text-white ring-2 ring-black/80">
                  02
                </span>
              </button>
              <button
                aria-label="Account"
                className="grid h-10 w-10 place-items-center rounded-full ring-1 ring-white/30"
              >
                <UserIcon className="h-5 w-5" />
              </button>
              <a
                href="#"
                className="ml-auto inline-flex items-center gap-3 rounded-full border-2 border-orange-400 px-4 py-2 font-extrabold"
              >
                Donate Now
                <span className="grid h-8 w-8 place-items-center rounded-full bg-orange-500">
                  <ArrowRight className="h-5 w-5" />
                </span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
