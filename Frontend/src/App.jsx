import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchSectionTabs,
  deleteSection,
  updateSectionTabs,
} from "./Redux/Slices/sections.slice";
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";

// Icons
import {
  Globe,
  CirclePlus,
  LockKeyhole,
  CirclePlay,
  RefreshCcw,
  ChevronsUpDown,
} from "lucide-react";

// Components
import Nav from "./Components/Sections/Nav";
import Hero from "./Components/Sections/Hero";
import Footer from "./Components/Sections/Footer";
import Gallery from "./Components/Sections/Gallery";
import Locations from "./Components/Sections/Locations";
import Faq from "./Components/Sections/Faq";
import SectionTab from "./Components/SectionTab";
import SectionMenu from "./Components/SectionMenu";

// Section component mapping
const sectionComponentMap = {
  Nav,
  Hero,
  Footer,
  Gallery,
  Locations,
  Faq,
};

function App() {
  // Set section as string 'Nav' instead of component
  const [currentSection, setCurrentSection] = useState({
    index: 0,
    section: "Nav",
  });
  const [isSectionMenuOpen, setIsSectionMenuOpen] = useState(false);

  const dispatch = useDispatch();

  const { sectionTabs } = useSelector((state) => state.sections);

  useEffect(() => {
    dispatch(fetchSectionTabs());
  }, [dispatch]);

  const toggleSectionMenu = () => {
    setIsSectionMenuOpen((prev) => !prev);
  };

  // Handle delete
  const handleDelete = (index, isLocked) => {
    if (!isLocked) {
      dispatch(deleteSection(index));
    }
  };

  // Split sections
  const lockedTop = sectionTabs.filter(
    (s) => s.isLocked && s.section !== "Footer"
  );
  const lockedBottom = sectionTabs.filter(
    (s) => s.isLocked && s.section === "Footer"
  );
  const unlocked = sectionTabs.filter((s) => !s.isLocked);

  // Handle drag end for unlocked only
  const onDragEnd = (result) => {
    if (!result.destination) return;
    const reordered = Array.from(unlocked);
    const [removed] = reordered.splice(result.source.index, 1);
    reordered.splice(result.destination.index, 0, removed);
    // Merge back with locked
    const newTabs = [...lockedTop, ...reordered, ...lockedBottom];
    dispatch(updateSectionTabs(newTabs));
  };

  // Callback to set current section after adding
  const handleSectionAdded = (sectionKey) => {
    // Find the new section's index
    const idx = sectionTabs.findIndex((s) => s.section === sectionKey);
    if (idx !== -1) {
      setCurrentSection({ index: idx, section: sectionKey });
    }
  };

  return (
    <div className="w-screen h-fit overflow-hidden relative">
      <div className="w-screen h-screen flex items-center overflow-hidden relative">
        {/* Left Most Tab Bar  */}
        <div className="w-[220px] h-full min-h-fit p-5 border-r border-r-[#E8E6ED]">
          {/* Logo  */}
          <div className="w-full h-fit overflow-hidden relative">
            <img
              className="w-[130px] h-fit object-cover"
              src="/Images/Logo.png"
              alt="Logo"
            />
          </div>

          {/* Tab  */}
          <div className="w-full h-fit rounded-[8px] bg-[#EEEBFA] flex justify-start items-center gap-2 p-3 mt-10 overflow-hidden relative">
            <Globe color="#4B21E2" size={21} />
            <span className="poppins_med text-[14px] text-[#4B21E2]">
              Website
            </span>
          </div>
        </div>

        <div className="flex-1 flex flex-col justify-center h-screen overflow-hidden relative">
          {/* Top Bar  */}
          <div className="w-full h-fit flex justify-between items-center p-5">
            {/* Left Tab Buttons  */}
            <div className="w-fit h-fit flex justify-start items-center gap-4">
              <button className="border-b-[3px] border-b-[#4B21E2] px-3 py-1.5">
                <span className="poppins_med text-[#4B21E2] text-[14px]">
                  Sections
                </span>
              </button>

              <button className="px-3 py-1.5">
                <span className="poppins_med text-[#201F33] text-[14px]">
                  Appearance
                </span>
              </button>
            </div>

            {/* Right Buttons */}
            <div className="w-fit h-fit flex justify-start items-center gap-4">
              <button className="flex justify-center items-center bg-black rounded-[8px] gap-2 px-3 py-2">
                <span className="poppins_reg text-[14px] text-white ">
                  Preview
                </span>
                <CirclePlay color="white" size={20} />
              </button>

              <button className="flex justify-center items-center bg-[#4B21E2] rounded-[8px] gap-2 px-3 py-2">
                <RefreshCcw color="white" size={20} />
                <span className="poppins_reg text-[14px] text-white ">
                  Update Website
                </span>
              </button>
            </div>
          </div>

          <div className="w-full flex-1 min-h-fit flex justify-center items-start">
            {/*  Section Tabs Bar  */}
            <div className="w-[300px] h-[90vh] border-r border-r-[#E8E6ED] px-5 overflow-visible relative">
              {/* Heading  */}
              <h1 className="poppins_med text-[#201F33] text-[24px]">
                Website
              </h1>

              {/* Add Section Bar  */}
              <div className="relative w-full">
                <button
                  onClick={toggleSectionMenu}
                  className="w-full h-fit bg-black rounded-[8px] flex justify-between items-center p-3 cursor-pointer mt-5"
                >
                  <span className="poppins_reg text-white text-[14px]">
                    Add Section
                  </span>
                  <CirclePlus color="white" size={24} />
                </button>
                {isSectionMenuOpen && (
                  <SectionMenu
                    setIsSectionMenuOpen={setIsSectionMenuOpen}
                    onSectionAdded={handleSectionAdded}
                  />
                )}
              </div>

              {/* Secton Tabs  */}
              {/* Locked Top Sections */}
              <div className="flex flex-col gap-3 mt-3">
                {lockedTop.map(({ name, section, isLocked }, index) => (
                  <SectionTab
                    key={section}
                    Icon={LockKeyhole}
                    title={name}
                    isActive={index === currentSection.index}
                    onClick={() => setCurrentSection({ index, section })}
                    showDelete={false}
                  />
                ))}
              </div>
              {/* Draggable Unlocked Sections */}
              <DragDropContext onDragEnd={onDragEnd}>
                <Droppable droppableId="sectionTabs">
                  {(provided) => (
                    <div
                      className="w-full h-fit flex flex-col justify-center items-center gap-3 mt-6 mb-6"
                      {...provided.droppableProps}
                      ref={provided.innerRef}
                    >
                      {unlocked.map(({ name, section }, idx) => (
                        <Draggable
                          key={section}
                          draggableId={section}
                          index={idx}
                        >
                          {(provided) => (
                            <div
                              ref={provided.innerRef}
                              {...provided.draggableProps}
                              {...provided.dragHandleProps}
                              className="w-full"
                            >
                              <SectionTab
                                Icon={ChevronsUpDown}
                                title={name}
                                isActive={
                                  sectionTabs.findIndex(
                                    (s) => s.section === section
                                  ) === currentSection.index
                                }
                                onClick={() =>
                                  setCurrentSection({
                                    index: sectionTabs.findIndex(
                                      (s) => s.section === section
                                    ),
                                    section,
                                  })
                                }
                                showDelete={true}
                                onDelete={() =>
                                  handleDelete(
                                    sectionTabs.findIndex(
                                      (s) => s.section === section
                                    ),
                                    false
                                  )
                                }
                              />
                            </div>
                          )}
                        </Draggable>
                      ))}
                      {provided.placeholder}
                    </div>
                  )}
                </Droppable>
              </DragDropContext>
              {/* Locked Bottom Sections */}
              <div className="flex flex-col gap-3 mt-3">
                {lockedBottom.map(({ name, section, isLocked }, index) => (
                  <SectionTab
                    key={section}
                    Icon={LockKeyhole}
                    title={name}
                    isActive={sectionTabs.length - 1 === currentSection.index}
                    onClick={() =>
                      setCurrentSection({
                        index: sectionTabs.length - 1,
                        section,
                      })
                    }
                    showDelete={false}
                  />
                ))}
              </div>
            </div>

            {/* Content Editing side  */}
            <div className="flex-1 h-[90vh] relative overflow-y-auto px-10">
              {sectionComponentMap[currentSection.section] &&
                React.createElement(
                  sectionComponentMap[currentSection.section]
                )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
