import React from "react";

// components
import Nav from "./common/Nav";
import BigBtn from "./Components/Common/BigBtn";

// Json
import TemplateData from "@/data/template.data.json";

function Hero() {
  return (
    <div className="w-full h-screen min-h-fit flex flex-col justify-center items-center overflow-hidden relative">
      <div className="w-full h-fit px-8 lg:px-14 py-4 md:py-6">
        <Nav route={"Home"} />
      </div>

      <div className="w-full flex-1 min-h-fit overflow-hidden relative pb-5">
        <div className="w-full h-full rounded-2xl overflow-hidden relative">
          <img
            className="absolute top-0 left-0 object-cover overflow-hidden z-0"
            // src={TemplateData.hero.image}
            alt="hero_image"
          />

          {/* overlay  */}
          <div className="w-full h-full bg-black/20 absolute top-0 left-0 z-10"></div>

          {/* texts  */}
          <div className="w-full h-full flex flex-col justify-center items-start gap-3 relative z-20 p-6 sm:p-12 md:p-28">
            <div className="w-fit flex justify-center items-center gap-2">
              <div className="h-[30px] border-[3.5px] border-white"></div>
              <h4 className="text-white text-[0.8rem] md:text-[1rem] font-['Inter-Reg']">
                {TemplateData.hero.text.subtitle}
              </h4>
            </div>
            <h1 className="w-full max-w-[650px] text-white text-[2rem] md:text-[3.5rem] font-['Inter-Med'] leading-11 md:leading-16">
              {TemplateData.hero.text.title}
            </h1>
            <BigBtn title={"Order Online"} link={"/"} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
