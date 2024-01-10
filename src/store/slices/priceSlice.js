import { createSlice } from "@reduxjs/toolkit";
const localStoragePrice = JSON.parse(localStorage.getItem("price")) || 0;

const initialState = {
  price: localStoragePrice
};
export const priceSlice = createSlice({
  name: "price counter",
  initialState,
  reducers: {
    addPrice: (state, action) => {
      state.price += action.payload;
      localStorage.setItem("price", state.price);
    },
    removePrice: (state, action) => {
      state.price -= action.payload;
      localStorage.setItem("price", state.price);
    },
  },
});
export const { addPrice, removePrice } = priceSlice.actions;
export default priceSlice.reducer;
