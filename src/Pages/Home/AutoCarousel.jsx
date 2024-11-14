import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const foodItems = [
  {
    image: "/src/assets/hamburger.jpeg",
    title: "VEGETABLES BURGER 1",
    description: "Barbecue Italian cuisine pizza",
  },
  {
    image: "/src/assets/pizza.jpeg",
    title: "VEGETABLES BURGER",
    description: "Barbecue Italian cuisine pizza",
  },
  {
    image: "/src/assets/hamburger.jpeg",
    title: "VEGETABLES BURGER",
    description: "Barbecue Italian cuisine pizza",
  },
  {
    image: "/src/assets/pizza.jpeg",
    title: "VEGETABLES BURGER",
    description: "Barbecue Italian cuisine pizza",
  },
  {
    image: "/src/assets/hamburger.jpeg",
    title: "VEGETABLES BURGER 2",
    description: "Barbecue Italian cuisine pizza",
  },
];

export default function AutoCarousel() {
  const settings = {
    infinite: true, // Enable infinite looping
    slidesToShow: 4,
    slidesToScroll: 1, // Keep it at 1 to enable smooth autoplay effect
    autoplay: true,
    speed: 3000, // Increase the speed for each transition
    autoplaySpeed: 1, // Set to 0 for continuous scrolling
    cssEase: "linear", // Use linear easing for smooth effect
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
    ],
  };

  return (
    <div>
      AutoCarousel
      <div className="slider-container mx-auto">
        <Slider {...settings}>
          {foodItems.map((food, index) => (
            <div
              key={index}
              className="h-[250px] w-[230px] border border-accent p-3  rounded-md shadow-lg flex-col justify-center items-center mx-10"
            >
              <div className="h-1/2">
                <img src={food.image} alt="" className="mx-auto " />
              </div>
              <div>
                <hr className="border-2 border-primary" />
                <p className="babas-font text-xl py-4 text-center">
                  {food.title}
                </p>
                <p className="text-sm text-nowrap">{food.description}</p>
              </div>
            </div>
          ))}{" "}
        </Slider>
      </div>
    </div>
  );
}
