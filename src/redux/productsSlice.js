import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  bag: [],
};
const productSlice = createSlice({
  name: "bag",
  initialState,
  reducers: {
    // addToBag: (state, action) => {
    //   const itemInBag = state.bag.find(
    //     (item) => item[0].id === action.payload[0].id
    //   );
    //   if (itemInBag) {
    //     itemInBag[1] += 1;
    //   } else {
    //     state.bag.push(action.payload);
    //   }
    // },
    addToBag: (state, action) => {
      state.bag.push(action.payload);
    },
    removeFromBag: (state, action) => {
      state.bag = state.bag.filter((item) => item[0].id !== action.payload.id);
    },
  },
});
export const { addToBag, removeFromBag } = productSlice.actions;
export default productSlice.reducer;
