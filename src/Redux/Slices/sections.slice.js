import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

export const sectionsSlice = createSlice({
  name: "sections",
  initialState,
  reducers: {},
});

export const {} = sectionsSlice.actions; // Export actions
export default sectionsSlice.reducer; // Export reducer
