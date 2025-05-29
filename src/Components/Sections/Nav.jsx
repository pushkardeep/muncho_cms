import React, { useState } from "react";
import { Link } from "react-router-dom";

// Icons
import { AlignJustify, ChevronDown } from "lucide-react";

// components
import BigBtn from "./Components/Common/BigBtn";
import Menu from "./Components/Menu";

function Nav({ route = "Home" }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="w-full h-fit flex justify-between items-center relative ">
      {/* Left Part */}
      <div className="w-fit h-fit flex justify-center items-center gap-5">
        <div className="w-fit h-fit overflow-hidden relative ml-8 sm:ml-0">
          <img
            className="w-fit h-[50px] object-cover"
            src={"/Images/Demo/logo.png"}
            alt="logo"
          />
        </div>

        {["Home", "Menu", "SweepStake"].map((e, i) => {
          const isActive = e === route;
          return (
            <div
              key={i}
              className={`flex justify-center items-center ${
                isActive && "bg-[#EBEBEC] rounded-[0.5rem] px-2 py-1.5"
              }`}
            >
              <span
                className={`inter_reg text-[0.8rem] ${
                  isActive ? "text-black" : "text-[#4D4D4D]"
                }`}
              >
                {e}
              </span>
            </div>
          );
        })}

        <button
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="flex justify-center items-center gap-1 cursor-pointer"
        >
          <span className="text-[#4D4D4D] inter_reg text-[0.8rem]">More</span>
          <ChevronDown size={15} color="#4D4D4D" />
        </button>
      </div>

      {/* Right Part */}
      <div className="w-fit h-fit flex justify-center items-center gap-2">
        <div className="border border-[#D6D6D6] rounded-[0.5rem] px-3 py-1.5">
          <span className="text-[#4D4D4D] text-[0.8rem] inter_reg">
            Sign in
          </span>
        </div>

        <BigBtn title={"Order Online"} />
      </div>

      {/* Menu  */}
      {isMenuOpen && <Menu />}
    </nav>
  );
}

export default Nav;
