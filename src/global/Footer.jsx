import React from "react";

const Footer = () => {
  return (
    <div className="bg-black h-96 w-full">
      <div className="flex flex-col justify-center items-center h-full text-white gap-y-5 px-2 md:px-0 text-center">
        <h1 className="text-2xl md:text-4xl font-bold">
          ABC Company. We’re here
        </h1>
        <p>
          Hello, we are ABC. trying to make an effort to put the right people
          for you to get the best results. Just insight
        </p>
        <div className="flex gap-5 pt-5 cursor-pointer">
          <span className="hover:text-[#DEAF07]">Terms of Services</span>
          <span className="hover:text-[#DEAF07]">Privacy Policy</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
