import { createSlice } from "@reduxjs/toolkit";

const SearchSlice = createSlice({
  name: "Search",
  initialState: {
    searchHistory: [],
  },
  reducers: {
    updateSearchHistory: (state, action) => {
      state.searchHistory.push(action.payload);
    },
  },
});

export const { updateSearchHistory } = SearchSlice.actions;
export default SearchSlice.reducer;
