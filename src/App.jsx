import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import { Provider } from "react-redux";
import bookStore from "./utils/bookStore";
const App = () => {
  return (
    <>
      <Provider store={bookStore}>
        <Navbar />
        <Outlet />
      </Provider>
    </>
  );
};

export default App;
