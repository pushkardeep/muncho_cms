import React from "react";

// components
import DishesCard from "./Components/DishesCard";
import TabHeading from "../Common/TabHeading";

export default function Dishes() {
  return (
    <div className="w-full h-full min-h-fit flex flex-col justify-start items-center gap-10 overflow-hidden relative pb-20">
      <TabHeading
        title={"Dishes Card"}
        description={"You can add descroption of your choice"}
      />

      <div className="w-full min-h-fit relative ">
        {/* Texts */}
        <div className="w-full flex flex-col justify-center items-center leading-7">
          <h1 className="inter_med text-black text-[32px] tracking-[-2px]">
            Dishes
          </h1>
          <h4 className="inter_reg text-[#4D4D4D] text-[12px]">
            Thats dishes section
          </h4>
        </div>

        {/* Scrollable & Draggable Dish Cards */}
        <div className="w-fit flex justify-center items-center gap-5 mt-6">
          <DishesCard />
          <DishesCard />
          <DishesCard />
          <DishesCard />
          <DishesCard />
          <DishesCard />
          <DishesCard />
        </div>
      </div>
    </div>
  );
}
