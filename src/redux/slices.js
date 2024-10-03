import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
  name: "alert",
  initialState: {
    value: 0,
  },
  reducers: {
    increment: (state, action) => {
      state.value += 1;
    },
    decrement: (state, action) => {
      state.value -= 1;
    },
    incrementByValue: (state, action) => {
      state.value += action.payload;
    },
  },
});

export const { increment, decrement, incrementByValue } = slice.actions;

export default slice.reducer;
