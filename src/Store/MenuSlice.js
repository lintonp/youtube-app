import { createSlice } from "@reduxjs/toolkit";

const menuSlice = createSlice({
  name: "menu",
  initialState: { show: true },
  reducers: {
    toggleMenu: (state) => {
      state.show = !state.show;
    },
    collapseMenu: (state) => {
      state.show = false;
    },
    showMenu: (state) => {
      state.show = true;
    },
  },
});

export const { toggleMenu, collapseMenu, showMenu } = menuSlice.actions;
export default menuSlice.reducer;
