import React from "react";
import { Link } from "react-router-dom";

function Menu() {
  return (
    <div className="w-full sm:w-[82%] h-screen sm:h-fit bg-white sm:rounded-[0.8rem] absolute top-[80px] left-1/2 -translate-x-1/2 px-10 sm:px-24 py-5 flex flex-col sm:flex-row sm:justify-between gap-4 z-30">
      {/* Column 1 */}
      <div className="flex flex-col gap-4 items-start">
        <Link
          className="bg-[#EBEBEC] text-black text-[0.8rem] font-['Inter-Med'] rounded-[0.5rem] px-2 py-1.5"
          href="/"
        >
          Home
        </Link>
        <Link
          className="text-[#4D4D4D] text-[0.8rem] font-['Inter-Reg']"
          href="/"
        >
          Menu
        </Link>
        <Link
          className="text-[#4D4D4D] text-[0.8rem] font-['Inter-Reg']"
          href="/"
        >
          Story
        </Link>
      </div>

      {/* Column 2 */}
      <div className="flex flex-col gap-4 items-start">
        <Link
          className="text-[#4D4D4D] text-[0.8rem] font-['Inter-Reg']"
          href="/"
        >
          Catering
        </Link>
        <Link
          className="text-[#4D4D4D] text-[0.8rem] font-['Inter-Reg']"
          href="/"
        >
          Careers
        </Link>
        <Link
          className="text-[#4D4D4D] text-[0.8rem] font-['Inter-Reg']"
          href="/"
        >
          Meet our team
        </Link>
      </div>

      {/* Column 3 */}
      <div className="flex flex-col gap-4 items-start">
        <Link
          className="text-[#4D4D4D] text-[0.8rem] font-['Inter-Reg']"
          href="/"
        >
          Gift Cards
        </Link>
        <Link
          className="text-[#4D4D4D] text-[0.8rem] font-['Inter-Reg']"
          href="/"
        >
          Press
        </Link>
      </div>

      {/* <div className="sm:hidden w-full flex-1 flex justify-center items-start">
        <Image
          className="w-[120px] h-fit object-cover mt-12"
          src={Logo}
          alt="logo"
        />
      </div> */}
    </div>
  );
}

export default Menu;
