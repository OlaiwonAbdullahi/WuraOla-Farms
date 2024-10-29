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
    </div>
  );
};

export default App;
