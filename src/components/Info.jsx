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
                className="w-[15rem] h-96 bg-[#DEAF07] p-2 rounded"
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
        <div className="col-span-2 min-w-full border rounded border-[#DEAF07]">
          <table class="min-w-full divide-y divide-[#DEAF07] ">
            <thead>
              <tr>
                <th
                  scope="col"
                  class="px-6 py-3 text-left font-medium text-gray-500 uppercase"
                >
                  Name
                </th>
                <th
                  scope="col"
                  class="px-6 py-3 text-left font-medium text-gray-500 uppercase"
                >
                  Age
                </th>
                <th
                  scope="col"
                  class="px-6 py-3 text-left font-medium text-gray-500 uppercase"
                >
                  Address
                </th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-200 dark:divide-gray-700">
              <tr>
                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">
                  John Brown
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
                  45
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
                  New York No. 1 Lake Park
                </td>
              </tr>

              <tr>
                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">
                  Jim Green
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
                  27
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
                  London No. 1 Lake Park
                </td>
              </tr>

              <tr>
                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">
                  Joe Black
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
                  31
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
                  Sidney No. 1 Lake Park
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* This is card */}
        <div className="hidden lg:grid grid-cols-1 gap-2">
          {DumyCard.map((record) => {
            return (
              <div
                className="w-[15rem] h-96 bg-[#DEAF07] p-2 rounded"
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
