import { Link } from "react-router-dom"; // Importing Link from react-router-dom for navigation between pages
import { FaHome } from "react-icons/fa"; // Importing the Home icon from react-icons
import { FaBook } from "react-icons/fa6"; // Importing the Book icon from react-icons
import { BiSolidBookAdd } from "react-icons/bi"; // Importing Add Book icon from react-icons
import { IoLibrary } from "react-icons/io5"; // Importing Library icon from react-icons

const Navbar = () => {
  return (
    <div className="flex justify-between bg-purple-800 text-white shadow-md top-0 fixed w-full z-50 h-10 sm:h-12">
      {/* Logo Section */}
      <h1 className="flex items-center gap-2 text-lg sm:text-2xl font-bold italic mx-4 sm:mx-6">
        Online{" "}
        {/* Logo text and icon */}
        <p className="flex bg-white text-purple-800 px-3 rounded-2xl gap-1">
          Library
          <IoLibrary className="self-center" /> {/* Library icon */}
        </p>
      </h1>

      {/* Navigation Links Section */}
      <div className="flex items-center space-x-4 sm:space-x-10 mr-4 lg:mr-8 ">
        {/* For Small Screens - Icons Only */}
        {/* Home link (only visible on small screens) */}
        <Link to={"/"} className="block sm:hidden text-lg hover:scale-110">
          <FaHome className="text-2xl" /> {/* Home icon */}
        </Link>
        {/* Books link (only visible on small screens) */}
        <Link to={"/books"} className="block sm:hidden text-lg hover:scale-110">
          <FaBook className="text-2xl" /> {/* Books icon */}
        </Link>
        {/* Add Book link (only visible on small screens) */}
        <Link
          to={"/add-book"}
          className="block sm:hidden text-lg hover:scale-110"
        >
          <BiSolidBookAdd className="text-2xl" /> {/* Add Book icon */}
        </Link>

        {/* For Large Screens - Full Links */}
        <div className="hidden sm:flex space-x-3 sm:space-x-6">
          {/* Home link (only visible on large screens) */}
          <Link to={"/"} className="text-lg sm:text-xl hover:scale-110">
            <p className="cursor-pointer font-semibold flex gap-1">
              <FaHome className="self-center" /> Home {/* Home text */}
            </p>
          </Link>
          {/* Books link (only visible on large screens) */}
          <Link to={"/books"} className="text-lg sm:text-xl hover:scale-110">
            <p className="cursor-pointer font-semibold flex gap-1">
              <FaBook className="self-center" /> Books {/* Books text */}
            </p>
          </Link>
          {/* Add Book link (only visible on large screens) */}
          <Link
            to={"/add-book"}
            className="text-lg sm:text-xl hover:scale-110"
          >
            <p className="cursor-pointer font-semibold flex gap-1">
              <BiSolidBookAdd className="self-center" /> Add Book {/* Add Book text */}
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
