import { configureStore } from "@reduxjs/toolkit";
import menuReducer from "./MenuSlice";
import chatSlice from "./ChatSlice";
import searchSlice from "./SearchSlice";
import VideosSlice from "./VideosSlice";

const AppStore = configureStore({
  reducer: {
    menu: menuReducer,
    chat: chatSlice,
    search: searchSlice,
    videos: VideosSlice,
  },
});

export default AppStore;
