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
      <section className="m-10 flex justify-center mt-24 gap-4">
        <div className="w-2/3">
          <input
            className="rounded-2xl p-2 h-10 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-800 flex-grow w-full px-4"
            type="text"
            name="task"
            value={search}
            id="task"
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search by title or author"
          />
        </div>
        <button
          className="flex self-center gap-1 text-white py-2 px-4 bg-purple-800 rounded-2xl "
          onClick={searchBook}
        >
          <span className="font-bold text-xl">Search</span>
          <FaSearch className="self-center text-xl" />
        </button>
      </section>
      <section>
        <ul className="flex flex-wrap">
          {filteredBooks.map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </ul>
      </section>
    </>
  );
};

export default BrowserBook;
