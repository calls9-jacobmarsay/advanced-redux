import { createSlice } from "@reduxjs/toolkit";

const notificationSlice = createSlice({
  initialState: {
    notification: null,
  },
  name: "notifications",
  reducers: {
    showNotification(state, action) {
      state.notification = {
        status: action.payload.status,
        title: action.payload.title,
        message: action.payload.message,
      };
    },
  },
});

export const notificationActions = notificationSlice.actions;
export default notificationSlice;
