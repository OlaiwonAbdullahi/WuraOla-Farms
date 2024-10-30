import AboutHeader from "../components/AboutHeader";
import Mision from "../components/Mision";
import Whoweare from "../components/Whoweare";

const AboutPage = () => {
  return (
    <div>
      <div className="">
        <AboutHeader />
      </div>
      <div className="">
        <Whoweare />
      </div>
      <div className="">
        <Mision />
      </div>
    </div>
  );
};

export default AboutPage;
