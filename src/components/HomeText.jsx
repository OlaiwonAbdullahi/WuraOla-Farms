import homeimg from "../assets/about.png";
import Button from "./Button";
const About = () => {
  return (
    <div className=" w-full md:w-5/6 flex mx-auto p-4 pt-10 gap-3 flex-col md:flex-row">
      <div className=" basis-1/2">
        <img src={homeimg} alt="" className=" w-full" />
      </div>
      <div className="basis-1/2 flex flex-col gap-3">
        <h2 className=" text-secondary font-kanit font-semibold text-2xl border-l-4 px-2 border-green-300">
          About WuraOla Farms{" "}
        </h2>
        <p className="w-4/5 md:text-left font-inter font-light text-center flex mx-auto md:text-base text-sm pt-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
          porro doloribus quas non, repudiandae consequatur doloremque nesciunt
          error quibusdam voluptate atque! Necessitatibus saepe illo dignissimos
          laborum ipsa earum facilis culpa.
        </p>
        <div className="">
          <Button>Learn More</Button>
        </div>
      </div>
    </div>
  );
};

export default About;
