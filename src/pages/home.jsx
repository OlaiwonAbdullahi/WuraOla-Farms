import Hero from "../components/Hero";
import About from "../components/HomeText";
import Whatwedo from "../components/Whatwedo";

const home = () => {
  return (
    <div>
      <Hero />
      <About />
      <Whatwedo />
    </div>
  );
};

export default home;
