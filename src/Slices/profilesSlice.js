import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const key =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWVhMDU5NjAxM2I1MDAwMTljNWFlY2QiLCJpYXQiOjE3MDk4MzU2NzAsImV4cCI6MTcxMTA0NTI3MH0.eyWCgv9fntwzTyfJaN_lXwrm0vpErLwmlHLojSQ6Xfg";
const initialState = {
  profiles: [],
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

const profilesSlice = createSlice({
  name: "profiles",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getProfiles.fulfilled, (state, action) => {
      state.profiles = action.payload;
    });
  },
});

export const allProfiles = (state) => state.profilesData.profiles;

export default profilesSlice.reducer;
