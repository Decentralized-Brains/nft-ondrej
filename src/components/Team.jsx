import React from "react";

import { TeamData } from "./Data.jsx";

const Team = () => {
  return (
    <div className="container">
      <h1 className="text-4xl sm:text-6xl md:text-[100px] text-[#DEAF07] sm:leading-[80px] text-center font-wanted">
        TEAM MEMBERS
      </h1>

      {/* Team card */}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 pt-10 place-items-center gap-10">
        {TeamData.map((item) => {
          return (
            <div
              key={item.id}
              className=" h-[300px] w-[300px] p-2  bg-opacity-50 hover:-translate-y-2 duration-300"
            >
              <div>
                <img
                  src={item.img}
                  alt=""
                  className="h-[250px] w-[300px] mx-auto object-fill border-2 border-[#DEAF07]"
                />
              </div>
              <div>
                <h1 className="text-[#DEAF07]  text-[20px] text-center">
                  {item.name}
                </h1>
                <p className="text-[#D9D9D9]  text-[20px] text-center">
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
