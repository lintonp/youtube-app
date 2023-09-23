import { createSlice } from "@reduxjs/toolkit";

//To store videos list to be displayed on the Home Screen
const videosSlice = createSlice({
  name: "videos",
  initialState: {
    allVideos: [],
    isLoading: false,
  },
  reducers: {
    refreshList: (state, action) => {
      return { allVideos: action.payload, isLoading: false };
    },
    setIsLoading: (state) => {
      state.isLoading = true;
    },
  },
});

export const { refreshList, setIsLoading } = videosSlice.actions;
export default videosSlice.reducer;
