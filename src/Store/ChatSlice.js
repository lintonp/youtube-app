import { createSlice } from "@reduxjs/toolkit";

const chatSlice = createSlice({
  name: "chat",
  initialState: {
    messages: [],
  },
  reducers: {
    addMessage: (state, action) => {
      state.messages.splice(25, 24);
      state.messages.unshift(action.payload);
    },
    clearMessages: (state) => {
      state.messages.length = 0; //Update clear Messages
      // return { messages: [] };
    },
  },
});

export const { addMessage, clearMessages } = chatSlice.actions;
export default chatSlice.reducer;
