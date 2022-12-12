import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  initialState: {
    items: [],
    totalQuantity: 0,
  },
  name: "cart",
  reducers: {
    addItemsToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);
      state.totalQuantity++;
      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
          name: newItem.title,
        });
      } else {
        existingItem.quantity++;
        existingItem.totalPrice = existingItem.totalPrice + newItem.price;
      }
    },

    removeItemsFromCart(state, action) {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);
      state.totalQuantity--;

      // Added a boundary check
      if (state.totalQuantity < 0) {
        state.totalQuantity = 0;
        console.log(state.totalQuantity);
      }
      if (existingItem.quantity === 0) {
        state.items.filter((item) => item.id !== id);
      } else {
        existingItem.quantity--;
        existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
      }
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice;
