"use client";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";

const heroImages = [
  { imgUrl: "/assets/images/hero-1.svg", alt: "smartwatch", caption: "Latest Smartwatch" },
  { imgUrl: "/assets/images/hero-2.svg", alt: "bag", caption: "Trendy Bags" },
  { imgUrl: "/assets/images/hero-3.svg", alt: "lamp", caption: "Modern Lamps" },
  { imgUrl: "/assets/images/hero-4.svg", alt: "air fryer", caption: "New Air Fryer" },
  { imgUrl: "/assets/images/hero-5.svg", alt: "chair", caption: "Comfortable Chairs" },
];

const HeroCarousel = () => {
  return (
    <div className="hero-carousel relative">
      <div className="moving-light absolute top-0 left-0 w-full h-full z-10"></div>
      <Carousel
        showThumbs={false}
        autoPlay
        infiniteLoop
        interval={4000}
        showArrows={false}
        showStatus={false}
      >
        {heroImages.map((image, index) => (
          <div key={index} className="relative">
            <Image
              src={image.imgUrl}
              alt={image.alt}
              width={484}
              height={484}
              className="object-contain"
              style={{ filter: "brightness(90%)", transition: "transform 0.5s" }}
            />
            <div className="absolute bottom-5 left-5 text-white text-xl bg-black bg-opacity-50 p-2 rounded-md z-20">
              {image.caption}
            </div>
          </div>
        ))}
      </Carousel>

      <Image 
        src="assets/icons/hand-drawn-arrow.svg"
        alt="arrow"
        width={175}
        height={175}
        className="max-xl:hidden absolute -left-[15%] bottom-0 z-0"
      />
    </div>
  )
}

export default HeroCarousel;