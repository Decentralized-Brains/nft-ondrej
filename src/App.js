import { Routes, Route } from "react-router-dom";
import Navbar from "./global/Navbar";
import Footer from "./global/Footer";
import Info from "./components/Info";
import About from "./components/About";
import Home from "./components/Home";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/info" element={<Info />}></Route>
        <Route path="/about" element={<About />}></Route>
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
