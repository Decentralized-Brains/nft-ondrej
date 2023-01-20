import React, { useState } from "react";

import { AiOutlineClose } from "react-icons/ai";
import {
  FaDiscord,
  FaTwitter,
  FaInstagram,
  FaTelegram,
  FaReddit,
} from "react-icons/fa";
import { HiMailOpen } from "react-icons/hi";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="text-white font-sans px-2">
      {/* This is logo */}
      {/* <div className="flex justify-center">
        <img src={Logo} alt="" className="w-[528px] h-[67px]" />
      </div> */}

      <h1 className="font-wanted text-center text-6xl md:text-[96px] text-[#CCCCCC] pt-[40px] pb-[43px]">
        BRODYPAETAU NFTS
      </h1>

      {/* This is navbar */}
      <div className="container flex justify-between items-center">
        <div onClick={handleNav} className="flex flex-col  gap-y-[8px]">
          <div className="h-[3px] w-[24px]  md:w-[42px] bg-[#cccccc]"></div>
          <div className="h-[3px] w-[24px]  md:w-[42px] bg-[#cccccc]"></div>
          <div className="h-[3px] w-[24px]  md:w-[42px] bg-[#cccccc]"></div>
        </div>
        <div
          className={
            nav
              ? "bg-yellow-400 fixed left-0 top-0 w-full h-[300px] md:h-[250px] ease-in-out duration-500 text-base z-50"
              : "ease-in-out duration-500 fixed top-[-100%] h-screen w-screen left-0 "
          }
        >
          <div className="max-w-[1300px] mx-auto ">
            <div className="py-10 flex justify-between px-2">
              <div onClick={handleNav} className="text-black cursor-pointer md:px-[25px]">
                <AiOutlineClose size={20} />
              </div>
              <div className="flex gap-x-[20px] text-black text-[20px]">
                <FaDiscord />
                <FaTwitter />
                <FaInstagram />
                <FaTelegram />
                <HiMailOpen />
                <FaReddit />
              </div>
            </div>
{/* grid px-4 grid-cols-2 md:grid-cols-4 lg:grid-cols-5 */}
            <nav className="max-w-[1000px] grid px-2 md:px-[30px] grid-cols-2  md:flex md:flex-wrap  text-black font-bold gap-y-4 cursor-pointer">
              <NavLink className=" md:pr-[95px]"  to="/#" onClick={handleNav}>
                Home
              </NavLink>
              <NavLink className=" md:pr-[95px]"  to="/about" onClick={handleNav}>
                About
              </NavLink>

              <ul className=" md:pr-[78px]" >Previous Collections</ul>
              <NavLink className=" md:pr-[84px]"  to="/info" onClick={handleNav}>
                Collector Fund
              </NavLink>
              <ul className="md:pr-[117px]" >Connect Wallet</ul>
              <ul className=" md:pr-[42px]" >Contact</ul>
              <ul className=" md:pr-[52px]" >brodypaetau.com</ul>
              <ul className="" >old.brodypaetau.com</ul>
            </nav>
          </div>
        </div>

        <div className="flex gap-x-2 md:gap-x-[18px] pl-0 md:pl-32 lg:pl-64">
          <button>Connect Wallet</button>
          <button>Collector Fund</button>
          <button className="bg-[#DEAF07] hover:bg-[#cccccc]">Sign up</button>
        </div>
        <div className="hidden md:flex">
          <div className=" gap-x-4 text-[#cccccc] text-[20px] md:text-[28px] flex">
            <FaDiscord />
            <FaTwitter />
            <FaInstagram />
            <FaTelegram />
            <HiMailOpen />
            <FaReddit />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
