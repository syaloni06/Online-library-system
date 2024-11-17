import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
const Home = () => {
  const books = useSelector((store) => store.books.data);
  const categories = [...new Set(books.map((book) => book.category))];
  const popular_books = [...books]
    .sort((a, b) => a.rating - b.rating)
    .reverse()
    .filter((book) => book.rating > 4)
    .slice(0, 15);
  return (
    <>
      <h1>Home</h1>
      <section>
        <ul className="flex flex-wrap gap-12">
          {categories.map((category, index) => (
            <li key={index}>{category}</li>
          ))}
        </ul>
      </section>
      <section>
        <ul className="flex flex-wrap">
          {popular_books.map((book) => (
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

export default Home;
