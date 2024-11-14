import React from "react";
import bannerImage from "../../assets/banner.jpeg";
import CommonBtn from "../../Components/CommonBtn";

export default function Banner() {
  return (
    <div className="bg-gradient-to-tl from-primary to-secondary w-full">
      <div className=" lg:w-[73%] max-w-[1920px] bg-gray-600 mx-auto">
        <div className="flex flex-col lg:flex-row  items-center  justify-center p-10 ">
          <div className="lg:w-1/2 font-bold text-white ">
            <h1 className="babas-font lg:absolute lg:py-1 lg:z-20  my-5 top-24 text-4xl lg:text-7xl font-semibold lg:bg-primary/50">
              <span className=" inline-block w-full whitespace-nowrap p-2">
                TASTE THE AUTHENTIC
              </span>
              <br />
              <span className=" inline-block w-full whitespace-nowrap p-2">
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
          <div className="lg:w-1/2 lg:relative">
            <img
              src={bannerImage}
              alt="stake image"
              className="w-[80%] lg:w-full lg:ms-0 mx-auto rounded-sm"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
