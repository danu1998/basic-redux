import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "product",
  initialState: {
    title: "Iphone 10",
    price: "9.000.000",
  },

  reducers: {
    update: (state, action) => {
      state.title = action.payload.title;
      state.price = action.payload.price;
    },
  },
});

export const { update } = productSlice.actions;
export default productSlice.reducer;
