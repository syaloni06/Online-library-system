import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <>
        <div>
            <ul>
                <Link to={"/"}><li>Home</li></Link>
                <Link to={"/books"}><li>Books</li></Link>
                <Link to={"/add-book"}><li>Add Book</li></Link>
            </ul>
        </div>
    </>
  )
}

export default Navbar
