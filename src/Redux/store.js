import { configureStore } from "@reduxjs/toolkit";

// Slices
import sectionSlice from "./Slices/sections.slice";
export const store = configureStore({
  reducer: {
    sections: sectionSlice,
  },
});
