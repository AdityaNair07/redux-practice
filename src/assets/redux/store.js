import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slice";
// import { persistReducer, persistStore } from "redux-persist";
// import storage from "redux-persist/lib/storage";

// const persistConfig = {
//   key: "root",
//   storage,
// };
// const persistedReducer = persistReducer(persistConfig, cartReducer);

const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

// const persistedStore = persistStore(store);

export { store };
