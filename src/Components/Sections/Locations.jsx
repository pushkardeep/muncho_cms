import React, { useState } from "react";
import TabHeading from "../Common/TabHeading";

// Icons
import { Plus, ChevronRight, ChevronLeft } from "lucide-react";

// Components
import TextInput from "../Common/TextInput";
import SmButton from "../Common/SmButton";
import ToggleButton from "../Common/ToggleButton";

function Locations() {
  const locations = [
    {
      name: "Talkin' Tacos",
      city: "Miami, FL",
      address: "97 SW 8th St, Miami, FL 33130",
      phone: "(305) 602-4816",
      email: "info@talkintacos.net",
      mapQuery: "97 SW 8th St, Miami, FL 33130",
    },
    {
      name: "Another Location",
      city: "Florida",
      address: "456 Ocean Dr, Florida",
      phone: "(123) 456-7890",
      email: "contact@anotherlocation.com",
      mapQuery: "456 Ocean Dr, Florida",
    },
  ];

  const [selected, setSelected] = useState(0);
  const loc = locations[selected];

  return (
    <div className="w-full h-full min-h-fit flex flex-col justify-between items-center gap-10 overflow-hidden relative">
      {/* Headings  */}
      <TabHeading
        title={"Locations"}
        description={
          "The Location section comes before the footer usually. You can list location of your outlets here."
        }
      />

      {/* Location  */}
      <div className="w-full h-fit flex flex-col justify-start items-center gap-4">
        <div className="w-full h-fit flex justify-between items-center gap-4">
          <h1 className="w-full inter_med text-black text-[32px] tracking-[-2px]">
            Our locations
          </h1>

          <div className="w-fit h-fit flex justify-center items-center gap-2">
            <button className="w-fix h-fit aspect-square bg-[#EBEBEC] rounded-full shadow-2xl p-2 cursor-pointer">
              <ChevronLeft size={24} color="#323232" />
            </button>

            <button className="w-fix h-fit aspect-square bg-[#EBEBEC] rounded-full shadow-2xl p-2 cursor-pointer">
              <ChevronRight size={24} color="#323232" />
            </button>
          </div>
        </div>

        {/* Location Tabs */}
        <div className="w-full h-fit flex justify-start items-center gap-2 -mt-2">
          <button className="w-fit h-fit flex justify-center items-center gap-2 border-2 border-[#EBEBEC] px-4 py-2.5 rounded-full cursor-pointer">
            <span className="inter_med text-[14px] text-[#4D4D4D]">
              Miami, FL
            </span>
          </button>

          <button className="w-fit h-fit flex justify-center items-center gap-2 bg-[#EBEBEC] border-2 border-[#EBEBEC] px-4 py-2.5 rounded-full cursor-pointer">
            <span className="inter_med text-[14px] text-[#4D4D4D]">
              Florida
            </span>
          </button>
        </div>

        {/* Location Card */}
        <div className="w-full h-[380px] bg-[#EBEBEC] flex flex-row gap-6 rounded-[24px] p-5">
          {/* Map */}
          <iframe
            title="Map"
            src={`https://www.google.com/maps?q=${encodeURIComponent(
              loc.mapQuery
            )}&output=embed`}
            className="w-full aspect-square rounded-[14px] shadow-lg"
          ></iframe>

          {/* Details */}
          <div className="w-full h-full flex flex-col justify-between px-4 py-2">
            <div className="w-full h-fit flex justify-between items-center">
              <div className="w-fit h-fit leading-5">
                {/* Name and City */}
                <span className="block inter_reg text-[15px] text-[#4D4D4D]">
                  {loc.name}
                </span>
                <span className="block inter_med text-[15px] text-[#0D0D0D]">
                  {loc.city}
                </span>
              </div>

              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                  loc.mapQuery
                )}`}
                target="_blank"
                className="w-fit h-fit flex justify-center items-center gap-1.5 border-2 border-[#D6D6D6] px-2.5 py-2 rounded-lg"
              >
                <span className="inter_reg text-[14px] text-[#0D0D0D]">
                  Get Directions
                </span>

                <ChevronRight size={24} color="#323232" />
              </a>
            </div>

            <div className="w-full h-fit">
              <hr className="w-full border border-[#D6D6D6]" />

              {/* Address and Contact Details */}
              <div className="w-full h-fit flex justify-between items-center">
                {/* Address  */}
                <div className="w-full h-fit flex flex-col gap-2 mt-4">
                  <h6 className="inter_reg text-[12px] text-[#4D4D4D]">
                    Address
                  </h6>
                  <span className="block inter_reg text-[12px] text-[#0D0D0D]">
                    97 SW 8th St
                  </span>
                  <span className="block inter_reg text-[12px] text-[#0D0D0D]">
                    Miami, FL 33130
                  </span>
                </div>

                {/* Contact details  */}
                <div className="w-full h-fit flex flex-col gap-2 mt-4">
                  <h6 className="inter_reg text-[12px] text-[#4D4D4D]">
                    Contacts
                  </h6>
                  <span className="block inter_reg text-[12px] text-[#0D0D0D]">
                    (305) 602-4816
                  </span>
                  <span className="block inter_reg text-[12px] text-[#0D0D0D]">
                    Info@TalkinTacos.net
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Edit Section */}
      <div className="w-full h-[350px] flex justify-center items-start overflow-hidden relative">
        {/* Toggles  and Add Location */}
        <div className="w-full h-fit flex flex-col justify-center items-center gap-3">
          {/* Headings  */}
          <h3 className="w-full poppins_med text-[#201F33] text-[14px]">
            Edit
          </h3>

          {/* Ling Toggles and Add Locations */}
          <div className="w-full h-fit flex flex-col gap-3 p-4">
            {/* Location Toggles  */}
            <div className="w-full h-fit flex flex-col gap-2">
              <ToggleButton
                label={"Miami, FL"}
                showHover={true}
                showSlider={true}
                showArrow={true}
              />
              <ToggleButton
                label={"Florida"}
                showHover={true}
                showSlider={true}
                showArrow={true}
              />
            </div>

            {/* Add Location Button  */}
            <button className="w-full h-fit flex justify-center items-center gap-2 border-2 border-[#4B21E2] rounded-[8px] px-4 py-3 cursor-pointer">
              <span className="poppins_reg text-[#4B21E2] text-[15px]">
                Add more
              </span>
              <Plus size={16} color="#4B21E2" />
            </button>
          </div>
        </div>

        {/* Divider  */}
        <hr className="h-full border border-[#E8E6ED]" />

        {/* Form Fields */}
        <div className="w-full h-full px-4 overflow-y-auto pb-15 relative">
          <div className="w-full h-fit flex justify-between items-center gap-3">
            <h3 className="poppins_reg text-[#0D0D0D] text-[18px]">
              Miami, FL
            </h3>
            <SmButton title={"Save"} />
          </div>
          <form className="w-full h-fit flex flex-col gap-4 mt-4">
            <div>
              <label className="poppins_med text-[14px] text-black">
                Outlet name
              </label>
              <TextInput
                name={"Outlet name"}
                placeholder={"Miami, FL"}
                styles="text-[#201F33] placeholder:text-[#201F33]"
              />
            </div>
            <div>
              <label className="poppins_med text-[14px] text-black">
                Location
              </label>
              <TextInput
                name={"Location"}
                placeholder={"Anywhere block - 0, Anycity, Miami, FL - Pin:69"}
                styles="text-[#201F33] placeholder:text-[#201F33]"
              />
            </div>
            <div>
              <label className="poppins_med text-[14px] text-black">
                Contact number
              </label>
              <TextInput
                name={"Contact number"}
                placeholder={"+91"}
                styles="text-[#201F33] placeholder:text-[#201F33]"
              />
            </div>
            <div>
              <label className="poppins_med text-[14px] text-black">
                E-mail
              </label>
              <TextInput
                name={"E-mail"}
                placeholder={"Enter email here "}
                styles="text-[#201F33] placeholder:text-[#201F33]"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Locations;
