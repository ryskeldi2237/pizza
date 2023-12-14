import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  price: 0,
};
export const priceSlice = createSlice({
  name: "price counter",
  initialState,
  reducers: {
    addPrice: (state, action) => {
      state.price += action.payload;
    },
    removePrice: (state, action) => {
        state.price -= action.payload;
      },
  },
});
export const {addPrice,removePrice} = priceSlice.actions;
export default priceSlice.reducer
