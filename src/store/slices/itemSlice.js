import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchItems = createAsyncThunk(
  "items/fetchItems",
  async () => {
    const { data } = await axios.get(
      "https://b395de9a2b0b8ac0.mokky.dev/items"
    );
    return data;
  }
);

const initialState = {
  items: [],
  load: false,
};

export const itemSlice = createSlice({
  name: "set items",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchItems.fulfilled, (state, action) => {
      state.items = action.payload;
      state.load = true;
    });
    builder.addCase(fetchItems.rejected, (state) => {
      state.load = false;
      state.items = [];
    });
  },
});

export default itemSlice.reducer;
