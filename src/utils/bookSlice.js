import { createSlice } from "@reduxjs/toolkit"; // Importing createSlice from Redux Toolkit to create the slice of state
import { bookData } from "./MockBook"; // Importing mock book data (could be a predefined list of books)

const bookSlice = createSlice({
  // Defining the slice of state related to books
  name: "books", // The name of the slice, typically represents the domain of data it manages
  initialState: {
    data: bookData, // Initial state of the slice is set to the bookData imported from MockBook
  },
  reducers: {
    // Reducers to handle actions affecting the state
    addBook: (state, action) => {
      // This reducer adds a new book to the books' data
      state.data.push(action.payload); // 'action.payload' will contain the new book to be added
    },
  },
});

// Exporting the action to be used in components
export const { addBook } = bookSlice.actions;

// Exporting the reducer to be used in the store configuration
export default bookSlice.reducer;
