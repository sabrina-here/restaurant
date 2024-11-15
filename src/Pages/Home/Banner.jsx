import React from "react";
import bannerImage from "../../assets/banner.jpeg";
import CommonBtn from "../../Components/CommonBtn";

export default function Banner() {
  return (
    <div className="bg-gradient-to-tl from-primary to-secondary w-full pb-10">
      <div className=" lg:w-[73%] max-w-[1920px] mx-auto">
        <div className="flex flex-col lg:flex-row  items-center  justify-center  ">
          {/* -- text section -- */}
          <div className="w-[80%] mx-auto lg:w-1/2 font-bold text-white lg:p-16">
            <h1 className="  babas-font lg:absolute lg:py-1 lg:z-20  my-5 lg:top-24 text-5xl lg:text-7xl font-semibold lg:bg-primary/50">
              <span className=" inline-block  whitespace-nowrap ">
                TASTE THE AUTHENTIC
              </span>
              <br />
              <span className=" inline-block  whitespace-nowrap ">
                SAUDI CUISINE
              </span>
            </h1>

            <p className="font-thin lg:mt-32 my-4">
              Among the best Saudi Chefs in the world, <br /> serving you
              something beyond flavour
            </p>
            <div className="my-4">
              <CommonBtn>EXPLORE MENU</CommonBtn>
            </div>
          </div>

          {/* -- image -- */}
          <div className=" lg:w-1/2 lg:relative p-4">
            <img
              src={bannerImage}
              alt="stake image"
              className="w-[90%] mx-auto lg:w-full  lg:ms-0  rounded-sm"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
