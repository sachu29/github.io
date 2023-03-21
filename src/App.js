import { Routes, Route } from "react-router-dom";
import "./index.css";
import Home from "./routes/Home.js";
import About from "./routes/About";
import Projects from "./routes/Projects";
import Contact from "./routes/Contact";
import Navbar from "./components/Common/Navbar";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
