import Footer from "./components/sections/Footer";
import NavMenu from "./components/sections/NavMenu";
import Home from "./pages/Home";
//import { Navigate, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <div>
        <div className="fixed top-0 left-0 w-full z-20">
          <NavMenu />
        </div>
        <Home />
        <Footer/>
      </div>
    </>
  );
}

export default App;
