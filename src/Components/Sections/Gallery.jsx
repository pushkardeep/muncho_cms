import React from "react";

// Components
import TabHeading from "../Common/TabHeading";
import ImgUploader from "../Common/ImgUploader";
import SmButton from "../Common/SmButton";

function Gallery() {
  return (
    <div className="w-full h-full min-h-fit flex flex-col justify-start items-center gap-10 overflow-hidden relative pb-20">
      {/* Headings  */}
      <TabHeading title={"Gallery"} />

      {/* Gallery Section */}
      <div className="w-full flex flex-col justify-center items-center gap-3">
        <div className="w-full flex flex-col justify-center items-center leading-7">
          <h1 className="inter_med text-black text-[32px] tracking-[-2px]">
            Title will be here
          </h1>
          <h4 className="inter_reg text-[#4D4D4D] text-[12px]">
            Sub heading will be here
          </h4>
        </div>

        <div className="w-[500px] grid grid-cols-3 gap-2">
          <ImgUploader styles="bg-[#F8F7FA] aspect-square" />
          <ImgUploader styles="bg-[#F8F7FA] aspect-square" />
          <ImgUploader styles="bg-[#F8F7FA] aspect-square" />
          <ImgUploader styles="bg-[#F8F7FA] aspect-square" />
          <ImgUploader styles="bg-[#F8F7FA] aspect-square" />
          <ImgUploader styles="bg-[#F8F7FA] aspect-square" />
          <ImgUploader styles="bg-[#F8F7FA] aspect-square" />
          <ImgUploader styles="bg-[#F8F7FA] aspect-square" />
          <ImgUploader styles="bg-[#F8F7FA] aspect-square" />
        </div>
      </div>

      {/* Editing Part  */}
      <div className="w-full h-fit flex flex-col justify-center items-start gap-3 overflow-hidden relative">
        <div className="w-full h-fit flex justify-between items-center gap-3">
          <h3 className="poppins_med text-[#201F33] text-[14px]">Edit</h3>
          <SmButton title={"Save"} />
        </div>

        {/* Inputs  */}
        <div className="w-full h-fit flex justify-between items-center gap-3">
          {/* Text Inputs */}
          <input
            className="poppins_reg w-full text-[14px] text-[#5C5C7A] placeholder:text-[#5C5C7A] focus:outline-none px-2 py-3"
            type="text"
            placeholder="Write Title here"
          />
          <input
            className="poppins_reg w-full text-[14px] text-[#5C5C7A] placeholder:text-[#5C5C7A] focus:outline-none px-2 py-3"
            type="text"
            placeholder="Write Sub heading here"
          />
        </div>
      </div>
    </div>
  );
}

export default Gallery;
