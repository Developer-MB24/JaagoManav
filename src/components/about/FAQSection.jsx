import React, { useState } from "react";
import { ChevronDown, ChevronUp, Heart } from "lucide-react";

const faqs = [
  {
    question: "What motivates you to donate to our charity?",
    answer:
      "Your generosity can make a real difference in the lives of those in need. People often donate because they want to contribute to a meaningful cause and help create positive change.",
  },
  {
    question: "How did you hear about our organization?",
    answer:
      "Most supporters find us through social media, friends, or community events. Your feedback on how you discovered us helps us reach more people in need.",
  },
  {
    question: "How frequently do you prefer to volunteer?",
    answer:
      "We value every volunteer and can accommodate preferences—whether weekly, monthly, or occasionally. Just let us know what works for you!",
  },
];

const FAQSection = () => {
  const [openIdx, setOpenIdx] = useState(null);

  return (
    <section className="relative overflow-hidden w-full flex flex-col md:flex-row items-stretch bg-[#f7faf7] py-12 md:py-20 px-2 md:px-8">
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-[#FF9933] to-transparent opacity-30 animate-slideDown" />
        <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-[#138808] to-transparent opacity-30 animate-slideUp" />
      </div>

      {/* Left*/}
      <div className="relative z-10 md:w-3/5">
        <div className="flex items-center gap-2 mb-3">
          <Heart className="w-5 h-5 text-[#138808]" />
          <span className="italic font-semibold text-[#FF9933]">
            Frequently Asked Questions
          </span>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-[#222] mb-8">
          Have Any Questions For Us?
        </h2>

        <div className="flex flex-col gap-6">
          {faqs.map((faq, idx) => (
            <div key={idx}>
              <button
                onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                className="w-full flex items-center justify-between bg-white rounded-2xl shadow px-6 py-5 text-left text-lg font-normal text-[#222] hover:shadow-lg focus:outline-none transition"
              >
                <span>{faq.question}</span>
                {openIdx === idx ? (
                  <ChevronUp className="text-[#138808]" size={28} />
                ) : (
                  <ChevronDown className="text-[#138808]" size={28} />
                )}
              </button>

              <div
                className={`overflow-hidden transition-all duration-500 ${
                  openIdx === idx ? "max-h-36 px-6 py-3" : "max-h-0 px-6"
                }`}
              >
                {openIdx === idx && (
                  <div className="text-sm text-gray-500">{faq.answer}</div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right */}
      <div className="relative z-10 md:w-2/5 flex items-center justify-center">
        <img
          src="/images/about-two-img-1.jpg"
          alt="FAQ"
          className="w-full h-full object-cover max-h-[520px] rounded-xl grayscale"
        />
      </div>

      {/* Animations */}
      <style>{`
        @keyframes slideDown {
          0%   { transform: translateY(-25%); }
          100% { transform: translateY(0%); }
        }
        @keyframes slideUp {
          0%   { transform: translateY(25%); }
          100% { transform: translateY(0%); }
        }
        .animate-slideDown { animation: slideDown 14s ease-in-out infinite alternate; }
        .animate-slideUp   { animation: slideUp   14s ease-in-out infinite alternate; }
      `}</style>
    </section>
  );
};

export default FAQSection;
