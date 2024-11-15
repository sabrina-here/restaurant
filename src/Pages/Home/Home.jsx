import React from "react";
import Banner from "./Banner";
import HomeAboutSection from "./HomeAboutSection";
import aboutSideImage from "../../assets/aboutSide.png";
import autoCarLeft from "../../assets/autoCarLeft.png";
import revLeft from "../../assets/revLeft.png";
import revRight from "../../assets/revRight.png";
import CustomerReview from "./CustomerReview";
import AutoCarousel from "./AutoCarousel";
import BookingSection from "./BookingSection";
import bookingImage from "../../assets/bookingBgImage.jpeg";
import MiniCard from "./MiniCard";

export default function Home() {
  return (
    <div>
      <div>
        <Banner />
      </div>
      <div className="my-14">
        <div className="max-w-[83%] mx-auto lg:max-w-[75%]">
          <HomeAboutSection />
        </div>
        <div className="relative w-full hidden lg:block">
          <img
            className="absolute w-[120px] right-0 -top-32"
            src={aboutSideImage}
            alt=""
          />
        </div>
      </div>
      <div className="my-14">
        <MiniCard />
      </div>
      <div className="bg-bg_secondary py-5">
        <div className=" max-w-[1920px] w-[80%] mx-auto lg:w-[75%] ">
          <AutoCarousel />
        </div>
        <div className="relative w-full hidden lg:block">
          <img
            className="absolute w-[120px] left-0 -top-[500px]"
            src={autoCarLeft}
            alt=""
          />
        </div>
      </div>

      {/* ---- Booking section ----- */}
      <div
        className=""
        style={{
          backgroundImage: `url(${bookingImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <BookingSection />
      </div>

      {/* ----------- customer review section ----------------- */}
      <div className="max-w-[1920px] w-[80%] mx-auto lg:w-[75%] my-10">
        <CustomerReview />
      </div>
      <div className="relative w-full hidden lg:block">
        <img
          className="absolute w-[90px] left-0 -top-[593px]"
          src={revLeft}
          alt=""
        />
        <img
          className="absolute w-[190px] right-0 -top-80"
          src={revRight}
          alt=""
        />
      </div>
    </div>
  );
}
