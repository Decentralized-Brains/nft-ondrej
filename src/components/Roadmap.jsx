import React from "react";
import RoadMap from "../assets/roadmap.png";
import H3 from "../assets/about-us/135.jpeg";

const Roadmap = () => {
  return (
    <div className="container py-10">
      <h1 className="text-center text-4xl sm:text-6xl md:text-[100px] mb-6 text-[#DEAF07] sm:leading-[80px] font-wanted mx-auto py-10">
        ROADMAP
      </h1>
      <div className="grid grid-cols-1 px-2 md:grid-cols-5 ">
        <div className="col-span-2 flex flex-col gap-5">
          <div>
            <h3 className="text-xl font-bold text-[#DEAF07]  ">Phase 1</h3>
            <ul className="mb-4 text-xl font-normal text-[20px] text-[#d7d7d7]  list-disc pl-4">
              <li>Social channels live</li>
              <li>Establish an official website</li>
              <li>
                Creation of the smart contract and databases for the BrodyPaetau
                Creator Fund
              </li>
              <li>Whitelist events enabled</li>
              <li>Launch of marketing campaigns</li>
              <li>Press release campaign</li>
              <li>Top NFT site listing</li>
              <li>Cross promotion</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-[#DEAF07] ">Phase 3</h3>
            <ul className="mb-4 text-xl font-normal text-[20px] text-[#d7d7d7] list-disc pl-4">
              <li>
                Launch of the Collector Fund with monthly Royalties for
                collectors
              </li>
              <li>Website traffic channeling</li>
              <li>Social media traffic channeling</li>
              <li>
                Social media presence scaling to Discord, Twitter, Telegram,
                Reddit, Youtube
              </li>
              <li>Collaboration with NFT influencers</li>
              <li>Establishment of a continuity plan for the project</li>
            </ul>
          </div>
          <div>
            <img src={H3} alt="" className="h-[18rem] rounded-full" />
          </div>
        </div>
        <div className="hidden md:flex items-center justify-center ">
          <img src={RoadMap} alt="" className="" />
        </div>
        <div className="col-span-2  flex flex-col gap-5">
          <div className="hidden md:flex h-40"></div>
          <div>
            <h3 className="text-lg font-semibold text-[#DEAF07] ">Phase 2</h3>
            <ul className="mb-4 text-xl font-normal text-[20px] text-[#d7d7d7] list-disc pl-4">
              <li>NFT development and Minting on the ETH network</li>
              <li>
                Static Cameltoe Brides collection will be available on the
                secondary market (Open Sea)
              </li>
              <li>Continue marketing campaigns</li>
              <li>Continue outreach with top NFT media outlets</li>
              <li>Community scaling</li>
              <li>Collaboration and promotion</li>
              <li>Fund and incentive scheme development</li>
              <li>Community contests and giveaways</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-[#DEAF07] ">Phase 4</h3>
            <ul className="mb-4 text-xl font-normal text-[20px] text-[#d7d7d7]  list-disc pl-4">
              <li>
                Preparation of the next NFT Collection with incentives for
                holders of the Static Cameltoe Brides NFTs.
              </li>
              <li>Launch of Animated Cameltoe Brides NFTs</li>
              <li>Giveaway competitions for community members</li>
              <li>Persistent marketing</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Roadmap;
