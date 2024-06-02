import React from "react";
import img from "../../public/image/ss1.png";
import { GiBarbedStar } from "react-icons/gi";
import { PiCubeTransparent } from "react-icons/pi";
import { IoPeopleCircleOutline } from "react-icons/io5";
import img1 from "../../public/image/img26.png";

const Features = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center lg:items-start mx-5 lg:mx-[175px] lg:mr-5">
      <div className="lg:mr-[40px]">
        <img
          className="rounded-sm w-full lg:w-[600px] mt-12 h-auto lg:h-[580px] mb-[24px]"
          src={img}
          alt="Feature Image"
        />
      </div>
      <div className="flex-1 text-center lg:text-left">
        <h1 className="font-clash mt-12 lg:mt-32 text-red-500 text-[18px] font-semibold mb-[16px] leading-[28px]">
          Features
        </h1>
        <h1 className="text-[36px] lg:text-[48px] leading-[36px] lg:leading-[48px] font-bold mb-4 lg:mb-0">
          Uifry Premium
        </h1>

        <div className="flex flex-col items-center lg:items-start lg:flex-row mt-5">
          <GiBarbedStar className="text-red-500 mr-2 text-[24px]" />
          <p className="font-semibold text-[18px] leading-[28px]">
            Budgeting Intervals
          </p>
        </div>
        <p className="text-gray-500 font-medium w-full lg:w-[638px] text-[18px] leading-[28px] mb-[24px]">
          Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet
          faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.
        </p>

        <div className="flex flex-col items-center lg:items-start lg:flex-row mt-5">
          <IoPeopleCircleOutline className="text-red-500 text-[24px] mr-2" />
          <p className="font-semibold text-[18px] leading-[28px]">
            Budgeting Intervals
          </p>
        </div>
        <p className="text-gray-500 font-medium w-full lg:w-[638px] text-[18px] leading-[28px] mb-[24px]">
          Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet
          faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.
        </p>

        <div className="flex flex-col items-center lg:items-start lg:flex-row mt-5">
          <PiCubeTransparent className="text-red-500 mr-2 text-[24px]" />
          <p className="font-semibold text-[18px] leading-[28px]">
            Budgeting Intervals
          </p>
        </div>
        <p className="text-gray-500 font-medium w-full lg:w-[638px] text-[18px] leading-[28px] mb-[24px]">
          Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet
          faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.
        </p>
      </div>
      <img
        src={img1}
        className="w-[48px] lg:w-[64px] h-[48px] lg:h-[64px] mt-6 lg:mt-0 lg:text-center"
        alt="star"
      />
    </div>
  );
};

export default Features;
