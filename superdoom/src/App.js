import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Heading from "./components/Heading";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import NotFound404 from "./components/NotFound404";
import Product from "./components/Product";
 

function App() {
  return (
     <Router>
      <Heading/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="*" element={<NotFound404 />} />
      </Routes>
     </Router>
  );
}

export default App;
