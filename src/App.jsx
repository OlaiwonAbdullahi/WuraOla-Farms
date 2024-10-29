import Footer from "./components/Footer";
import Getintouch from "./components/Getintouch";
import Hero from "./components/Hero";
import About from "./components/HomeText";
import Navbar from "./components/Navbar";
import TopHeader from "./components/TopHeader";
import Whatwedo from "./components/Whatwedo";

const App = () => {
  return (
    <div>
      <TopHeader />
      <Navbar />

      <Hero />
      <About />
      <Whatwedo />
      <Getintouch />
      <Footer />
    </div>
  );
};

export default App;
