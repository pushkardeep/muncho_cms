import { createSlice } from "@reduxjs/toolkit";

// Permanent Sections
import Nav from "../../Components/Sections/Nav";
import Hero from "../../Components/Sections/Hero";
import Footer from "../../Components/Sections/Footer";

const sectionTabs = [
  {
    name: "Navigation Bar",
    isLocked: true,
    section: "Nav", // store as string
  },
  {
    name: "Hero Section",
    isLocked: true,
    section: "Hero",
  },
  {
    name: "Footer",
    isLocked: true,
    section: "Footer",
  },
];

const initialState = {
  sectionTabs,
};

const sectionsSlice = createSlice({
  name: "sections",
  initialState,
  reducers: {
    addSection: (state, action) => {
      state.sectionTabs.splice(state.sectionTabs.length - 1, 0, action.payload);
    },
  },
});

export const { addSection } = sectionsSlice.actions; // Export actions
export default sectionsSlice.reducer; // Export reducer
