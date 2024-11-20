import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { FaBook } from "react-icons/fa6";
import { BiSolidBookAdd } from "react-icons/bi";
import { IoLibrary } from "react-icons/io5";

const Navbar = () => {
  return (
    <div className="flex justify-between bg-purple-800 text-white shadow-md top-0 fixed w-full z-50 h-10 sm:h-12">
      {/* Logo Section */}
      <h1 className="flex items-center gap-2 text-lg sm:text-2xl font-bold italic mx-4 sm:mx-6">
        Online{" "}
        <p className="flex bg-white text-purple-800 px-3 rounded-2xl gap-1">
          Library
          <IoLibrary className="self-center" />
        </p>
      </h1>

      {/* Navigation Links */}
      <div className="flex items-center space-x-4 sm:space-x-10 mx-4 sm:mx-10">
        {/* For Small Screens - Icons Only */}
        <Link to={"/"} className="block sm:hidden text-lg hover:scale-110">
          <FaHome className="text-2xl" />
        </Link>
        <Link to={"/books"} className="block sm:hidden text-lg hover:scale-110">
          <FaBook className="text-2xl" />
        </Link>
        <Link
          to={"/add-book"}
          className="block sm:hidden text-lg hover:scale-110"
        >
          <BiSolidBookAdd className="text-2xl" />
        </Link>

        {/* For Large Screens - Full Links */}
        <div className="hidden sm:flex space-x-6">
          <Link to={"/"} className="text-lg sm:text-xl hover:scale-110">
            <p className="cursor-pointer font-semibold flex gap-1">
              <FaHome className="self-center" /> Home
            </p>
          </Link>
          <Link to={"/books"} className="text-lg sm:text-xl hover:scale-110">
            <p className="cursor-pointer font-semibold flex gap-1">
              <FaBook className="self-center" /> Books
            </p>
          </Link>
          <Link
            to={"/add-book"}
            className="text-lg sm:text-xl hover:scale-110"
          >
            <p className="cursor-pointer font-semibold flex gap-1">
              <BiSolidBookAdd className="self-center" /> Add Book
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
