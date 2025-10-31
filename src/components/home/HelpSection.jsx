import { CheckCircle } from "lucide-react";
import { useState } from "react";

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
      img: "/images/child-treatment.jpg",
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
      img: "/images/child-food.jpg",
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
          <p className="text-[#FF9933] italic font-semibold tracking-wide">
            WE TAKE CARE THEM
          </p>
          <h2 className="text-4xl font-extrabold text-[#138808]">
            We Always Help The{" "}
            <span className="text-[#FF9933]">Needy People</span>
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
            <img
              src={active.img}
              alt="help"
              className="rounded-xl w-full md:w-1/2 object-cover shadow-lg"
            />
            <div>
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
