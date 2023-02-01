import React from "react";
import { CiMail } from "react-icons/ci";

const Contact = () => {
  return (
    <div className="container my-16">
      <div className="grid grid-cols-1 md:grid-cols-2 ">
        <div className="mx-2 md:mx-0">
          <h1 className="text-[45px] md:text-[60px] font-bold text-[#FCC607]">
            CONTACT US
          </h1>
          <p className="pt-[30px] font-normal text-[#D9D9D9] max-w-lg">
            find all the lotto winning numbers and see if you won the latest
            lotto jackpots. find all the lotto winning numbers and see if you
            won the latest lotto jackpots
          </p>
          <div className="flex gap-x-2 pt-[30px]">
            <div className="bg-[#FCC607] p-2 rounded-lg">
              <CiMail className=" " size={30} />
            </div>

            <div className="flex text-[#D9D9D9] flex-col">
              <span>EMAIL ADDRESS</span>
              <span>abcdefgh@example.com</span>
            </div>
          </div>
        </div>
        <div className="bg-[#D9D9D9] bg-opacity-[15%] rounded-lg mt-16 md:mt-0">
          <form
            action=""
            className="flex flex-col  place-items-center p-4 sm:p-10 gap-y-[32px] "
          >
            <input
              type="text"
              className="w-full h-[50px] rounded p-3 outline-none bg-[#D9D9D9] focus:bg-white "
              placeholder="Your name"
            />
            <input
              type="email"
              className="w-full h-[50px] rounded p-3 outline-none bg-[#D9D9D9] focus:bg-white "
              placeholder="Your email"
            />

            <textarea
              className="block  p-3 text-base font-normal w-full
               text-gray-700 bg-[#D9D9D9] bg-clip-padding border border-solid border-gray-300 
               rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white outline-none"
              id="exampleFormControlTextarea1"
              rows="6"
              placeholder="Your message"
            ></textarea>

            <button className="bg-[#FCC607] w-full rounded">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
