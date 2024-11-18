import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
const Home = () => {
  const navigate = useNavigate();
  const books = useSelector((store) => store.books.data);
  const categories = [...new Set(books.map((book) => book.category))];
  const popular_books = [...books]
    .sort((a, b) => a.rating - b.rating)
    .reverse()
    .filter((book) => book.rating > 4)
    .slice(0, 15);
    const handleOnClick = (category) => {
      navigate(`/books/${category}`);
    }
    const handleViewDetails = (id) => {
      navigate(`/book/${id}`);
    };
  return (
    <>
      <section>
        <ul className="flex flex-wrap gap-12">
          {categories.map((category, index) => (
            <button onClick={() => handleOnClick(category)} key={index}>{category}</button>
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
                <button onClick={() => handleViewDetails(book.id)} className="text-xs text-blue-500 hover:underline">
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

export default Home;
