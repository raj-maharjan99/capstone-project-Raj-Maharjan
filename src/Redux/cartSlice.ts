import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload); //add item to the array of items in the cart
    },
    removeItem: (state, action) => {
      const itemToRemove = action.payload; // assuming payload contains item information
      state.items = state.items.filter((item) => item.id !== itemToRemove.id);
      // Remove the item from the items array based on some unique identifier like an ID
    },
  },
});

// Action creators are generated for each case reducer function
export const { addItem, removeItem } = cartSlice.actions;
export const selectCartItems = (state) => state.cart.action;
export default cartSlice.reducer;
