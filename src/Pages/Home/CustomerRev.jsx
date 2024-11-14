import React, { useState } from "react";
import revImage from "../../assets/reviewImage.jpeg";
import { FaSquare } from "react-icons/fa";
import { RiDoubleQuotesL } from "react-icons/ri";
import { MdKeyboardArrowRight } from "react-icons/md";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";

function CustomerRev() {
  const [rightArrowClicked, setRightArrowClicked] = useState(true);
  const [leftArrowClicked, setLeftArrowClicked] = useState(false);

  const handleRightClick = () => {
    setRightArrowClicked(true);
    setLeftArrowClicked(false);
  };
  const handleLeftClick = () => {
    setLeftArrowClicked(true);
    setRightArrowClicked(false);
  };

  return (
    <div className="relative mb-24">
      {/* --------------- section title and carousel button will be here(absolute) ------- */}
      <div className="my-3 lg:w-1/2 ">
        <div className=" text-primary my-2 font-bold text-sm">
          <FaSquare className="inline text-xs m-1 mb-2" />
          Crispy, Every Bite Taste
        </div>
        <div className="babas-font text-4xl">WHAT SOME OF MY CUSTOMERS SAY</div>
      </div>

      {/* -------------- carousel start ---------------- */}
      <div className="carousel  w-full">
        {/* slide 1 */}
        <div id="slide1" className="carousel-item  w-full">
          {/* --------------------- card inside the carousel -------------- */}

          <div className="lg:w-full flex flex-col lg:flex-row-reverse rounded-sm">
            <img
              src={revImage}
              alt="customer review"
              className=" lg:w-[55%] "
            />
            <div className="lg:w-[45%] bg-accent text-black p-5 flex flex-col justify-between">
              <div className="w-[75%] mx-auto pt-6">
                <RiDoubleQuotesL className="" />
                <p className="ms-4">
                  You can't go wrong with Chicken Mandi, I had it twice. The
                  chicken was cooked perfectly, juicy & soft (usually mandi
                  chicken is a bit dry). I would defiantly recommend it.
                </p>
              </div>

              <div className="p-4 ">
                <div className="flex justify-between items-center">
                  <div>
                    <div className="babas-font text-xl">KHALID AL DAWSRY</div>
                    <p>Jeddah, Saudi</p>
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

          {/* ----------------- button for carousel ----------------- */}
          <div className="absolute lg:top-2 lg:right-5   flex transform lg:justify-end -bottom-20 justify-evenly right-1/4 left-1/4 ">
            <a
              href="#slide3"
              className="btn btn-circle bg-gray-300 mr-2"
              onClick={handleRightClick}
            >
              <MdOutlineKeyboardArrowLeft
                className={`${rightArrowClicked && "text-primary"} text-3xl`}
              />
            </a>
            <a
              href="#slide2"
              className="btn btn-circle bg-gray-300"
              onClick={handleLeftClick}
            >
              <MdKeyboardArrowRight
                className={`${leftArrowClicked && "text-primary"} text-3xl`}
              />
            </a>
          </div>
        </div>

        {/* slide 2 */}
        <div id="slide2" className="carousel-item  w-full">
          {/* --------------------- card inside the carousel -------------- */}

          <div className="lg:w-full flex flex-col lg:flex-row-reverse rounded-sm">
            <img
              src={revImage}
              alt="customer review"
              className=" lg:w-[55%] "
            />
            <div className="lg:w-[45%] bg-accent text-black p-5 flex flex-col justify-between">
              <div className="w-[75%] mx-auto pt-6">
                <RiDoubleQuotesL className="" />
                <p className="ms-4">
                  <span className="font-bold">Card 2</span> You can't go wrong
                  with Chicken Mandi. The chicken was cooked perfectly, juicy &
                  soft (usually mandi chicken is a bit dry). I would defiantly
                  recommend it.
                </p>
              </div>
              <div className="p-4 ">
                <div className="flex justify-between items-center">
                  <div>
                    <div className="babas-font text-xl">another person</div>
                    <p>Jeddah, Saudi</p>
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

          {/* ----------------- button for carousel ----------------- */}
          <div className="absolute lg:top-2 lg:right-5   flex transform lg:justify-end -bottom-20 justify-evenly right-1/4 left-1/4 ">
            <a
              href="#slide1"
              className="btn btn-circle bg-gray-300 mr-2"
              onClick={handleRightClick}
            >
              <MdOutlineKeyboardArrowLeft
                className={`${rightArrowClicked && "text-primary"} text-3xl`}
              />
            </a>
            <a
              href="#slide3"
              className="btn btn-circle bg-gray-300"
              onClick={handleLeftClick}
            >
              <MdKeyboardArrowRight
                className={`${leftArrowClicked && "text-primary"} text-3xl`}
              />
            </a>
          </div>
        </div>

        {/* slide 3 */}
        <div id="slide3" className="carousel-item  w-full">
          {/* --------------------- card inside the carousel -------------- */}

          <div className="lg:w-full flex flex-col lg:flex-row-reverse rounded-sm">
            <img
              src={revImage}
              alt="customer review"
              className=" lg:w-[55%] "
            />
            <div className="lg:w-[45%] bg-accent text-black p-5 flex flex-col justify-between">
              <div className="w-[75%] mx-auto pt-6">
                <RiDoubleQuotesL className="" />
                <p className="ms-4">
                  <span className="font-bold">card 3</span> You can't go wrong
                  with Chicken Mandi. The chicken was cooked perfectly, juicy &
                  soft (usually mandi chicken is a bit dry). I would defiantly
                  recommend it.
                </p>
              </div>
              <div className="p-4 ">
                <div className="flex justify-between items-center">
                  <div>
                    <div className="babas-font text-xl">a different person</div>
                    <p>Jeddah, Saudi</p>
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

          {/* ----------------- button for carousel ----------------- */}
          <div className="absolute lg:top-2 lg:right-5   flex transform lg:justify-end -bottom-20 justify-evenly right-1/4 left-1/4 ">
            <a
              href="#slide2"
              className="btn btn-circle bg-gray-300 mr-2"
              onClick={handleRightClick}
            >
              <MdOutlineKeyboardArrowLeft
                className={`${rightArrowClicked && "text-primary"} text-3xl`}
              />
            </a>
            <a
              href="#slide1"
              className="btn btn-circle bg-gray-300"
              onClick={handleLeftClick}
            >
              <MdKeyboardArrowRight
                className={`${leftArrowClicked && "text-primary"} text-3xl`}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CustomerRev;
