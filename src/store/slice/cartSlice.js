import { createSlice } from "@reduxjs/toolkit";
import { notificationActions } from "./notificationSlice";

const cartSlice = createSlice({
  initialState: {
    totalQuantity: 0,
    items: [],
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
        console.log(existingItem.quantity);
        existingItem.totalPrice = existingItem.totalPrice + newItem.price;
      }
    },

    removeItemsFromCart(state, action) {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);
      state.totalQuantity--;

      // Added a boundry check
      if (state.totalQuantity > 0) {
        return state.totalQuantity - 1;
      } else {
        state.totalQuantity = 0;
      }

      if (existingItem.quantity === 0) {
        state.items.filter((item) => item.id !== id);
        console.log("This is 0");
      } else {
        existingItem.quantity--;
        console.log(existingItem.quantity);
        existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
      }
    },
  },
});

export const sendItemData = (cartData) => {
  return async (dispatch) => {
    dispatch(
      notificationActions.showNotification({
        status: "pending",
        title: "Sending...",
        message: "Sending Cart Data!",
      })
    );

    const sendRequest = async () => {
      const response = await fetch(
        "https://advanced-redux-b3904-default-rtdb.europe-west1.firebasedatabase.app/cart.json",
        {
          method: "PUT",
          body: JSON.stringify(cartData),
        }
      );
      if (!response.ok) {
        throw new Error("Error: Data failed to send!");
      }
    };
    try {
      await sendRequest();

      dispatch(
        notificationActions.showNotification({
          status: "success",
          title: "Success",
          message: "Successfully sent Data!",
        })
      );
    } catch (error) {
      dispatch(
        notificationActions.showNotification({
          status: "error",
          title: "Error",
          message: "Failed to send Data!",
        })
      );
    }
  };
};

export const cartActions = cartSlice.actions;
export default cartSlice;
