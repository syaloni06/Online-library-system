import { Outlet } from "react-router-dom"; // Outlet renders the nested route components
import Navbar from "./components/Navbar"; // Importing the Navbar component
import { Provider } from "react-redux"; // Importing Provider to connect Redux store
import bookStore from "./utils/bookStore"; // Importing the Redux store configuration
import Footer from "./components/Footer"; // Importing the Footer component

const App = () => {
  return (
    <>
      {/* Wrap the entire app with the Redux Provider to allow access to the store */}
      <Provider store={bookStore}>
        
        {/* Navbar component - this will be visible on all routes */}
        <Navbar />
        
        {/* Outlet component - it renders the components corresponding to the active route */}
        <Outlet />
        
        {/* Footer component - this will be visible on all routes */}
        <Footer/>
        
      </Provider>
    </>
  );
};

export default App;
