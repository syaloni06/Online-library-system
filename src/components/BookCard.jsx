/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";

const BookCard = (props) => {
  const navigate = useNavigate();
  const handleViewDetails = (id) => {
    navigate(`/book/${id}`);
  };
  return (
    <>
      <div className="w-60 bg-white m-5 flex flex-col rounded-lg shadow-b hover:shadow-purple-800 hover:scale-105 overflow-hidden border-2 hover:border-purple-800 p-2">
        <img
          src={props.book.image_url}
          alt={props.book.title}
          width="100px"
          height="100px"
          className="w-full h-56"
        />
        <div className="p-4">
          <h1 className="text-lg mb-2.5 font-bold">{props.book.title}</h1>
          <p className="text-base mb-2.5 text-gray-600 font-bold italic">
            Author: {props.book.authors}
          </p>
          <p className="text-base mb-2.5 text-gray-600 font-semibold">
            Rating: {props.book.rating}
          </p>
          <button
            onClick={() => handleViewDetails(props.book.id)}
            className="text-sm text-purple-800 hover:underline decoration-2 font-bold"
          >
            View More Details
          </button>
        </div>
      </div>
    </>
  );
};

export default BookCard;
