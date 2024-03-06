import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  profiles: [],
};

export const getProfiles = createAsyncThunk(
    "profiles/GETProfiles",
    async () => {
        try {
            const res = await axios.get(
                "https://striveschool-api.herokuapp.com/api/profile/",
              {
                headers: {
                  Authorization:
                    `Bearer ${process.env.REACT_APP_ACCESSTOKEN}`,
                },
              }
            );
            return await res.data;
          } catch (error) {
            console.log(error);
            throw error;
          }
    }
)

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
