import { configureStore } from "@reduxjs/toolkit";
import priceReducer from "./slices/priceSlice";
import cartReducer from "./slices/cartSlice";
import itemReducer from "./slices/itemSlice";

export const store = configureStore({
  reducer: {
    price: priceReducer,
    cart: cartReducer,
    item: itemReducer,
  },
});
