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
    if (!formValues.authors.trim()) newErrors.authors = "Authors are required.";
    if (!formValues.category.trim()) newErrors.category = "Category is required.";
    if (!formValues.rating.trim()) newErrors.rating = "Rating is required.";
    if (!formValues.description.trim()) newErrors.description = "Description is required.";
    if (!formValues.image_url.trim()) newErrors.image_url = "Image URL is required.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      dispatch(addBook({ ...formValues, id: books.length + 1 }));
      navigate(`/books/${formValues.category}`);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen px-4">
      <form className="w-full max-w-2xl p-6 shadow-lg shadow-purple-800 rounded-lg mb-10 mt-12 sm:mt-16 border-2 border-purple-800 space-y-4">
        <h1 className="text-2xl sm:text-3xl text-center text-purple-800 font-extrabold italic">
          Add New Book
        </h1>

        {/* Title and Authors */}
        <section className="flex flex-col sm:flex-row gap-3 sm:gap-6">
          <div className="flex-1 space-y-2">
            <label className="block text-lg font-semibold text-purple-800">
              Title:
            </label>
            <input
              type="text"
              name="title"
              value={formValues.title}
              onChange={handleChange}
              className="w-full px-4 py-2 border-2 rounded-lg border-purple-800 focus:ring-2 focus:ring-purple-500 focus:outline-none"
            />
            {errors.title && <p className="text-red-600 text-sm">{errors.title}</p>}
          </div>

          <div className="flex-1 space-y-2">
            <label className="block text-lg font-semibold text-purple-800">
              Authors:
            </label>
            <input
              type="text"
              name="authors"
              value={formValues.authors}
              onChange={handleChange}
              className="w-full px-4 py-2 border-2 rounded-lg border-purple-800 focus:ring-2 focus:ring-purple-500 focus:outline-none"
            />
            {errors.authors && <p className="text-red-600 text-sm">{errors.authors}</p>}
          </div>
        </section>

        {/* Category and Rating */}
        <section className="flex flex-col sm:flex-row gap-6">
          <div className="flex-1 space-y-2">
            <label className="block text-lg font-semibold text-purple-800">
              Category:
            </label>
            <select
              name="category"
              onChange={handleChange}
              className="w-full px-4 py-2 border-2 rounded-lg border-purple-800 focus:ring-2 focus:ring-purple-500 focus:outline-none"
            >
              {categories.map((category, index) => (
                <option key={index}>{category}</option>
              ))}
            </select>
            {errors.category && <p className="text-red-600 text-sm">{errors.category}</p>}
          </div>

          <div className="flex-1 space-y-2">
            <label className="block text-lg font-semibold text-purple-800">
              Rating:
            </label>
            <input
              type="text"
              name="rating"
              value={formValues.rating}
              onChange={handleChange}
              className="w-full px-4 py-2 border-2 rounded-lg border-purple-800 focus:ring-2 focus:ring-purple-500 focus:outline-none"
            />
            {errors.rating && <p className="text-red-600 text-sm">{errors.rating}</p>}
          </div>
        </section>

        {/* Description */}
        <div className="space-y-2">
          <label className="block text-lg font-semibold text-purple-800">
            Description:
          </label>
          <textarea
            name="description"
            value={formValues.description}
            onChange={handleChange}
            className="w-full px-4 py-2 border-2 rounded-lg border-purple-800 focus:ring-2 focus:ring-purple-500 focus:outline-none"
            rows="4"
          />
          {errors.description && <p className="text-red-600 text-sm">{errors.description}</p>}
        </div>

        {/* Image URL */}
        <div className="space-y-2">
          <label className="block text-lg font-semibold text-purple-800">
            Image URL:
          </label>
          <input
            type="text"
            name="image_url"
            value={formValues.image_url}
            onChange={handleChange}
            className="w-full px-4 py-2 border-2 rounded-lg border-purple-800 focus:ring-2 focus:ring-purple-500 focus:outline-none"
          />
          {errors.image_url && <p className="text-red-600 text-sm">{errors.image_url}</p>}
        </div>

        {/* Add Book Button */}
        <button
          onClick={handleSubmit}
          className="w-full text-white py-2 px-4 rounded-lg bg-purple-800 font-bold text-lg sm:text-xl hover:bg-purple-900"
        >
          Add Book
        </button>
      </form>
    </div>
  );
};

export default AddBook;
