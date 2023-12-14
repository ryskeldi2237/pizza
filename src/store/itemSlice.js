import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchUserById = createAsyncThunk(
  "items/fetchItemsByID",
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
  reducers: {
    setItems: (state, action) => {
      state.items = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUserById.fulfilled, (state, action) => {
      state.items = action.payload;
      state.load = true;
    });
    builder.addCase(fetchUserById.rejected, (state) => {
      state.load = false;
      state.items = [];
    });
  },
});

export const { setItems } = itemSlice.actions;
export default itemSlice.reducer;
