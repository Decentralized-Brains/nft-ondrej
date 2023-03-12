import React, { useState, useEffect } from "react";
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

  // const date = new Date();
  // const daysLeft =
  //   new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate() -
  //   date.getDate();

  // const hoursLeft = 24 - date.getHours();
  // const minutesLeft = 60 - date.getMinutes();
  // const secondsLeft = 60 - date.getSeconds();

  // console.log(daysLeft, " ", hoursLeft, "", minutesLeft, "", secondsLeft);

  // Creating a date object
  var today = new Date();

  // Getting full month name (e.g. "June")
  var month = today.toLocaleString("default", { month: "long" }).toUpperCase();

  const [daysLeft, setDaysLeft] = useState(0);
  const [hoursLeft, setHoursLeft] = useState(0);
  const [minutesLeft, setMinutesLeft] = useState(0);
  const [secondsLeft, setSecondsLeft] = useState(0);

  function updateCountdown() {
    const date = new Date();
    const daysInMonth = new Date(
      date.getFullYear(),
      date.getMonth() + 1,
      0
    ).getDate();
    const daysLeft = daysInMonth - date.getDate();
    const hoursLeft = 24 - date.getHours();
    const minutesLeft = 60 - date.getMinutes();
    const secondsLeft = 60 - date.getSeconds();

    setDaysLeft(daysLeft);
    setHoursLeft(hoursLeft);
    setMinutesLeft(minutesLeft);
    setSecondsLeft(secondsLeft);
  }

  useEffect(() => {
    const intervalId = setInterval(updateCountdown, 1000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="container  my-16 md:my-[60px] ">
      <div>
        {/* Button */}
        <div>
          <div className="flex flex-col-reverse gap-5 md:flex-row justify-between ">
            <div className="flex flex-col md:flex-row justify-center md:items-center gap-2  ">
              <button className="w-36 text-sm  bg-[#FCC607] rounded">
                Top 10
              </button>
              <div className="flex flex-col md:flex-row gap-2 text-base md:text-xl md:font-bold text-[#d7d7d7]">
                <span>Current Fund Amount: 1.036ETH</span>
                <span>Expected payout for each TOP 10 collector: 0.103456</span>
              </div>
            </div>
            <div className="flex justify-end flex-col items-end md:items-start">
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
