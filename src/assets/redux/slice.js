import { createSlice } from "@reduxjs/toolkit";

const cart = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addProduct: (state, action) => {
      state.items.push(action.payload);
    },
    removeProduct: (state, action) => {
      state.items = state.items.filter((item) => item.name !== action.payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const { addProduct, removeProduct } = cart.actions;

export default cart.reducer;
