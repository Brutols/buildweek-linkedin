import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  experiences: [],
  isRefresh: false,
  show: false,
  formData: {
    role: "",
    company: "",
    startDate: "",
    endDate: "",
    description: "",
    area: "",
  },
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

export const postExperience = createAsyncThunk(
  "experiences/POSTExperiences",
  async ({ url, data }) => {
    try {
      await axios.post(url, data, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.REACT_APP_ACCESSTOKEN}`,
        },
      });
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
      state.show = !state.show;
    },
    setFormData: (state, { payload }) => {
      const { name, value } = payload;
      state.formData = {
        ...state.formData,
        [name]: value,
      };
      console.log(state.formData);
    },
    setIsRefresh: (state) => {
      state.isRefresh = !state.isRefresh;
    },
    resetFormData: (state) => {
      state.formData = initialState.formData
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getExperiences.fulfilled, (state, action) => {
        state.experiences = action.payload;
      })
      .addCase(postExperience.fulfilled, (state) => {
        state.isRefresh = !state.isRefresh;
      });
  },
});

export const allExperiences = (state) => state.experiencesData.experiences;
export const isShow = (state) => state.experiencesData.show;
export const allFormData = (state) => state.experiencesData.formData;
export const isRefreshed = (state) => state.experiencesData.isRefresh;
export const { setShow, setFormData, setIsRefresh, resetFormData } =
  experiencesSlice.actions;

export default experiencesSlice.reducer;
