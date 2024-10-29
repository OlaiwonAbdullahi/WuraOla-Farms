import Getintouch from "../components/Getintouch";
import Hero from "../components/Hero";
import About from "../components/HomeText";
import Whatwedo from "../components/Whatwedo";

const home = () => {
  return (
    <div>
      <Hero />
      <About />
      <Whatwedo />
      <Getintouch />
    </div>
  );
};

export default home;
