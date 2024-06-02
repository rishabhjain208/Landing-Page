import React from "react";
import Button from "./Button";
import img from "../../public/image/img28.png";
import { FaApple } from "react-icons/fa";

const Ready = () => {
  return (
    <div className="bg-black w-full lg:w-[1090px] mx-auto h-auto lg:h-[508px] mt-[120px] rounded-xl flex flex-col lg:flex-row items-center p-5 lg:p-0">
      <div className="flex-1 lg:mr-auto text-center lg:text-left">
        <h1 className="text-3xl text-white lg:ml-[100px] md:text-5xl font-extrabold mt-8 lg:mt-0">
          Ready To Get Started?
        </h1>
        <p className="text-white lg:w-[500px] text-[20px] font-extralight leading-[32px] mt-4 lg:ml-[100px]">
          Risus habitant leo egestas mauris diam eget morbi tempus vulputate.
        </p>
        <div className="mt-8 lg:ml-[100px] flex justify-center lg:justify-start">
          <Button
            button={
              <>
                Download <FaApple className="ml-2" />
              </>
            }
            className="bg-white rounded-md text-black border-2 border-black flex items-center"
          />
        </div>
      </div>
      <div className="flex-1 mt-8 lg:mt-0">
        <img
          src={img}
          className="w-full lg:w-auto lg:ml-auto rounded-xl"
          alt="Feature Image"
        />
      </div>
    </div>
  );
};

export default Ready;
