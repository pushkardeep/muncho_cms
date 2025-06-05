import React, { useState } from "react";

// Icons
import { ChevronDown, Plus } from "lucide-react";

// components
import BigBtn from "./Components/Common/BigBtn";
import Menu from "./Components/Menu";
import LinkEditor from "../LinkEditor";
import TabHeading from "../Common/TabHeading";
import SmButton from "../Common/SmButton";

function Nav({ route = "Home" }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="w-full h-full min-h-fit flex flex-col justify-start items-center gap-10">
      {/* Headings  */}
      <TabHeading
        title={"Navigation Bar"}
        description={
          "The Navigation Bar comes on the top of the website. Your customers can navigate to different sections and go to the ordering platform directly."
        }
      />

      {/* Navr Bar  */}
      <nav className="w-full h-fit flex justify-between items-center relative">
        {/* Left Part */}
        <div className="w-fit h-fit flex justify-center items-center gap-5">
          <div className="w-fit h-fit overflow-hidden relative">
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

      {/* Editing Part  */}
      <div className="w-full h-fit flex flex-col justify-center items-start gap-3 overflow-hidden relative mt-10">
        <h3 className="poppins_med text-[#201F33] text-[14px]">Edit</h3>
        {/* Displaying Links */}
        <div className="w-fit h-fit flex flex-col justify-center items-start gap-3">
          <h3 className="poppins_med text-[#5C5C7A] text-[14px]">
            Displayed Links
          </h3>
          <div className="w-fit h-fit flex justify-center items-center gap-3">
            <LinkEditor title={"Home"} />
            <LinkEditor title={"Menu"} />
            <LinkEditor title={"Sweepstakes"} />
          </div>
        </div>

        {/* More Links */}
        <div className="w-fit h-fit flex flex-col justify-center items-start gap-3">
          <h3 className="poppins_med text-[#5C5C7A] text-[14px]">More Links</h3>
          <div className="w-fit h-fit flex justify-center items-center gap-3">
            <LinkEditor title={"Home"} />
            <LinkEditor title={"Gift card section"} />
            <LinkEditor title={"Sweepstakes"} />

            {/* Add more  */}
            <button className="w-fit h-fit flex justify-center items-center gap-2 rounded-[8px] p-2 hover:bg-[#EEEBFA] cursor-pointer ">
              <Plus color="black" size={17} />
              <span className="poppins_reg text-black text-[14px]">Add</span>
            </button>
          </div>
          <SmButton title={"Save"} styles={"mt-2.5"} />
        </div>
      </div>
    </div>
  );
}

export default Nav;
