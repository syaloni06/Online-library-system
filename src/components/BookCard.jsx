/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom"; // Hook to handle page navigation
import { FaStar } from "react-icons/fa6";
const BookCard = (props) => {
  const navigate = useNavigate(); // Initialize navigate function for routing
  
  // Handle click event for viewing details of a specific book
  const handleViewDetails = (id) => {
    navigate(`/book/${id}`); // Navigate to the book details page
  };

  return (
    <>
      {/* Book Card Container */}
      <div className="w-72 lg:w-60 bg-white m-5 flex flex-col rounded-lg shadow-b hover:shadow-purple-800 hover:scale-105 overflow-hidden border-2 hover:border-purple-800 p-2">
        
        {/* Book Image */}
        <img
          src={props.book.image_url} // Display the book's image
          alt={props.book.title} // Alt text for the image
          width="100px" // Image width
          height="100px" // Image height
          className="w-full h-56" // Style the image to take full width and set a fixed height
        />

        <div className="p-4">
          {/* Book Title */}
          <h1 className="text-lg mb-2.5 font-bold">{props.book.title}</h1>

          {/* Book Author */}
          <p className="text-base mb-2.5 text-gray-600 font-bold italic">
            Author: {props.book.authors}
          </p>

          {/* Book Rating */}
          <p className="flex gap-1 text-base mb-2.5 text-gray-600 font-semibold">
            Rating:<FaStar className="self-center"/>{props.book.rating}
          </p>

          {/* Button to navigate to the book's detail page */}
          <button
            onClick={() => handleViewDetails(props.book.id)} // Trigger the navigate function with the book's ID
            className="text-sm text-purple-800 hover:underline decoration-2 font-bold"
          >
            View More Details {/* Button text */}
          </button>
        </div>
      </div>
    </>
  );
};

export default BookCard;
