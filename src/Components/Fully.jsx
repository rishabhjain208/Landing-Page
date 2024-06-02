import React from "react";
import img from "../../public/image/img22.png";
import { GiNorthStarShuriken } from "react-icons/gi";

const Fully = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center lg:items-start mx-5 lg:mx-[175px] lg:mt-5">
      <img
        className="rounded-sm w-full lg:w-[600px] h-auto lg:h-[580px] mt-12"
        src={img}
        alt="Feature Image"
      />

      <div className="lg:ml-10 mt-10 lg:mt-0 text-center lg:text-left">
        <div className="flex items-center justify-center lg:justify-start">
          <GiNorthStarShuriken className="text-red-500 text-[25px] font-bold mr-2" />
          <p className="font-bold text-[24px] lg:text-[28px] leading-[28px]">
            Fully Customizable
          </p>
        </div>
        <p className="text-gray-500 font-medium lg:w-[638px] text-[18px] leading-[28px] mt-6 mb-[24px]">
          Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies.
          In ultrices malesuada elit mauris etiam odio. Duis tristique lacus, et
          blandit viverra nisl velit. Sed mattis rhoncus, diam suspendisse sit
          nunc, gravida eu. Lectus eget eget ac dolor neque lorem sapien,
          suspendisse aliquam.
        </p>
      </div>
    </div>
  );
};

export default Fully;
