import React, { useEffect, useRef, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  Search,
  ShoppingCart,
  UserRound,
  ChevronDown,
  ArrowRight,
  X,
} from "lucide-react";

export default function Header() {
  const [open, setOpen] = useState(null);

  const [mobileOpen, setMobileOpen] = useState(false);

  const [mobileSub, setMobileSub] = useState(null);

  const navRef = useRef(null);

  useEffect(() => {
    function onClickOutside(e) {
      if (!open) return;
      if (navRef.current && !navRef.current.contains(e.target)) setOpen(null);
    }
    function onEsc(e) {
      if (e.key === "Escape") {
        setOpen(null);
        setMobileOpen(false);
      }
    }
    window.addEventListener("click", onClickOutside);
    window.addEventListener("keydown", onEsc);
    return () => {
      window.removeEventListener("click", onClickOutside);
      window.removeEventListener("keydown", onEsc);
    };
  }, [open]);

  const navItem =
    "relative inline-flex items-center gap-1.5 font-semibold text-white/95 hover:text-white transition-colors";

  const underline = (isActive) =>
    `pointer-events-none absolute left-0 -bottom-1 h-[2px] bg-[#138808] transition-all duration-300 ${
      isActive ? "w-full" : "w-0 group-hover:w-full"
    }`;

  const MenuButton = ({ id, children }) => (
    <button
      onClick={(e) => {
        e.stopPropagation();
        setOpen((v) => (v === id ? null : id));
      }}
      className={navItem}
      aria-haspopup="menu"
      aria-expanded={open === id}
    >
      {children}
      <ChevronDown
        className={`h-4 w-4 text-white/80 transition-transform ${
          open === id ? "rotate-180" : ""
        }`}
      />
    </button>
  );

  const Drop = ({ id, children }) => (
    <div
      role="menu"
      className={[
        "absolute left-0 mt-3 w-64 rounded-2xl border border-white/10 bg-[#138808] p-2 shadow-lg",
        "transition-all duration-200 origin-top will-change-transform",
        open === id
          ? "opacity-100 translate-y-0 scale-100"
          : "pointer-events-none -translate-y-1 scale-95 opacity-0",
      ].join(" ")}
      onClick={() => setOpen(null)}
    >
      {children}
    </div>
  );

  // Reusable lists
  const serviceLinks = [
    ["Education", "/education"],
    ["Health", "/health"],
    ["Agriculture", "/agriculture"],
    ["Employment", "/employment"],
    ["Geographical Issues", "/geographical-issues"],
    ["Social & Political Awareness", "/social-political-awareness"],
    ["Miscellaneous", "/misc"],
  ];

  const donationLinks = [
    ["Donation", "/donation"],
    ["Donation Carousel", "/donation"],
    ["Donation List", "/donation"],
  ];

  const shopLinks = [
    ["Shop", "/shop"],
    ["Product", "/product"],
    ["Cart", "/cart"],
    ["Checkout", "/checkout"],
  ];

  const blogLinks = [
    ["Blog ", "/blog"],
    ["Blog Carousel", "/blog"],
    ["Blog Standard", "/blog"],
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#138808]/90 backdrop-blur supports-[backdrop-filter]:bg-[[#138808]]/65">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <div className="rounded-xl border border-white/60 p-1.5 shadow-sm">
            <img
              src="/images/jaago-manav-logo.webp"
              alt="Jaago Manav"
              className="h-10 w-28 rounded-lg object-contain bg-transparent"
            />
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav ref={navRef} className="hidden items-center gap-8 md:flex">
          {/* Home */}
          <div className="group">
            <NavLink to="/" className={navItem}>
              {({ isActive }) => (
                <>
                  <span>Home</span>
                  <span className={underline(isActive)} />
                </>
              )}
            </NavLink>
          </div>

          {/* About */}
          <div className="group">
            <NavLink to="/about" className={navItem}>
              {({ isActive }) => (
                <>
                  <span>About</span>
                  <span className={underline(isActive)} />
                </>
              )}
            </NavLink>
          </div>

          {/* Services */}
          <div className="group relative">
            <MenuButton id="services">Services</MenuButton>
            <span className={underline(false)} />
            <Drop id="services">
              {serviceLinks.map(([label, href]) => (
                <Link
                  key={label}
                  to={href}
                  className="block rounded-xl px-3 py-2 text-white/90 hover:bg-white/10"
                >
                  {label}
                </Link>
              ))}
            </Drop>
          </div>

          {/* Donations */}
          <div className="group relative">
            <MenuButton id="donations">Donations</MenuButton>
            <span className={underline(false)} />
            <Drop id="donations">
              {donationLinks.map(([label, href]) => (
                <Link
                  key={label}
                  to={href}
                  className="block rounded-xl px-3 py-2 text-white/90 hover:bg白/10"
                >
                  {label}
                </Link>
              ))}
            </Drop>
          </div>

          {/* Shop */}
          <div className="group relative">
            <MenuButton id="shop">Shop</MenuButton>
            <span className={underline(false)} />
            <Drop id="shop">
              {shopLinks.map(([label, href]) => (
                <Link
                  key={label}
                  to={href}
                  className="block rounded-xl px-3 py-2 text-white/90 hover:bg-white/10"
                >
                  {label}
                </Link>
              ))}
            </Drop>
          </div>

          {/* Blog */}
          <div className="group relative">
            <MenuButton id="blog">Blog</MenuButton>
            <span className={underline(false)} />
            <Drop id="blog">
              {blogLinks.map(([label, href]) => (
                <Link
                  key={label}
                  to={href}
                  className="block rounded-xl px-3 py-2 text-white/90 hover:bg-white/10"
                >
                  {label}
                </Link>
              ))}
            </Drop>
          </div>

          {/* Contact  */}
          <div className="group">
            <NavLink to="/contact" className={navItem}>
              {({ isActive }) => (
                <>
                  <span>Contact</span>
                  <span className={underline(isActive)} />
                </>
              )}
            </NavLink>
          </div>
        </nav>

        {/* Right actions (desktop) */}
        <div className="hidden items-center gap-5 md:flex">
          <button
            aria-label="Search"
            className="grid h-9 w-9 place-items-center rounded-full ring-1 ring-white/30 text-white hover:bg-white/10 transition"
          >
            <Search className="h-5 w-5" />
          </button>

          <Link
            to="/cart"
            aria-label="Cart"
            className="relative grid h-9 w-9 place-items-center rounded-full ring-1 ring-white/30 text-white hover:bg-white/10 transition"
          >
            <ShoppingCart className="h-5 w-5" />
            <span className="absolute -right-1 -top-1 grid h-5 w-5 place-items-center rounded-full bg-[#f27b21] text-[10px] font-bold text-white ring-2 ring-[#0b2a24]">
              02
            </span>
          </Link>

          <Link
            to="/account"
            aria-label="Account"
            className="grid h-9 w-9 place-items-center rounded-full ring-1 ring-white/30 text-white hover:bg-white/10 transition"
          >
            <UserRound className="h-5 w-5" />
          </Link>

          <Link
            to="/donate"
            className="inline-flex items-center gap-4 rounded-full border-2 border-[#f27b21] px-6 py-2.5 text-white transition hover:bg-[#f27b21]/10"
          >
            <span className="font-semibold">Donate Now</span>
            <span className="grid h-9 w-9 place-items-center rounded-full bg-[#f27b21]">
              <ArrowRight className="h-5 w-5 text-white" />
            </span>
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden grid h-10 w-10 place-items-center rounded-md ring-1 ring-white/30 text-white"
          aria-label="Open menu"
          onClick={() => setMobileOpen(true)}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path
              d="M4 6h16M4 12h16M4 18h16"
              stroke="currentColor"
              strokeWidth="2"
            />
          </svg>
        </button>
      </div>

      {/* ===== Mobile */}

      <div
        className={[
          "fixed inset-0 z-[60] bg-black/40 backdrop-blur-sm transition-opacity md:hidden",
          mobileOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none",
        ].join(" ")}
        onClick={() => setMobileOpen(false)}
      />

      {/* Drawer */}
      <aside
        className={[
          "fixed right-0 top-0 z-[70] h-screen w-[84%] max-w-xs bg-[#0f3b32] text-white md:hidden",
          "transition-transform duration-300 ease-out",
          mobileOpen ? "translate-x-0" : "translate-x-full",
        ].join(" ")}
        aria-hidden={!mobileOpen}
      >
        <div className="flex items-center justify-between px-4 h-16 border-b border-white/10">
          <span className="font-semibold">Menu</span>
          <button
            aria-label="Close menu"
            className="grid h-9 w-9 place-items-center rounded-md ring-1 ring-white/20"
            onClick={() => setMobileOpen(false)}
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <nav className="px-2 py-3">
          <MobileLink
            to="/"
            label="Home"
            onClick={() => setMobileOpen(false)}
          />
          <MobileLink
            to="/about"
            label="About"
            onClick={() => setMobileOpen(false)}
          />
          <MobileAccordion
            label="Services"
            id="m-services"
            open={mobileSub === "services"}
            onToggle={() =>
              setMobileSub((v) => (v === "services" ? null : "services"))
            }
            items={serviceLinks}
            onItemClick={() => setMobileOpen(false)}
          />
          <MobileAccordion
            label="Donations"
            id="m-donations"
            open={mobileSub === "donations"}
            onToggle={() =>
              setMobileSub((v) => (v === "donations" ? null : "donations"))
            }
            items={donationLinks}
            onItemClick={() => setMobileOpen(false)}
          />
          <MobileAccordion
            label="Shop"
            id="m-shop"
            open={mobileSub === "shop"}
            onToggle={() => setMobileSub((v) => (v === "shop" ? null : "shop"))}
            items={shopLinks}
            onItemClick={() => setMobileOpen(false)}
          />
          <MobileAccordion
            label="Blog"
            id="m-blog"
            open={mobileSub === "blog"}
            onToggle={() => setMobileSub((v) => (v === "blog" ? null : "blog"))}
            items={blogLinks}
            onItemClick={() => setMobileOpen(false)}
          />
          <MobileLink
            to="/contact"
            label="Contact"
            onClick={() => setMobileOpen(false)}
          />
        </nav>

        <div className="mt-auto border-t border-white/10 p-4">
          <Link
            to="/donate"
            className="w-full inline-flex items-center justify-between gap-4 rounded-full border-2 border-[#f27b21] px-4 py-2.5 text-white transition hover:bg-[#f27b21]/10"
            onClick={() => setMobileOpen(false)}
          >
            <span className="font-semibold">Donate Now</span>
            <span className="grid h-9 w-9 place-items-center rounded-full bg-[#f27b21]">
              <ArrowRight className="h-5 w-5 text-white" />
            </span>
          </Link>
        </div>
      </aside>
    </header>
  );
}

/* ---------- Mobile  ---------- */

function MobileLink({ to, label, onClick }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        [
          "flex items-center justify-between rounded-xl px-3 py-3",
          "hover:bg-white/5",
          isActive ? "bg-white/10" : "",
        ].join(" ")
      }
      onClick={onClick}
    >
      <span>{label}</span>
    </NavLink>
  );
}

function MobileAccordion({ label, id, open, onToggle, items, onItemClick }) {
  return (
    <div className="mb-1">
      <button
        className="flex w-full items-center justify-between rounded-xl px-3 py-3 hover:bg-white/5"
        aria-controls={id}
        aria-expanded={open}
        onClick={onToggle}
      >
        <span>{label}</span>
        <ChevronDown
          className={`h-5 w-5 transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>
      <div
        id={id}
        className={[
          "grid overflow-hidden transition-all duration-200 ease-in-out",
          open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-70",
        ].join(" ")}
      >
        <div className="min-h-0">
          {items.map(([text, href]) => (
            <Link
              key={text}
              to={href}
              onClick={onItemClick}
              className="block rounded-lg px-4 py-2.5 text-sm text-white/90 hover:bg-white/5"
            >
              {text}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
