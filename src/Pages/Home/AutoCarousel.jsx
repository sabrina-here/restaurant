import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { FaSquare } from "react-icons/fa";
import burger from "../../assets/hamburger.jpeg";
import pizza from "../../assets/pizza.jpeg";

const foodItems = [
  {
    image: burger,
    title: "VEGETABLES BURGER 1",
    description: "Barbecue Italian cuisine pizza",
  },
  {
    image: pizza,
    title: "VEGETABLES BURGER",
    description: "Barbecue Italian cuisine pizza",
  },
  {
    image: burger,
    title: "VEGETABLES BURGER",
    description: "Barbecue Italian cuisine pizza",
  },
  {
    image: pizza,
    title: "VEGETABLES BURGER",
    description: "Barbecue Italian cuisine pizza",
  },
  {
    image: burger,
    title: "VEGETABLES BURGER 2",
    description: "Barbecue Italian cuisine pizza",
  },
];

// function SampleNextArrow(props) {
//   const { className, style, onClick } = props;
//   return (
//     <div
//       className={className}
//       style={{
//         ...style,
//         display: "block",
//         background: "green",
//       }}
//       onClick={onClick}
//     />
//   );
// }

// function SamplePrevArrow(props) {
//   const { className, style, onClick } = props;
//   return (
//     <div
//       className={className}
//       style={{ ...style, display: "block", background: "green" }}
//       onClick={onClick}
//     />
//   );
// }

export default function AutoCarousel() {
  const settings = {
    infinite: true, // Enable infinite looping
    slidesToShow: 3,
    slidesToScroll: 1, // Keep it at 1 to enable smooth autoplay effect
    autoplay: true,
    speed: 5000, // Increase the speed for each transition
    autoplaySpeed: 1, // Set to 0 for continuous scrolling
    cssEase: "linear", // Use linear easing for smooth effect
    // nextArrow: <SampleNextArrow />,
    // prevArrow: <SamplePrevArrow />,
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
      <div className="my-3 lg:w-1/2 ">
        <div className=" text-primary my-2 font-bold text-sm">
          <FaSquare className="inline text-xs m-1 mb-2" />
          Crispy, Every Bite Taste
        </div>
        <div className="babas-font text-4xl">popular food items</div>
      </div>
      <div className="slider-container mx-auto lg:mt-10 mb-20">
        <Slider {...settings}>
          {foodItems.map((food, index) => (
            <div
              key={index}
              className="h-[280px] border border-accent p-3  rounded-md shadow-lg flex-col justify-center items-center mx-10"
            >
              <div className="h-1/2">
                <img src={food.image} alt="" className="mx-auto " />
              </div>
              <div>
                <hr className="border-2 border-primary mt-3 w-20 mx-auto" />
                <p className="babas-font text-xl py-4 text-center">
                  {food.title}
                </p>
                <p className="text-sm text-nowrap text-center">
                  {food.description}
                </p>
              </div>
            </div>
          ))}{" "}
        </Slider>
      </div>
    </div>
  );
}
