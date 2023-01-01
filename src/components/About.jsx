import React from "react";
import { FaDiscord, FaInstagram, FaReddit, FaTelegram, FaTwitter } from "react-icons/fa";
import { HiMailOpen } from "react-icons/hi";
import heroImage from '../assets/hero.gif';

const About = () => {
  return (
    <div className="text-white py-[30px] px-[10px] md:px-[100px] ">
      {/* image div */}
      <div>
        <div>
          <img
          src={heroImage}
          alt=""
          className="object-fit h-80 md:h-[32rem] w-[60rem] md:max-w-6xl mx-auto border border-[#FCC607] p-2"
        />
        </div>
        {/* download & des div */}
        <div className="flex flex-col md:flex-row gap-[60px] items-center justify-center pt-[30px] " >
          <div className="md:basis-[790px]">
            <div className="pb-[25px]">
              <p className="text-[20px] pb-[20px]">Download White Paper and Roadmap as .PDF</p>
              <div className="flex gap-2 items-center" >
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
              <p className="text-[20px] py-[10px] text-[#FFFFFF] " >Description</p>
              <p className="text-[#FFFEFE] text-[14px]" >Lorem ipsum dolor sit amet consectetur. Massa nunc ornare luctus tellus. Lacus egestas neque auctor at arcu lacus. Facilisis enim nullam posuere quis vel turpis. Elit vel arcu aliquam et ipsum aliquam nibh.Lorem ipsum dolor sit amet consectetur. Massa nunc ornare luctus tellus. Lacus egestas neque auctor at arcu lacus. Facilisis enim nullam posuere quis vel turpis. Elit vel arcu aliquam et ipsum aliquam nibh.Lorem ipsum dolor sit amet consectetur. Massa nunc ornare luctus tellus. Lacus egestas neque auctor at arcu lacus. Facilisis enim nullam posuere quis vel turpis. Elit vel arcu aliquam et ipsum aliquam nibh.</p>
            </div>
            {/* counter */}
            <div className="flex items-center gap-8 py-[30px]">
              <div>
                <p className="text-[20px]">Pre Sale Counter </p>
              </div>
              <div className="flex gap-3" >
                <div className="px-3 py-2 w-[47px] h-[45px] text-[20px] bg-[#FCC607] rounded" >01 </div>
                <span className="pt-2 text-white">:</span>
                <div className="px-3 py-2 w-[47px] h-[45px] text-[20px] bg-[#FCC607] rounded" >01 </div>
                <span className="pt-2 text-white">:</span>
                <div className="px-3 py-2 w-[47px] h-[45px] text-[20px] bg-[#FCC607] rounded" >01 </div>
              </div>
            </div>

          </div>
          <div className="w-full md:w-[300px] p-[30px] md:p-[20px] border border-[#FCC607] rounded" >
            <h1 className="text-[#FCC607] text-[32px] text-center" >Lorem Ipsum</h1>
            <div className="py-[25px]">
              <div className="flex items-center  justify-between pb-[60px]">
                <div className="flex items-center gap-[15px]">
                  <div>
                    <img className="w-[40px] h-[32px] border border-[#FCC607]" src={heroImage} alt="" />
                  </div>
                  <div>
                    <p>Lorem ipsum</p>
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
                 <button className="bg-[#FCC607]" >Mint</button>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-start gap-x-4  text-white text-[20px] py-5 md:py-[20px] max-w-6xl mx-auto">
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

export default About;
