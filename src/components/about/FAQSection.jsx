import React, { useState } from "react";
import { ChevronDown, ChevronUp, Heart } from "lucide-react";

// FAQ content
const faqs = [
  {
    question: "What motivates you to donate to our charity?",
    answer:
      "Explore the variety of volunteer opportunities available. From event planning and fundraising to fieldwork and administrative support, there are many ways to lend your talents. Find the perfect fit for your skills and interests.",
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
  const [openIdx, setOpenIdx] = useState(0);

  return (
    <section className="relative overflow-hidden w-full flex flex-col md:flex-row items-stretch bg-[#fafbfa] py-14 md:py-20 px-2 md:px-8 gap-0 md:gap-12">
      {/* Background gradient animation */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-[#FF9933] to-transparent opacity-15 animate-slideDown" />
        <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-[#138808] to-transparent opacity-15 animate-slideUp" />
      </div>

      {/* FAQ (Left Side) */}
      <div className="relative z-10 w-full md:w-[650px] max-w-xl flex flex-col justify-center">
        <div className="flex items-center gap-2 mb-3">
          <Heart className="w-5 h-5 text-[#138808]" />
          <span className="italic font-semibold text-[#FF9933] text-lg">
            Frequently Asked Questions
          </span>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-[#222] mb-8 leading-tight">
          Have Any Questions For Us?
        </h2>
        <div className="flex flex-col gap-5">
          {faqs.map((faq, idx) => (
            <div key={idx} className="transition">
              {/* Accordion button */}
              <button
                onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                className={`w-full flex items-center justify-between bg-white rounded-2xl shadow-[0_2px_12px_rgba(72,115,97,0.04)] 
                  px-7 py-6 text-left text-[1.45rem] font-semibold text-[#222] hover:shadow-lg focus:outline-none transition
                  ${openIdx === idx ? "ring-2 ring-[#ff993355]" : ""}
                `}
                style={{
                  boxShadow: "0 4px 24px 0 rgba(0,0,0,0.06)",
                }}
              >
                <span>{faq.question}</span>
                {openIdx === idx ? (
                  <ChevronUp className="text-[#138808]" size={30} />
                ) : (
                  <ChevronDown className="text-[#138808]" size={30} />
                )}
              </button>
              {/* Accordion answer section, with divider and styled content */}
              <div
                className={`overflow-hidden transition-all duration-500 
                  ${openIdx === idx ? "max-h-[350px] py-0" : "max-h-0 py-0"}
                `}
              >
                {openIdx === idx && (
                  <div className="bg-white rounded-b-2xl px-7 pb-7 pt-2 shadow-none">
                    {/* Divider line */}
                    <div className="border-t border-gray-200 mb-6" />
                    {/* Answer */}
                    <div className="text-lg text-gray-500 leading-relaxed">
                      {faq.answer}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right side image */}
      <div className="relative z-10 md:flex-1 flex items-center justify-center mt-8 md:mt-0">
        <img
          src="/images/about-two-img-1.jpg"
          alt="FAQ"
          className="w-full h-full object-cover max-h-[420px] rounded-xl grayscale border-none shadow-none"
        />
      </div>

      {/* Animations for gradient */}
      <style>{`
        @keyframes slideDown {
          0% { transform: translateY(-25%); }
          100% { transform: translateY(0%); }
        }
        @keyframes slideUp {
          0% { transform: translateY(25%); }
          100% { transform: translateY(0%); }
        }
        .animate-slideDown { animation: slideDown 14s ease-in-out infinite alternate; }
        .animate-slideUp { animation: slideUp 14s ease-in-out infinite alternate; }
      `}</style>
    </section>
  );
};

export default FAQSection;
