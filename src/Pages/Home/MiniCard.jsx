import React from "react";
import { BsBoxSeam } from "react-icons/bs";
import { PiMedalDuotone } from "react-icons/pi";
import { FiShoppingBag } from "react-icons/fi";

export default function MiniCard() {
  const cardItems = [
    {
      title: "fast delivery",
      description: "Within 30 minutes",
      icon: BsBoxSeam,
    },
    {
      title: "absolute dining",
      description: "Best Buffet Restaurant",
      icon: PiMedalDuotone,
    },
    {
      title: "pickup delivery",
      description: "Grab your Food order",
      icon: FiShoppingBag,
    },
  ];

  return (
    <div>
      <div className="flex flex-col lg:flex-row justify-center lg:justify-evenly items-center">
        {cardItems.map((item, index) => (
          <div
            key={index}
            className="rounded-xl h-24 w-56 flex justify-center items-center"
          >
            <div className="flex items-center justify-start gap-3">
              <div className="w-16 h-16 rounded-full shadow-md flex justify-center items-center ">
                <item.icon className="text-3xl text-primary font-bold" />
              </div>
              <div>
                <div className="babas-font text-xl font-semibold">
                  {item.title}
                </div>
                <div className="text-sm text-gray-500">{item.description}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
