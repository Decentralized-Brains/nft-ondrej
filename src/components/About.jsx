import HeroGif from "../assets/card.gif";
import OurJourney from "./OurJourney.jsx";
import Team from "./Team.jsx";

const About = () => {
  return (
    <>
      <div className="container flex py-5 md:py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-5/6  flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="text-4xl sm:text-[70px] font-bold text-[#DEAF07] sm:leading-[80px]">
            A MARKETPLACE LIKE NO OTHER
          </h1>
          <p className="py-10 text-[#D9D9D9]  sm:text-[20px]">
            find all the lotto winning numbers and see if you won the latest
            lotto jackpots. find all the lotto winning numbers and see if you
            won the latest lotto jackpots
          </p>
          <button className="bg-transparent text-[#DEAF07] rounded border-t-[#DEAF07] border-l-transparent border-r-transparent  border-b-[#DEAF07]    hover:text-[#D9D9D9]">
            Learn More
          </button>
        </div>
        <div className="lg:max-w-lg lg:w-full ">
          <img
            src={HeroGif}
            alt=""
            className="w-64 mx-auto h-[350px] object-cover rounded-t-full rounded-b-full border p-2 border-[#DEAF07]"
          />
        </div>
      </div>
      <OurJourney />
      <Team />
    </>
  );
};

export default About;
