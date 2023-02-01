import React from "react";
import { CardData } from "./Data";
import AboutGif from "../assets/about-gif.gif";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();
  return (
    <div className="text-white container pb-16">
      {/* image div */}

      <div className="pt-[114px] pb-[80px]">
        <img
          src={AboutGif}
          alt=""
          className="object-fit h-80 md:h-[562px] w-[1234px] border border-[#FCC607] p-3"
        />
      </div>

      {/* Previous collection */}

      {/* Title */}
      <h2 className="text-[32px] text-white font-normal pb-[34px] pl-4">
        Previous Collection
      </h2>

      {/* Previous collection Card*/}

      <div className="grid justify-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-[89px] gap-y-[87px] ">
        {CardData.map((record) => {
          const handleShowCard = (id) => {
            navigate(`/about/${id}`);
          };
          return (
            <div
              onClick={() => handleShowCard(record.id)}
              className="max-w-[350px] h-[450px] bg-[#DEAF07] p-[13px] rounded hover:-translate-y-2 duration-300"
              key={record.id}
            >
              <img
                src={record.img}
                alt=""
                className="h-[325px] w-[325px] mx-auto rounded"
              />
              <h2 className="text-[24px] font-base pt-[19px] cursor-pointer px-1">
                {record.title}
              </h2>
              <p className="text-[13px] font-base px-1  h-10 overflow-hidden">
                {record.details}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default About;
