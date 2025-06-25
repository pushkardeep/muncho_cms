import React from "react";

import BigBtn from "./Components/Common/BigBtn";
import TabHeading from "../Common/TabHeading";

const GiftCard = () => {
  return (
    <div className="w-full h-full min-h-fit flex flex-col justify-start items-center gap-10 overflow-hidden relative pb-20">
      <TabHeading
        title={"Catering Card"}
        description={"You can add descroption of your choice"}
      />
      <div className="w-full h-[300px] flex justify-between items-center gap-30 relative overflow-hidden">
        {/* Text Section */}
        <div className="w-[300px] h-full flex flex-col justify-end items-start gap-10 overflow-hidden">
          <h1 className="inter_med text-5xl tracking-tight text-black">
            Gift cards
          </h1>
          <p className="inter_reg w-full text-[14px] text-[#4D4D4D] tracking-tight leading-[17px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla natus
            laboriosam fuga dolores? Rerum corporis dolore quod non ratione
            vitae!
          </p>
          <BigBtn title={"Gift someone!"} />
        </div>

        {/* Image Section */}
        <div className="flex-1 h-[300px] relative overflow-hidden rounded-[14px]">
          <img
            className="w-full h-full object-cover"
            src="/Images/Demo/hero.jpeg"
            alt="img"
          />
        </div>
      </div>
    </div>
  );
};

export default GiftCard;
