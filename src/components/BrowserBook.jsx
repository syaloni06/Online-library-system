import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useSelector } from "react-redux";
import { FaSearch } from "react-icons/fa";
const BrowserBook = () => {
  const category = useParams();
  const [search, setSearch] = useState("");
  const books = useSelector((store) => store.books.data);

  const filteredBooks = books.filter((book) => {
    const matchesCategory = category.category
      ? book.category === category.category
      : true;
    const matchesSearch = search
      ? book.title?.toLowerCase().includes(search.toLowerCase()) ||
        book.authors?.toLowerCase().includes(search.toLowerCase())
      : true;

    return matchesCategory && matchesSearch;
  });
  const navigate = useNavigate();

  const handleViewDetails = (id) => {
    navigate(`/book/${id}`);
  };
  return (
    <>
      <section className="m-10 flex justify-center">
        <div className="w-2/3">
          <input
            className="rounded-l-md p-2 h-10 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-500 flex-grow w-full"
            type="text"
            name="task"
            value={search}
            id="task"
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search by title or author"
          />
        </div>
        <div className="self-center text-2xl p-2 bg-gray-300 rounded-r-md ">
          <FaSearch />
        </div>
      </section>
      <section>
        <ul className="flex flex-wrap">
          {filteredBooks.map((book) => (
            <li
              key={book.id}
              className="w-60 h-96 bg-white m-5 flex flex-col rounded-lg shadow-b hover:scale-110 overflow-hidden"
            >
              <img
                src={book.image_url}
                alt={book.title}
                width="100px"
                height="100px"
                className="book-cover w-full h-56"
              />
              <div className="p-4">
                <h1 className="text-base mb-2.5">{book.title}</h1>
                <p className="text-sm mb-2.5 text-gray-600">
                  Author: {book.authors}
                </p>
                <p className="text-sm mb-2.5 text-gray-600">
                  Rating: {book.rating}
                </p>
                <button
                  onClick={() => handleViewDetails(book.id)}
                  className="text-xs text-blue-500 hover:underline"
                >
                  View More Details
                </button>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
};

export default BrowserBook;
