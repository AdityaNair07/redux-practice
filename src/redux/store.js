import { configureStore } from "@reduxjs/toolkit";
import StuffReducer from "./slices";

export const store = configureStore({
  reducer: {
    stuff: StuffReducer,
  },
});
