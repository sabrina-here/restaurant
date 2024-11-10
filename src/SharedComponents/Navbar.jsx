import React from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import CommonBtn from "../Components/CommonBtn";

export default function Navbar() {
  const navItems = [
    {
      title: "Home",
      path: "/home",
    },
    {
      title: "About",
      path: "/about",
    },
    {
      title: "Portfolio",
      path: "/portfolio",
    },
    {
      title: "Clients",
      path: "/clients",
    },
    {
      title: "Blog",
      path: "/blog",
    },
    {
      title: "Contact",
      path: "/contact",
    },
  ];

  return (
    <div className="flex lg:justify-between items-center bg-primary text-white p-2 sticky top-0 ">
      <div className="flex justify-evenly items-center">
        {/* ------- Dropdown menu for mobile screen ------------ */}
        <div className="dropdown flex-1 justify-end">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow text-black"
          >
            {navItems.map((item, index) => (
              <li key={index}>
                <Link>{item.title}</Link>
              </li>
            ))}
          </ul>
        </div>
        <a className="">
          <button>
            <img className="w-[160px] mr-14 p-2" src={logo} alt="restaurant" />
          </button>
        </a>
        <div className="hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {navItems.map((item, index) => (
              <li key={index}>
                <Link>{item.title}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className=" flex justify-end  items-center">
        <a className=" hidden lg:flex">
          <CommonBtn>Book A Table</CommonBtn>
        </a>
      </div>
    </div>
  );
}
