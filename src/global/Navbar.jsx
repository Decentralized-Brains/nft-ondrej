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
              <div onClick={handleNav} className="text-black cursor-pointer">
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

            <nav className="max-w-[1000px] grid px-4 grid-cols-2 md:grid-cols-4 lg:grid-cols-5 text-black font-bold gap-y-4 cursor-pointer">
              <NavLink to="/#" onClick={handleNav}>
                Home
              </NavLink>
              <NavLink to="/about" onClick={handleNav} className="pl-0 md:pl-8">
                About
              </NavLink>
              <NavLink to="/info" onClick={handleNav} className="pl-0 md:pl-8">
                Info
              </NavLink>
              <ul>Previous Collections</ul>
              <ul>Collector Fund</ul>
              <ul>Connect Wallet</ul>
              <ul>Contact</ul>
              <ul>brodypaetau.com</ul>
              <ul>old.brodypaetau.com</ul>
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
