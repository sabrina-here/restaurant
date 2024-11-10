import React from "react";
import Banner from "./Banner";
import HomeAboutSection from "./HomeAboutSection";
import aboutSideImage from "../../assets/aboutSideImage.png";
import CustomerRev from "./CustomerRev";

export default function Home() {
  return (
    <div>
      <div>
        <Banner />
      </div>
      <div>
        <div className="max-w-[80%] mx-auto lg:max-w-[75%]">
          <HomeAboutSection />
        </div>
        <div className="relative w-full hidden lg:block">
          <img
            className="absolute w-[120px] right-0 -top-60"
            src={aboutSideImage}
            alt=""
          />
        </div>
      </div>
      <div>HomeSecondSection Bottom Three cards</div>
      <div>Popular Food Items Carousel section</div>
      <div>BookingSection Background image with form</div>

      {/* ----------- customer review section ----------------- */}
      <div>
        <div className="max-w-[80%] mx-auto lg:max-w-[75%] my-5">
          <CustomerRev />
        </div>
      </div>
      <div></div>
    </div>
  );
}
