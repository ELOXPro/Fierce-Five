import Footer from "./components/sections/Footer";
import NavMenu from "./components/sections/NavMenu";
import About from "./pages/About";
import Projects from "./pages/Project";
import Home from "./pages/Home";
import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="fixed top-0 left-0 w-full z-20">
        <NavMenu />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
