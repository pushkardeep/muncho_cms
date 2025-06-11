import React, { useState } from "react";

// Icons
import { ChevronDown, Plus } from "lucide-react";

// Components
import BigBtn from "./Components/Common/BigBtn";
import Menu from "./Components/Menu";
import LinkEditor from "../LinkEditor";
import TabHeading from "../Common/TabHeading";
import SmButton from "../Common/SmButton";

// Initial Link Data
const initialNavData = {
  displayedLinks: [
    { title: "Home", link: "https://google.com" },
    { title: "Menu", link: "https://google.com" },
    { title: "SweepStake", link: "https://google.com" },
  ],
  menuLinks: [
    { title: "Home", link: "https://google.com" },
    { title: "Menu", link: "https://google.com" },
    { title: "Story", link: "https://google.com" },
    { title: "Catering", link: "https://google.com" },
    { title: "Careers", link: "https://google.com" },
    { title: "Meet our team", link: "https://google.com" },
    { title: "Gift Cards", link: "https://google.com" },
    { title: "Press", link: "https://google.com" },
  ],
};

function Nav() {
  // State
  const [navData, setNavData] = useState(initialNavData);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeEditor, setActiveEditor] = useState({ type: null, index: null });
  const [linkInput, setLinkInput] = useState({ title: "", link: "" });

  const { displayedLinks, menuLinks } = navData;

  // Handlers
  const handleToggleEditor = (type, index) => {
    setActiveEditor((prev) =>
      prev.type === type && prev.index === index
        ? { type: null, index: null }
        : { type, index }
    );

    const currentLink = (type === "displayed" ? displayedLinks : menuLinks)[
      index
    ];
    setLinkInput(currentLink || { title: "", link: "" });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setLinkInput((prev) => ({ ...prev, [name]: value }));
  };

  const handleSaveLink = () => {
    const { type, index } = activeEditor;

    if (!type || index === null) return;

    setNavData((prevNavData) => {
      const isDisplayed = type === "displayed";
      const key = isDisplayed ? "displayedLinks" : "menuLinks";

      // Copy the existing links array
      const updatedLinks = [...prevNavData[key]];

      // Update the specific link
      updatedLinks[index] = { ...linkInput };

      // Return updated navData
      return {
        ...prevNavData,
        [key]: updatedLinks,
      };
    });

    // Clear the active editor state
    setActiveEditor({ type: null, index: null });
  };

  const handleAddMenuLink = () => {
    const newLinkData = { title: "Link", link: "https://example.com" };

    handleToggleEditor("menu", menuLinks.length);
    setLinkInput({ ...newLinkData });

    setNavData((prevNavData) => {
      return {
        ...prevNavData,
        menuLinks: [...prevNavData.menuLinks, { ...newLinkData }],
      };
    });
  };

  const handleDeleteMenuLink = () => {
    const { type, index } = activeEditor;

    if (type !== "menu" || index === null) return;

    setNavData((prevNavData) => {
      const menuLinks = prevNavData.menuLinks.filter((_, i) => index !== i);
      return {
        ...prevNavData,
        menuLinks,
      };
    });

    // Clear the active editor state
    setActiveEditor({ type: null, index: null });
  };

  const handleToggleMenu = () => setIsMenuOpen((prev) => !prev);

  return (
    <div className="w-full h-full min-h-fit flex flex-col items-center gap-10">
      {/* Heading */}
      <TabHeading
        title="Navigation Bar"
        description="The Navigation Bar comes on the top of the website. Your customers can navigate to different sections and go to the ordering platform directly."
      />

      {/* Navigation Bar Preview */}
      <nav className="w-full flex justify-between items-center relative">
        {/* Left Side - Logo + Displayed Links */}
        <div className="flex items-center gap-5">
          <img
            src="/Images/Demo/logo.png"
            alt="logo"
            className="h-[50px] object-cover"
          />

          {displayedLinks.map(({ title }, index) => (
            <span
              key={index}
              className={`inter_reg text-[0.8rem] ${
                title === "Home"
                  ? "text-black bg-[#EBEBEC] rounded-[0.5rem] px-2 py-1.5"
                  : "text-[#4D4D4D]"
              }`}
            >
              {title}
            </span>
          ))}

          <button
            onClick={handleToggleMenu}
            className="flex items-center gap-1 cursor-pointer"
          >
            <span className="text-[#4D4D4D] inter_reg text-[0.8rem]">More</span>
            <ChevronDown size={15} color="#4D4D4D" />
          </button>
        </div>

        {/* Right Side - Sign In + CTA */}
        <div className="flex items-center gap-2">
          <div className="border border-[#D6D6D6] rounded-[0.5rem] px-3 py-1.5">
            <span className="text-[#4D4D4D] text-[0.8rem] inter_reg">
              Sign in
            </span>
          </div>
          <BigBtn title="Order Online" />
        </div>

        {/* More Menu Dropdown */}
        {isMenuOpen && <Menu links={menuLinks} active="Home" />}
      </nav>

      {/* Link Editing Section */}
      <div className="w-full flex flex-col gap-6 mt-10">
        <h3 className="poppins_med text-[#201F33] text-[14px]">Edit</h3>

        {/* Displayed Links Editor */}
        <div className="w-[700px] flex flex-col gap-3">
          <h3 className="poppins_med text-[#5C5C7A] text-[14px]">
            Displayed Links
          </h3>
          <div className="grid grid-cols-4 gap-x-5 gap-y-3">
            {displayedLinks.map(({ title }, index) => (
              <LinkEditor
                key={index}
                title={title}
                lableValue={linkInput.title}
                linkValue={linkInput.link}
                onLableChange={handleInputChange}
                onLinkChange={handleInputChange}
                onClick={() => handleToggleEditor("displayed", index)}
                onSave={handleSaveLink}
                isActive={
                  activeEditor.type === "displayed" &&
                  activeEditor.index === index
                }
              />
            ))}
          </div>
        </div>

        {/* Menu Links Editor */}
        <div className="w-[700px] flex flex-col gap-3">
          <h3 className="poppins_med text-[#5C5C7A] text-[14px]">More Links</h3>
          <div className="grid grid-cols-4 gap-x-5 gap-y-3">
            {menuLinks.map(({ title }, index) => (
              <LinkEditor
                key={index}
                title={title}
                enableDelete={true}
                lableValue={linkInput.title}
                linkValue={linkInput.link}
                onLableChange={handleInputChange}
                onLinkChange={handleInputChange}
                onClick={() => handleToggleEditor("menu", index)}
                onSave={handleSaveLink}
                onDelete={handleDeleteMenuLink}
                isActive={
                  activeEditor.type === "menu" && activeEditor.index === index
                }
              />
            ))}

            {/* Add Link Button */}
            <button
              onClick={handleAddMenuLink}
              className="w-fit flex items-center gap-2 p-2 rounded-[8px] hover:bg-[#EEEBFA] cursor-pointer"
            >
              <Plus color="black" size={17} />
              <span className="poppins_reg text-black text-[14px]">Add</span>
            </button>
          </div>

          <SmButton title="Save" styles="mt-2.5" />
        </div>
      </div>
    </div>
  );
}

export default Nav;
