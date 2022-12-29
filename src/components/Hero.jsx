import React from "react";
import HeroImg from "../assets/hero.gif";

const Hero = () => {
  return (
    <div className="py-10 mx-2 md:mx-0">
      <img
        src={HeroImg}
        alt=""
        className="object-fit h-80 md:h-3/6 w-full md:max-w-6xl mx-auto border border-[#FCC607] p-2"
      />

      <div className="max-w-6xl mx-auto pt-10 ">
        <span className="text-4xl font-bold text-[#FCC607]">Lorem Ipsum</span>
        <p className="text-[#D9D9D9]">
          Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet
          consectetur.Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor
          sit amet consectetur.
        </p>
      </div>
    </div>
  );
};

export default Hero;
