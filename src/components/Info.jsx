import React, { useEffect } from "react";
import InfoTableOne from "./InfoTableOne";
import InfoTableTwo from "./InfoTableTwo";
import { useLocation } from "react-router-dom";

const Info = () => {
  // bring to top
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="container  my-16 md:my-[60px] ">
      <div>
        {/* Button */}
        <div>
          <div className="flex justify-between items-end">
            <button className="text-base px-4 md:px-[40px] py-2 md:py-[10px] bg-[#FCC607]">
              Enter To Competition
            </button>
            <div>
              <div className="text-[#D9D9D9] text-base pb-2">
                THIS MONTH ENDS IN
              </div>
              <div className="text-base flex gap-1 md:gap-2 items-center">
                <span className="bg-[#FCC607] p-1 md:p-[10px] rounded">01</span>
                <span className="text-[#D9D9D9]">:</span>
                <span className="bg-[#FCC607] p-1 md:p-[10px] rounded">17</span>
                <span className="text-[#D9D9D9]">:</span>
                <span className="bg-[#FCC607] p-1 md:p-[10px] rounded">42</span>
                <span className="text-[#D9D9D9]">:</span>
                <span className="bg-[#FCC607] p-1 md:p-[10px] rounded">25</span>
              </div>
            </div>
          </div>
        </div>

        {/* Table 1*/}
        <InfoTableOne />

        {/* Table 2*/}
        <InfoTableTwo />
      </div>
    </div>
  );
};

export default Info;
