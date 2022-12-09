import { configureStore } from "@reduxjs/toolkit";
import toggleSlice from "./slice/toggleSlice";
import cartSlice from "./slice/cartSlice";
import notificationSlice from "./slice/notificationSlice";

const store = configureStore({
  reducer: {
    toggle: toggleSlice.reducer,
    cart: cartSlice.reducer,
    notification: notificationSlice.reducer,
  },
});

export default store;
