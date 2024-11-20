import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { FaSearch } from "react-icons/fa";
import BookCard from "./BookCard";
const BrowserBook = () => {
  const category = useParams();
  const [search, setSearch] = useState("");
  const [filteredBooks, setFilteredBooks] = useState([]);
  const books = useSelector((store) => store.books.data);
  useEffect(() => {
    const filterBooks = books.filter((book) => {
      const matchesCategory = category.category
        ? book.category === category.category
        : true;
      return matchesCategory;
    });
    setFilteredBooks(filterBooks);
  }, [books, category.category]);

  const searchBook = () => {
    const searchedBook = books.filter((book) => {
      const matchesSearch = search
        ? book.title?.toLowerCase().includes(search.toLowerCase()) ||
          book.authors?.toLowerCase().includes(search.toLowerCase())
        : true;
      return matchesSearch;
    });
    setFilteredBooks(searchedBook);
  };
  return (
    <>
      <section className="m-2 lg:m-5 flex justify-center mt-24 gap-2 sm:gap-4">
  {/* Input Field */}
  <div className="w-full sm:w-2/3 lg:mt-20">
    <input
      className="rounded-2xl p-2 h-10 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-800 w-full px-4"
      type="text"
      name="task"
      value={search}
      id="task"
      onChange={(e) => setSearch(e.target.value)}
      placeholder="Search by title or author"
    />
  </div>

  {/* Search Button */}
  <button
    className="flex justify-center items-center gap-2 text-white px-4 bg-purple-800 rounded-2xl w-1/3 sm:w-auto lg:mt-20 hover:bg-purple-700 hover:scale-110"
    onClick={searchBook}
  >
    <span className="font-bold text-lg">Search</span>
    <FaSearch className="text-lg" />
  </button>
</section>

<section className="p-2 lg:p-5">
  <div className="flex flex-wrap justify-center gap-4 lg:gap-6">
    {filteredBooks.map((book) => (
      <BookCard key={book.id} book={book} />
    ))}
  </div>
</section>


    </>
  );
};

export default BrowserBook;
