import { configureStore } from "@reduxjs/toolkit";
import menuReducer from "./MenuSlice";

const AppStore = configureStore({
  reducer: {
    menu: menuReducer,
  },
});

export default AppStore;
