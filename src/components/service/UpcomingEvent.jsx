import React from "react";

export default function UpcomingEvent({
  events = DEFAULT_EVENTS,
  onJoin = (event) => console.log("Join:", event.title),
}) {
  return (
    <section className="py-12 sm:py-16">
      <style>{`
        :root { --orange:#FF9933; --white:#FFFFFF; --india:#138808; --navy:#000080; }
        .shadow-soft{ box-shadow: 0 10px 30px rgba(0,0,0,.08); }
        .card-hover{ transition: transform .25s ease, box-shadow .25s ease; }
        .card-hover:hover{ transform: translateY(-2px); box-shadow: 0 15px 40px rgba(0,0,0,.12); }
        .torn-mask{
          -webkit-mask-image: url("data:image/svg+xml;utf8,${encodeURIComponent(`
            <svg viewBox='0 0 1200 200' xmlns='http://www.w3.org/2000/svg' preserveAspectRatio='none'>
              <path d='M0,160 C100,180 200,120 300,150 C400,180 500,120 600,150 C700,180 800,120 900,150 C1000,180 1100,120 1200,150 L1200,0 L0,0 Z' fill='black'/>
            </svg>
          `)}");
          mask-image: url("data:image/svg+xml;utf8,${encodeURIComponent(`
            <svg viewBox='0 0 1200 200' xmlns='http://www.w3.org/2000/svg' preserveAspectRatio='none'>
              <path d='M0,160 C100,180 200,120 300,150 C400,180 500,120 600,150 C700,180 800,120 900,150 C1000,180 1100,120 1200,150 L1200,0 L0,0 Z' fill='black'/>
            </svg>
          `)}");
          -webkit-mask-repeat:no-repeat; mask-repeat:no-repeat;
          -webkit-mask-size:100% 200px; mask-size:100% 200px;
          -webkit-mask-position:top left; mask-position:top left;
        }
      `}</style>

      <div className="text-center mb-2">
        <span className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1 text-xs sm:text-sm font-semibold text-[var(--india)] ring-1 ring-emerald-100">
          <Sprout className="h-4 w-4" />
          Upcoming Event
        </span>
      </div>

      {/* Heading */}
      <h2 className="text-center text-2xl sm:text-4xl md:text-5xl font-extrabold text-[var(--navy)] px-4">
        Our Events, Let&apos;s{" "}
        <span className="inline-flex align-middle -mt-1">
          <Sprout className="mx-1 h-6 w-6 sm:h-7 sm:w-7 text-[var(--india)]" />
        </span>{" "}
        All Participate
      </h2>

      {/* Cards */}
      <div className="mx-auto mt-8 sm:mt-10 grid max-w-7xl grid-cols-1 gap-6 sm:gap-8 px-4 sm:px-6 md:grid-cols-2 lg:px-8">
        {events.map((e, i) => (
          <EventCard key={i} event={e} onJoin={() => onJoin(e)} />
        ))}
      </div>
    </section>
  );
}

/* Card */

function EventCard({ event, onJoin }) {
  const { date, title, city, time, joined, tag, image, avatars = [] } = event;

  return (
    <article className="rounded-2xl bg-[#FAFCF8] ring-1 ring-slate-200 shadow-soft overflow-hidden card-hover">
      <div className="px-4 sm:px-6 md:px-8 pt-5 sm:pt-6">
        <div className="flex items-start sm:items-center justify-between gap-3">
          {/* date */}
          <div className="flex items-center gap-3">
            <div className="rounded-xl bg-white ring-1 ring-slate-200 p-2.5 sm:p-3">
              <CalendarIcon className="h-5 w-5 sm:h-6 sm:w-6 text-slate-600" />
            </div>
            <div>
              <div className="flex items-end gap-2 leading-none">
                <span className="text-3xl sm:text-4xl font-extrabold text-[var(--india)]">
                  {date.day}
                </span>
                <span className="pb-1 text-[11px] sm:text-sm font-semibold text-slate-600">
                  {date.month}
                </span>
              </div>
              <p className="text-[10px] sm:text-xs text-slate-500">
                in {date.year}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            <OverlappingAvatars urls={avatars} />
            <div className="text-right">
              <div className="text-sm sm:text-base font-bold text-[var(--navy)]">
                {joined}
              </div>
              <div className="text-[10px] sm:text-xs text-slate-500 -mt-0.5">
                Joined People
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-3 sm:mt-4 border-t border-slate-200" />

        {/* Title */}
        <h3 className="mt-3 sm:mt-4 text-xl sm:text-[28px] font-extrabold text-[var(--navy)]">
          {title}
        </h3>

        <div className="mt-2 flex flex-wrap items-center gap-x-4 sm:gap-x-5 gap-y-1.5 sm:gap-y-2 text-[13px] sm:text-sm text-slate-600">
          <span className="inline-flex items-center gap-1.5 sm:gap-2">
            <PinIcon className="h-4 w-4 text-[var(--india)]" />
            {city}
          </span>
          <span className="inline-flex items-center gap-1.5 sm:gap-2">
            <ClockIcon className="h-4 w-4 text-[var(--india)]" />
            {time}
          </span>
        </div>

        {/* CTA */}
        <div className="mt-4 sm:mt-5">
          <button
            type="button"
            onClick={onJoin}
            className="group inline-flex w-full sm:w-auto items-center justify-center gap-3 rounded-full bg-[#FF9933] px-5 py-3 font-semibold text-[var(--navy)] ring-1 ring-[#F6D36A] hover:brightness-[.98]"
          >
            Join Event
            <span className="inline-flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-full bg-[var(--india)] text-[var(--white)] group-hover:translate-x-0.5 transition">
              <ArrowRight className="h-4 w-4" />
            </span>
          </button>
        </div>
      </div>

      {/* Image + tag */}
      <div className="mt-5 sm:mt-6 px-2 pb-2">
        <div className="relative rounded-xl overflow-hidden">
          <div className="torn-mask">
            <img
              src={image}
              alt={title}
              className="w-full h-44 sm:h-56 md:h-64 object-cover"
            />
          </div>

          {tag && (
            <div className="absolute left-4 -bottom-3 sm:-bottom-4">
              <span className="inline-flex items-center rounded-full bg-[var(--navy)] px-2.5 sm:px-3 py-0.5 sm:py-1 text-[10px] sm:text-xs font-semibold text-white shadow-soft">
                {tag}
              </span>
            </div>
          )}
        </div>
      </div>
    </article>
  );
}

function OverlappingAvatars({ urls = [] }) {
  return (
    <div className="flex -space-x-2 sm:-space-x-3">
      {urls.slice(0, 3).map((u, i) => (
        <img
          key={i}
          src={u}
          alt=""
          className="h-7 w-7 sm:h-8 sm:w-8 rounded-full ring-2 ring-white object-cover"
        />
      ))}
    </div>
  );
}

/* Icons */
function Sprout({ className = "" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor">
      <path d="M12 21a1 1 0 0 1-1-1v-5.05A7.002 7.002 0 0 1 4 8a1 1 0 0 1 1-1c3.866 0 7 3.134 7 7V20a1 1 0 0 1-1 1Zm7-14c-3.866 0-7 3.134-7 7V8a7.002 7.002 0 0 1 7-7 1 1 0 0 1 1 1 7.002 7.002 0 0 1-7 7Z" />
    </svg>
  );
}

function CalendarIcon({ className = "" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <rect x="3" y="4" width="18" height="18" rx="3" />
      <path d="M16 2v4M8 2v4M3 10h18" />
    </svg>
  );
}

function PinIcon({ className = "" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <path d="M12 22s7-4.35 7-11a7 7 0 1 0-14 0c0 6.65 7 11 7 11Z" />
      <circle cx="12" cy="11" r="2.5" />
    </svg>
  );
}

function ClockIcon({ className = "" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </svg>
  );
}

function ArrowRight({ className = "" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
    >
      <path d="M5 12h14" />
      <path d="M13 6l6 6-6 6" />
    </svg>
  );
}

const DEFAULT_EVENTS = [
  {
    date: { day: "20", month: "March", year: "2025" },
    title: "Tree Plantation Challenge",
    city: "Jones Street, New York",
    time: "8:30am – 4:00pm",
    joined: 236,
    tag: "Tree Plantation",
    image:
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=1400&auto=format&fit=crop",
    avatars: [
      "https://i.pravatar.cc/80?img=15",
      "https://i.pravatar.cc/80?img=5",
      "https://i.pravatar.cc/80?img=32",
    ],
  },
  {
    date: { day: "28", month: "February", year: "2025" },
    title: "Forest Cleaning Challenge",
    city: "Los Angeles",
    time: "10:30am – 4:00pm",
    joined: 49,
    tag: "Forest",
    image:
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=1400&auto=format&fit=crop",
    avatars: [
      "https://i.pravatar.cc/80?img=47",
      "https://i.pravatar.cc/80?img=64",
      "https://i.pravatar.cc/80?img=18",
    ],
  },
];
