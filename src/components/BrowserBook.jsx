import { useParams } from "react-router-dom";
// import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const BrowserBook = () => {
  const category = useParams();
  // console.log(category);
  // const [searchTerm, setSearchTerm] = useState("");
  const books = useSelector((store) => store.books.data);

  const filteredBooks = books.filter((book) => {
    const matchesCategory = category.category ? book.category === category.category : true;
    // const matchesSearch =
    //   book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    //   book.author.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory; // && matchesSearch
  });
  return (
    <>
      <h1>BrowserBook</h1>
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
                <Link to={`/books/${book.id}`} className="text-xs">
                  View More Details
                </Link>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
};

export default BrowserBook;
