import React, { useState } from "react";
import Logo from "../assets/logo.png";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
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
    <div className="text-white">
      {/* This is logo */}
      <div className="flex justify-center p-10">
        <img src={Logo} alt="" className="w-[350px]" />
      </div>

      {/* This is navbar */}
      <div className=" flex justify-between items-center h-14 max-w-6xl mx-auto text-white px-1 sm:px-4">
        <div onClick={handleNav}>
          <AiOutlineMenu size={20} className="text-white" />
        </div>
        <div
          className={
            nav
              ? "bg-yellow-400 fixed left-0 top-0 w-full h-[450px] sm:h-[300px] border-r ease-in-out duration-500 text-base"
              : "hidden"
          }
        >
          <div className="max-w-6xl mx-auto">
            <div className="p-10 flex justify-between">
              <div
                onClick={handleNav}
                className="text-black border rounded-full border-black p-1 cursor-pointer hover:bg-black hover:text-[#DEAF07]"
              >
                <AiOutlineClose />
              </div>
              <div className="flex gap-x-2 text-black text-[20px]">
                <FaDiscord />
                <FaTwitter />
                <FaInstagram />
                <FaTelegram />
                <HiMailOpen />
                <FaReddit />
              </div>
            </div>

            <nav className="max-w-[800px] px-10 flex gap-10 flex-wrap text-black font-medium">
              <NavLink to="/#">Home</NavLink>
              <NavLink to="/info">Info</NavLink>
              <NavLink to="/about">About</NavLink>
              <ul>Previous Collections</ul>
              <ul>Collector Fund</ul>
              <ul>Connect Wallet</ul>
              <ul>Contact</ul>
              <ul>brodypaetau.com</ul>
              <ul>old.brodypaetau.com</ul>
            </nav>
          </div>
        </div>

        <div className="flex gap-x-2">
          <button>Connect Wallet</button>
          <button>Collector Fund</button>
          <button className="bg-[#DEAF07] hover:bg-white">Sign up</button>
        </div>
        <div className="hidden md:flex">
          <div className=" gap-x-4 text-white text-[20px] flex">
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
