import React from "react";

const Footer = () => {
  return (
    <div className="bg-black h-[500px] w-full">
      <div className="flex flex-col justify-center items-center h-full md:px-0 text-center">
        <h1 className="text-2xl md:text-[40px] font-bold text-[#D0DAF5]">
          ABC Company. We’re here
        </h1>
        <p className="text-[14px] text-[#FFFFFF] pt-4 md:pt-[20px]">
          Hello, we are ABC. trying to make an effort to put the right people
          for you to get the best results. Just insight
        </p>
        <div className="flex gap-20 pt-[46px] cursor-pointer text-[#FFFFFF] text-[14px]">
          <span className="hover:text-[#DEAF07]">Terms of Services</span>
          <span className="hover:text-[#DEAF07]">Privacy Policy</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
