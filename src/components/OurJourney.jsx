import React from "react";
import AboutImg from "../assets/hero.gif";

const OurJourney = () => {
  return (
    <div className="container flex py-24 md:flex-row flex-col-reverse items-center">
      <div className="lg:max-w-lg lg:w-full md:w-1/2 mx-2 md:mx-0">
        <img
          src={AboutImg}
          alt=""
          className="border border-[#DEAF07] rounded-lg object-cover w-[505px] h-[288px] mx-auto "
        />
      </div>
      <div className="lg:flex-grow md:w-1/2 md:pl-10 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center pt-5 sm:pt-0">
        <h1 className="text-4xl sm:text-[70px] font-bold text-[#DEAF07] sm:leading-[80px]">
          OUR JOURNEY
        </h1>
        <p className="py-10 text-[#D9D9D9] sm:text-[20px]">
          find all the lotto winning numbers and see if you won the latest lotto
          jackpots. find all the lotto winning numbers and see if you won the
          latest lotto jackpots
        </p>
        <button className="bg-transparent text-[#DEAF07] rounded border-t-[#DEAF07] border-l-transparent border-r-transparent  border-b-[#DEAF07]    hover:text-[#D9D9D9]">
          See More
        </button>
      </div>
    </div>
  );
};

export default OurJourney;
