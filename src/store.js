import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./redux/productsSlice";

const store = configureStore({
  reducer: {
    bag: productsReducer,
  },
});

export default store;
