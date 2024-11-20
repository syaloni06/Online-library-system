import { useParams } from "react-router-dom"; // Importing useParams hook to get URL parameters (like category)
import { useEffect, useState } from "react"; // Importing useEffect for side effects and useState for local state management
import { useSelector } from "react-redux"; // Importing useSelector to access Redux store state
import { FaSearch } from "react-icons/fa"; // Importing search icon from react-icons
import BookCard from "./BookCard"; // Importing BookCard component to display individual book details

const BrowserBook = () => {
  const category = useParams(); // Get category from URL parameter (dynamic route)
  const [search, setSearch] = useState(""); // Local state to manage the search input value
  const [filteredBooks, setFilteredBooks] = useState([]); // Local state to hold filtered books based on search and category
  const books = useSelector((store) => store.books.data); // Accessing books data from Redux store

  // useEffect to filter books based on category when the component loads or when books or category change
  useEffect(() => {
    const filterBooks = books.filter((book) => {
      const matchesCategory = category.category
        ? book.category === category.category // Filter by category if available
        : true; // If no category is selected, don't filter by category
      return matchesCategory;
    });
    setFilteredBooks(filterBooks); // Set filtered books based on category
  }, [books, category.category]); // Re-run this effect when books or category change

  // Function to search books by title or author
  const searchBook = () => {
    const searchedBook = books.filter((book) => {
      const matchesSearch = search
        ? book.title?.toLowerCase().includes(search.toLowerCase()) || // Search by title
          book.authors?.toLowerCase().includes(search.toLowerCase()) // or by authors
        : true; // If no search term, return all books
      return matchesSearch;
    });
    setFilteredBooks(searchedBook); // Set filtered books based on the search query
  };

  return (
    <>
      {/* Search Section */}
      <section className="m-2 lg:m-5 flex justify-center mt-24 gap-2 sm:gap-4">
        {/* Search Input Field */}
        <div className="w-full sm:w-2/3 lg:mt-20">
          <input
            className="rounded-2xl p-2 h-10 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-800 w-full px-4"
            type="text"
            name="task"
            value={search}
            id="task"
            onChange={(e) => setSearch(e.target.value)} // Update search state as user types
            placeholder="Search by title or author"
          />
        </div>

        {/* Search Button */}
        <button
          className="flex justify-center items-center gap-2 text-white px-4 bg-purple-800 rounded-2xl w-1/3 sm:w-auto lg:mt-20 hover:bg-purple-700 hover:scale-110"
          onClick={searchBook} // Trigger the searchBook function on click
        >
          <span className="font-bold text-lg">Search</span>
          <FaSearch className="text-lg" /> {/* Display search icon */}
        </button>
      </section>

      {/* Book Cards Section */}
      <section className="p-2 lg:p-5">
        <div className="flex flex-wrap justify-center gap-4 lg:gap-6">
          {/* Map through filteredBooks array and render BookCard for each book */}
          {filteredBooks.map((book) => (
            <BookCard key={book.id} book={book} /> // Pass each book as a prop to BookCard component
          ))}
        </div>
      </section>
    </>
  );
};

export default BrowserBook;
