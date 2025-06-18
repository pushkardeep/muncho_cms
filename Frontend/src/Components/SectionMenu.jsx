import React from "react";

// Redux
import { useDispatch, useSelector } from "react-redux";

// Actions
import { addSection, saveSectionTabs } from "../Redux/Slices/sections.slice";

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

function SectionMenu({ setIsSectionMenuOpen, onSectionAdded }) {
  const dispatch = useDispatch();
  const sectionTabs = useSelector((state) => state.sections.sectionTabs);

  // Function to handle adding a section on click
  // It dispatches the addSection action with the section data
  const handleSection = (name, sectionKey) => {
    const data = {
      name: name,
      isLocked: false,
      section: sectionKey, // store as string
    };
    dispatch(addSection(data)); // Dispatch the action to add the section
    // Save to backend after adding
    setTimeout(() => {
      dispatch(
        saveSectionTabs([
          ...sectionTabs.slice(0, sectionTabs.length - 1),
          data,
          sectionTabs[sectionTabs.length - 1],
        ])
      );
      if (onSectionAdded) {
        // Call the callback to update current section in App.jsx
        onSectionAdded(sectionKey);
      }
    }, 0);
    setIsSectionMenuOpen((prev) => !prev); // Toggle the section menu visibility
  };
  return (
    <div className="absolute -left-5 top-full mt-3 w-[300px] h-fit grid grid-cols-2 gap-2 rounded-[8px] bg-white shadow p-2 z-50">
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
