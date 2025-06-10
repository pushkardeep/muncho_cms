import React, { useState } from "react";

// Icons
import { Facebook, Instagram } from "lucide-react";

// Components
import TabHeading from "../Common/TabHeading";
import SmButton from "../Common/SmButton";
import BigBtn from "./Components/Common/BigBtn";
import ToggleButton from "../Common/ToggleButton";

const footerConfigs = {
  links: [
    { label: "Home", href: "/", enabled: true },
    { label: "Catering", href: "/catering", enabled: true },
    { label: "Gift Cards", href: "/gift-cards", enabled: true },
    { label: "Menu", href: "/menu", enabled: true },
    { label: "Careers", href: "/careers", enabled: true },
    { label: "Sweepstakes", href: "/sweepstakes", enabled: true },
    { label: "Press", href: "/press", enabled: true },
    { label: "Meet Our Team", href: "/team", enabled: true },
  ],

  legalLinks: [
    { label: "Order Terms" },
    { label: "Terms of Use" },
    { label: "Privacy Policy" },
    { label: "Accessibility Statement" },
  ],
};

function Footer() {
  const [footerData, setFooterData] = useState(footerConfigs);
  const { links, legalLinks } = footerData;

  const handleLinksToggling = (index) => {
    const linksCopy = [...links];
    linksCopy[index] = {
      ...linksCopy[index],
      enabled: !linksCopy[index].enabled,
    };

    setFooterData((prev) => {
      return {
        ...prev,
        links: linksCopy,
      };
    });
  };

  return (
    <div className="w-full h-full min-h-fit flex flex-col justify-start items-center gap-10 overflow-hidden relative pb-20">
      {/* Headings  */}
      <TabHeading
        title={"Footer"}
        description={
          "The Footer comes at the very last of the website, this section has links to every section on the website. You can enable and disable the links."
        }
      />

      {/* Footer  */}
      <footer className="w-full h-fit overflow-hidden relative">
        <div className="w-full h-fit flex flex-col justify-between items-center bg-[#EBEBEC] rounded-[24px] px-12 pt-12 pb-6">
          <div className="w-full h-fit flex justify-between items-start">
            {/* Logo */}
            <div className="w-fit h-fit overflow-hidden relative">
              <img
                className="w-fit h-[60px] object-cover"
                src={"/Images/Demo/logo.png"}
                alt="logo"
              />
            </div>

            {/* Page Links */}
            <div className="w-fit h-fit grid grid-cols-3 gap-x-16 gap-y-4">
              {links
                .filter(({ enabled }, _) => enabled)
                .map(({ label }, index) => (
                  <span
                    key={index}
                    className="inter_reg text-[13px] text-[#0D0D0D]"
                  >
                    {label}
                  </span>
                ))}
            </div>
            <BigBtn title={"Order Now"} />
          </div>

          <div className="w-full h-fit flex flex-col justify-center items-end gap-6 mt-8">
            {/* Divider */}
            <hr className="w-[78%] border border-gray-300" />

            {/* Legal Links */}
            <div className="w-[78%] h-fit flex justify-start gap-8 text-gray-600 text-xs md:text-sm mb-4">
              {legalLinks.map(({ label }, index) => (
                <span
                  key={index}
                  className="inter_reg text-[10px] text-[#4D4D4D]"
                >
                  {label}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="w-full h-fit flex justify-between items-center p-4">
          <div className="w-fit h-fit flex justify-center items-center gap-2">
            <Facebook size={24} color="#4D4D4D" />
            <Instagram size={24} color="#4D4D4D" />
          </div>

          <span className="inter_reg text-[12px] text-[#4D4D4D]">
            Batata Group, LLC 2025 All Rights Reserved
          </span>

          <button className="flex justify-center items-center border border-[#E5E7EB] rounded-full px-3 py-2">
            <span className="inter_reg text-[12px] text-[#4D4D4D]">
              Mande with Muncho
            </span>
          </button>
        </div>
      </footer>

      {/* Editing Part  */}
      <div className="w-full h-fit flex flex-col justify-center items-start gap-3 overflow-hidden relative">
        <div className="w-full h-fit flex justify-between items-center gap-3">
          <h3 className="poppins_med text-[#201F33] text-[14px]">Edit</h3>
          <SmButton title={"Save"} />
        </div>

        {/* Link Toggles  */}
        <div className="w-full h-fit grid grid-cols-3 gap-2">
          {links.map(({ label, enabled }, index) => (
            <ToggleButton
              key={index}
              label={label}
              isEnabled={enabled}
              onToggle={() => handleLinksToggling(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Footer;
