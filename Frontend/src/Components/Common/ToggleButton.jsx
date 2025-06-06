import React from "react";

// Icons
import { ChevronsUpDown, ChevronRight } from "lucide-react";

function ToggleButton({
  label,
  isActive = false,
  showHover = false,
  showSlider = false,
  showArrow = false,
}) {
  return (
    <div
      className={`w-full h-fit flex justify-between items-center gap-2 p-4 rounded-[8px] cursor-pointer ${
        showHover ? "hover:bg-[#EEEBFA] transition-colors duration-200" : ""
      } ${isActive ? "bg-[#EEEBFA]" : "bg-transparent"}`}
    >
      <div className="w-full h-fit flex justify-start items-center gap-2">
        {showSlider && (
          <ChevronsUpDown
            color={`${isActive ? "#4B21E2" : "#5C5C7A"}`}
            size={24}
            className="cursor-s-resize"
          />
        )}
        <span
          className={`poppins_reg text-[15px] ${
            isActive ? "text-[#4B21E2]" : "text-[#5C5C7A]"
          }`}
        >
          {label}
        </span>
      </div>

      <div className="w-full h-fit flex justify-end items-center gap-2">
        {/* Toggle Button  */}
        <div className="w-[35px] h-fit bg-[#5C5C7A] rounded-full p-[3px]">
          <div className="w-[12px] aspect-square bg-white rounded-full"></div>
        </div>

        {showArrow && (
          <ChevronRight
            color={`${isActive ? "#4B21E2" : "#5C5C7A"}`}
            size={24}
          />
        )}
      </div>
    </div>
  );
}

export default ToggleButton;
