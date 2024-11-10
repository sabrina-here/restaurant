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
    <div>
      <div className="hero  min-h-screen">
        <div className="hero-content flex-col lg:flex-row">
          {/* --------- left side image ---------------- */}
          <img src={homeAbout} className="max-w-sm rounded-sm shadow-2xl" />

          {/* ------------- Right side section ----------- */}
          <div>
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
            <div>
              {showContact ? (
                <div>
                  <div className="babas-font text-5xl my-4">contact</div>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Pariatur accusamus, quo illo sint eius tempore nostrum
                    beatae animi cum dignissimos numquam illum unde cumque
                    veritatis amet placeat ea similique obcaecati eligendi,
                    praesentium facere voluptates? Sequi repellendus facilis
                    eos, voluptatibus ad neque vel, hic, ex ipsam molestiae
                    doloribus est ut veritatis.
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
                    Pariatur accusamus, quo illo sint eius tempore nostrum
                    beatae animi cum dignissimos numquam illum unde cumque
                    veritatis amet placeat ea similique obcaecati eligendi,
                    praesentium facere voluptates? Sequi repellendus facilis
                    eos, voluptatibus ad neque vel, hic, ex ipsam molestiae
                    doloribus est ut veritatis.
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
                    Pariatur accusamus, quo illo sint eius tempore nostrum
                    beatae animi cum dignissimos numquam illum unde cumque
                    veritatis amet placeat ea similique obcaecati eligendi,
                    praesentium facere voluptates?
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
    </div>
  );
}
