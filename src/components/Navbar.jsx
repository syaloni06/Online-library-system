import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { FaBook } from "react-icons/fa6";
import { BiSolidBookAdd } from "react-icons/bi";
import { IoLibrary } from "react-icons/io5";
const Navbar = () => {
  return (
    <>
      <div className="flex justify-between bg-purple-800 text-white shadow-md top-0 fixed w-full z-50">
        <h1 className="flex items-center gap-2 text-2xl font-bold italic mx-6">
          Online{" "}
          <p className="flex bg-white text-purple-800 px-3 rounded-2xl gap-1">
            Library
            <IoLibrary className="self-center" />
          </p>
        </h1>
        <div className="flex items-center py-4 space-x-10 mx-10">
          <Link to={"/"} className="text-xl hover:scale-110">
            <p className="cursor-pointer font-semibold flex gap-1 ">
            <FaHome className="self-center" /> Home
            </p>
          </Link>
          <Link
            to={"/books"}
            className="text-xl hover:scale-110"
          >
            <p className="cursor-pointer font-semibold flex gap-1">
            <FaBook className="self-center" /> Books
            </p>
          </Link>
          <Link
            to={"/add-book"}
            className="text-xl hover:scale-110"
          >
            <p className="cursor-pointer font-semibold flex gap-1">
            <BiSolidBookAdd className="self-center" />Add Book
            </p>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
