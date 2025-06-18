import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { sendSectionTabs } from "../../api";
import axios from "axios";

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

// Async thunk to send sectionTabs to backend
export const saveSectionTabs = createAsyncThunk(
  "sections/saveSectionTabs",
  async (sectionTabs, thunkAPI) => {
    try {
      const response = await sendSectionTabs(sectionTabs);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// Async thunk to fetch sectionTabs from backend
export const fetchSectionTabs = createAsyncThunk(
  "sections/fetchSectionTabs",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("http://localhost:5001/api/sections", {
        withCredentials: true,
      });
      return response.data.sectionTabs;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// Async thunk to delete a section by index
export const deleteSection = createAsyncThunk(
  "sections/deleteSection",
  async (index, thunkAPI) => {
    try {
      const response = await axios.delete(
        `http://localhost:5001/api/sections/${index}`,
        { withCredentials: true }
      );
      return response.data.sectionTabs;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// Async thunk to update/reorder sectionTabs
export const updateSectionTabs = createAsyncThunk(
  "sections/updateSectionTabs",
  async (sectionTabs, thunkAPI) => {
    try {
      const response = await axios.put(
        "http://localhost:5001/api/sections",
        { sectionTabs },
        { withCredentials: true }
      );
      return response.data.sectionTabs;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const sectionsSlice = createSlice({
  name: "sections",
  initialState,
  reducers: {
    addSection: (state, action) => {
      state.sectionTabs.splice(state.sectionTabs.length - 1, 0, action.payload);
    },
    removeSection: (state, action) => {
      state.sectionTabs.splice(action.payload, 1);
    },
    setSectionTabs: (state, action) => {
      state.sectionTabs = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchSectionTabs.fulfilled, (state, action) => {
        if (Array.isArray(action.payload) && action.payload.length > 0) {
          state.sectionTabs = action.payload;
        }
      })
      .addCase(deleteSection.fulfilled, (state, action) => {
        state.sectionTabs = action.payload;
      })
      .addCase(updateSectionTabs.fulfilled, (state, action) => {
        state.sectionTabs = action.payload;
      });
  },
});

export const { addSection } = sectionsSlice.actions; // Export actions
export const selectSectionTabs = (state) => state.sections.sectionTabs; // Export selector
export default sectionsSlice.reducer; // Export reducer
