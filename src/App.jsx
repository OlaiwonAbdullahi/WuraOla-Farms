import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import TopHeader from "./components/TopHeader";
import Home from "./pages/home";
import AboutPage from "./pages/AboutPage";
import Contact from "./pages/Contact";
import Getintouch from "./components/Getintouch";

const App = () => {
  return (
    <div>
      <Router>
        <TopHeader />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Getintouch />
        <Footer />
      </Router>
    </div>
  );
};

export default App;
