import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <div>
        <ul className="flex justify-evenly">
          <Link to={"/"}>
            <li>Home</li>
          </Link>
          <Link to={"/books"}>
            <li>Books</li>
          </Link>
          <Link to={"/add-book"}>
            <li>Add Book</li>
          </Link>
          <li>{}</li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
