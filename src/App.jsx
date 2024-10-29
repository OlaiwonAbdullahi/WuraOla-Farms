import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import TopHeader from "./components/TopHeader";
import Home from "./pages/home";
import AboutPage from "./pages/AboutPage";

const App = () => {
  return (
    <div>
      <Router>
        <TopHeader />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </Router>

      <Footer />
    </div>
  );
};

export default App;
