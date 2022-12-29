import React, { useState } from "react";
import Logo from "../assets/logo.png";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { FaDiscord } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="text-white">
      {/* This is logo */}
      <div className="flex justify-center p-4">
        <img src={Logo} alt="" className="w-[400px]" />
      </div>

      {/* This is navbar */}
      <div className=" flex justify-between items-center h-14 max-w-6xl mx-auto text-white px-1 sm:px-4">
        <div onClick={handleNav}>
          <AiOutlineMenu size={20} className="text-white" />
        </div>
        <div
          className={
            nav
              ? "bg-yellow-400 fixed left-0 top-0 w-[100%] h-[450px] sm:h-[300px] border-r ease-in-out duration-500 text-base"
              : "hidden"
          }
        >
          <div className="p-10 flex justify-between">
            <div onClick={handleNav} className="text-black">
              <AiOutlineClose />
            </div>
            <div className="flex gap-x-4 text-black text-[20px]">
              <FaDiscord />
              <FaDiscord />
              <FaDiscord />
              <FaDiscord />
              <FaDiscord />
            </div>
          </div>

          <nav className="max-w-[800px] px-10 flex gap-10 flex-wrap text-black font-medium">
            <NavLink to="/#">Home</NavLink>
            <NavLink to="/info">Info</NavLink>
            <NavLink to="/about">About</NavLink>
          </nav>
        </div>

        <div className="flex gap-x-2">
          <button>Connect Wallet</button>
          <button>Collector Fund</button>
          <button className="bg-[#DEAF07] hover:bg-white">Sign up</button>
        </div>
        <div className="hidden md:flex">
          <div className=" gap-x-4 text-white text-[20px] flex">
            <FaDiscord />
            <FaDiscord />
            <FaDiscord />
            <FaDiscord />
            <FaDiscord />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
