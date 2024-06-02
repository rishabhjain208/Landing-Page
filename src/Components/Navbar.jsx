import React, { useState } from "react";
import { FaFireFlameCurved } from "react-icons/fa6";
import img1 from "../../public/image/img26.png";
import Button from "./Button";
import { IoMenu } from "react-icons/io5";

const nav = [
  { text: "Home" },
  { text: "About us" },
  { text: "Pricing" },
  { text: "Features" },
];

const Navbar = () => {
  // State to manage the menu open/close state
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="container mx-auto mt-[40px] overflow-x-hidden overflow-y-hidden">
      <nav className="w-full h-auto flex items-center justify-between ml-[175px]">
        {/* Desktop Navigation Menu */}
        <ul className="hidden md:flex items-center gap-8 font-clash">
          <li className="flex text-2xl items-center gap-2">
            <FaFireFlameCurved className="text-[#FF0000]" />
            <div className="text-black font-extrabold cursor-pointer">
              uifry
            </div>
          </li>
          {nav.map((navs, index) => (
            <li
              className={`font-[700] leading-[26px] cursor-pointer hover:text-red-500 ${
                navs.text === "Home" ? "text-red-500" : "text-black"
              }`}
              key={index}
            >
              {navs.text}
            </li>
          ))}
        </ul>
        {/* Desktop Download Button */}
        <div className="hidden md:flex mr-[215px]">
          <Button
            button="Download"
            className="bg-black rounded-md w-[150px] text-white hover:bg-white hover:text-black border-2 border-black"
          />
        </div>
        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <FaFireFlameCurved className="text-[#FF0000] mr-2" />
          <div className="text-black  font-extrabold text-lg cursor-pointer">
            uifry
          </div>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="ml-4 focus:outline-none"
          >
            <IoMenu className="text-2xl" />
          </button>
        </div>
      </nav>
      {/* Conditional Rendering of Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-lg rounded-lg p-4 mt-2 ml-[175px]">
          <ul className="flex flex-col gap-4 font-clash">
            {nav.map((navs, index) => (
              <li
                className={`font-[700] leading-[26px] cursor-pointer hover:text-red-500 ${
                  navs.text === "Home" ? "text-red-500" : "text-black"
                }`}
                key={index}
              >
                {navs.text}
              </li>
            ))}
            <li>
              <Button
                button="Download"
                className="bg-black rounded-md w-full text-white hover:bg-white hover:text-black border-2 border-black"
              />
            </li>
          </ul>
        </div>
      )}
      <img
        src={img1}
        className="w-[64px] h-[64px] text-center mt-4"
        alt="star"
      />
    </div>
  );
};

export default Navbar;
