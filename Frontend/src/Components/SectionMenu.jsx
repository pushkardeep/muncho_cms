import React from "react";

// Redux
import { useDispatch } from "react-redux";

// Actions
import { addSection } from "../Redux/Slices/sections.slice";

// Components
import SectionMenuOption from "./SectionMenuOption";

// Sections
import Gallery from "./Sections/Gallery";
import Locations from "./Sections/Locations";
import Faq from "./Sections/Faq";

// Icons
import {
  Images,
  Book,
  SquareKanban,
  MessagesSquare,
  MapPinned,
  SquareChartGantt,
} from "lucide-react";

function SectionMenu({ setIsSectionMenuOpen }) {
  const dispatch = useDispatch();

  // Function to handle adding a section on click
  // It dispatches the addSection action with the section data
  const handleSection = (name, sectionKey) => {
    const data = {
      name: name,
      isLocked: false,
      section: sectionKey, // store as string
    };
    dispatch(addSection(data)); // Dispatch the action to add the section
    setIsSectionMenuOpen((prev) => !prev); // Toggle the section menu visibility
  };
  return (
    <div className="absolute top-[50%] -translate-y-[50%] left-1/2 -translate-x-1/2 w-[95%] h-fit grid grid-cols-2 gap-2 rounded-[8px] bg-white shadow p-2 z-50">
      <SectionMenuOption
        Icon={Images}
        label={"Gallery"}
        onClick={() => handleSection("Gallery Section", "Gallery")}
      />
      <SectionMenuOption Icon={SquareChartGantt} label={"Features"} />
      <SectionMenuOption Icon={Book} label={"Menu"} />
      <SectionMenuOption Icon={SquareKanban} label={"Reviews"} />
      <SectionMenuOption
        Icon={MessagesSquare}
        label={"Faqs"}
        onClick={() => handleSection("FAQs Section", "Faq")}
      />
      <SectionMenuOption
        Icon={MapPinned}
        label={"Locations"}
        onClick={() => handleSection("Locations Section", "Locations")}
      />
    </div>
  );
}

export default SectionMenu;
