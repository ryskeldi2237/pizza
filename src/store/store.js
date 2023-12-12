import { combineReducers, createStore } from "redux";
import { configureStore } from '@reduxjs/toolkit'
import { product } from './product'
import { price } from './price'
const rootReducer = combineReducers({product, price})
export const store = createStore(rootReducer);


// export const store = configureStore({
//   reducer: {
//     product:product,
//      price: price
//   },
// })