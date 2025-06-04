import React from "react";

function SectionMenuOption({ Icon, label }) {
  return (
    <div className="w-full aspect-square bg-[#EEEBFA] flex flex-col justify-center items-center rounded-[8px] p-4 gap-2">
      <Icon color="#323232" size={45} />
      <span className="poppins_reg text-[14px] text-[#5C5C7A]">{label}</span>
    </div>
  );
}

export default SectionMenuOption;
