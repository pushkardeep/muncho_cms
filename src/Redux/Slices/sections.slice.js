import { createSlice } from "@reduxjs/toolkit";

// Permanent Sections
import Nav from "../../Components/Sections/Nav";
import Hero from "../../Components/Sections/Hero";

const sectionTabs = [
  {
    name: "Navigation Bar",
    isLocked: true,
    section: Nav,
  },
  {
    name: "Hero Section",
    isLocked: true,
    section: Hero,
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
      state.sectionTabs.splice(state.sectionTabs.length, 0, action.payload);
    },
  },
});

export const { addSection } = sectionsSlice.actions; // Export actions
export default sectionsSlice.reducer; // Export reducer
