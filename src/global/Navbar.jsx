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
      <div className="flex justify-center py-10">
        <img src={Logo} alt="" className="w-[350px]" />
      </div>

      {/* This is navbar */}
      <div className=" flex justify-between items-center h-14 max-w-6xl mx-auto text-white px-2 border-b border-t border-gray-500">
        <div onClick={handleNav}>
          <AiOutlineMenu size={20} className="text-white" />
        </div>
        <div
          className={
            nav
              ? "bg-yellow-400 fixed left-0 top-0 w-full h-[300px] md:h-[250px] ease-in-out duration-500 text-base z-50"
              : "ease-in-out duration-500 fixed top-[-100%] h-screen w-screen left-0 "
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

            <nav className="px-10 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 text-black font-bold gap-4 cursor-pointer">
              <NavLink to="/#" onClick={handleNav}>
                Home
              </NavLink>
              <NavLink to="/about" onClick={handleNav}>
                About
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

        <div className="flex gap-x-2 pl-0 md:pl-44">
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
