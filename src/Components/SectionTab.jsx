import React from "react";

function SectionTab({ Icon, title, isActive, styles = "" }) {
  return (
    <div
      className={`w-full h-fit rounded-[8px] flex justify-start items-center gap-2 p-3 cursor-pointer ${
        isActive ? "bg-[#EEEBFA]" : "bg-[#F8F7FA]"
      } ${styles}`}
    >
      <Icon color={`${isActive ? "#4B21E2" : "#5C5C7A"}`} size={24} />
      <span
        className={`poppins_reg text-[14px] ${
          isActive ? "text-[#4B21E2]" : "text-[#5C5C7A]"
        }`}
      >
        {title}
      </span>
    </div>
  );
}

export default SectionTab;
