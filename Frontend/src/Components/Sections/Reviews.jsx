import React from "react";

import TabHeading from "../Common/TabHeading";
import ReviewCard from "./Components/ReviewCard";

function Reviews() {
  return (
    <div className="w-full h-full min-h-fit flex flex-col justify-start items-center gap-10 overflow-hidden relative pb-20">
      <TabHeading
        title={"Catering Card"}
        description={"You can add descroption of your choice"}
      />
      <div className="w-full flex flex-col justify-center items-center gap-3">
        <div className="w-full flex flex-col justify-center items-center leading-7">
          <h1 className="inter_med text-black text-[32px] tracking-[-2px]">
            What our guests are saying
          </h1>
          <h4 className="inter_reg text-[#4D4D4D] text-[12px]">
            Check out our most recent reviews!
          </h4>
        </div>

        <div className="w-full h-fit grid grid-cols-3 gap-5 mt-6">
          <ReviewCard />
          <ReviewCard />
          <ReviewCard />
          <ReviewCard />
        </div>
      </div>
    </div>
  );
}

export default Reviews;
