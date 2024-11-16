import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
const Navbar = () => {
    const bookItems = useSelector((store) => store.books.data);
    console.log(bookItems);
  return (
    <>
      <div>
        <ul>
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
