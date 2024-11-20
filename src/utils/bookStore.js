import { configureStore } from "@reduxjs/toolkit"; // Importing configureStore from Redux Toolkit to configure the Redux store
import bookReducer from "./bookSlice.js"; // Importing the reducer from the bookSlice to manage the books state

// Creating and configuring the Redux store
const bookStore = configureStore({
  reducer: {
    // The reducer manages the state slice called 'books'
    books: bookReducer, // Assigning the 'bookReducer' to the 'books' slice of the state
  },
});

// Exporting the configured store so it can be used in the main application
export default bookStore;
