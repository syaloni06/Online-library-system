import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { addBook } from "../utils/bookSlice";
import { useSelector } from "react-redux";
const AddBook = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const books = useSelector((store) => store.books.data);
  const categories = [...new Set(books.map((book) => book.category))];
  const [formValues, setFormValues] = useState({
    title: "",
    authors: "",
    category: "",
    rating: "",
    description: "",
    image_url: "",
  });
  const [errors, setErrors] = useState({});
  const validateForm = () => {
    const newErrors = {};
    if (!formValues.title.trim()) newErrors.title = "Title is required.";
    if (!formValues.authors.trim()) newErrors.authors = "authors is required.";
    if (!formValues.category.trim())
      newErrors.category = "Category is required.";
    if (!formValues.rating.trim()) newErrors.rating = "Rating is required.";
    if (!formValues.description.trim())
      newErrors.description = "Description is required.";
    if (!formValues.image_url.trim())
      newErrors.image_url = "Image url is required.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      dispatch(addBook({ ...formValues, id: books.length+1}));
      navigate(`/books/${formValues.category}`);
    }
  };
  return (
    <>
      <h1>Add New Book</h1>
      <form>
        <div>
          <label>Title:</label>
          <input
            type="text"
            name="title"
            value={formValues.title}
            onChange={handleChange}
          />
          {errors.title && <p className="text-red-600">{errors.title}</p>}
        </div>

        <div>
          <label>authors:</label>
          <input
            type="text"
            name="authors"
            value={formValues.authors}
            onChange={handleChange}
          />
          {errors.authors && <p className="text-red-600">{errors.authors}</p>}
        </div>
        <div>
          <select
            className="flex flex-wrap gap-12"
            name="category"
            onChange={handleChange}
          >
            {categories.map((category, index) => (
              <option key={index}>{category}</option>
            ))}
          </select>
          {errors.category && <p className="text-red-600">{errors.category}</p>}
        </div>
        <div>
          <label>Rating:</label>
          <input
            type="text"
            name="rating"
            value={formValues.rating}
            onChange={handleChange}
          />
          {errors.rating && <p className="text-red-600">{errors.rating}</p>}
        </div>
        <div>
          <label>Description:</label>
          <textarea
            name="description"
            value={formValues.description}
            onChange={handleChange}
          >
            {errors.description && (
              <p className="text-red-600">{errors.description}</p>
            )}
          </textarea>
        </div>
        <div>
          <label>Image_url:</label>
          <input
            type="text"
            name="image_url"
            value={formValues.image_url}
            onChange={handleChange}
          />
          {errors.image_url && (
            <p className="text-red-600">{errors.image_url}</p>
          )}
        </div>
        <button onClick={handleSubmit}>Add Book</button>
      </form>
    </>
  );
};

export default AddBook;
