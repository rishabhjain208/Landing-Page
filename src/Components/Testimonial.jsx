import React from "react";
import img from "../../public/image/img23.png";
import img1 from "../../public/image/img25.png";

const Testimonial = () => {
  return (
    <div className="mt-28 mb-28">
    <div className="text-center">
      <h1 className="font-clash text-[18px] leading-[28px] tracking-tight md:tracking-wide h-[28px] font-semibold">
        TESTIMONIAL
      </h1>
      <h1 className="text-center mt-1 text-[28px] sm:text-[36px] md:text-[48px] leading-tight md:leading-[48px] font-bold w-full md:w-[455px] font-clash">
        What Our Users Say About Us?
      </h1>
    </div>
    <div className="flex flex-col lg:flex-row items-center mx-5 lg:mx-[175px] lg:mt-5">
      <img
        className="rounded-lg w-full lg:w-[400px] h-auto lg:h-[400px] mt-12 lg:mt-0"
        src={img}
        alt="Feature Image"
      />
      <div className="mt-5 lg:ml-10 text-center lg:text-left">
        <div className="flex items-center justify-center lg:justify-start">
          <p className="font-bold text-[24px] sm:text-[28px] leading-tight lg:leading-[28px] mt-14 w-full lg:w-[442px]">
            The Best Financial Accounting App Ever!
          </p>
        </div>
        <p className="text-gray-500 font-medium text-[16px] sm:text-[18px] leading-[28px] mt-6 mb-6 w-full lg:w-[638px]">
          Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris etiam odio. Duis tristique lacus, et blandit viverra nisl velit. Sed mattis rhoncus, diam suspendisse sit nunc, gravida eu. Lectus eget eget ac dolor neque lorem sapien, suspendisse aliquam.
        </p>
        <img src={img1} className="w-[205px] h-[70px] mt-4" alt="" />
        <p className="mt-4 font-clash font-semibold text-[16px] leading-[28px]">
          Nick Jonas
        </p>
      </div>
    </div>
  </div>
  

  );
};
// width: 97px;
// height: 28px;
// top: 3598.71px;
// left: 823px;
// gap: 0px;
// opacity: 0px;
// font-family: Clash Display;
// font-size: 18px;
// font-weight: 600;
// line-height: 28px;
// text-align: left;

export default Testimonial;
