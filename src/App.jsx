import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import { Provider } from "react-redux";
import bookStore from "./utils/bookStore";
import Footer from "./components/Footer";
const App = () => {
  return (
    <>
      <Provider store={bookStore}>
        <Navbar />
        <Outlet />
        <Footer/>
      </Provider>
    </>
  );
};

export default App;
