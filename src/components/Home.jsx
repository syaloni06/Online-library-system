import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useRef } from "react";
import { FaArrowCircleLeft } from "react-icons/fa";
import { FaArrowCircleRight } from "react-icons/fa";
import BookCard from "./BookCard";
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
  };
  
  const scrollRef = useRef(null);
  const scrollLeft = () => {
    scrollRef.current.scrollBy({
      left: -300,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({
      left: 300,
      behavior: "smooth",
    });
  };
  return (
    <>
    <section className="flex flex-col text-center mt-20 rounded-2xl mx-10 sm:mx-14 px-6 py-4 shadow-b border-2 border-purple-800 shadow-purple-800 font-serif">
  <h1 className="text-5xl font-extrabold text-purple-800 italic mb-4 drop-shadow-lg shadow-purple-500">
    Welcome to Book Heaven
  </h1>
  <p className="text-base text-purple-800 italic ">
    Discover your next favorite book from a wide range of genres. Whether
    you are into thrilling mysteries, heartwarming romances, or
    thought-provoking non-fiction, we have something for everyone!
  </p>
</section>
      <section className="p-8 mt-8 relative">
        {/* Left Arrow */}
        <button
          className="absolute top-1/2 left-2 transform -translate-y-1/2 p-2 hover:scale-110"
          onClick={scrollLeft}
        >
          <FaArrowCircleLeft className="text-3xl text-purple-800" />
        </button>

        {/* Categories List */}
        <ul
          ref={scrollRef}
          className="flex flex-nowrap gap-6 overflow-x-auto scrollbar-hide mx-4"
        >
          {categories.map((category, index) => (
            <li key={index} className="flex-shrink-0">
              <button
                onClick={() => handleOnClick(category)}
                className="px-4 py-2 bg-white font-bold text-purple-800 border border-purple-800  rounded-lg shadow-md hover:bg-purple-200 focus:outline-none hover:scale-110 m-2"
              >
                {category}
              </button>
            </li>
          ))}
        </ul>

        {/* Right Arrow */}
        <button
          className="absolute top-1/2 right-2 transform -translate-y-1/2 hover:scale-110"
          onClick={scrollRight}
        >
          <FaArrowCircleRight className="text-3xl text-purple-800" />
        </button>
      </section>

      <section>
        <h1 className="m-5 text-4xl text-purple-800 font-bold underline decoration-3">Popular Books</h1>
      <div className="flex flex-wrap">
      {popular_books.map((book) => (
        <BookCard key={book.id} book={book}/>))}
        </div>
      </section>
    </>
  );
};

export default Home;
