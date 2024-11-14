import React, { useState } from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import CommonBtn from "../Components/CommonBtn";

export default function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const navItems = [
    { title: "Home", path: "/home" },
    { title: "About", path: "/about" },
    { title: "Portfolio", path: "/portfolio" },
    { title: "Clients", path: "/clients" },
    { title: "Blog", path: "/blog" },
    { title: "Contact", path: "/contact" },
  ];

  return (
    <div className="sm:w-full max-w-[1920px] bg-primary text-white p-2 sticky top-0 z-40">
      <div className="flex items-center justify-between w-full lg:hidden">
        <Link to="/" className="lg:hidden p-2">
          <img className="w-[160px]" src={logo} alt="restaurant" />
        </Link>
        {/* Dropdown menu for mobile screen */}
        <div className="dropdown">
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="btn btn-ghost lg:hidden"
            aria-label="Toggle navigation"
          >
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
          </button>
          {isDropdownOpen && (
            <ul className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[50] mt-3 w-52 p-2 shadow text-black right-0">
              {navItems.map((item, index) => (
                <li key={index}>
                  <Link to={item.path}>{item.title}</Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      {/* --------------- nav for large screens ------------ */}
      <div className="hidden lg:flex lg:flex-1 items-center justify-between w-full lg:w-auto">
        <div className="flex justify-between items-center">
          <Link to="/" className=" mr-14 p-2">
            <img className="w-[160px]" src={logo} alt="restaurant" />
          </Link>
          <ul className="menu menu-horizontal px-1">
            {navItems.map((item, index) => (
              <li key={index}>
                <Link to={item.path}>{item.title}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="ml-auto">
          <CommonBtn>Book A Table</CommonBtn>
        </div>
      </div>
    </div>
  );
}
