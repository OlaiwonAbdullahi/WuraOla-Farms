import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import TopHeader from "./components/TopHeader";
import Home from "./pages/home";

const App = () => {
  return (
    <div>
      <TopHeader />
      <Navbar />
      <Home />
      <Footer />
    </div>
  );
};

export default App;
