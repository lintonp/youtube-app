import { createSlice } from "@reduxjs/toolkit";

//To store videos list to be displayed on the Home Screen
const videosSlice = createSlice({
  name: "videos",
  initialState: {
    allVideos: [],
  },
  reducers: {
    refreshList: (state, action) => {
      state.allVideos = action.payload;
    },
  },
});

export const { refreshList } = videosSlice.actions;
export default videosSlice.reducer;
