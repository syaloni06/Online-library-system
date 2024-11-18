import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const BookDetails = () => {
  const { id } = useParams();
  const book = useSelector((store) =>
    store.books.data.find((b) => b.id === parseInt(id, 10))
  );
  if (!book) {
    return <p>Book not found.</p>;
  }

  return (
    <div className="m-20 w-1/2 flex-col gap-10">
      <div>
      <img
        src={book.image_url}
        alt={book.title}
        width="100px"
        height="100px"
        className="book-cover w"
      />
      <h1 className="text-base mb-2.5">{book.title}</h1>
      </div>
      <div>
      <p className="text-sm mb-2.5 text-gray-600">{book.description}</p>
      <p className="text-sm mb-2.5 text-gray-600">Author: {book.authors}</p>
      <p className="text-sm mb-2.5 text-gray-600 font-extrabold">Rating: {book.rating}</p> 
      </div>
    </div>
  );
};

export default BookDetails;
