import React from "react";

const InfoCard = () => {
  return (
    <div className="flex justify-center items-center my-10">
      <div className="relative flex items-center justify-between w-[600px] h-[200px]">
        {/* Black Section */}
        <div className="absolute left-0 transform rotate-[20deg] -translate-x-32 -translate-y-12">
          <div className="bg-black text-white p-4 w-[534.32px] h-[71px]">
            <h2 className="font-bold">Achievements</h2>
            <p>Best Finance App On Playstore</p>
            <p className="mt-2 font-bold">Finance</p>
            <p>Most Popular Accounting App</p>
          </div>
        </div>

        {/* Red Section */}
        <div className="absolute right-0 transform rotate-[20deg] translate-x-32 translate-y-12">
          <div className="bg-red-500 text-white p-4 w-[300px] h-[150px]">
            <h2 className="font-bold">Uifry Premium</h2>
            <p>Free Trial</p>
          </div>
        </div>

        {/* Text Section */}
        <div className="absolute transform rotate-[-20deg]">
          <div className="text-black p-4">
            <h2 className="font-bold">Make The Best Financial Decisions</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
