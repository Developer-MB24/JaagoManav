import { CheckCircle } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";

/** Decorative framed image using a torn-edge background */
function FramedImage({ src, alt = "" }) {
  return (
    <div
      className="
        relative overflow-hidden rounded-2xl p-1 bg-white
        before:content-[''] before:absolute before:inset-0 before:rounded-2xl
        before:bg-[url('/images/wetakecarebg.png')] before:bg-contain before:bg-center before:bg-no-repeat
        before:z-0 before:pointer-events-none
      "
    >
      <img
        src={src}
        alt={alt}
        className="relative z-10 w-full h-full object-cover rounded-xl"
        loading="lazy"
      />
    </div>
  );
}

export default function HelpSection() {
  const [activeTab, setActiveTab] = useState("education");

  const tabs = [
    {
      id: "education",
      label: "Education Help",
      color: "bg-[#FF9933] text-white",
    },
    {
      id: "treatment",
      label: "Treatment Help",
      color: "bg-[#FF9933] text-white",
    },
    { id: "food", label: "Healthy Food", color: "bg-[#FF9933] text-white" },
  ];

  const content = {
    education: {
      img: "/images/services.jpg",
      points: [
        {
          title: "Child Deserves Better Healthy Foods",
          desc: "Category that involves giving financial or material support.",
          color: "text-[#FF9933]",
        },
        {
          title: "Childhood Education Development Support",
          desc: "Category that involves giving financial or material support.",
          color: "text-[#138808]",
        },
      ],
    },
    treatment: {
      img: "/images/services.jpg",
      points: [
        {
          title: "Free Medical Checkups for Children",
          desc: "Providing health checkup and medical support for underprivileged children.",
          color: "text-[#FF9933]",
        },
        {
          title: "Health Equipment Support",
          desc: "Providing necessary tools, medicines, and financial aid for treatment.",
          color: "text-[#138808]",
        },
      ],
    },
    food: {
      img: "/images/services.jpg",
      points: [
        {
          title: "Nutritional Food for Needy Kids",
          desc: "Helping children get daily nutritious food for better growth.",
          color: "text-[#FF9933]",
        },
        {
          title: "Hunger-Free Mission",
          desc: "Ensuring every child gets a proper meal every day.",
          color: "text-[#138808]",
        },
      ],
    },
  };

  const active = content[activeTab];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Heading */}
        <div className="text-center mb-12">
          {/* Italic orange label + animated underline */}
          <div className="text-[#FF9933] font-caveat font-semibold tracking-wide inline-block">
            <span className="relative inline-block">
              WE TAKE CARE THEM
              <div className="relative mx-auto mt-1 h-[3px] w-48 overflow-hidden">
                {/* faint baseline */}
                <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-[2px] bg-[#FF9933]/30" />
                {/* gliding bar */}
                <motion.div
                  className="absolute top-1/2 -translate-y-1/2 h-[3px] w-20 rounded bg-[#FF9933]"
                  animate={{ x: [0, 112, 0] }} // 112px ≈ (w-48 - w-20)
                  transition={{
                    duration: 1.7,
                    repeat: Infinity,
                    repeatType: "mirror",
                    ease: "easeInOut",
                  }}
                />
              </div>
            </span>
          </div>

          {/* Split H2 with opposite slide reveals */}
          <h2 className="mt-3 font-nunito text-4xl font-extrabold text-[#138808] leading-tight">
            <motion.span
              className="block"
              initial={{ y: -40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              We Always Help The
            </motion.span>
            <motion.span
              className="block"
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
            >
              <span className="text-[#FF9933]">Needy People</span>
            </motion.span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Tabs */}
          <div className="flex flex-col gap-4">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`rounded-xl py-4 font-semibold text-lg shadow transition-all duration-300 ${
                  activeTab === tab.id
                    ? tab.color
                    : "bg-green-50 text-[#138808] hover:bg-green-100"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Right Content */}
          <div className="lg:col-span-2 bg-green-50 rounded-2xl p-8 flex flex-col md:flex-row items-center gap-8 shadow">
            {/* Framed image replaces the plain <img /> */}
            <div className="w-full md:w-1/2">
              <FramedImage src={active.img} alt="help" />
            </div>

            <div className="w-full md:w-1/2">
              <h3 className="text-2xl font-bold text-[#138808] mb-4">
                How You Can Help Us?
              </h3>
              <ul className="space-y-5">
                {active.points.map((point, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle
                      className={`w-6 h-6 ${point.color} shrink-0 mt-1`}
                    />
                    <div>
                      <p className={`font-bold ${point.color}`}>
                        {point.title}
                      </p>
                      <p className="text-green-800 text-sm leading-relaxed">
                        {point.desc}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
