import React from "react";

// Icons
import { Pencil } from "lucide-react";

function LinkEditor({ title }) {
  return (
    <button className="w-fit h-fit flex justify-center items-center gap-2 rounded-[8px] p-2 hover:bg-[#EEEBFA] cursor-pointer ">
      <span className="poppins_reg text-black text-[14px]">{title}</span>
      <Pencil color="#5C5C7A" size={17} />
    </button>
  );
}

export default LinkEditor;
