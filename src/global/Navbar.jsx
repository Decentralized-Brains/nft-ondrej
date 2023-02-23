import React, { useState } from "react";

import { AiOutlineClose } from "react-icons/ai";
import {
  FaDiscord,
  FaTwitter,
  FaInstagram,
  FaTelegram,
  FaReddit,
} from "react-icons/fa";
import BlackOpenSea from "../assets/black-openSea.png";
import GrayOpenSea from "../assets/gray-openSea.png";
import MailingListModal from "../components/MailingListModal";

import { HiMailOpen } from "react-icons/hi";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  let activeStyle = {
    backgroundColor: "#FCC607",
  };

  const handleNav = () => {
    setNav(!nav);
  };

  const [showMyModal, setShowMyModal] = useState(false);
  const handleOnClose = () => setShowMyModal(false);

  //scroll lock when modal is open
  showMyModal
    ? (document.body.style.overflow = "hidden")
    : (document.body.style.overflow = "auto");

  return (
    <div className="text-white font-sans px-2">
      {/* This is logo */}
      {/* <div className="flex justify-center">
        <img src={Logo} alt="" className="w-[528px] h-[67px]" />
      </div> */}
      <h1 className="font-wanted text-center text-6xl md:text-[96px] text-[#CCCCCC] pt-[40px] pb-[43px]">
        BRODYPAETAU NFTS
      </h1>
      <MailingListModal onClose={handleOnClose} visible={showMyModal} />
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
              ? "bg-yellow-400 fixed left-0 top-0 w-full h-[220px] ease-in-out duration-500 text-base z-50"
              : "ease-in-out duration-500 fixed top-[-100%] h-screen w-screen left-0 "
          }
        >
          <div className="container mx-auto ">
            <div className="py-10 flex justify-between px-2 lg:px-0">
              <div onClick={handleNav} className="text-black cursor-pointer">
                <AiOutlineClose size={20} />
              </div>
              <div className="flex gap-x-[10px] md:gap-x-[20px] text-black text-[20px]">
                <img src={BlackOpenSea} alt="" width="20px" />
                <FaDiscord />
                <FaTwitter />
                <FaInstagram />
                <FaTelegram />
                <HiMailOpen />
                <FaReddit />
              </div>
            </div>
            {/* grid px-4 grid-cols-2 md:grid-cols-4 lg:grid-cols-5 */}
            <nav className="max-w-[1000px] md:flex flex-wrap text-black font-bold gap-x-5 gap-y-2 md:gap-10 lg:gap-16 cursor-pointer grid  grid-cols-2 px-2 lg:px-0">
              <NavLink className="" to="/#" onClick={handleNav}>
                Home
              </NavLink>
              <NavLink className="" to="/about" onClick={handleNav}>
                About
              </NavLink>

              <NavLink
                className=""
                to="/previouscollection"
                onClick={handleNav}
              >
                Previous Collections
              </NavLink>

              <NavLink className="" to="/contact" onClick={handleNav}>
                Contact
              </NavLink>
              <a
                className=""
                rel="noreferrer"
                href="http://brodypaetau.com/"
                target="_blank"
              >
                brodypaetau.com
              </a>
              <a
                className=""
                rel="noreferrer"
                href="https://old.brodypaetau.com/"
                target="_blank"
              >
                old.brodypaetau.com
              </a>
            </nav>
          </div>
        </div>

        <div className="flex gap-x-1 md:gap-x-[18px] pl-0 md:pl-32 lg:pl-64">
          <button>Connect Wallet</button>
          <NavLink
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
            to="/info"
            className="border border-black rounded-full px-2 sm:px-[20px] py-[5px] sm:py-[10px] bg-[#cccccc]
     text-black text-sm sm:text-[13px] font-normal hover:bg-[#DEAF07] duration-300;"
          >
            Collector Fund
          </NavLink>
          <button
            onClick={() => {
              setShowMyModal(true);
            }}
          >
            Mailing List
          </button>
        </div>
        <div className="hidden md:flex">
          <div className=" gap-x-4 text-[#cccccc] text-[20px] md:text-[28px] flex">
            <img src={GrayOpenSea} alt="" className="w-[20px] md:w-[28px]" />
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
