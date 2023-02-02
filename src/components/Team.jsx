import React from "react";

import { TeamData } from "./Data.jsx";

const Team = () => {
  return (
    <div className="container py-10 md:py-24">
      <h1 className="text-4xl sm:text-[70px] font-bold text-[#DEAF07] sm:leading-[80px] text-center">
        MEET OUR TEAM
      </h1>
      <p className="py-10 text-[#D9D9D9] sm:text-[20px] max-w-2xl text-center mx-auto">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam dolorum
        quia rerum totam ipsum inventore consequuntur corporis delectus, ratione
      </p>

      {/* Team card */}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 pt-10 place-items-center gap-5">
        {TeamData.map((item) => {
          return (
            <div
              key={item.id}
              className="bg-[#DEAF07] border border-[#DEAF07] h-[265px] w-[265px] p-2 rounded-xl bg-opacity-50 hover:-translate-y-2 duration-300"
            >
              <div>
                <img
                  src={item.img}
                  alt=""
                  className="h-[193px] w-[253px] mx-auto object-contain rounded-xl"
                />
              </div>
              <div>
                <h1 className="text-[#D9D9D9] font-bold text-[20px] text-center">
                  {item.name}
                </h1>
                <p className="text-[#D9D9D9] text-[14px] text-center">
                  {item.rank}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Team;
