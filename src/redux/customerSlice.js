import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const customerSlice = createSlice({
  name: "customer",
  initialState,
  reducers: {
    addCustomer: (state, action) => {
      state.push(action.payload);
    },
    removeCustomer: (state) => {
      state = [];
    },
  },
});

export const { addCustomer, removeCustomer } = customerSlice.actions;
export default customerSlice.reducer;
