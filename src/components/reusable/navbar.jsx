import React, { useEffect, useState } from "react";
import { IoMdMenu } from "react-icons/io";
import { IoCloseSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";

function NavBar() {

  const [scrolled, setScrolled] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function toggleMenu() {
    setShowMenu(!showMenu);
  }

  return (
    <nav className={`fixed w-full text-secondary_text z-50 text-xl h-20  top-0 ${scrolled ? "bg-white bg-opacity-70 text-black  " : "bg-transparent text-white"}`}>
      <div className="container mx-auto px-4 py-3 flex justify-between items-center ">
        <div className="px-8 space-x-8">
          <button className="lg:hidden z-50 p-5 absolute right-0 md:hidden text-2xl text-blue-300 focus:outline-none" onClick={toggleMenu}>
            {showMenu ?
              <IoCloseSharp className="text-white text-3xl" /> : <IoMdMenu className="text-white text-3xl" />
            }
          </button>
          <div className="hidden lg:block md:block text-white ">
            <ScrollLink className={` mr-10 ${scrolled ? 'text-black' : ' '}`} to="landing" smooth="true" duration={500} > <button>Home</button></ScrollLink>
            <ScrollLink className={` mr-10 ${scrolled ? 'text-black' : ' '}`} to="works" smooth="true" duration={500}> <button>Our Works</button></ScrollLink>
            <ScrollLink className={` mr-10 ${scrolled ? 'text-black' : ' '}`} to="services" smooth="true" duration={500} > <button>Services</button></ScrollLink>
          </div>
        </div>
        <div className="hidden lg:block md:block">
          <Link to="/contact">
            <button className="bg-gradient-to-r from-blue-500 to-blue-600 hover:bg-gradient-to-r ease-in-out  hover:from-blue-600 hover:to-blue-700 lg:hover:scale-110 md:hover:scale-105 text-white px-4 py-2 rounded-md">Contact Us</button>
          </Link>
        </div>
      </div>
      {
        showMenu && (
          <div className="lg:hidden w-full absolute top-0 sm:visible md:hidden font-medium bg-blue-100 p-7 rounded-md">
            <div className="flex flex-col space-y-4">
              <ScrollLink to="/" onClick={toggleMenu} className="  py-1 px-4 rounded-md ">Home</ScrollLink>
              <hr className="border-blue-200 my-2" />
              <ScrollLink to="/services" onClick={toggleMenu} className="  py-1 px-4 rounded-md ">Services</ScrollLink>
              <hr className="border-blue-200 my-2" />
              <ScrollLink to="/about" onClick={toggleMenu} className="  py-1 px-4 rounded-md ">About</ScrollLink>
              <hr className="border-blue-200 my-2" />
              <ScrollLink to="/contact" onClick={toggleMenu}>
                <button className="bg-blue-400 text-gray-800 py-2 px-4 rounded-md">Work With Us</button>
              </ScrollLink>
            </div>
          </div>
        )
      }
    </nav >
  );
}

export default NavBar;
