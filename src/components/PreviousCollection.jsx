import React from "react";
import { useNavigate } from "react-router-dom";
import { CardData } from "./Data";

const PreviousCollection = () => {
  const navigate = useNavigate();
  return (
    <div className="max-w-6xl mx-auto">
      {/* Title */}
      <h2 className="text-2xl text-white font-bold py-10 mx-2 md:mx-0">
        Previous Collection
      </h2>

      {/* Cards */}
      <div className="grid justify-items-center grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10 ">
        {CardData.map((record) => {
          const handleShowCard = (id) => {
            navigate(`/about/${id}`);
          };
          return (
            <div
              onClick={() => handleShowCard(record.id)}
              className="w-64 h-96 bg-[#DEAF07] p-2 rounded hover:-translate-y-2 duration-300"
              key={record.id}
            >
              <img
                src={record.img}
                alt=""
                className=" h-60 w-full mx-auto rounded"
              />
              <h2 className="text-xl font-bold py-3 cursor-pointer">
                {record.title}
              </h2>
              <p className="leading-5">{record.details}</p>
            </div>
          );
        })}
      </div>

      {/* Button */}
      <div className="flex justify-center py-10">
        <button>Show more</button>
      </div>
    </div>
  );
};

export default PreviousCollection;
