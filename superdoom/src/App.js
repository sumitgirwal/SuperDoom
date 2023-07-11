import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Contact from "./components/Contact";
import NotFound404 from "./components/NotFound404";
 
import "./styles/App.scss";
import "./styles/header.scss";
import "./styles/footer.scss";
import "./styles/home.scss";

function App() {
  return (
     <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound404 />} />
      </Routes>
      <Footer/>
     </Router>
  );
}

export default App;
