import AboutHeader from "../components/AboutHeader";
import Mision from "../components/Mision";
import Team from "../components/Team";
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
      <div className="">
        <Team />
      </div>
    </div>
  );
};

export default AboutPage;
