import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
    bag: [],
  },
  reducers: {
    addToBag: () => {},
    removeFromBag: () => {},
  },
});

export default productSlice.reducer;
