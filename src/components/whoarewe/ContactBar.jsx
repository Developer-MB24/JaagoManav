// src/components/contact/ContactBar.jsx
import React, { useState } from "react";
import { Send, PhoneCall, MapPin } from "lucide-react";

const cards = [
  {
    id: 0,
    href: "mailto:support.econest@gmail.com",
    title: "support.econest@gmail.com",
    subtitle: "Send a Email",
    Icon: Send,
  },
  {
    id: 1,
    href: "tel:+70264566579",
    title: "+70 264 566 579",
    subtitle: "Any Time Call Us",
    Icon: PhoneCall,
  },
  {
    id: 2,
    href: "#",
    title: "Jones Street, New York, USA",
    subtitle: "Our Address",
    Icon: MapPin,
  },
];

export default function ContactBar() {
  // middle card active by default
  const [activeIndex, setActiveIndex] = useState(1);

  return (
    <section className="relative contact-info-section z-50 -mb-10 md:-mb-14 lg:-mb-5">
      <div className="mx-auto max-w-6xl px-4">
        <div className="bg-[#FFE47D] rounded-2xl md:rounded-[18px] shadow-[0_18px_40px_rgba(0,69,64,0.18)]">
          <div className="grid grid-cols-1 md:grid-cols-3">
            {cards.map((card, idx) => {
              const isActive = idx === activeIndex;
              const { Icon } = card;

              return (
                <a
                  key={card.id}
                  href={card.href}
                  onMouseEnter={() => setActiveIndex(idx)}
                  className={[
                    "contact-info block cursor-pointer transition-all duration-300",
                    "px-6 sm:px-8 lg:px-10 py-6 sm:py-8 lg:py-9",
                    "border-transparent",
                    isActive
                      ? "bg-[#138808] text-white rounded-2xl md:rounded-[18px] shadow-[0_26px_55px_rgba(0,69,64,0.45)] translate-y-[-18px] md:translate-y-[-22px] z-10"
                      : "bg-transparent text-[#138808] md:hover:bg-[#138808] md:hover:text-white",
                    idx === 0 ? "md:rounded-l-[18px]" : "",
                    idx === cards.length - 1 ? "md:rounded-r-[18px]" : "",
                  ].join(" ")}
                  style={{ position: "relative" }}
                >
                  {/* top line + icon */}
                  <div className="icon-wrap flex items-center justify-between gap-4 mb-5">
                    <span
                      className={`h-px flex-1 ${
                        isActive
                          ? "bg-gradient-to-r from-transparent to-[#FFBF4B]"
                          : "bg-gradient-to-r from-transparent to-[#138808]"
                      }`}
                    />
                    <div
                      className={[
                        "icon flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full border",
                        isActive
                          ? "bg-[#138808] border-white/30 text-[#FFBF4B]"
                          : "bg-[#138808] border-[#134A43]/40 text-[#FFBF4B]",
                      ].join(" ")}
                    >
                      <Icon size={20} />
                    </div>
                  </div>

                  {/* text */}
                  <h3
                    className={[
                      "font-semibold leading-snug mb-2",
                      "text-lg sm:text-xl lg:text-2xl",
                      isActive ? "text-white" : "text-[#134A43]",
                    ].join(" ")}
                  >
                    {card.title}
                  </h3>
                  <p
                    className={[
                      "text-sm sm:text-base",
                      isActive ? "text-white/80" : "text-[#134A43]",
                    ].join(" ")}
                  >
                    {card.subtitle}
                  </p>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
