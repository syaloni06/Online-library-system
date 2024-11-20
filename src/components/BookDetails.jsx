import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { IoArrowBackCircle } from "react-icons/io5";
const BookDetails = () => {
  const { id } = useParams();
  const book = useSelector((store) =>
    store.books.data.find((b) => b.id === parseInt(id, 10))
  );
  const navigate = useNavigate();
  if (!book) {
    return <p>Book not found.</p>;
  }

  return (
    <div className="m-12 md:my-20 w-3/4 lg:w-2/3 flex flex-col gap-4 sm:gap-8 bg-purple-50 p-6 rounded-lg shadow-md my-20">
      <button
        onClick={() => navigate(-1)}
        className="flex items-center gap-2 self-start text-purple-700 hover:text-purple-800 text-lg font-medium transition-colors duration-200 hover:scale-105"
      >
        <IoArrowBackCircle className="text-2xl" /> Back
      </button>
      <div className="flex flex-col sm:flex-row gap-6 items-center sm:items-start">
        <img
          src={book.image_url}
          alt={book.title}
          className="w-40 h-56 sm:w-44 sm:h-56 object-fill rounded-md shadow-sm"
        />
        <div className="sm:ml-6 mt-4 sm:mt-0 flex flex-col gap-2">
          <h1 className="text-2xl sm:text-4xl font-bold text-purple-800">
            {book.title}
          </h1>
          <p className="text-gray-800 text-base sm:text-xl italic font-semibold">
            Author: {book.authors}
          </p>
          <p className="text-sm sm:text-base text-gray-800 font-semibold italic">
            Rating: {book.rating}
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <p className="text-gray-950 text-lg sm:text-xl text-justify">
          {book.description}
        </p>
      </div>
    </div>
  );
};

export default BookDetails;
