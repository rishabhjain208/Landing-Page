import React from "react";
import { FaFireFlameCurved } from "react-icons/fa6";
import { IoMdCall } from "react-icons/io";
import { AiFillDownSquare } from "react-icons/ai";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className="items-center m-auto">
      <div className="mt-64">
        <div className="flex flex-col lg:flex-row justify-between mx-5 md:mx-20">
          <div className="flex mb-10 lg:mb-0">
            <ul>
              <li className="flex gap-2 text-2xl  font-extrabold  md:text-4xl mb-6">
                <span className="flex">
                  <FaFireFlameCurved className="text-[#FF0000]" />{" "}
                </span>
                <span className="flex font-clash font-extrabold"> urify</span>
              </li>
              <li className="flex gap-2 mb-6">
                <span className="flex">
                  <AiFillDownSquare className="text-[#FF0000] mt-1" />{" "}
                </span>
                <span className="flex cursor-pointer"> Help@Frybix.Com</span>
              </li>
              <li className="flex gap-2 mb-6">
                <span className="flex">
                  <IoMdCall className="text-[#FF0000] mt-1" />{" "}
                </span>
                <span className="flex cursor-pointer hover:text-red-500">
                  {" "}
                  +1234 456 678 89
                </span>
              </li>
            </ul>
          </div>
          <div className="flex mb-10 lg:mb-0">
            <ul>
              <li className="text-2xl md:text-4xl font-medium mb-6">Links</li>
              <li className="mb-6 text-base hover:text-red-500 cursor-pointer">
                Home
              </li>
              <li className="mb-6 text-base hover:text-red-500 cursor-pointer">
                About Us
              </li>
              <li className="mb-6 text-base hover:text-red-500 cursor-pointer">
                Bookings
              </li>
              <li className="mb-6 text-base hover:text-red-500 cursor-pointer">
                Blog
              </li>
            </ul>
          </div>
          <div className="flex mb-10 lg:mb-0">
            <ul>
              <li className="text-2xl md:text-4xl font-medium mb-6">Legal</li>
              <li className="mb-6 text-base hover:text-red-500 cursor-pointer">
                Term of Use
              </li>
              <li className="mb-6 text-base hover:text-red-500 cursor-pointer">
                Privacy Policy
              </li>
              <li className="mb-6 text-base hover:text-red-500 cursor-pointer">
                Cookie Policy
              </li>
            </ul>
          </div>
          <div className="flex mb-10 lg:mb-0">
            <ul>
              <li className="text-2xl md:text-4xl font-medium mb-6">Product</li>
              <li className="mb-6 text-base hover:text-red-500 cursor-pointer">
                Take Tour
              </li>
              <li className="mb-6 text-base hover:text-red-500 cursor-pointer">
                Live Chat
              </li>
              <li className="mb-6 text-base hover:text-red-500 cursor-pointer">
                Reviews
              </li>
            </ul>
          </div>
          <div className="flex">
            <ul>
              <li className="text-2xl md:text-4xl font-medium mb-6">
                Newsletter
              </li>
              <li className="mb-6 text-base hover:text-red-500 cursor-pointer">
                Stay Up To Date
              </li>
              <li className="mb-6 text-xs flex">
                <input
                  type="text"
                  className="shadow-sm p-2 w-full"
                  placeholder="Your email"
                />
                <button className="shadow-sm h-10 w-24 bg-black items-center justify-center text-white">
                  Subscribe
                </button>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t-2 border-gray-300 flex mt-20 justify-center"></div>
        <div className="flex justify-center items-center h-24">
          <div className="text-gray-600 text-xs font-medium">
            Copyright @ {year} developed by Rishabh Jain. All Rights Reserved.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
