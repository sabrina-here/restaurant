import React from "react";
import bannerImage from "../../assets/banner.jpeg";
import CommonBtn from "../../Components/CommonBtn";

export default function Banner() {
  return (
    <div className="bg-gradient-to-tl from-primary to-secondary">
      <div className="sm,md:flex-col lg:max-w-[80%] lg:mx-auto lg:flex items-center  justify-center mx-auto p-10">
        <div className="relative font-bold text-white lg:w-80% lg:mx-auto">
          <p className="lg:absolute lg:py-5 my-5 -top-16 text-5xl font-semibold lg:bg-primary/50">
            <span className=" inline-block w-full whitespace-nowrap p-2">
              TASTE THE AUTHENTIC
            </span>
            <br /> SAUDI CUISINE
          </p>

          <p className="font-thin lg:mt-32 my-4">
            Among the best Saudi Chefs in the world, <br /> serving you
            something beyond flavour
          </p>
          <div className="my-4">
            <CommonBtn>EXPLORE MENU</CommonBtn>
          </div>
        </div>
        <img
          src={bannerImage}
          alt="stake image"
          className="lg:w-[50%] w-[80%] sm:mx-auto"
        />
      </div>
    </div>
  );
}
