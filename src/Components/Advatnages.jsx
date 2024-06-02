import React from "react";
import img from "../../public/image/ss.png";
import { FaBell } from "react-icons/fa";

const Advantages = () => {
  return (
    <div className="flex flex-col-reverse lg:flex-row items-center lg:items-start mx-5 lg:mx-[175px]">
    <div className="flex-1 lg:mr-[40px] text-center lg:text-left">
      <h1 className="font-clash mt-12 lg:mt-28 text-red-500 text-[18px] font-semibold mb-[16px] leading-[28px]">
        Advantages
      </h1>
      <h1 className="text-[36px] lg:text-[48px] leading-[36px] lg:leading-[48px] font-bold mb-4 lg:mb-0">
        Why Choose Uifry?
      </h1>
  
      <div className="flex flex-col lg:flex-row items-center lg:items-start mt-5">
        <FaBell className="text-red-500 mr-2 mt-8 text-[24px]" />
        <p className="font-bold text-[24px] lg:text-[28px] leading-[28px] mt-7">
          Clever Notifications
        </p>
      </div>
      <p className="text-gray-500 font-medium w-full lg:w-[638px] text-[18px] leading-[28px] mt-6 mb-[24px]">
        Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris etiam odio. Duis tristique lacus, et blandit viverra nisl velit. Sed mattis rhoncus, diam suspendisse sit nunc, gravida eu. Lectus eget eget ac dolor neque lorem sapien, suspendisse aliquam.
      </p>
    </div>
    <div className="flex-1 lg:ml-6">
      <img
        className="rounded-sm w-full lg:w-[600px] mt-12 h-auto lg:h-[500px] mb-[24px]"
        src={img}
        alt="Feature Image"
      />
    </div>
  </div>
  

  );
};

export default Advantages;
