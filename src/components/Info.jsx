import React from "react";
import { DumyCard } from "./Data";

const Info = () => {
  return (
    <div className="max-w-6xl mx-auto my-10">
      <div className="flex justify-center my-16">
        <button className="bg-[#DEAF07] text-base md:text-lg">
          Enter To Competition
        </button>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-4 justify-items-center ">
        {/* This is card */}
        <div className="hidden lg:grid grid-cols-1 gap-2 ">
          {DumyCard.map((record) => {
            return (
              <div
                className="w-64 h-96 bg-[#DEAF07] p-2 rounded"
                key={record.id}
              >
                <img
                  src={record.img}
                  alt=""
                  className=" h-60 w-full mx-auto rounded"
                />
                <h2 className="text-xl font-bold py-3">{record.title}</h2>
                <p className="leading-5">{record.details}</p>
              </div>
            );
          })}
        </div>

        {/* This is table */}
        <div className="col-span-2 min-w-full ">
          <table className="min-w-full rounded ">
            <thead className="bg-[#DEAF07] text-white ">
              <tr>
                <th className="w-1/3 text-left py-3 px-4 uppercase font-semibold text-sm">
                  Name
                </th>
                <th className="w-1/3 text-left py-3 px-4 uppercase font-semibold text-sm">
                  Last name
                </th>
                <th className="text-left py-3 px-4 uppercase font-semibold text-sm">
                  Phone
                </th>
              </tr>
            </thead>
            <tbody className="text-white ">
              <tr className="boder border-b border-[#DEAF07]">
                <td className="w-1/3 text-left py-3 px-4">Lian</td>
                <td className="w-1/3 text-left py-3 px-4">Smith</td>
                <td className="text-left py-3 px-4">Lorem ipsum</td>
              </tr>
              <tr className="boder border-b border-[#DEAF07]">
                <td className="w-1/3 text-left py-3 px-4">Emma</td>
                <td className="w-1/3 text-left py-3 px-4">Johnson</td>
                <td className="text-left py-3 px-4">Lorem ipsum</td>
              </tr>
              <tr className="boder border-b border-[#DEAF07]">
                <td className="w-1/3 text-left py-3 px-4">Oliver</td>
                <td className="w-1/3 text-left py-3 px-4">Williams</td>
                <td className="text-left py-3 px-4">Lorem ipsum</td>
              </tr>
              <tr className="boder border-b border-[#DEAF07]">
                <td className="w-1/3 text-left py-3 px-4">Isabella</td>
                <td className="w-1/3 text-left py-3 px-4">Brown</td>
                <td className="text-left py-3 px-4">Lorem ipsum</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* This is card */}
        <div className="hidden lg:grid grid-cols-1 gap-2">
          {DumyCard.map((record) => {
            return (
              <div
                className="w-64 h-96 bg-[#DEAF07] p-2 rounded"
                key={record.id}
              >
                <img
                  src={record.img}
                  alt=""
                  className=" h-60 w-full mx-auto rounded"
                />
                <h2 className="text-xl font-bold py-3">{record.title}</h2>
                <p className="leading-5">{record.details}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Info;
