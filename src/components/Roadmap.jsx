import React from "react";
import RoadMap from "../assets/roadmap.png";
import H3 from "../assets/about-us/135.jpeg";

const Roadmap = () => {
  return (
    <div className="container py-10">
      <h1 className="text-center text-4xl sm:text-6xl md:text-[100px] mb-6 text-[#DEAF07] sm:leading-[80px] font-wanted mx-auto py-10">
        ROADMAP
      </h1>
      <div className="flex">
        <ol className="relative border-l border-gray-200 dark:border-gray-700">
          <li className="mb-10 ml-4">
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>

            <h3 className="text-lg font-semibold text-[#DEAF07]  ">Phase 1</h3>
            <ul className="mb-4 text-base font-normal text-[20px] text-[#d7d7d7]  list-disc pl-4">
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
          </li>

          <li className="mb-10 ml-4">
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>

            <h3 className="text-lg font-semibold text-[#DEAF07] ">Phase 2</h3>
            <ul className="mb-4 text-base font-normal text-[20px] text-[#d7d7d7] list-disc pl-4">
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
          </li>

          <li className="mb-10 ml-4">
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>

            <h3 className="text-lg font-semibold text-[#DEAF07] ">Phase 3</h3>
            <ul className="mb-4 text-base font-normal text-[20px] text-[#d7d7d7] list-disc pl-4">
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
          </li>

          <li className="mb-10 ml-4">
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>

            <h3 className="text-lg font-semibold text-[#DEAF07] ">Phase 4</h3>
            <ul className="mb-4 text-base font-normal text-[20px] text-[#d7d7d7]  list-disc pl-4">
              <li>
                Preparation of the next NFT Collection with incentives for
                holders of the Static Cameltoe Brides NFTs.
              </li>
              <li>Launch of Animated Cameltoe Brides NFTs</li>
              <li>Giveaway competitions for community members</li>
              <li>Persistent marketing</li>
            </ul>
          </li>
        </ol>
        <div className="hidden md:flex h-full justify-center items-center ">
          <img src={RoadMap} alt="" />
        </div>
      </div>
      <img src={H3} alt="" className="h-[18rem] rounded-full" />
    </div>
  );
};

export default Roadmap;
