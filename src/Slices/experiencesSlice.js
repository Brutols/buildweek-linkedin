import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  experiences: [],
  show: false,
};

export const getExperiences = createAsyncThunk(
  "experiences/GETExperiences",

  async (url) => {
    try {
      const res = await axios.get(url, {
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_ACCESSTOKEN}`,
        },
      });
      console.log(res.data);
      return await res.data;
    } catch (e) {
      console.log(e);
      throw e;
    }
  }
);

const experiencesSlice = createSlice({
  name: "experiences",
  initialState,
  reducers: {
    setShow: (state) => {
        state.show = !state.show
    }
  },
  extraReducers: (builder) => {
    builder.addCase(getExperiences.fulfilled, (state, action) => {
      state.experiences = action.payload;
    });
  },
});

export const allExperiences = (state) => state.experiencesData.experiences;
export const isShow = (state) => state.experiencesData.show
export const {setShow} = experiencesSlice.actions

export default experiencesSlice.reducer;
