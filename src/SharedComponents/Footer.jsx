import React from "react";
import { FaRegClock } from "react-icons/fa";
import { FaPhoneVolume } from "react-icons/fa6";
import { FiMail } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import { IoLogoFacebook } from "react-icons/io5";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import footerImage from "../assets/footerImage.jpeg";

export default function Footer() {
  return (
    <div
      className=" text-white babas-font"
      style={{
        backgroundImage: `url(${footerImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="bg-black/50 ">
        <div className="w-[80%] mx-auto text-center max-w-[1920px]">
          <div className="text-4xl pt-20 pb-4 ">
            WE ARE READY TO GIVE YOU THE BEST DINING EXPERIENCE
          </div>
          <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 items-center justify-center">
            <div className=" text-center my-5 py-10">
              <FaRegClock className="text-3xl text-accent mx-auto my-3" />

              <p className="text-xl font-medium my-3">OPENING HOURS</p>
              <p className="font-thin text-sm">Monday-Sunday</p>
              <p className="font-thin text-sm">9:00 AM to 11:30 PM</p>
            </div>
            <div className=" text-center my-5 py-10">
              <FaPhoneVolume className="text-2xl text-accent mx-auto my-3" />

              <p className="text-xl font-medium my-3">LET'S TALK</p>
              <p className="font-thin text-sm">Monday-Sunday</p>
              <p className="font-thin text-sm">9:00 AM to 11:30 PM</p>
            </div>
            <div className=" text-center my-5 py-10">
              <FiMail className="text-3xl text-accent mx-auto my-3" />

              <p className="text-xl font-medium my-3">BOOK A TABLE</p>
              <p className="font-thin text-sm">Monday-Sunday</p>
              <p className="font-thin text-sm">9:00 AM to 11:30 PM</p>
            </div>
            <div className=" text-center my-5 py-10">
              <IoLocationOutline className="text-4xl text-accent mx-auto my-3 " />

              <p className="text-xl font-medium my-3">OUR ADDRESS</p>
              <p className="font-thin text-sm">Monday-Sunday</p>
              <p className="font-thin text-sm">9:00 AM to 11:30 PM</p>
            </div>
          </div>
          <div className="flex gap-3 justify-center items-center my-3">
            <div className="w-[50px] h-[50px] border border-white rounded-full flex justify-center items-center">
              <IoLogoFacebook className="text-2xl text-white" />
            </div>
            <div className="w-[50px] h-[50px] border border-white rounded-full flex justify-center items-center">
              <FaSquareXTwitter className="text-2xl text-white" />
            </div>
            <div className="w-[50px] h-[50px] border border-white rounded-full flex justify-center items-center">
              <FaInstagramSquare className="text-2xl text-white" />
            </div>
            <div className="w-[50px] h-[50px] border border-white rounded-full flex justify-center items-center">
              <FaLinkedin className="text-2xl text-white" />
            </div>
          </div>
          <div>
            <p>&copy; 2023 All Rights Reserved</p>
          </div>
        </div>
      </div>
    </div>
  );
}
