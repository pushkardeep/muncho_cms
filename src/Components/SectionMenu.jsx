import React from "react";

// Icons
import {
  Images,
  Book,
  SquareKanban,
  MessagesSquare,
  MapPinned,
  SquareChartGantt,
} from "lucide-react";

// Components
import SectionMenuOption from "./SectionMenuOption";

function SectionMenu() {
  return (
    <div className="absolute top-[120%] left-0 w-full h-fit grid grid-cols-2 gap-2 rounded-[8px] bg-white shadow p-2 z-50">
      <SectionMenuOption Icon={Images} label={"Gallery"} />
      <SectionMenuOption Icon={SquareChartGantt} label={"Features"} />
      <SectionMenuOption Icon={Book} label={"Menu"} />
      <SectionMenuOption Icon={SquareKanban} label={"Reviews"} />
      <SectionMenuOption Icon={MessagesSquare} label={"Faqs"} />
      <SectionMenuOption Icon={MapPinned} label={"Locations"} />
    </div>
  );
}

export default SectionMenu;
