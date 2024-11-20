import { useNavigate } from "react-router-dom"; // Import navigate for routing
import { useDispatch } from "react-redux"; // Import dispatch to dispatch actions to the Redux store
import { useState } from "react"; // Import useState for managing local state
import { addBook } from "../utils/bookSlice"; // Import addBook action to update Redux store
import { useSelector } from "react-redux"; // Import useSelector to access Redux store state

const AddBook = () => {
  const dispatch = useDispatch(); // Initialize dispatch to send actions to Redux store
  const navigate = useNavigate(); // Initialize navigate function to handle routing
  const books = useSelector((store) => store.books.data); // Retrieve books from the Redux store
  const categories = [...new Set(books.map((book) => book.category))]; // Get unique categories from the books
  const [formValues, setFormValues] = useState({ // Initialize form values state
    title: "",
    authors: "",
    category: "",
    rating: "",
    description: "",
    image_url: "",
  });
  const [errors, setErrors] = useState({}); // Initialize errors state to track validation errors

  // Function to validate the form inputs
  const validateForm = () => {
    const newErrors = {}; // Object to store any errors
    if (!formValues.title.trim()) newErrors.title = "Title is required."; // Title is required
    if (!formValues.authors.trim()) newErrors.authors = "Authors are required."; // Authors are required
    if (!formValues.category.trim()) newErrors.category = "Category is required."; // Category is required
    if (!formValues.rating.trim()) newErrors.rating = "Rating is required."; // Rating is required
    if (!formValues.description.trim()) newErrors.description = "Description is required."; // Description is required
    if (!formValues.image_url.trim()) newErrors.image_url = "Image URL is required."; // Image URL is required
    setErrors(newErrors); // Update the errors state with the new errors
    return Object.keys(newErrors).length === 0; // Return true if no errors exist
  };

  // Function to handle input field changes
  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value }); // Update the form value for the corresponding field
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    if (validateForm()) { // Validate the form
      dispatch(addBook({ ...formValues, id: books.length + 1 })); // Dispatch the action to add the new book to the store
      navigate(`/books/${formValues.category}`); // Navigate to the category page of the new book
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen px-4">
      {/* Form container */}
      <form className="w-full max-w-2xl p-6 shadow-lg shadow-purple-800 rounded-lg mb-10 mt-12 sm:mt-16 border-2 border-purple-800 space-y-4">
        
        {/* Heading */}
        <h1 className="text-2xl sm:text-3xl text-center text-purple-800 font-extrabold italic">
          Add New Book
        </h1>

        {/* Title and Authors fields */}
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
            {errors.title && <p className="text-red-600 text-sm">{errors.title}</p>} {/* Display error message for title */}
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
            {errors.authors && <p className="text-red-600 text-sm">{errors.authors}</p>} {/* Display error message for authors */}
          </div>
        </section>

        {/* Category and Rating fields */}
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
                <option key={index}>{category}</option> // Map over the categories and create option elements
              ))}
            </select>
            {errors.category && <p className="text-red-600 text-sm">{errors.category}</p>} {/* Display error message for category */}
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
            {errors.rating && <p className="text-red-600 text-sm">{errors.rating}</p>} {/* Display error message for rating */}
          </div>
        </section>

        {/* Description field */}
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
          {errors.description && <p className="text-red-600 text-sm">{errors.description}</p>} {/* Display error message for description */}
        </div>

        {/* Image URL field */}
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
          {errors.image_url && <p className="text-red-600 text-sm">{errors.image_url}</p>} {/* Display error message for image URL */}
        </div>

        {/* Submit Button */}
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
