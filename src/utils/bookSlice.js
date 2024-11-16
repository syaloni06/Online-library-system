import { createSlice } from "@reduxjs/toolkit";
import { bookData } from "./MockBook";
const bookSlice = createSlice({
  name: "books",
  initialState: {
    data: bookData,
  },
  reducers: {
    addBook: (state, action) => {
      state.data.push(action.payload);
    },
  },
});

export const { addBook } = bookSlice.actions;

export default bookSlice.reducer;
