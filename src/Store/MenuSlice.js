import { createSlice } from "@reduxjs/toolkit";

const menuSlice = createSlice({
  name: "menu",
  initialState: { show: true },
  reducers: {
    toggleMenu: (state) => {
      state.show = !state.show;
      // state.show = state.show ? false : true;
    },
  },
});

export const { toggleMenu } = menuSlice.actions;
export default menuSlice.reducer;
