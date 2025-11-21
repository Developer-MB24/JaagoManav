import React from "react";

const achievements = [
  {
    icon: "fa-light fa-chart-mixed",
    value: "98",
    suffix: "%",
    label: "Company Success",
  },
  {
    icon: "fa-light fa-lightbulb-exclamation-on",
    value: "565",
    suffix: "+",
    label: "Company Strategies",
  },
  {
    icon: "fa-light fa-thumbs-up",
    value: "36",
    suffix: "k",
    label: "Complete Projects",
  },
  {
    icon: "fa-light fa-users-medical",
    value: "100",
    suffix: "+",
    label: "Experienced Members",
  },
];

const CompanyAchievements = () => {
  return (
    <section className="mt-16 md:mt-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 w-full">
          {achievements.map((item, idx) => (
            <div key={idx} className="text-center">
              {/* Icon circle */}
              <div className="flex items-center justify-center mx-auto mb-5 w-[70px] h-[70px] md:w-[60px] md:h-[60px] sm:w-[50px] sm:h-[50px] rounded-full border-2 border-[#FF9933] bg-[#f8f7f0]">
                <i
                  className={`${item.icon} text-[30px] lg:text-[24px] md:text-[20px] sm:text-[20px]`}
                />
              </div>

              {/* Number */}
              <h2 className="mb-2 font-bold text-[38px] lg:text-[32px] md:text-[28px] sm:text-[28px] leading-none text-[#004540]">
                <span>{item.value}</span>
                {item.suffix && (
                  <span className="align-top">{item.suffix}</span>
                )}
              </h2>

              {/* Label */}
              <p className="text-[18px] md:text-[16px] leading-[26px] md:leading-[1] text-[#004540]">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompanyAchievements;
