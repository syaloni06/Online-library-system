import { useNavigate } from "react-router-dom"; // To navigate between pages
import { useSelector } from "react-redux"; // To access data from Redux store
import { useRef } from "react"; // To create a reference for scrolling
import { FaArrowCircleLeft } from "react-icons/fa"; // Left arrow icon
import { FaArrowCircleRight } from "react-icons/fa"; // Right arrow icon
import BookCard from "./BookCard"; // Custom BookCard component to display books

const Home = () => {
  // Hook to handle navigation
  const navigate = useNavigate();
  
  // Retrieve the list of books from the Redux store
  const books = useSelector((store) => store.books.data);
  
  // Extract unique book categories
  const categories = [...new Set(books.map((book) => book.category))];
  
  // Sort books by rating, filter for popular books (rating > 4), and limit to top 15
  const popular_books = [...books]
    .sort((a, b) => a.rating - b.rating)  // Sort books in descending order of rating
    .reverse()
    .filter((book) => book.rating > 4) // Filter out books with a rating of 4 or lower
    .slice(0, 15); // Get top 15 books

  // Handler for category button click, navigating to the corresponding category page
  const handleOnClick = (category) => {
    navigate(`/books/${category}`);
  };

  // UseRef hook to control scroll behavior
  const scrollRef = useRef(null);

  // Scrolls the categories list to the left
  const scrollLeft = () => {
    scrollRef.current.scrollBy({
      left: -300, // Scroll left by 300px
      behavior: "smooth", // Smooth scrolling
    });
  };

  // Scrolls the categories list to the right
  const scrollRight = () => {
    scrollRef.current.scrollBy({
      left: 300, // Scroll right by 300px
      behavior: "smooth", // Smooth scrolling
    });
  };

  return (
    <>
      {/* Welcome section */}
      <section className="flex flex-col text-center mt-20 rounded-2xl mx-4 sm:mx-10 lg:mx-14 px-4 sm:px-6 py-4 shadow-b border-2 border-purple-800 shadow-purple-800 font-serif">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-purple-800 italic mb-4 drop-shadow-lg shadow-purple-500">
          Welcome to Book Heaven
        </h1>
        <p className="text-sm sm:text-base text-purple-800 italic">
          Discover your next favorite book from a wide range of genres. Whether
          you are into thrilling mysteries, heartwarming romances, or
          thought-provoking non-fiction, we have something for everyone!
        </p>
      </section>

      {/* Categories section with scrolling functionality */}
      <section className="p-6 sm:p-8 mt-8 relative">
        {/* Left Arrow Button for scrolling */}
        <button
          className="absolute top-1/2 left-2 transform -translate-y-1/2 p-2 hover:scale-110"
          onClick={scrollLeft}
        >
          <FaArrowCircleLeft className="text-2xl sm:text-3xl text-purple-800" />
        </button>

        {/* List of categories with horizontal scrolling */}
        <ul
          ref={scrollRef}
          className="flex flex-nowrap gap-4 sm:gap-6 overflow-x-auto scrollbar-hide mx-2 sm:mx-4"
        >
          {categories.map((category, index) => (
            <li key={index} className="flex-shrink-0">
              <button
                onClick={() => handleOnClick(category)} // Navigate to the selected category
                className="px-3 sm:px-4 py-1 sm:py-2 bg-white font-bold text-purple-800 border border-purple-800 rounded-lg shadow-md hover:bg-purple-200 focus:outline-none hover:scale-110 m-2"
              >
                {category}
              </button>
            </li>
          ))}
        </ul>

        {/* Right Arrow Button for scrolling */}
        <button
          className="absolute top-1/2 right-2 transform -translate-y-1/2 hover:scale-110"
          onClick={scrollRight}
        >
          <FaArrowCircleRight className="text-2xl sm:text-3xl text-purple-800" />
        </button>
      </section>

      {/* Popular Books Section */}
      <section>
        <h1 className="m-2 lg:m-5 text-2xl sm:text-4xl text-purple-800 font-bold underline decoration-3">
          Popular Books
        </h1>
        <div className="flex flex-wrap justify-center gap-4 lg:gap-6">
          {/* Render BookCard components for each popular book */}
          {popular_books.map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
      </section>
    </>
  );
};

export default Home;
