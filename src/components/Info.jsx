import React, { useEffect } from "react";
import InfoTableOne from "./InfoTableOne";
import InfoTableTwo from "./InfoTableTwo";
import InfoTablePrevious from "./InfoTablePrevious";
import { useLocation } from "react-router-dom";

const Info = () => {
  // bring to top
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  // get hours left in month

  const date = new Date();
  const daysLeft =
    new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate() -
    date.getDate();

  const hoursLeft = 24 - date.getHours();
  const minutesLeft = 60 - date.getMinutes();
  const secondsLeft = 60 - date.getSeconds();

  console.log(daysLeft, " ", hoursLeft, "", minutesLeft, "", secondsLeft);

  // Creating a date object
  var today = new Date();

  // Getting full month name (e.g. "June")
  var month = today.toLocaleString("default", { month: "long" }).toUpperCase();

  return (
    <div className="container  my-16 md:my-[60px] ">
      <div>
        {/* Button */}
        <div>
          <div className="flex justify-between items-end">
            <div className="flex justify-center items-center gap-2  ">
              <button className="text-sm  bg-[#FCC607] rounded ">Top 10</button>
              <div className="font-wanted text-xl md:text-4xl text-[#d7d7d7]">
                Current Fund Amount: 1.036ETH{" "}
                <span className="pl-4">
                  {" "}
                  Expected payout for each TOP 10 collector: 0.103456
                </span>
              </div>
            </div>
            <div>
              <div className="text-[#D9D9D9] text-base pb-2 capitalize">
                {month} MONTH ENDS IN
              </div>
              <div className="text-base flex gap-1 md:gap-2 items-center">
                <span className="bg-[#FCC607] p-1 md:p-[10px] rounded">
                  {daysLeft} d
                </span>
                <span className="text-[#D9D9D9]">:</span>
                <span className="bg-[#FCC607] p-1 md:p-[10px] rounded">
                  {hoursLeft} h
                </span>
                <span className="text-[#D9D9D9]">:</span>
                <span className="bg-[#FCC607] p-1 md:p-[10px] rounded">
                  {minutesLeft} m
                </span>
                <span className="text-[#D9D9D9]">:</span>
                <span className="bg-[#FCC607] p-1 md:p-[10px] rounded">
                  {secondsLeft} s
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Table 1*/}
        <InfoTableOne />

        {/* Table 2*/}
        <InfoTableTwo />

        {/* Previous table */}
        <InfoTablePrevious />
      </div>
    </div>
  );
};

export default Info;
