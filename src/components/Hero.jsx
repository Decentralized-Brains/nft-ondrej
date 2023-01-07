import React from "react";
import HeroImg from "../assets/hero.gif";

const Hero = () => {
  return (
    <div className="mt-10 md:mt-[120px] mb-[86px] container">
      <img
        src={HeroImg}
        alt=""
        className="object-fit h-80 md:h-[562px] w-[1234px] border border-[#FCC607] p-3"
      />

      <div className="pt-[31px] ">
        <span className="text-[40px] font-bold text-[#FCC607]">
          Lorem Ipsum
        </span>
        <p className="text-[#D9D9D9] pt-[13px] text-[20px] font-normal leading-2">
          Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet
          consectetur.Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor
          sit amet consectetur.
        </p>
      </div>
    </div>
  );
};

export default Hero;
