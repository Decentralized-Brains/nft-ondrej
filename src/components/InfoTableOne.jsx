import React from "react";
import ProfilePic from "../assets/propic.jpg";

const InfoTableOne = () => {
  return (
    <div className="my-16">
      <div className=" overflow-x-auto sm:rounded-lg border border-[#FCC607]">
        <table className="w-full text-sm md:text-base  text-[#D9D9D9] text-center">
          <thead className="text-xs md:text-base text-[#FCC607] border-b border-gray-600">
            <tr>
              <th scope="col" className="px-6 py-3">
                Collector
              </th>
              <th scope="col" className="px-4 py-3">
                Wallet Address
              </th>
              <th scope="col" className="px-4 py-3">
                NFTs Bought this month
              </th>
              <th scope="col" className="px-4 py-3">
                Spent this month
              </th>
              <th scope="col" className="px-4 py-3">
                Payout to be Recived
              </th>
              <th scope="col" className="px-4 py-3">
                Previously in Top 10
              </th>
              <th scope="col" className="px-4 py-3">
                Total Recived
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
              <td className="px-4 py-3 cursor-pointer truncate max-w-xs">
                <a
                  target="_blank"
                  href="https://testnet.bscscan.com/token/0x86B641E9563544f941A3c9a94AD8f66b62febC98#readContract"
                  rel="noreferrer"
                >
                  {" "}
                  https://testnet.bscscan.com/token/0x86B641E9563544f941A3c9a94AD8f66b62febC98#readContract
                </a>
              </td>
              <td className="px-4 py-3">6</td>
              <td className="px-4 py-3">0.0025 ETH</td>
              <td className="px-4 py-3">0.103456 ETH</td>
              <td className="px-4 py-3">8 Times</td>
              <td className="px-4 py-3">1.345 ETH</td>
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
              <td className="px-4 py-3 cursor-pointer truncate max-w-xs">
                <a
                  target="_blank"
                  href="https://testnet.bscscan.com/token/0x86B641E9563544f941A3c9a94AD8f66b62febC98#readContract"
                  rel="noreferrer"
                >
                  {" "}
                  https://testnet.bscscan.com/token/0x86B641E9563544f941A3c9a94AD8f66b62febC98#readContract
                </a>
              </td>
              <td className="px-4 py-3">6</td>
              <td className="px-4 py-3">0.0025 ETH</td>
              <td className="px-4 py-3">0.103456 ETH</td>
              <td className="px-4 py-3">8 Times</td>
              <td className="px-4 py-3">1.345 ETH</td>
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
              <td className="px-4 py-3 cursor-pointer truncate max-w-xs">
                <a
                  target="_blank"
                  href="https://testnet.bscscan.com/token/0x86B641E9563544f941A3c9a94AD8f66b62febC98#readContract"
                  rel="noreferrer"
                >
                  https://testnet.bscscan.com/token/0x86B641E9563544f941A3c9a94AD8f66b62febC98#readContract
                </a>
              </td>
              <td className="px-4 py-3">6</td>
              <td className="px-4 py-3">0.0025 ETH</td>
              <td className="px-4 py-3">0.103456 ETH</td>
              <td className="px-4 py-3">8 Times</td>
              <td className="px-4 py-3">1.345 ETH</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default InfoTableOne;
