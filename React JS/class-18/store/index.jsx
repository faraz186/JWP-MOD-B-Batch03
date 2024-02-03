import { configureStore } from "@reduxjs/toolkit";
import user_data_slice from "./slices/user_data_slice";

const store = configureStore({
  reducer: {
    user_data: user_data_slice,
  },
});

export { store };
