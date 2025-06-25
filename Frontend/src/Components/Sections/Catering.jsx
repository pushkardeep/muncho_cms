import React from "react";

import BigBtn from "./Components/Common/BigBtn";
import TabHeading from "../Common/TabHeading";

const Catering = () => {
  return (
    <div className="w-full h-full min-h-fit flex flex-col justify-start items-center gap-10 overflow-hidden relative pb-20">
      <TabHeading
        title={"Catering Card"}
        description={
          "You can add descroption of your choice"
        }
      />
      <div className="w-full h-fit relative overflow-hidden">
        {/* Background Image */}

        <div className="w-full h-[400px] relative rounded-[30px] overflow-hidden">
          <img
            className="w-full h-full object-cover"
            src="/Images/Demo/hero.jpeg"
            alt="img"
          />
        </div>

        {/* Floating Card Content */}
        <div className="w-[40%] max-w-[400px] h-[90%] bg-white/80 backdrop-blur-md flex flex-col justify-center items-start absolute top-1/2 -translate-y-1/2 left-[5%] -translate-x-[5%] space-y-6 rounded-4xl px-10 py-10 overflow-hidden">
          <h1 className="inter_med text-5xl tracking-tight text-black">
            Catering
          </h1>
          <p className="inter_reg w-full text-[14px] text-[#4D4D4D] tracking-tight leading-[17px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla natus
            laboriosam fuga dolores? Rerum corporis dolore quod non ratione
            vitae!
          </p>
          <BigBtn title={"Arrange Your Fiesta!"} />
        </div>
      </div>
    </div>
  );
};

export default Catering;
