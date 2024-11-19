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
    <div className="m-20 w-3/4 flex flex-col gap-8 bg-purple-50 p-6 rounded-lg shadow-md">
      <button
    onClick={() => navigate(-1)}
    className="flex items-center gap-2 self-start text-purple-700 hover:text-purple-800 text-lg font-medium transition-colors duration-200 hover:scale-105"
  >
    <IoArrowBackCircle className="text-2xl" /> Back
  </button>
  <div className="flex gap-6 items-center">
    <img
      src={book.image_url}
      alt={book.title}
      className="w-44 h-56 object-fill rounded-md shadow-sm"
    />
    <div>
    <h1 className="text-4xl font-bold text-purple-800">{book.title}</h1>
    <p className="text-gray-800 text-xl italic font-semibold">Author: {book.authors}</p>
    <p className=" text-base text-gray-800 font-semibold italic">
      Rating: {book.rating}
    </p>
    </div>
  </div>
  <div className="flex flex-col gap-4">
    <p className="text-gray-950 text-lg text-justify">{book.description}</p>
  </div>
</div>

  );
};

export default BookDetails;
