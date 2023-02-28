import Main from "../assets/about-us/CameltoeBrideabeautywithpride.jpg";
import AboutImg from "../assets/about-us/104.jpeg";
import Art from "../assets/about-us/ArtforumAccident.jpg";
import Dog from "../assets/about-us/DogCarpets.jpg";
import Story from "../assets/about-us/Artstar.jpg";
import COLLECTIBLE1 from "../assets/about-us/126.jpeg";
import COLLECTIBLE2 from "../assets/about-us/157.jpeg";
import COLLECTIBLE3 from "../assets/about-us/143.jpeg";
import RoadMap from "./Roadmap.jsx";

import Team from "./Team.jsx";

const About = () => {
  return (
    <>
      <div className="container flex py-5 md:py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-5/6  flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="text-4xl sm:text-6xl md:text-[100px] mb-6 text-[#DEAF07] sm:leading-[80px] font-wanted mx-auto">
            CAMELTOEBRIDES
          </h1>
          <img src={Main} alt="" className="h-[80%] w-[80%] mx-auto" />
          {/* ABOUT THE CAMEL TO EBRIDES */}
          <div className="flex justify-center items-center flex-col my-10 px-2 md:px-0">
            <h1 className="text-4xl sm:text-6xl md:text-[100px] mb-6 text-[#DEAF07] sm:leading-[80px] font-wanted mx-auto py-10">
              ABOUT THE CAMEL TO EBRIDES
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
              <p className="text-justify text-[#d7d7d7] flex flex-col gap-10">
                <span>
                  The Cameltoe Brides is a unique and thought-provoking series
                  of NFT art created by visual artists BrodyPaetau. Comprising
                  of 1000 static (V1) and 500 animated (V2) pieces, the
                  collection is the result of a combination of mathematical
                  algorithms and the artists' boundless imagination. The project
                  is a departure from the traditional NFT art that is currently
                  available, offering something new and challenging in terms of
                  aesthetic and concept.
                </span>
                <span>
                  When you purchase a Cameltoe Bride NFT, you gain ownership of
                  the commercial rights to the piece, including a royalty-free
                  license for personal and commercial use. The artists hope that
                  viewers will find pleasure in the grotesque humor, satire, and
                  burlesque mockery present in the collection, despite its
                  disturbing and offensive nature.
                </span>
                <span>
                  The Cameltoe Brides marks BrodyPaetau's entry into the world
                  of NFTs, and their artistic perspective can be traced back to
                  iconic works such as the{" "}
                  <a
                    href="https://en.wikipedia.org/wiki/Venus_of_Hohle_Fels"
                    target="_blank"
                    rel="noreferrer"
                    className="underline"
                  >
                    "Venus of Hohle Fels'' and Gustave
                  </a>
                  Courbet's{" "}
                  <a
                    href="https://en.wikipedia.org/wiki/L%27Origine_du_monde"
                    target="_blank"
                    rel="noreferrer"
                    className="underline"
                  >
                    {" "}
                    "The Origin of the World."{" "}
                  </a>
                  As a reference to the obsession with brides in the
                  <a
                    href="https://en.wikipedia.org/wiki/The_Bride_Stripped_Bare_by_Her_Bachelors,_Even"
                    target="_blank"
                    rel="noreferrer"
                    className="underline"
                  >
                    {" "}
                    work of the artist Marcel Duchamp
                  </a>
                  , BrodyPaetau see their Cameltoe Brides as truly "hilarious
                  pictures" intended to depict the encounter between the "Bride"
                  and her "Bachelors" on the blockchain...
                </span>
              </p>

              <div className="flex justify-center ">
                <img
                  src={AboutImg}
                  alt=""
                  className="w-[30rem] object-cover border-2 border-[#DEAF07]"
                />
              </div>
            </div>
          </div>
          {/* THE BRODYPAETAU STORY */}
          <div className="flex justify-center items-center flex-col my-10 px-2 md:px-0">
            <h1 className="text-4xl sm:text-6xl md:text-[100px] mb-6 text-[#DEAF07] sm:leading-[80px] font-wanted mx-auto py-10">
              THE BRODYPAETAU STORY
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
              <p className="text-justify text-[#d7d7d7] flex flex-col gap-2">
                <span>
                  BrodyPaetau is a renowned artist duo known for their grotesque
                  and offensive humorous contemporary artworks that often push
                  the boundaries of what is considered acceptable. Their work is
                  heavily influenced by provocative modernist masterpieces such
                  as{" "}
                  <a
                    href="https://en.wikipedia.org/wiki/Le_D%C3%A9jeuner_sur_l%27herbe"
                    target="_blank"
                    rel="noreferrer"
                    className="underline"
                  >
                    "Le Déjeuner sur l'herbe"
                  </a>{" "}
                  by Eduard Manet, which{" "}
                  <a
                    href="https://en.wikipedia.org/wiki/Le_D%C3%A9jeuner_sur_l%27herbe"
                    target="_blank"
                    rel="noreferrer"
                    className="underline"
                  >
                    they reinterpret in a manner that is both troubling and
                    funny,
                  </a>{" "}
                  blurring the line between art and pornography.
                </span>
                <span>
                  Their approach to art is characterized by its
                  straightforwardness and literacy which is both their strength
                  and weakness. They often oscillate between the use and abuse
                  of advanced manipulation and cold, detached registration of
                  absurd reality in their artworks, which are genuinely critical
                  and sincere in their desire to uncover the hidden pathologies
                  and normalcies of human relationships. Their work is not for
                  the faint of heart, but it is undeniable that BrodyPaetau is
                  an artist duo that creates art that is thought-provoking and
                  makes a statement.
                </span>
              </p>

              <div className="flex justify-center flex-col">
                <img
                  src={Story}
                  alt=""
                  className="w-full h-full object-cover border-2 border-[#DEAF07]"
                />
              </div>
              <img
                src={Dog}
                alt=""
                className="w-full object-cover border-2 border-[#DEAF07]"
              />

              <img
                src={Art}
                alt=""
                className="w-full h-full object-cover border-2 border-[#DEAF07]"
              />
            </div>
          </div>
          {/* VISION AND BENEFITS OF THE CAMELTOE BRIDES */}
          <div className="flex justify-center items-center flex-col my-10 px-2 md:px-0">
            <h1 className="text-4xl sm:text-6xl md:text-[90px] mb-6 text-[#DEAF07] sm:leading-[80px] font-wanted mx-auto py-10">
              VISION AND BENEFITS OF THE CAMELTOE BRIDES
            </h1>
            <div className="grid grid-cols-1 gap-5">
              <p className="text-justify text-[#d7d7d7] flex flex-col gap-10">
                <span>
                  The vision behind the Cameltoe Brides, the first NFT
                  collection by BrodyPaetau, is to create an active community
                  around their future NFT-based art that will endure for the
                  next several decades. The artist duo has been working together
                  since 2004 and has{" "}
                  <a
                    href="https://old.brodypaetau.com/cv"
                    target="_blank"
                    rel="noreferrer"
                    className="underline"
                  >
                    {" "}
                    exhibited in galleries, art centers, and museums worldwide .
                  </a>{" "}
                  The Cameltoe Brides collection marks their entry into the
                  world of NFTs and serves as a bold and different aesthetic
                  proposition compared to other generative NFT collections
                  currently available. BrodyPaetau's ambition is to continue
                  pushing boundaries and exploring new aesthetic and
                  technological paths with future NFT collections. They have a
                  strong desire to stand out from the mainstream, often being
                  critical and provocative in their approach, and they do not
                  intend to change that in their future projects. The artists
                  believe that NFTs present a new way to create and share art
                  and they want to be part of this exciting new frontier in the
                  art world.
                </span>
              </p>
              <p className="text-justify text-[#d7d7d7] flex flex-col gap-10">
                <span>
                  BrodyPaetau are committed to providing real, measurable
                  benefits to their community and collectors. That is why when
                  you purchase a Cameltoe Bride NFT, you gain ownership of the
                  commercial rights to the piece. We have also established the
                  BrodyPaetau Collector Fund, dedicating 5% of all royalties
                  from the secondary market of the Cameltoe Brides collection
                  (and all future BrodyPaetau NFTs) to the fund. The Collector
                  Fund pays out monthly royalties to the top 10 collectors,
                  divided equally among the top 10 wallets that acquired
                  BrodyPaetau NFTs during each month. The payout for the current
                  month is made on the first day of the next month. Only buy
                  transactions that paid the full royalties do qualify for the
                  Collector Fund, and each NFT or NFT collection that
                  BrodyPaetau create will always qualify for the fund. This
                  means that buy transactions of older BrodyPaetau NFTs continue
                  to qualify for the monthly Top 10 Collector Fund Royalties,
                  encouraging our community and collectors to respect the
                  royalties and to invest in old and new collections.
                  Furthermore, we will also compensate holders in the community
                  with regular free mints, the possibility to enter future
                  pre-sales, and other benefits which will be announced over
                  time. We are dedicated to hearing proposals from our community
                  and working together to expand and prosper.
                </span>
              </p>
            </div>
          </div>
          {/* TOTAL COLLECTIBLES */}
          <div className="flex justify-center items-center flex-col my-10 px-2 md:px-0">
            <h1 className="text-4xl sm:text-6xl md:text-[100px] mb-6 text-[#DEAF07] sm:leading-[80px] font-wanted mx-auto py-10">
              TOTAL COLLECTIBLES
            </h1>
            <div className="grid grid-cols-1  gap-10">
              <p className="text-justify text-[#d7d7d7] flex flex-col gap-2">
                <span>
                  The BrodyPaetau Cameltoe Brides collection includes a total of
                  1500 unique NFTs, divided into two versions: V1 and V2. The V1
                  collection includes 1000 static Cameltoe Brides that will be
                  minted for an ETH fee to be announced. There will be a limit
                  of max. 5 mints per wallet in the pre-sale of V1 Cameltoe
                  Brides.
                </span>
                <span>
                  The V2 collection includes 500 animated Cameltoe Brides that
                  will also be minted for an ETH fee to be announced. To
                  participate in the pre-sale of V2 Cameltoe Brides, it is
                  necessary to hold a V1 Cameltoe Bride in your wallet. For
                  every V1 Cameltoe Bride held in your wallet, you will be able
                  to purchase one V2 Cameltoe Bride, with a maximum limit of 5
                  V2 Cameltoe Brides per wallet.
                </span>
                <span>
                  The Secondary market royalties for both versions of the
                  Cameltoe Brides will be 10%, of which half (5%) will go to the
                  Team, and the other half (5%) will go to the Monthly Top 10
                  Collector Fund. Payments can be made in ETH and additionally,
                  we accept fiat card payments and multiple different
                  cryptocurrencies through{" "}
                  <a
                    href="https://www.crossmint.com/products/payments"
                    target="_blank"
                    rel="noreferrer"
                    className="underline"
                  >
                    {" "}
                    CROSSMINT{" "}
                  </a>
                  .
                </span>
                <span>
                  Our minting website is{" "}
                  <a
                    href="https://nfts.brodypaetau.com/"
                    target="_blank"
                    rel="noreferrer"
                    className="underline"
                  >
                    {" "}
                    https://nfts.brodypaetau.com/{" "}
                  </a>{" "}
                  where all the details and instructions to purchase the NFTs
                  can be found. It's worth noting that the content and theme of
                  the Cameltoe Bride NFTs are not suitable for all audiences and
                  may be considered offensive by some.
                </span>
              </p>

              <div className="flex justify-center gap-5 flex-wrap">
                <img
                  src={COLLECTIBLE1}
                  alt=""
                  className="w-36 md:w-[20rem] object-cover border-2 border-[#DEAF07] rounded-full"
                />
                <img
                  src={COLLECTIBLE2}
                  alt=""
                  className="w-36 md:w-[20rem] object-cover border-2 border-[#DEAF07] rounded-full"
                />
                <img
                  src={COLLECTIBLE3}
                  alt=""
                  className="w-36 md:w-[20rem] object-cover border-2 border-[#DEAF07] rounded-full"
                />
              </div>
            </div>
          </div>
          {/* COPYRIGHTS OF THE CAMELTOE BRIDES */}
          <div className="flex justify-center items-center flex-col my-10 px-2 md:px-0">
            <h1 className="text-4xl sm:text-6xl md:text-[100px] mb-6 text-[#DEAF07] sm:leading-[80px] font-wanted mx-auto py-10">
              COPYRIGHTS OF THE CAMELTOE BRIDES
            </h1>
            <div className="grid grid-cols-1  gap-10">
              <p className="text-justify text-[#d7d7d7] flex flex-col gap-2">
                <span>
                  Please note that the copyright of the underlying artwork
                  remains with the creators, BrodyPaetau. The ownership of the
                  NFT grants the holder the right to use, reproduce and display
                  the artwork for commercial use. Any use of the artwork should
                  be in accordance with the{" "}
                  <a
                    href="https://nfts.brodypaetau.com/toc"
                    target="_blank"
                    rel="noreferrer"
                    className="underline"
                  >
                    Terms and Conditions of the license granted{" "}
                  </a>{" "}
                  with the NFT.
                </span>
              </p>
            </div>
          </div>
          {/* COMMUNITY DEVELOPMENT AND MARKETING STRATEGY FOR THE CAMELTOE BRIDES */}
          <div className="flex justify-center items-center flex-col my-10 px-2 md:px-0">
            <h1 className="text-4xl sm:text-6xl md:text-[100px] mb-6 text-[#DEAF07] sm:leading-[80px] font-wanted mx-auto py-10">
              COMMUNITY DEVELOPMENT AND MARKETING STRATEGY FOR THE CAMELTOE
              BRIDES
            </h1>
            <div className="grid grid-cols-1  gap-10">
              <p className="text-justify text-[#d7d7d7] flex flex-col gap-2">
                <span>
                  The team plans to hold regular online events such as artist
                  talks and AMA sessions to engage and interact with the
                  community about the project and its vision across all
                  channels. These events will also provide opportunities for
                  community members to connect and network with each other, as
                  well as with the artists and team members behind the project.
                  Our marketing team will create a comprehensive marketing
                  strategy and build a strong brand identity, increase awareness
                  about our project, and engage our target audience through
                  Twitter, Discord, Telegram and Instagram. Furthermore, we will
                  develop partnerships and collaboration with key stakeholders
                  in the NFT and in the visual arts space to extend our reach
                  and maximize the impact of our project. As a holder of our
                  NFTs you will receive a number of perks, such as our Collector
                  Fund, as well as a loyalty program that rewards long-term
                  holders of the NFTs with airdrops and whitelist placements.
                </span>
                <span>
                  We're proud to offer an opportunity to our collectors to
                  receive monthly payouts from our Collector Fund: a monthly
                  revenue-sharing program where the top 10 collectors receive
                  each 1/10th of the monthly Collector Fund. A royalty of 5% of
                  all secondary sales goes to the Collector Fund and every month
                  each of the Top 10 collectors is rewarded with 1/10th of the
                  entire Collector Fund. Every future BrodyPaetau NFT will also
                  qualify for the Top 10 Collector Fund.
                </span>
                <span>
                  Holders get early access to new NFT mints such as the Animated
                  Cameltoe Brides (V2). As a holder of the first released NFTs,
                  Static cameltoe brides (V1) you will be able to mint one V2
                  Cameltoe Bride for each V1 Cameltoe Bride you have in your
                  wallet, up to a maximum of five V2 Cameltoe Brides per wallet.
                </span>
                <span>
                  You will get access to some of our community and NFT-related
                  content that is only available to holders of Cameltoe Brides
                  NFTs and be able to participate in NFT-related events, such as
                  meetups and voting on future ideas and projects.
                </span>
                <span>
                  We believe that these benefits will motivate members of the
                  community to actively buy and promote new NFT launches, while
                  also preserving the value of our older NFT collections.
                  Overall, our community development and marketing strategy for
                  the Cameltoe Brides is focused on creating a strong, engaged,
                  and passionate community of collectors and supporters who are
                  invested in the project and receive real benefits from it.
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <Team />
      <RoadMap />
    </>
  );
};

export default About;
