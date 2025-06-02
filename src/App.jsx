import React from "react";
import {
  Globe,
  CirclePlus,
  LockKeyhole,
  CirclePlay,
  RefreshCcw,
} from "lucide-react";

// Components
import SectionTab from "./Components/SectionTab";
import Nav from "./Components/Sections/Nav";
import Hero from "./Components/Sections/Hero";

function App() {
  return (
    <div className="w-screen h-fit overflow-hidden relative">
      <div className="w-screen h-screen flex items-center overflow-hidden relative">
        {/* Left Most Tab Bar  */}
        <div className="w-[220px] h-full min-h-fit p-5 border-r border-r-[#E8E6ED]">
          {/* Logo  */}
          <div className="w-full h-fit overflow-hidden relative">
            <img
              className="w-[130px] h-fit object-cover"
              src="/Images/Logo.png"
              alt="Logo"
            />
          </div>

          {/* Tab  */}
          <div className="w-full h-fit rounded-[8px] bg-[#EEEBFA] flex justify-start items-center gap-2 p-3 mt-10 overflow-hidden relative">
            <Globe color="#4B21E2" size={21} />
            <span className="poppins_med text-[14px] text-[#4B21E2]">
              Website
            </span>
          </div>
        </div>

        <div className="flex-1 flex flex-col justify-center h-screen overflow-hidden relative">
          {/* Top Bar  */}
          <div className="w-full h-fit flex justify-between items-center p-5">
            {/* Left Tab Buttons  */}
            <div className="w-fit h-fit flex justify-start items-center gap-4">
              <button className="border-b-[3px] border-b-[#4B21E2] px-3 py-1.5">
                <span className="poppins_med text-[#4B21E2] text-[14px]">
                  Sections
                </span>
              </button>

              <button className="px-3 py-1.5">
                <span className="poppins_med text-[#201F33] text-[14px]">
                  Appearance
                </span>
              </button>
            </div>

            {/* Right Buttons */}
            <div className="w-fit h-fit flex justify-start items-center gap-4">
              <button className="flex justify-center items-center bg-black rounded-[8px] gap-2 px-3 py-2">
                <span className="poppins_reg text-[14px] text-white ">
                  Preview
                </span>
                <CirclePlay color="white" size={20} />
              </button>

              <button className="flex justify-center items-center bg-[#4B21E2] rounded-[8px] gap-2 px-3 py-2">
                <RefreshCcw color="white" size={20} />
                <span className="poppins_reg text-[14px] text-white ">
                  Update Website
                </span>
              </button>
            </div>
          </div>

          <div className="w-full flex-1 min-h-fit flex justify-center items-start">
            {/*  Section Tabs Bar  */}
            <div className="w-[300px] h-[90vh] border-r border-r-[#E8E6ED] px-5 overflow-y-auto">
              {/* Heading  */}
              <h1 className="poppins_med text-[#201F33] text-[24px]">
                Website
              </h1>

              {/* Add Section Bar  */}
              <div className="w-full h-fit bg-black rounded-[8px] flex justify-between items-center p-3 cursor-pointer mt-5">
                <span className="poppins_reg text-white text-[14px]">
                  Add Section
                </span>
                <CirclePlus color="white" size={24} />
              </div>

              {/* Secton Tabs  */}
              <div className="w-full h-fit flex flex-col justify-center items-center gap-3 mt-3">
                <SectionTab
                  Icon={LockKeyhole}
                  title={"Navigation Bar"}
                  isActive={false}
                />
                <SectionTab
                  Icon={LockKeyhole}
                  title={"Hero Section"}
                  isActive={false}
                />
                <SectionTab
                  Icon={LockKeyhole}
                  title={"Footer"}
                  isActive={true}
                />
              </div>
            </div>

            {/* Content Editing side  */}
            <div className="flex-1 h-[90vh] relative overflow-y-auto px-10">
              <Hero />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
