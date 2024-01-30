import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slices/counterSlice";
import ProductReducer from "./slices/productSlice";

const store = configureStore({
  reducer: {
    counterReducer,
    ProductReducer,
  },
});

export default store;
