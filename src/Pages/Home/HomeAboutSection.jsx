import React, { useState } from "react";
import homeAbout from "../../assets/homeAbout.jpeg";
import CommonBtn from "../../Components/CommonBtn";
import { LuPhoneCall } from "react-icons/lu";

export default function HomeAboutSection() {
  const [showAbout, setShowAbout] = useState(true);
  const [showExperience, setShowExperience] = useState(false);
  const [showContact, setShowContact] = useState(false);

  const toggleAbout = () => {
    setShowAbout(true);
    setShowExperience(false);
    setShowContact(false);
  };
  const toggleExperience = () => {
    setShowExperience(true);
    setShowAbout(false);
    setShowContact(false);
  };

  const toggleContact = () => {
    setShowContact(true);
    setShowExperience(false);
    setShowAbout(false);
  };

  return (
    <div className="max-h-screen max-w-[1920px] mb-56 lg:mb-0">
      <div className="flex flex-col lg:flex-row lg:gap-6 ">
        {/* --------- left side image ---------------- */}
        <div className="w-full lg:w-1/2 bg-yellow-300">
          <img src={homeAbout} className=" w-full rounded-sm shadow-2xl" />
        </div>

        {/* ------------- Right side section ----------- */}
        <div className="w-full lg:w-1/2">
          {/* ---------- toggle buttons on top ------------ */}
          <div className="flex justify-start gap-1 items-baseline">
            <button
              className={`${
                showAbout && "bg-primary text-white"
              } px-4 py-1 rounded-sm font-thin`}
              onClick={toggleAbout}
            >
              About
            </button>
            <button
              className={`${
                showExperience && "bg-primary text-white"
              } px-4 py-1 rounded-sm font-thin`}
              onClick={toggleExperience}
            >
              Experience
            </button>
            <button
              className={`${
                showContact && "bg-primary text-white"
              } px-4 py-1 rounded-sm font-thin`}
              onClick={toggleContact}
            >
              Contact
            </button>
          </div>
          <hr className="border border-primary" />

          {/* ------------ inside component changeable with above button ----------- */}
          <div className="block">
            {showContact ? (
              <div>
                <div className="babas-font text-5xl my-4">contact</div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Pariatur accusamus, quo illo sint eius tempore nostrum beatae
                  animi cum dignissimos numquam illum unde cumque veritatis amet
                  placeat ea similique obcaecati eligendi, praesentium facere
                  voluptates? Sequi repellendus facilis eos, voluptatibus ad
                  neque vel, hic, ex ipsam molestiae doloribus est ut veritatis.
                </p>
                <div className="flex justify-start items-center gap-6 my-2">
                  <CommonBtn>About More</CommonBtn>
                  <div>
                    <a href="tel:+88123432231" className="flex gap-2">
                      {" "}
                      <LuPhoneCall className="text-primary text-xl" />
                      <p>+88 123 432 231</p>
                    </a>
                  </div>
                </div>
              </div>
            ) : showExperience ? (
              <div>
                <div className="babas-font text-5xl my-4">experience</div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Pariatur accusamus, quo illo sint eius tempore nostrum beatae
                  animi cum dignissimos numquam illum unde cumque veritatis amet
                  placeat ea similique obcaecati eligendi, praesentium facere
                  voluptates? Sequi repellendus facilis eos, voluptatibus ad
                  neque vel, hic, ex ipsam molestiae doloribus est ut veritatis.
                </p>
                <div className="flex justify-start items-center gap-6 my-2">
                  <CommonBtn>About More</CommonBtn>
                  <div>
                    <a href="tel:+88123432231" className="flex gap-2">
                      {" "}
                      <LuPhoneCall className="text-primary text-xl" />
                      <p>+88 123 432 231</p>
                    </a>
                  </div>
                </div>
              </div>
            ) : (
              <div>
                <div className="babas-font text-5xl my-4">
                  EXCEPTIONAL CULINARY EXPERIENCE AND DELICIOUS FOOD
                </div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Pariatur accusamus, quo illo sint eius tempore nostrum beatae
                  animi cum dignissimos numquam illum unde cumque veritatis amet
                  placeat ea similique obcaecati eligendi, praesentium facere
                  voluptates?
                </p>
                <div className="flex justify-start items-center gap-6 my-2">
                  <CommonBtn>About More</CommonBtn>
                  <div>
                    <a href="tel:+88123432231" className="flex gap-2">
                      {" "}
                      <LuPhoneCall className="text-primary text-xl" />
                      <p>+88 123 432 231</p>
                    </a>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
