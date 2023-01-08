import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import {
  FaDiscord,
  FaInstagram,
  FaReddit,
  FaTelegram,
  FaTwitter,
} from "react-icons/fa";
import { HiMailOpen } from "react-icons/hi";
import { useParams } from "react-router-dom";
import heroImage from "../assets/hero.gif";
import { CardData } from "./Data";

const AboutDetails = () => {
  // bring to top
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const { id } = useParams();
  const [cardId, setCardId] = useState([]);
  useEffect(() => {
    const filterData = CardData.filter((obj) => obj?.id === parseInt(id));
    setCardId(filterData);
  }, [id]);

  return (
    <div className="text-white container">
      {/* image div */}
      <div>
        <div className="pt-[114px] pb-[80px]">
        <img
        src={heroImage}
        alt=""
        className="object-fit h-80 md:h-[562px] w-[1234px] border border-[#FCC607] p-3"
      />
        </div>
        {/* download & des div */}
        <div className="flex flex-col md:flex-row gap-[104px] items-center justify-between" >
          <div className="md:basis-[690px]">
            <div className="pb-[25px]">
              <p className="text-[20px] pb-[22px] text-[#D9D9D9]">Download White Paper and Roadmap as .PDF</p>
              <div className="flex gap-[36px] items-center" >
                <div>
                  <button className="bg-[#DEAF07] hover:bg-white" >White Paper</button>
                </div>
                <div>
                <button className="bg-[#DEAF07] hover:bg-white" >Roadmap</button>
                </div>
              </div>
            </div>
            {/* description */}
            <div>
              <p className="text-[20px] pt-[25px] text-[#FFFFFF] " >Description</p>
              <p className="text-[#FFFEFE] text-[14px] py-[25px]" >
                {/* for dynamic details uncomment the next line */}
                {/* {cardId[0]?.details} */}
                Lorem ipsum dolor sit amet consectetur. Massa nunc ornare luctus tellus. Lacus egestas neque auctor at arcu lacus. Facilisis enim nullam posuere quis vel turpis. Elit vel arcu aliquam et ipsum aliquam nibh.Lorem ipsum dolor sit amet consectetur. Massa nunc ornare luctus tellus. Lacus egestas neque auctor at arcu lacus. Facilisis enim nullam posuere quis vel turpis. Elit vel arcu aliquam et ipsum aliquam nibh.Lorem ipsum dolor sit amet consectetur. Massa nunc ornare luctus tellus. Lacus egestas neque auctor at arcu lacus. Facilisis enim nullam posuere quis vel turpis. Elit vel arcu aliquam et ipsum aliquam nibh.</p>
            </div>
            {/* counter */}
            <div className="flex items-center gap-[70px] pt-[55px]">
              <div>
                <p className="text-[20px] text-[#D9D9D9]">Pre Sale Counter </p>
              </div>
              <div className="flex gap-3" >
                <div className="px-3 py-2 w-[47px] h-[45px] text-[20px] bg-[#FCC607] rounded text-[#000000]" >01 </div>
                <span className="pt-2 text-white">:</span>
                <div className="px-3 py-2 w-[47px] h-[45px] text-[20px] bg-[#FCC607] rounded text-[#000000]" >01 </div>
                <span className="pt-2 text-white">:</span>
                <div className="px-3 py-2 w-[47px] h-[45px] text-[20px] bg-[#FCC607] rounded text-[#000000]" >01 </div>
              </div>
            </div>

          </div>
          <div className="w-full md:w-[398px] md:h-[395px] p-[30px] md:p-[20px] border border-[#FCC607] rounded" >
            <h1 className="text-[#FCC607] text-[32px] text-center" >Lorem Ipsum</h1>
            <div className="py-[25px]">
              <div className="flex items-center  justify-between pb-[60px]">
                <div className="flex items-center gap-[15px]">
                  <div>
                    <img className="w-[40px] h-[32px] border border-[#FCC607]" src={cardId[0]?.img} alt="" />
                  </div>
                  <div>
                    <p>{cardId[0]?.title}</p>
                    <p className="text-[#FCC607]" >#4568A</p>
                  </div>
                </div>
                <div>
                  <span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
                </span>
                </div>
              </div>
              {/* mint sec */}
              <div>
                <div className="flex items-center content-between justify-between pb-[23px]">
                  <div>Mint Fee</div>
                  <div>1%</div>
                </div>
                <div className="flex items-center justify-between">
                  <div>You receive</div>
                  <div> 1.5 BUSD </div>
                </div>
              </div>
            </div>
            <div className="text-center py-[20px]">
                 <button className="bg-[#FCC607] px-[35px] py-[10]" >Mint</button>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-start gap-x-[20px]  text-white text-[20px] py-8 md:py-[50px]">
                <FaDiscord />
                <FaTwitter />
                <FaInstagram />
                <FaTelegram />
                <HiMailOpen />
                <FaReddit />
        </div>
      </div>
    </div> 
  );
};

export default AboutDetails;
