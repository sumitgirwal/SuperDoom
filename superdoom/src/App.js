import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Contact from "./components/Contact";
import NotFound404 from "./components/NotFound404";
 
import "./styles/App.scss";
import "./styles/header.scss";

function App() {
  return (
     <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound404 />} />
      </Routes>
     </Router>
  );
}

export default App;
