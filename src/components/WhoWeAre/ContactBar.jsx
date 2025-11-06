// ContactBar.jsx
import React, { useState } from "react";
import { Send, Phone, MapPin } from "lucide-react";

const infos = [
  {
    label: "support.econest@gmail.com",
    sub: "Send a Email",
    icon: <Send size={22} />,
    key: "email",
  },
  {
    label: "+70 264 566 579",
    sub: "Any Time Call Us",
    icon: <Phone size={22} />,
    key: "phone",
  },
  {
    label: "Jones Street, New York, USA",
    sub: "Our Address",
    icon: <MapPin size={22} />,
    key: "address",
  },
];

const ContactBar = () => {
  const [active, setActive] = useState(-1);

  // Card colors
  const getCardClasses = (idx) =>
    `${active === idx ? "bg-[#138808] text-white" : "bg-[#FF9933] text-white"} 
     transition-colors duration-300 rounded-lg shadow flex-1 flex items-center px-8 py-5 gap-4 cursor-pointer`;

  const getIconClasses = (idx) =>
    `rounded-full p-2 ${
      active === idx
        ? "bg-white text-[#FF9933]"
        : "bg-white text-[#138808] border border-white"
    } transition`;

  return (
    <div className="relative z-10 max-w-5xl mx-auto flex gap-6 items-stretch py-4 px-2">
      {infos.map((info, idx) => (
        <div
          key={info.key}
          className={getCardClasses(idx)}
          onMouseEnter={() => setActive(idx)}
        >
          <span className={getIconClasses(idx)}>{info.icon}</span>
          <div className="flex flex-col flex-1">
            <div
              className={`font-bold text-lg ${
                active === idx ? "text-white" : "text-white"
              }`}
            >
              {info.label}
            </div>
            <div
              className={`text-sm opacity-80 mt-1 ${
                active === idx ? "text-white" : "text-white"
              }`}
            >
              {info.sub}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ContactBar;
