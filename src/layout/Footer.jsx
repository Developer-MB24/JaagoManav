import React from "react";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative overflow-hidden bg-[#0b2a24] text-white">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <img
          src="/images/about-two-img-3.jpg"
          alt=""
          className="h-full w-full object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-[#0b2a24]/80" />
      </div>

      <div className="mx-auto max-w-7xl px-4 py-14">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-3">
              <div className="rounded-xl border border-white/60 p-1.5 shadow-sm">
                <img
                  src="/images/jaago-manav-logo.webp"
                  alt="Jaago Manav"
                  className="h-10 w-28 rounded-lg object-contain bg-transparent"
                />
              </div>
            </div>

            <p className="mt-6 max-w-md text-white/80 leading-7">
              Category that involves giving financial or material support to
              various causes & organizations. It allows us to uplift lives and
              communities that need it most.
            </p>

            {/* Social icons */}
            <div className="mt-8 flex flex-wrap gap-4">
              <SocialIcon label="Facebook" href="#">
                {/* Facebook */}
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M13.5 22v-8h2.8l.4-3H13.5V9.1c0-.9.3-1.5 1.8-1.5h1.4V5.1C16.2 5 15.1 5 14 5c-2.7 0-4.5 1.6-4.5 4.6V11H7v3h2.5v8h4z"
                    fill="currentColor"
                  />
                </svg>
              </SocialIcon>

              <SocialIcon label="Twitter/X" href="#">
                {/* X / Twitter */}
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M3 3l8.3 9.6L3.9 21h2.2l6.1-6.7L18.3 21H21l-8.8-10L20.1 3h-2.2l-5.8 6.3L7 3H3z"
                    fill="currentColor"
                  />
                </svg>
              </SocialIcon>

              <SocialIcon label="Instagram" href="#">
                {/* Instagram */}
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <rect
                    x="3"
                    y="3"
                    width="18"
                    height="18"
                    rx="5"
                    stroke="currentColor"
                    strokeWidth="1.6"
                  />
                  <circle
                    cx="12"
                    cy="12"
                    r="4.2"
                    stroke="currentColor"
                    strokeWidth="1.6"
                  />
                  <circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" />
                </svg>
              </SocialIcon>

              <SocialIcon label="Pinterest" href="#">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M12 3.1C7.6 3.1 4 6.2 4 10.3c0 3 1.9 5.1 4.6 5.1 1.1 0 2-.6 2.3-1.6l.7-2.6c.2-.9.1-1.2-.5-1.2-.5 0-1 .3-1.5.9-.5.7-.8 1.7-.8 2.7 0 1 .7 1.8 2 1.8 2.4 0 4.2-2.2 4.2-5.3 0-3-2.2-5.1-5.4-5.1-3.6 0-6.1 2.7-6.1 6.3 0 2.5 1.5 4.2 3.6 4.2.6 0 1.2-.1 1.7-.4l-.7 2.7-.2.8c-.1.4-.1.9 0 1.2l.1.1h.1c.2-.3.6-.9.8-1.4l.9-2.9c.4 0 .8.1 1.2.1 4.5 0 8-3.2 8-7.6C20 6.2 16.6 3.1 12 3.1z"
                    fill="currentColor"
                  />
                </svg>
              </SocialIcon>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xl font-extrabold">Services</h4>
            <ul className="mt-6 space-y-4 text-white/90">
              {[
                "Incident Responder",
                "Secure Managed Fund",
                "Clean Water All",
                "Give Education",
              ].map((txt) => (
                <li key={txt}>
                  <a href="#" className="hover:text-[#f27b21] transition">
                    {txt}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-xl font-extrabold">Links</h4>
            <ul className="mt-6 space-y-4 text-white/90">
              {[
                "Food to individuals",
                "Temporary housing",
                "Local shelters",
                "Natural disasters",
              ].map((txt) => (
                <li key={txt}>
                  <a href="#" className="hover:text-[#f27b21] transition">
                    {txt}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-extrabold">Contact Info</h4>
            <ul className="mt-6 space-y-5 text-white/90">
              <ContactRow icon="phone">+088 (246) 642-27-10</ContactRow>
              <ContactRow icon="mail">example@mail.com</ContactRow>
              <ContactRow icon="map">
                <span className="font-medium block">West Orchard Street</span>
                <span className="text-white/80 block">
                  New delhi, IN 111111
                </span>
              </ContactRow>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 border-t border-white/10 pt-6">
          <div className="flex flex-col items-center justify-between gap-4 text-white/80 md:flex-row">
            <p className="text-sm">
              © {year} Helpest By{" "}
              <a href="#" className="text-[#f27b21] hover:underline">
                Jaago Manav
              </a>
              . All Rights Reserved.
            </p>

            <div className="flex flex-wrap items-center gap-x-8 gap-y-2 text-sm">
              <a href="#" className="hover:text-white">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-white">
                Terms of Service
              </a>
              <a href="#" className="hover:text-white">
                Cookies Settings
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ----------  helpers ---------- */

function SocialIcon({ label, href, children }) {
  return (
    <a
      href={href}
      aria-label={label}
      title={label}
      className="grid h-11 w-11 place-items-center rounded-xl border border-[#f27b21] text-white/90 transition hover:bg-[#f27b21]/10"
    >
      {children}
    </a>
  );
}

function ContactRow({ icon, children }) {
  return (
    <li className="flex items-start gap-3">
      <span className="mt-0.5 grid h-9 w-9 place-items-center rounded-full bg-white/10 ring-1 ring-white/20">
        {icon === "phone" && (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <path
              d="M22 16.92v2a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 3.2 2 2 0 0 1 4.11 1h2a2 2 0 0 1 2 1.72c.12.9.3 1.78.57 2.63a2 2 0 0 1-.45 2.11L7 8a16 16 0 0 0 6 6l.54-1.23a2 2 0 0 1 2.11-.45c.85.27 1.73.45 2.63.57A2 2 0 0 1 22 16.92Z"
              stroke="currentColor"
              strokeWidth="1.6"
            />
          </svg>
        )}
        {icon === "mail" && (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <rect
              x="3"
              y="5"
              width="18"
              height="14"
              rx="2"
              stroke="currentColor"
              strokeWidth="1.6"
            />
            <path
              d="M3.5 6l8.5 6 8.5-6"
              stroke="currentColor"
              strokeWidth="1.6"
            />
          </svg>
        )}
        {icon === "map" && (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <path
              d="M12 22s7-5.33 7-12a7 7 0 0 0-14 0c0 6.67 7 12 7 12Z"
              stroke="currentColor"
              strokeWidth="1.6"
            />
            <circle
              cx="12"
              cy="10"
              r="2.5"
              stroke="currentColor"
              strokeWidth="1.6"
            />
          </svg>
        )}
      </span>
      <div>{children}</div>
    </li>
  );
}
