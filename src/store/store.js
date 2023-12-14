import { configureStore } from "@reduxjs/toolkit";
import priceReducer from "./priceSlice";
import cartReducer from "./cartSlice";
import itemReducer from "./itemSlice";

export const store = configureStore({
  reducer: {
    price: priceReducer,
    cart: cartReducer,
    item: itemReducer,
  },
});
