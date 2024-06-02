import React from "react";
import Button from "./Button";
import { BsArrowRight } from "react-icons/bs";
import { BsPlayCircle } from "react-icons/bs";
import img from "../../public/image/img27.png";
import img1 from "../../public/image/img24.png";

const Home = () => {
  return (
    <div className="flex flex-col md:flex-row items-center md:items-start">
      <div className="ml-[20px] md:ml-[175px] mt-[20px] md:mt-[40px] flex-1">
        <h1
          className="text-[32px] md:text-[64px] font-extrabold lg:text-left w-[350px] lg:w-[614px] md:w-[40px] leading-[36px] md:leading-[64px] ml-20 lg:ml-0 back"
          style={{ backgroundImage: "url('img29.png')" }}
        >
          Make The Best Financial Decisions
        </h1>
        <p className="text-gray-500 mt-[12px] md:mt-[24px] font-medium ml-20 lg:ml-0 w-[90%] md:w-[638px] text-[16px] md:text-[18px]">
          Cum Et Convallis Risus Placeraet Aliquam, Nunc. Scelerisque Aliquet
          Faucibus Tincidunt Eu Adipiscing Sociis Arcu Lorem Porttitor.
        </p>
        {/* className="bg-black rounded-md w-[150px] text-white hover:bg-white hover:text-black border-2 border-black" */}
        <div className="flex flex-col md:flex-row items-center mt-8 space-y-4 md:space-y-0 md:space-x-8">
          <div className="flex flex-col items-center">
            <Button
              button={
                <>
                  Get Started <BsArrowRight className="ml-2" />
                </>
              }
              className="rounded-md bg-black text-white border-2 border-black flex items-center"
            />
          </div>
          <div className="flex flex-col items-center">
            <Button
              button={
                <>
                  Watch Now <BsPlayCircle className="ml-2" />
                </>
              }
              className="rounded-md  text-black border-2 border-black flex items-center"
            />
          </div>
        </div>

        {/* Black Section */}
        <img className="w-[500] h-[500] mr-24" src={img1} alt="" />
      </div>

      <div className="mr-[20px] md:mr-[175px] mt-[20px] md:mt-[40px]">
        <img
          className="ml-0 md:ml-24 w-[90%] md:w-[600px] h-[auto] md:h-[600px] rounded-lg"
          src={img}
          alt="Financial Decisions"
        />
      </div>
    </div>
  );
};

export default Home;
