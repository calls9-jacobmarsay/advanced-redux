import { configureStore } from "@reduxjs/toolkit";
import toggleSlice from "./slice/toggleSlice";
import cartSlice from "./slice/cartSlice";

const store = configureStore({
  reducer: { toggle: toggleSlice.reducer, cart: cartSlice.reducer },
});

export default store;
