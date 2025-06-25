import React from "react";
import TabHeading from "../Common/TabHeading";
import FeatureOption from "./Components/FeatureOption";

// Icons
import {
  ShoppingCart,
  WheatOff,
  Heart,
  CircleParking,
  Carrot,
  Handshake,
} from "lucide-react";

function Features() {
  return (
    <div className="w-full h-full min-h-fit flex flex-col justify-start items-center gap-10 overflow-hidden relative pb-20">
      <TabHeading
        title={"Features"}
        description={"You can add descroption of your choice"}
      />

      <div className="w-full flex flex-col justify-center items-center gap-10 relative overflow-hidden">
        <h1 className="inter_med text-black text-[32px] tracking-[-2px]">
          Featuring
        </h1>

        <div className="w-full h-fit grid grid-cols-3 gap-y-12">
          <FeatureOption Icon={ShoppingCart} label={"Catering"} />
          <FeatureOption Icon={WheatOff} label={"Gluten-Free Options"} />
          <FeatureOption Icon={Heart} label={"Heart Option"} />
          <FeatureOption Icon={CircleParking} label={"Easy Parking"} />
          <FeatureOption Icon={Carrot} label={"Veg Options"} />
          <FeatureOption Icon={Handshake} label={"Family Friendly"} />
        </div>
      </div>
    </div>
  );
}

export default Features;
