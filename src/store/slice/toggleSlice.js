import { createSlice } from "@reduxjs/toolkit";

const toggleSlice = createSlice({
  name: "toggle",
  initialState: { cartIsToggled: false },
  reducers: {
    toggle(state) {
      state.cartIsToggled = !state.cartIsToggled;
    },
  },
});

export const toggleActions = toggleSlice.actions;
export default toggleSlice;
