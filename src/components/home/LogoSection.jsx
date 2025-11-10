import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Example placeholder logos (replace these URLs with your image paths)
const logos = [
  "/images/envanto.png",
  "/images/envanto.png",
  "/images/envanto.png",
  "/images/envanto.png",
  "/images/envanto.png",
  "/images/envanto.png",
  "/images/envanto.png",
];

const settings = {
  infinite: true,
  speed: 800,
  slidesToShow: 4,
  slidesToScroll: 1, // moves one by one
  autoplay: true,
  autoplaySpeed: 2000,
  arrows: false,
  dots: false,
  responsive: [
    {
      breakpoint: 1024, // medium screens
      settings: { slidesToShow: 3, slidesToScroll: 1 },
    },
    {
      breakpoint: 640, // small screens
      settings: { slidesToShow: 2, slidesToScroll: 1 },
    },
  ],
};

const LogoCarousel = () => (
  <section className="py-10 bg-white flex justify-center items-center">
    <div className="w-full max-w-4xl">
      <Slider {...settings}>
        {logos.map((src, idx) => (
          <div key={idx} className="flex justify-center items-center">
            <img
              src={src}
              alt={`partner-logo-${idx + 1}`}
              className="h-10 md:h-16 opacity-60 grayscale"
              draggable="false"
            />
          </div>
        ))}
      </Slider>
    </div>
  </section>
);

export default LogoCarousel;
