import React from "react";
import Card from "../assets/card.gif";

const PreviousCollection = () => {
  return (
    <div className="max-w-6xl mx-auto">
      <h2 className="text-2xl text-white font-bold py-10">
        Previous Collection
      </h2>
      <div className="grid justify-items-center grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10 ">
        <div className="w-72 h-96 bg-[#DEAF07] p-2 rounded">
          <img src={Card} alt="" className=" h-60 w-full mx-auto rounded" />
          <h2 className="text-xl pt-4">Lorem Ipsum</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet
            consectetur.
          </p>
        </div>

        <div className="w-72 h-96 bg-[#DEAF07] p-2 rounded">
          <img src={Card} alt="" className=" h-60 w-full mx-auto rounded" />
          <h2 className="text-xl pt-4">Lorem Ipsum</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet
            consectetur.
          </p>
        </div>

        <div className="w-72 h-96 bg-[#DEAF07] p-2 rounded">
          <img src={Card} alt="" className=" h-60 w-full mx-auto rounded" />
          <h2 className="text-xl pt-4">Lorem Ipsum</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet
            consectetur.
          </p>
        </div>

        <div className="w-72 h-96 bg-[#DEAF07] p-2 rounded">
          <img src={Card} alt="" className=" h-60 w-full mx-auto rounded" />
          <h2 className="text-xl pt-4">Lorem Ipsum</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet
            consectetur.
          </p>
        </div>
      </div>

      <div className="flex justify-center py-10">
        <button>Show more</button>
      </div>
    </div>
  );
};

export default PreviousCollection;
