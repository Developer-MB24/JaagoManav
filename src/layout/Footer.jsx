import React from "react";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200">
      <div className="mx-auto max-w-6xl px-4 py-10 text-sm text-slate-600 flex flex-col md:flex-row items-center justify-between gap-4">
        <p>© {new Date().getFullYear()} Jaago Manav. All rights reserved.</p>
        <div className="flex items-center gap-4">
          <a className="hover:text-primary" href="#">
            Privacy
          </a>
          <a className="hover:text-primary" href="#">
            Terms
          </a>
          <a className="hover:text-primary" href="#">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}
