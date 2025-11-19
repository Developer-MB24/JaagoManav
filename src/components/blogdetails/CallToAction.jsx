import React from "react";

export default function CallToAction({
  title = (
    <>
      We Are{" "}
      <span className="text-[#FF9933] font-bold">Non profit charity</span>{" "}
      <span className="text-[#138808] font-bold">world</span> Organization
    </>
  ),
  subtitle = (
    <>
      Denouncing pleasure and praising pain was born and will give you a
      complete great explorer of the truth the master-builder.
    </>
  ),
  buttonText = "Donate Now",
  buttonHref = "/donate-now",

  photo = "/images/about-two-img-2.jpg",

  shapeImage = "/images/site-footer-two-content-shape-1.png",
  // ⬇️ MASK IMAGE
  maskUrl = "/images/cta-mask.png",
}) {
  const maskStyle = maskUrl
    ? {
        WebkitMaskImage: `url(${maskUrl})`,
        maskImage: `url(${maskUrl})`,
        WebkitMaskRepeat: "no-repeat",
        maskRepeat: "no-repeat",
        WebkitMaskPosition: "center center",
        maskPosition: "center center",
        WebkitMaskSize: "cover",
        maskSize: "cover",
      }
    : {};

  return (
    <section className="relative py-16 sm:py-20 overflow-hidden">
      <style>{`
        @keyframes topBottomLocal {
          0%, 100% { transform: translate(-50%, 0); }
          50% { transform: translate(-50%, -15px); }
        }
        .cta-shape-bob {
          animation: topBottomLocal 3s ease-in-out infinite;
        }
      `}</style>

      <div className="relative z-[2] mx-auto max-w-[1320px] px-[15px]">
        <div
          className="relative text-center bg-[#ece5dd] pt-[91px] pb-[200px] rounded-[24px] shadow-md overflow-hidden"
          style={maskStyle}
        >
          {shapeImage && (
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 opacity-10 cta-shape-bob">
              <img src={shapeImage} alt="" className="w-auto" />
            </div>
          )}

          {/* Title */}
          <h3 className="text-[35px] font-extrabold leading-[45px] text-[#138808]">
            {title}
          </h3>

          {/* Subtitle text */}
          <p className="mt-[10px] mb-[20px] font-medium text-[#111827]">
            {subtitle}
          </p>

          {/* Button */}
          <div className="mt-2">
            <a
              href={buttonHref}
              className="group relative inline-flex items-center gap-3 rounded-full bg-[#138808] hover:bg-[#FF9933] px-7 py-3 text-[15px] font-semibold text-white shadow hover:shadow-md transition-all overflow-hidden"
            >
              {/* Bubble  effect */}
              <span className="pointer-events-none absolute inset-0 rounded-full bg-[#FF9933] opacity-0 scale-50 transition-transform transition-opacity duration-500 group-hover:opacity-40 group-hover:scale-110" />

              {/* Button text */}
              <span className="relative z-10">{buttonText}</span>

              <span className="relative z-10 inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#FF9933] text-white transition-all duration-300 group-hover:bg-white group-hover:text-[#138808]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-4 h-4"
                >
                  <path d="M5 12h14" />
                  <path d="M13 6l6 6-6 6" />
                </svg>
              </span>
            </a>
          </div>

          <div className="absolute -bottom-[35px] left-1/2 -translate-x-1/2 max-w-[200px] w-full">
            <div className="w-[140px] sm:w-[180px] mx-auto rounded-full overflow-hidden shadow ring-4 ring-[#eef7f6]">
              <img
                src={photo}
                alt="Footer highlight"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
