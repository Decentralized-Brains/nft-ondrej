import React from "react";
import ProfilePic from "../assets/propic.jpg";

const InfoTableOne = () => {
  return (
    <div className="my-16">
      <button className="text-base px-4 md:px-[40px] py-2 md:py-[10px] bg-[#FCC607] rounded mb-10">
        Top 10
      </button>
      <div className=" overflow-x-auto sm:rounded-lg border border-[#FCC607]">
        <table className="w-full text-sm md:text-base  text-[#D9D9D9] text-center">
          <thead className="text-xs md:text-base uppercase text-[#FCC607] border-b border-gray-600">
            <tr>
              <th scope="col" className="px-6 py-3">
                Username
              </th>
              <th scope="col" className="px-4 py-3">
                NFT(Bought)
              </th>
              <th scope="col" className="px-4 py-3">
                Spent
              </th>
              <th scope="col" className="px-4 py-3">
                Wallet Address
              </th>
              <th scope="col" className="px-4 py-3">
                Top 10(This Month)
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="hover:bg-yellow-100 hover:bg-opacity-10">
              <td className="px-6 py-3 font-medium  ">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10">
                    <img
                      src={ProfilePic}
                      alt="user"
                      className="w-10 h-10 rounded-full object-cover"
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <span>Kelvin Phillips</span>
                    <span className="text-gray-400">@kelvin_phillp12</span>
                  </div>
                </div>
              </td>
              <td className="px-4 py-3">6</td>
              <td className="px-4 py-3">0.0025 ETH</td>
              <td className="px-4 py-3">#asdjb239594549</td>
              <td className="px-4 py-3">8</td>
            </tr>
            <tr className="hover:bg-yellow-100 hover:bg-opacity-10">
              <td className="px-6 py-3 font-medium  ">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10">
                    <img
                      src={ProfilePic}
                      alt="user"
                      className="w-10 h-10 rounded-full object-cover"
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <span>Kelvin Phillips</span>
                    <span className="text-gray-400">@kelvin_phillp12</span>
                  </div>
                </div>
              </td>
              <td className="px-4 py-3">6</td>
              <td className="px-4 py-3">0.0025 ETH</td>
              <td className="px-4 py-3">#asdjb239594549</td>
              <td className="px-4 py-3">8</td>
            </tr>
            <tr className="hover:bg-yellow-100 hover:bg-opacity-10">
              <td className="px-6 py-3 font-medium  ">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10">
                    <img
                      src={ProfilePic}
                      alt="user"
                      className="w-10 h-10 rounded-full object-cover"
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <span>Kelvin Phillips</span>
                    <span className="text-gray-400">@kelvin_phillp12</span>
                  </div>
                </div>
              </td>
              <td className="px-4 py-3">6</td>
              <td className="px-4 py-3">0.0025 ETH</td>
              <td className="px-4 py-3">#asdjb239594549</td>
              <td className="px-4 py-3">8</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default InfoTableOne;
