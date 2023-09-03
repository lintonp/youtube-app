import { createSlice } from "@reduxjs/toolkit";

const SearchSlice = createSlice({
  name: "Search",
  initialState: [],
  reducers: {
    additem: (state, action) => {
      if (!state.contains(action.payload)) {
        state.push(action.payload);
      }
    },
  },
});

export const { additem } = SearchSlice.actions;
export default SearchSlice.reducer;
