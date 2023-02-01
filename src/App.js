import { Routes, Route } from "react-router-dom";
import Navbar from "./global/Navbar";
import Footer from "./global/Footer";
import Info from "./components/Info";
import About from "./components/About";
import Home from "./components/Home";
import AboutDetails from "./components/AboutDetails";
import PreviousCollection from "./components/PreviousCollection";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/info" element={<Info />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route
          path="/previouscollection"
          element={<PreviousCollection />}
        ></Route>
        <Route
          path="/about/:id"
          element={<AboutDetails></AboutDetails>}
        ></Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
