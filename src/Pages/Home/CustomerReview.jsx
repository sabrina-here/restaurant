import React, { useState } from "react";
import revImage from "../../assets/reviewImage.jpeg";
import { FaSquare } from "react-icons/fa";
import { RiDoubleQuotesL } from "react-icons/ri";
import {
  MdKeyboardArrowRight,
  MdOutlineKeyboardArrowLeft,
} from "react-icons/md";

function CustomerReview() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      review:
        "You can't go wrong with Chicken Mandi, I had it twice. The chicken was cooked perfectly, juicy & soft (usually mandi chicken is a bit dry). I would defiantly recommend it.",
      name: "KHALID AL DAWSRY",
      location: "Jeddah, Saudi",
    },
    {
      review:
        "The Chicken Mandi was delicious! Cooked perfectly, juicy & soft (usually mandi chicken is a bit dry). I would definitely recommend it.",
      name: "another person",
      location: "Jeddah, Saudi",
    },
    {
      review:
        "I had Chicken Mandi, and it was amazing. Perfectly juicy & flavorful.",
      name: "a different person",
      location: "Jeddah, Saudi",
    },
  ];

  const [rightArrowClicked, setRightArrowClicked] = useState(true);
  const [leftArrowClicked, setLeftArrowClicked] = useState(false);

  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    setRightArrowClicked(true);
    setLeftArrowClicked(false);
  };

  const handlePreviousSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? slides.length - 1 : prevSlide - 1
    );
    setLeftArrowClicked(true);
    setRightArrowClicked(false);
  };

  return (
    <div className="relative mb-24">
      {/* Section title */}
      <div className="my-3 lg:w-1/2 ">
        <div className=" text-primary my-2 font-bold text-sm">
          <FaSquare className="inline text-xs m-1 mb-2" />
          Crispy, Every Bite Taste
        </div>
        <div className="babas-font text-4xl">WHAT SOME OF MY CUSTOMERS SAY</div>
      </div>

      {/* Carousel content */}
      <div className="carousel w-full">
        {/* Slide */}
        <div className="carousel-item w-full">
          {/* card */}
          <div className="w-full flex flex-col lg:flex-row-reverse rounded-sm">
            <img src={revImage} alt="customer review" className="lg:w-[60%]" />

            <div className="lg:w-[40%] bg-accent text-black p-5 flex flex-col justify-between">
              <div className="w-[80%] mx-auto pt-6">
                <RiDoubleQuotesL className="" />
                <p className="ms-4">{slides[currentSlide].review}</p>
              </div>
              <div className="p-4">
                <div className="flex justify-between items-center">
                  <div>
                    <div className="babas-font text-xl">
                      {slides[currentSlide].name}
                    </div>
                    <p>{slides[currentSlide].location}</p>
                  </div>
                  <div className="avatar">
                    <div className="w-14 m-2 rounded-full">
                      <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                    </div>
                  </div>
                </div>
                <hr className="border border-primary" />
              </div>
            </div>
          </div>

          {/* Carousel buttons */}
          <div className="absolute lg:top-2 lg:right-5 flex transform lg:justify-end -bottom-20 justify-evenly right-1/4 left-1/4">
            <button
              onClick={handlePreviousSlide}
              className="btn btn-circle bg-gray-300 mr-2"
            >
              <MdOutlineKeyboardArrowLeft
                className={`${leftArrowClicked && "text-primary"} text-3xl`}
              />
            </button>
            <button
              onClick={handleNextSlide}
              className="btn btn-circle bg-gray-300"
            >
              <MdKeyboardArrowRight
                className={`${rightArrowClicked && "text-primary"} text-3xl`}
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CustomerReview;
