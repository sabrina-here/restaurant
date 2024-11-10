import React from "react";
import revImage from "../../assets/reviewImage.jpeg";
import { FaSquare } from "react-icons/fa";
import { RiDoubleQuotesL } from "react-icons/ri";

function CustomerRev() {
  return (
    <div>
      {/* --------------- section title and carousel button will be here(absolute) ------- */}
      <div className="my-3">
        <div className=" text-primary my-2 font-bold text-sm">
          <FaSquare className="inline text-xs m-1 mb-2" />
          Crispy, Every Bite Taste
        </div>
        <div className="babas-font text-4xl">WHAT SOME OF MY CUSTOMERS SAY</div>
      </div>

      <div className="carousel w-full">
        <div id="slide1" className="carousel-item relative w-full">
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
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CustomerRev;
