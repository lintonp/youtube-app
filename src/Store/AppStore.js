import { configureStore } from "@reduxjs/toolkit";
import menuReducer from "./MenuSlice";
import chatSlice from "./ChatSlice";

const AppStore = configureStore({
  reducer: {
    menu: menuReducer,
    chat: chatSlice,
  },
});

export default AppStore;
