import React from "react";
import { Link } from 'react-router-dom';
import { Link as ScrollLink } from "react-scroll";

function BottomNavBar() {
  return (
    <div className="bg-sub_color md:pb-20 md:pt-10 min-h-max h-auto w-full overflow-hidden z-50 bg-black text-white grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 px-4 md:px-10 py-6 ">
      <div className="flex flex-col items-center md:items-start mb-8 md:mb-0">
        <div className="font-bold text-xl md:text-2xl mb-2 md:mb-4">
          <Link to="/">
            Ping Communications
          </Link>
        </div>
        <div className="mb-2 md:mb-4 text-sm md:text-base text-gray-300">Your Telecommunication Companion</div>
      </div>
      <div className="flex flex-col items-center md:items-start mb-8 md:mb-0">
        <div className="font-bold text-xl md:text-2xl mb-2 md:mb-4">About Company</div>
        <ul className="list-none">
          <li className="mb-1 md:mb-2"><ScrollLink to="about" smooth={true} duration={500}><button>About</button></ScrollLink></li>
          <li className="mb-1 md:mb-2"><ScrollLink to="services" smooth={true} duration={500}><button>Services</button></ScrollLink></li>
        </ul>
      </div>
      <div className="flex flex-col items-center md:items-start">
        <div className="mt-3">
          <p className="font-bold text-xl md:text-2xl mb-2 md:mb-4">Contact Us:</p>
          <p>Email:
            <a href="mailto:admin@pingcomms.biz">
            admin@pingcomms.biz
            </a>
          </p>
          <p>Phone:
            <a href="tel:+61414519448">
            +61-414519448
            </a>
          </p>
          <p>14 Teller Street Tarneit, Tarneit, VIC, Australia, Victoria
          </p>
        </div>
      </div>
    </div>
  );
}

export default BottomNavBar;
