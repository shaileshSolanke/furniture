import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./redux/productsSlice";
import customerReducer from "./redux/customerSlice";

const store = configureStore({
  reducer: {
    bag: productsReducer,
    customer: customerReducer,
  },
});

export default store;
