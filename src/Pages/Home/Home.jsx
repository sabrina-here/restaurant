import React from "react";
import Banner from "./Banner";
import HomeAboutSection from "./HomeAboutSection";
import aboutSideImage from "../../assets/aboutSideImage.png";
import CustomerRev from "./CustomerRev";
import CustomerReview from "./CustomerReview";
import AutoCarousel from "./AutoCarousel";

export default function Home() {
  return (
    <div>
      <div>
        <Banner />
      </div>
      {/* <div>
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
      </div> */}
      {/* <div>HomeSecondSection Bottom Three cards</div> */}
      {/* <div className="max-w-[1920px] w-[80%] mx-auto lg:w-[75%] my-5">
        <AutoCarousel />
      </div> */}

      {/* ----------- customer review section ----------------- */}
      {/* <div className="max-w-[1920px] w-[80%] mx-auto lg:w-[75%] my-5">
        <CustomerReview />
      </div> */}
    </div>
  );
}
