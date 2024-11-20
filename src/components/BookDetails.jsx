import { useSelector } from "react-redux"; // Import useSelector to access the Redux store
import { useNavigate, useParams } from "react-router-dom"; // Import hooks for navigation and getting route parameters
import { IoArrowBackCircle } from "react-icons/io5"; // Import a back arrow icon from react-icons

const BookDetails = () => {
  // Extract the book ID from the URL using useParams hook
  const { id } = useParams();

  // Access the Redux store to find the book with the given ID
  const book = useSelector((store) =>
    store.books.data.find((b) => b.id === parseInt(id, 10)) // Find the book by ID, ensuring the ID is parsed as an integer
  );

  // Initialize the useNavigate hook for navigation
  const navigate = useNavigate();

  // If the book is not found, display a message
  if (!book) {
    return <p>Book not found.</p>;
  }

  // Render the book details page
  return (
    <div className="m-12 md:my-20 w-3/4 lg:w-2/3 flex flex-col gap-4 sm:gap-8 bg-purple-50 p-6 rounded-lg shadow-md my-20">
      {/* Back button to navigate to the previous page */}
      <button
        onClick={() => navigate(-1)} // When clicked, navigate to the previous page
        className="flex items-center gap-2 self-start text-purple-700 hover:text-purple-800 text-lg font-medium transition-colors duration-200 hover:scale-105"
      >
        <IoArrowBackCircle className="text-2xl" /> Back
      </button>

      {/* Book information section */}
      <div className="flex flex-col sm:flex-row gap-6 items-center sm:items-start">
        {/* Book image */}
        <img
          src={book.image_url} // Display the book image
          alt={book.title} // Alt text for accessibility
          className="w-40 h-56 sm:w-44 sm:h-56 object-fill rounded-md shadow-sm" // Apply styling for the image
        />
        {/* Book details (title, author, rating) */}
        <div className="sm:ml-6 mt-4 sm:mt-0 flex flex-col gap-2">
          <h1 className="text-2xl sm:text-4xl font-bold text-purple-800">
            {book.title} {/* Display the book title */}
          </h1>
          <p className="text-gray-800 text-base sm:text-xl italic font-semibold">
            Author: {book.authors} {/* Display the book author */}
          </p>
          <p className="text-sm sm:text-base text-gray-800 font-semibold italic">
            Rating: {book.rating} {/* Display the book rating */}
          </p>
        </div>
      </div>

      {/* Book description */}
      <div className="flex flex-col gap-4">
        <p className="text-gray-950 text-lg sm:text-xl text-justify">
          {book.description} {/* Display the book description */}
        </p>
      </div>
    </div>
  );
};

export default BookDetails;
