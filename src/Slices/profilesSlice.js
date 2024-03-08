import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const key =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWVhMDU5NjAxM2I1MDAwMTljNWFlY2QiLCJpYXQiOjE3MDk4MzU2NzAsImV4cCI6MTcxMTA0NTI3MH0.eyWCgv9fntwzTyfJaN_lXwrm0vpErLwmlHLojSQ6Xfg";
const initialState = {
  allProfiles: [],
  profiles: [],
  filteredProfiles: [],
};

export const getProfiles = createAsyncThunk(
  "profiles/GETProfiles",
  async (url) => {
    try {
      const res = await axios.get(url, {
        headers: {
          Authorization: `Bearer ${key}`,
        },
      });
      return await res.data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
);

export const getAllProfiles = createAsyncThunk(
  "allprofiles/GETAllProfiles",
  async (url) => {
    try {
      const res = await axios.get(url, {
        headers: {
          Authorization: `Bearer ${key}`,
        },
      });
      return await res.data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
);

const profilesSlice = createSlice({
  name: "profiles",
  initialState,
  reducers: {
    filterProfiles: (state, action) => {
      const lowerCasePayload = action.payload.toLowerCase()
      console.log(state.allProfiles);
      state.filteredProfiles = state.allProfiles.filter((profile) => {
        const fullName = `${profile.name.toLowerCase()} ${profile.surname.toLowerCase()}`
        return fullName.includes(lowerCasePayload)
      });
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getProfiles.fulfilled, (state, action) => {
        state.profiles = action.payload;
      })
      .addCase(getAllProfiles.fulfilled, (state, action) => {
        state.allProfiles = action.payload;
      });
  },
});

export const allProfiles = (state) => state.profilesData.profiles;
export const trueAllProfiles = (state) => state.profilesData.allProfiles;
export const allFilteredProfiles = (state) => state.profilesData.filteredProfiles;
export const { filterProfiles } = profilesSlice.actions;

export default profilesSlice.reducer;
