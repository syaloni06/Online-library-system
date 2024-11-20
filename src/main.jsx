import { StrictMode } from "react"; // Import StrictMode to help with highlighting potential problems in the app during development
import { createRoot } from "react-dom/client"; // Import createRoot to initialize the React application in the DOM
import "./index.css"; // Import global styles
import App from "./App.jsx"; // Import the main App component
import { createBrowserRouter, RouterProvider } from "react-router-dom"; // Import Router components for managing routing in the app
import BrowserBook from "./components/BrowserBook.jsx"; // Import BrowserBook component (displays a list of books)
import Error from "./components/Error.jsx"; // Import the Error component to display when a route is not found
import AddBook from "./components/AddBook.jsx"; // Import AddBook component (form to add a new book)
import Home from "./components/Home.jsx"; // Import Home component (landing page)
import BookDetails from "./components/BookDetails.jsx"; // Import BookDetails component (page for viewing book details)

// Create the router object with all the routes of the app
const appRouter = createBrowserRouter([
  {
    path: "/", // The root path for the app
    element: <App />, // The App component will be rendered for the root path
    children: [
      {
        path: "/", // Home page route
        element: <Home />, // Home component will be rendered
      },
      {
        path: "/books", // Route for listing all books
        element: <BrowserBook />, // BrowserBook component renders the books list
      },
      {
        path: "/books/:category", // Route for filtering books by category
        element: <BrowserBook />, // BrowserBook component renders books based on category
      },
      {
        path: "/book/:id", // Route for displaying details of a single book
        element: <BookDetails />, // BookDetails component renders the details for a specific book
      },
      {
        path: "/add-book", // Route for adding a new book
        element: <AddBook />, // AddBook component renders a form to add a new book
      },
    ],
    errorElement: <Error />, // If any route in this section has an error, the Error component will be displayed
  },
]);

// Render the application to the DOM
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={appRouter} /> {/* Provide the router to the app */}
  </StrictMode>
);
